# ImpactOutreach Expansion Analysis — Scaling to 30-145 MPs

**Date:** 2026-04-09
**Context:** Client wants to expand from single-MP campaigns to targeting 30-145 Liberal MPs, with emails tailored to come from constituents in each MP's riding. 3-5 emails per MP per day. Potential SMS expansion.

---

## Volume Math

- 150 MPs x 3-5 emails/day = **450-750 emails/day** from `mail.impactoutreach.co`
- Current system sends ~10-30/day — this is a 15-75x increase

---

## Spam / Deliverability Risks

### Domain Reputation (CRITICAL)
- Mailgun free/low tier uses shared IP pool. 450-750 emails/day from one domain to ~150 government recipients will trigger spam filters fast.
- Parliament uses Microsoft 365/Exchange with aggressive filtering. Hundreds of emails from `@mail.impactoutreach.co` hitting `@parl.gc.ca` daily = domain-level blocking risk.
- Different sender names but same domain is a classic spam pattern filters catch.

### Mailgun Limits
- Free tier ~100 emails/day. Need paid plan.
- Even paid plans require domain warm-up: start at 50/day, increase 20%/week. Jumping to 750/day immediately tanks sender reputation.

### 45-Minute Recipient Gap Isn't Enough
- Per-recipient spacing is fine (3-5 emails/MP/day). But aggregate volume from the domain to `@parl.gc.ca` is the real trigger.

### Mitigation Strategies

| Strategy | Effectiveness | Effort |
|----------|--------------|--------|
| Dedicated IP from Mailgun | High | Low ($59/mo) |
| Domain warm-up (4-6 weeks ramp) | Essential | Low (scheduling logic) |
| Multiple sending subdomains (`mail1.`, `mail2.`, etc.) | High | Medium |
| Rotate providers (Mailgun + SendGrid + SES) | High | Medium-High |
| Start at 1-2 emails/MP/day, ramp up | High | None |
| Stagger MP rollout (30 -> 60 -> 145) | High | Low |

---

## Blindspots in Current Architecture

### 1. No Riding-to-MP Mapping (BIGGEST GAP)
- Stakeholders are a manual JSONB array on Campaign. Every constituent emails ALL stakeholders.
- For 145 MPs, each constituent must email only THEIR riding's MP.
- Need a lookup table or API (e.g., `represent.opennorth.ca`).

### 2. Hardcoded Issue Facts in AI Prompt
- `ai_writer.py` lines 287-293 have nicotine pouch regulation facts baked in.
- Must be made campaign-configurable for new issues.

### 3. Unique Constraint Blocks Repeat Sends
- `UNIQUE(campaign_id, constituent_id, recipient_email)` means each constituent can only send ONE email per MP ever.
- For sustained 3-5/day campaigns, need to remove this constraint or create new campaigns per wave.

### 4. Body Reuse = Spam Signal
- Same body sent to 145 MPs with just greeting swapped. Identical bodies to many recipients is a spam signal.
- Need more variation per MP.

### 5. Executor Throughput Too Slow
- Current: 5 sends per 5-min run, 30-90s sleep between = ~45-60 emails/hour max.
- For 750 emails in 12 hours need ~63/hour. Barely fits, any hiccup creates backlog.

### 6. No Protective Bounce Handling
- Bounces are recorded but don't pause sending. If an MP marks you as spam, system keeps sending.

### 7. Thin Consent Model
- `consent_given` hardcoded `True` on CSV upload. At scale need proper CASL compliance.

---

## Required Changes for 30-145 MP Scale

| Change | Priority | Effort |
|--------|----------|--------|
| Riding-to-MP matching (constituents -> their MP only) | P0 | Medium |
| Make AI prompt facts campaign-configurable | P0 | Low |
| Remove/rework unique send constraint for repeat campaigns | P0 | Low |
| Dedicated Mailgun IP + domain warm-up plan | P0 | Low ($) |
| Increase executor throughput (parallel sends, larger batches) | P1 | Medium |
| Bounce-triggered send pausing per recipient | P1 | Medium |
| Body variation per MP (not just greeting swap) | P1 | Low-Medium |
| Multiple sending subdomains | P2 | Medium |
| CASL-compliant consent flow | P2 | Medium |

---

## SMS / Text Expansion

- **Telnyx** is the planned provider (already in TODO.md). Solid for Canadian SMS.
- Need 10DLC registration or Canadian long code — takes 1-2 weeks.
- Throughput: 1-3 SMS/second, plenty for this use case.
- Cost: ~$0.01-0.02/SMS in Canada.
- Scheduler architecture already supports this — add `channel` field to sends + Telnyx sender alongside Mailgun.
- **CASL requirement**: SMS requires explicit opt-in. Current "consent on CSV upload" won't cut it for text.

---

## Bottom Line

Expansion is very doable with existing architecture. **Deliverability is the make-or-break issue**, not code. Key priorities:
1. Riding-to-MP mapping so constituents write to their own MP
2. Domain warm-up + dedicated IP to avoid blacklisting in week one
3. Remove hardcoded prompt content so it works for any issue
