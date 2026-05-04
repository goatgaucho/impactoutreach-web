# ImpactOutreach — Multi-MP Campaign Expansion

**Prepared for:** Client Review
**Date:** April 10, 2026

---

## What We're Building

Expanding the ImpactOutreach email campaign platform from single-target campaigns to coordinated outreach across **30-145+ Liberal MPs**, with each email written as if from a real constituent in that MP's riding.

Every email is unique, AI-generated, and personalized to the specific MP, their riding, and the constituent writing it. No templates, no form letters.

---

## How It Works

1. **Constituent-to-MP matching** — We build a jurisdiction engine that maps each constituent to their federal riding and corresponding MP. When a campaign launches, each constituent only writes to the MP that represents them.

2. **AI-generated emails** — Each email is written fresh with randomized tone, length, and style so no two emails look alike. The system avoids formulaic language and varies everything from greetings to sign-offs.

3. **Automated scheduling** — Emails are distributed across business hours (9 AM - 9 PM ET) with natural spacing. No two emails from the same domain hit the same inbox within 45 minutes.

---

## Ramp-Up Strategy

We increase volume gradually to build a strong sender reputation and avoid spam filters. This is standard practice for any professional email operation at scale.

| Week | MPs Targeted | Emails per MP / Day | Total Daily Volume |
|------|-------------|---------------------|--------------------|
| 1-2 | 10 | 2 | ~20 |
| 3-4 | 20 | 2 | ~40 |
| 5-6 | 30 | 3 | ~90 |
| 7-8 | 50 | 3 | ~150 |
| 9+ | 75-145 | 3 | ~225-435 |

Each tier is held for approximately two weeks to establish deliverability before scaling. We monitor bounce rates and inbox placement throughout. If everything looks clean, we can accelerate.

---

## Delivery Timeline

| Phase | What | Timeline |
|-------|------|----------|
| **Phase 1 — Infrastructure** | Riding-to-MP matching engine, database updates, configurable campaign prompts | ~1 week |
| **Phase 2 — Deliverability Setup** | Dedicated sending IP, DNS hardening, warm-up scheduling logic | ~3-4 days |
| **Phase 3 — Testing** | End-to-end test with 10 MPs, verify inbox delivery, refine AI output | ~3-4 days |
| **Phase 4 — Live Ramp-Up** | Begin the graduated rollout per the schedule above | Ongoing (weeks 1-9+) |

**Total build time before first live sends: approximately 2 weeks.**

---

## SMS (Optional Add-On)

Text messaging to MP offices is technically ready to build using the same scheduling infrastructure. Key details:

- Uses a Canadian phone number registered for business messaging
- Same constituent-to-MP matching as email
- ~$0.01-0.02 per message
- Requires 1-2 weeks for carrier registration before first send
- Can run alongside email campaigns or independently

If the client wants SMS, we can scope and price it separately. It does not affect the email expansion timeline.

---

## What the Client Gets

- A single campaign dashboard to manage outreach to any number of MPs
- Every email is unique, personalized, and comes from a real constituent in the MP's riding
- Fully automated — set the campaign, upload constituents, and the system handles scheduling, generation, and delivery
- Scales to 145+ MPs with no manual intervention once ramped
- Reply tracking — if an MP responds, it's captured and surfaced in the dashboard

---

## Risk Management

- **Spam prevention** — Gradual warm-up, dedicated IP, and natural send patterns keep deliverability high
- **Content quality** — AI output is constrained to avoid robotic language, with built-in style variation
- **Compliance** — All sends include constituent identification and opt-out capability per CASL requirements
