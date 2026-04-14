# New/Mode sales inquiry, draft

**To**: sales@newmode.net (or the contact form at newmode.net/integrate)
**From**: [your New/Mode account email]
**Subject**: Movement Builder+ inquiry, time-boxed First Nations advocacy campaign, API integration

---

Hi,

We're a Canadian team building campaign acceleration tooling for advocacy organizations. We're scoping a 60-day campaign for a First Nations coalition in BC, the Coalition of First Nations for Finfish Stewardship (FNFFS), and we're planning to run it on New/Mode at the Movement Builder+ tier.

A few questions so we can finalize scope for the client:

**1. V2 API credentials.**
We'll be pushing per-recipient personalized messages into New/Mode programmatically via your V2 API (base.newmode.net/api/v2.1/). Can you confirm that `client_id` / `client_secret` OAuth2 credentials are provisioned at the Movement Builder+ tier, and what the onboarding process looks like for getting those issued?

Specifically we need to confirm:
- The `POST /campaign/{id}/submit` endpoint accepts free-text `email_subject` and `your_letter` fields per submission (i.e., we can push AI-personalized bodies rather than a shared template).
- Whether there are rate limits or submission volume caps at that tier.
- Whether you have a sandbox or staging environment for pre-launch integration testing.

**2. Canadian MP database coverage.**
Can you confirm your target database covers current BC federal MPs with postcode-to-MP routing, and what metadata surfaces on target records (party, riding name, committee memberships)? We have a specific interest in BC Liberal MPs and FOPO committee members. Ideally we'd like to confirm Patrick Weiler, Will Greaves, Stephanie McLean, and others are in the database before the campaign launches.

**3. LTE publication coverage.**
We'll be running a letter-to-the-editor campaign in parallel to the MP-facing sends. Can you confirm Canadian publication coverage in your LTE tool for: Vancouver Sun, Times Colonist, Globe and Mail, National Post, The Tyee, plus regional BC papers (Campbell River Mirror, North Island Gazette, Coast Reporter)?

**4. Message and subject variation at Movement Builder+.**
We understand "AI message variation" and subject-line rotation are Movement Builder+ features. Can you walk us through exactly how they work at that tier? Specifically, whether they support per-recipient variation driven by external input, or whether they operate purely on your hosted template rotation logic.

**5. Deliverability at parl.gc.ca.**
The campaign targets federal MPs at parl.gc.ca. Do you have any documented deliverability insights for House of Commons inboxes? Known filters, rate limits, or best practices your team has learned from running advocacy campaigns into Parliament.

Happy to jump on a 20-minute call this week or next if easier than email. The client is targeting a campaign launch in the coming weeks, so timeline is tight on our end.

Thanks,
[Your name]
[phone / calendar link]

---

## Internal notes (do not send)

Questions to press on if sales hedges:
- If they won't confirm V2 API access at MB+ tier in writing, that's a red flag and we should escalate or reconsider architecture.
- If they don't have specific Canadian parl.gc.ca deliverability data, that's fine. Push for general Canadian advocacy case studies instead.

What a "good" response looks like:
- Confirms V2 API + OAuth2 credentials at MB+ tier
- Confirms BC MP coverage with postcode routing
- Confirms `/campaign/{id}/submit` accepts per-recipient bodies
- Offers a demo or sandbox
- Provides a human contact name for the account

What a "bad" response looks like:
- Routes us to self-serve signup without human engagement
- Can't confirm API field schema
- Generic marketing deck instead of technical answers
