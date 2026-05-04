# AI Calling in Canada: Regulatory and Compliance Research

*Research date: April 2026*

---

## Overview

This document covers the legal, regulatory, and practical framework for running AI-generated phone calls to government offices (MPs, MLAs, ministers) in Canada as part of constituent advocacy campaigns.

**Bottom line:** Calls TO government offices are in a favorable regulatory position. They're business lines, not protected by consumer robocall rules, and receiving constituent calls is their function. The primary risks are practical (carrier spam detection) rather than legal.

---

## 1. CRTC Regulations — Unsolicited Telecommunications Rules (UTR)

Canada's telecom calling rules are governed by the **CRTC's Unsolicited Telecommunications Rules (UTR)**, established under the **Telecommunications Act (1993)** and refined through **Telecom Decision CRTC 2007-48** and subsequent amendments.

### ADAD Rules (Automatic Dialing-Announcing Device)

AI-generated voice calls are classified as **ADAD calls** under the UTR. An ADAD is any device that can automatically dial telephone numbers and deliver a pre-recorded or synthesized voice message.

**Key ADAD rules:**
- ADAD calls are prohibited to residential lines unless the caller has prior express consent or falls under a specific exemption
- ADAD calls must identify the caller and provide a callback number
- Calling hours: **9:00 AM to 9:30 PM local time** weekdays, **10:00 AM to 6:00 PM** weekends and holidays (updated in Telecom Regulatory Policy CRTC 2018-190)
- All ADAD calls must provide an opt-out mechanism

### National Do Not Call List (DNCL)

Established under Part II of the Telecommunications Act. Key points:
- Telemarketers must subscribe to and check the DNCL before making calls
- Registration requires fees (varies by area code count)
- Applies to **telemarketing** calls (calls made for the purpose of solicitation)

### DNCL Exemptions

The following call types are exempt from the DNCL:
1. Calls by or on behalf of a **registered charity** (under the Income Tax Act)
2. Calls by or on behalf of a **political party, constituency association, or candidate**
3. Calls for the sole purpose of conducting a **survey or poll**
4. Calls from newspapers for subscription solicitation
5. Calls where there is an **existing business relationship** (18 months from transaction, 6 months from inquiry)

**Important:** The DNCL exemption for political calls does NOT automatically exempt those calls from ADAD rules. A political organization may call DNCL-listed numbers, but if using an ADAD, they must still comply with ADAD-specific rules.

### Critical Distinction: Calls TO Government Offices

The DNCL and UTR primarily regulate calls TO consumers/residential numbers. Government office phone numbers are **business lines**:
- Not registrable on the DNCL
- Not protected by residential ADAD restrictions
- Public-facing numbers intended to receive constituent calls
- The DNCL framework is largely irrelevant for this use case

---

## 2. STIR/SHAKEN — Caller ID Authentication

### What It Is

- **STIR**: Secure Telephone Identity Revisited
- **SHAKEN**: Signature-based Handling of Asserted information using toKENs

A caller ID authentication framework to combat spoofing and spam calls.

### Implementation in Canada

- **CRTC Compliance and Enforcement Decision 2021-123** (March 2021): Required Canadian carriers to implement STIR/SHAKEN
- **Deadline: November 30, 2021** — all major Canadian voice service providers required to implement
- Governed by the **Canadian Secure Token Governance Authority (CST-GA)**
- Framework set out in **Telecom Decision CRTC 2018-32** and subsequent decisions

### Attestation Levels

| Level | Name | Meaning | Spam Risk |
|---|---|---|---|
| A | Full | Provider verified caller identity AND right to use the number | Lowest |
| B | Partial | Provider verified caller identity but NOT right to specific number | Medium |
| C | Gateway | Provider is merely the network entry point | Highest |

**For our use case: Level A attestation is required** to avoid spam flagging.

### Compliance Requirements

1. Use a Canadian telephony provider that participates in STIR/SHAKEN and provides Level A attestation
2. Own or properly lease calling numbers — provider must verify your right to use them
3. Use SIP-based (IP) telephony infrastructure — STIR/SHAKEN operates on IP networks
4. Register with the CST-GA if operating as a service provider, or work through one that is registered
5. Do not spoof caller ID — explicitly prohibited under **Section 76.1 of the Telecommunications Act** (added 2018 via Bill C-86)

### Practical Reality

Even with proper STIR/SHAKEN compliance, carriers (Bell, Rogers, Telus) deploy their own analytics engines to flag suspected spam/robocalls. High-volume automated calling from a single number or number block will trigger these systems regardless of attestation level.

---

## 3. Provincial Regulations

### Alberta
- **PIPA (Personal Information Protection Act)** applies to collection/use of personal information for calls
- No specific provincial robocall legislation beyond federal CRTC rules
- Alberta's Election Act has provisions for automated calls during provincial election periods

### Saskatchewan
- No separate provincial telecom regulations for automated calling
- **Election Act, 1996** has provisions for election-period communications

### Ontario
- **Election Finances Act** regulates political advertising but doesn't specifically address automated calling
- No separate provincial robocall rules

### Quebec — Most Restrictive
- **Law 25** (updated 2023) imposes strict consent requirements for personal data use
- **Election Act (CQLR c. E-3.3)** has specific rules on automated calls during election periods
- Requirements around automated decision-making and AI transparency
- Any AI-generated voice calling in Quebec requires additional compliance review

### General Note
Telecommunications is primarily **federal jurisdiction** under Section 92(10) of the Constitution Act, 1867. Provincial rules cannot override CRTC regulations, but provincial privacy and election laws add compliance layers.

---

## 4. Canada Elections Act

After the 2011 "robocall scandal," the Canada Elections Act was amended:

- **Sections 348.01-348.19**: Voter Contact Registry — requires registration of any person or group making calls to voters during an election period
- Calling services during elections must register with the CRTC's Voter Contact Registry
- These provisions apply specifically during **writ periods** (election campaigns)
- Non-election-period advocacy calling is NOT covered

---

## 5. Penalties for Non-Compliance

| Violation | Individual | Corporation |
|---|---|---|
| CRTC UTR / DNCL violations | Up to $1,500 per violation | Up to $15,000 per violation |
| Caller ID spoofing (Telecom Act s.76.1) | Up to $25,000 per violation | Up to $10,000,000 per violation |
| Canada Elections Act (severe) | Up to $50,000 + 5 years imprisonment | Same |
| CASL violations (if applicable to SMS/email) | Up to $1,000,000 per violation | Up to $10,000,000 per violation |

**Enforcement context:** Enforcement against advocacy calls to government offices is essentially unheard of. The CRTC focuses on consumer protection — scam calls, telemarketing abuse, and election interference.

---

## 6. Canadian Telephony Providers for Compliant Calling

| Provider | STIR/SHAKEN | Canadian Numbers | Notes |
|---|---|---|---|
| Twilio | Yes | Yes | Major platform, Canadian presence |
| Telnyx | Yes | Yes | Good SIP trunking |
| VoIP.ms | Yes | Yes | Montreal-based, popular for Canadian SIP |
| ThinkTel (Distributel) | Yes | Yes | Canadian provider |
| Iristel | Yes | Yes | Canadian provider |
| Vonage/Nexmo | Yes | Yes | Enterprise-grade |
| SignalWire | Yes | Yes | Developer-focused |

---

## 7. Who's Doing This in Canada Now

### Political Parties
All major parties (Liberal, Conservative, NDP, Bloc, Green) use automated phone systems for voter ID, GOTV, fundraising, and polling. Platforms used: **CallHub**, **ThruTalk**, **LiveVox**, proprietary systems.

### Advocacy Organizations Using Phone Campaigns
- **Leadnow** — patch-through and click-to-call
- **OpenMedia** — automated phone campaign tools
- **Dogwood** (BC) — constituent calling tools
- **Council of Canadians** — phone campaigns to MPs
- **Stand.earth** — calling campaigns

**Key finding:** Most use **patch-through calling** (constituent connected live to MP's office) rather than fully automated AI-generated calls. No major Canadian advocacy organization is publicly using fully AI-generated voice calls to government offices as of early 2026.

---

## 8. Recommended Approach — Hybrid Calling Strategy

### Tier 1: Minimal Risk — Lead With These

**Patch-Through Calling**
- Constituent clicks a button, system connects them live to MP's office
- Constituent speaks in their own voice
- Fully compliant — not an ADAD call
- Used by Leadnow, OpenMedia, New/Mode

**Click-to-Call**
- Web widget connects constituent's phone to government office
- Person-to-person call facilitated by technology
- Completely compliant

### Tier 2: Low Risk — Strong Addition

**AI-Assisted Live Calling**
- AI provides real-time script and talking points while constituent talks
- Human is always on the line
- Compliant and scalable

**Constituent-Recorded Message Delivery**
- Constituent records a message in their own voice
- System delivers to government office voicemail
- Technically an ADAD call but to a business line — low risk

### Tier 3: Low-Medium Risk — Volume Layer

**AI-Generated Voice Calls to Government Offices**
- AI generates and delivers voice messages to government office phones
- Likely permissible: target numbers are business lines, not DNCL-protected, not telemarketing
- Practical risks: carrier spam flagging, number blocking, reputational risk if publicized
- Mitigation: proper STIR/SHAKEN, call pacing, number pooling, caller identification

### Tier 4: High Risk — Avoid

**AI-Generated Calls to Constituents' Personal Numbers**
- Subject to full DNCL rules, ADAD restrictions, consent requirements
- Non-compliant without express consent
- High penalty exposure

---

## 9. Practical Spam Avoidance Tactics

1. Use a **pool of numbers** — don't blast from one number
2. **Pace calls** — a few per minute per number, spread across the day
3. **Register numbers** with carrier spam registries (Free Caller Registry)
4. Ensure **Level A STIR/SHAKEN attestation** via a compliant Canadian provider
5. **Rotate calling patterns** — don't call the same office repeatedly from the same number
6. Work with a telephony provider that has **relationships with Canadian carriers**
7. Monitor for spam flags and **proactively remediate** blocked numbers

---

## 10. Key Regulations Reference List

- **Telecommunications Act (1993)** — primary federal telecom legislation
- **Telecommunications Act, Section 76.1** — caller ID spoofing prohibition
- **CRTC Telecom Decision 2007-48** — Unsolicited Telecommunications Rules
- **CRTC Telecom Regulatory Policy 2018-190** — updated calling hours
- **CRTC Compliance and Enforcement Decision 2021-123** — STIR/SHAKEN mandate
- **CRTC Telecom Decision 2018-32** — STIR/SHAKEN governance framework
- **Canada Elections Act, Sections 348.01-348.19** — Voter Contact Registry
- **PIPEDA** — federal privacy legislation
- **CASL (S.C. 2010, c. 23)** — Canadian Anti-Spam Legislation (email/SMS)
- **Quebec Law 25** — Quebec privacy and AI transparency requirements
- **Alberta PIPA** — Alberta private sector privacy

---

*This research should be reviewed by legal counsel before implementation. Canadian telecommunications regulation around AI-generated communications is actively evolving.*
