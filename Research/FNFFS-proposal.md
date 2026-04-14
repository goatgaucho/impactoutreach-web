# FNFFS Campaign Acceleration - Scope Options

**Hey Jessie, this is a scope doc for the FNFFS engagement. We're using it to figure out what we can offer before locking in final scope with the client. Not a client-facing proposal yet. Read it with an eye to what we should put on the table and what we should hold back.**

---

## The Client Situation

FNFFS (Coalition of First Nations for Finfish Stewardship) represents 17 Rights Holder Nations in coastal BC who want to keep salmon aquaculture in their territories. The federal government announced a ban on open-net-pen salmon farming in BC effective June 30, 2029. The 2026 two-year licence review is the only structurally guaranteed decision window before the ban takes effect. Minister Joanne Thompson owns the file.

The client wants to run a 60-day campaign targeting BC Liberal MPs (including FOPO Chair Patrick Weiler) plus Liberal MPs in food-affordability ridings. Roughly 30 emails a day over 30 days, digital ads, letters to the editor. They've told us they want to run it on New/Mode. We already have a New/Mode account on the free tier so we know the interface.

The campaign is high stakes. The opposition owns the "wild salmon equals Indigenous food security" framing and claims 120 BC First Nations back the ban. FNFFS needs to reframe the debate as a jurisdictional question under UNDRIP and make sure the pressure actually lands in the inboxes that matter. The authenticity of every piece of outreach is not a nice-to-have. It is the entire political argument.

## The Core Idea

New/Mode is a strong delivery platform. It handles the plumbing: Canadian sender reputation, parliamentary email routing, compliance, publication databases, form capture. But it's a general-purpose advocacy tool, not a purpose-built campaign accelerator for this specific fight.

Everything we're proposing takes what New/Mode already does well and multiplies its effectiveness for this campaign.

Here's how we think about it. New/Mode gives you a petition form. We give FNFFS a campaign. New/Mode sends email to MPs. We make sure every email is the sharpest version of that message for that specific MP. New/Mode has an LTE tool. We turn it into a precision instrument that writes per-publication drafts and keeps them out of each other's way.

**Nothing we build replaces New/Mode. Everything we build makes it hit harder.**

The technical lynchpin is New/Mode's V2 API at `base.newmode.net/api/v2.1/`, which accepts free-text per-recipient message bodies via its submit endpoint. That's what lets us push AI-personalized content through New/Mode's delivery infrastructure without being constrained to a shared template. Without API access the whole amplification layer is impossible. API access requires the client to be on New/Mode's Movement Builder+ tier, which is **$709 CAD per month** on a month-to-month basis (confirmed available).

---

## MVP Scope (Included)

Each item below is framed the same way. What New/Mode does natively. What we add on top. Why it accelerates the campaign.

### 1. FNFFS-Branded Campaign Website

**What New/Mode gives you**: a hosted action page per campaign. Essentially their template with an FNFFS logo and some colour customization, hosting a single form. Limited styling. No narrative pages. No SEO presence. It's a form, not a site.

**What we add**: a full FNFFS-branded website. Multiple pages covering the Coalition, the science, the stakes, take action, media resources. Purpose-built landing pages for paid ads to convert against. A custom supporter journey that goes beyond a single form. An owned digital asset that outlives the campaign.

**Why this accelerates**: purpose-built landing pages convert ads two to three times better than generic platform pages. It gives FNFFS something to point journalists and allies at that isn't a bare form. It builds search presence for terms like "salmon farming First Nations BC" that will matter during the licence review. Every digital ad dollar spent on the campaign works harder because of where it lands.

### 2. FNFFS Operations Console

**What New/Mode gives you**: a solid generic admin dashboard. Campaign management, supporter list, submission moderation, basic analytics, CRM sync. Perfectly usable for standard advocacy work.

**What we add**: two specific things New/Mode cannot do for FNFFS. First, the **voice approval workflow**, where a Coalition-designated reviewer approves generated messages before they get pushed into New/Mode. This is how FNFFS protects the Coalition voice and keeps any AI-generated content from going out without Indigenous sign-off. Second, the **targeting intelligence view**, where the 30-MP list is surfaced with priority tiers, persuadability scores, committee roles, and current pressure levels visible in real time.

**Why this accelerates**: the approval workflow is what makes "AI-generated" and "authentic" compatible in the same campaign. Without it, every send is a political risk. The targeting view is what lets FNFFS leadership see where pressure is landing and where to push harder, without digging through New/Mode's generic analytics. Together they turn raw delivery capability into an actual campaign operations room.

Scope note for you, Jessie: this console is deliberately narrower than a full admin dashboard. We're not duplicating what New/Mode already has. We're adding the two pieces it doesn't. That keeps the build lean and the value obvious.

### 3. Targeting Intelligence Layer

**What New/Mode gives you**: postcode to MP lookup. A supporter enters their postcode, New/Mode routes to their current sitting MP. That's the whole feature.

**What we add**: a curated priority list of the MPs that actually matter for this campaign, scored and tiered. We pull from OpenNorth's Represent API and House of Commons open data, enrich with committee memberships (FOPO is everything here), 2025 election margins (thin margins equal pressure sensitivity), and fisheries-file history. Then we score each MP on persuadability and tier them. The list is attached as Appendix A, 30 MPs, pre-built, ready to review.

**Why this accelerates**: New/Mode would send a supporter's email to whoever their own MP happens to be. In a generic campaign that's fine. In this campaign it wastes effort. We want every email to land on a target that can actually move the needle: the five Liberals on FOPO, the Minister, the new BC Liberal MPs sitting on thin 2025 margins, the Atlantic Liberals in fishing ridings. Our targeting layer routes pressure to where pressure matters.

### 4. AI Email Writer Tuned for FNFFS Voice

**What New/Mode gives you**: at Movement Builder+, an "AI message variation" feature that rotates subject lines and rephrases a single template across supporters. Basically one letter in different voices. It exists to beat spam filters, not to personalize per recipient.

**What we add**: per-recipient, context-aware composition. Every email to Patrick Weiler cites Weiler's FOPO chairmanship and his Sunshine Coast constituency. Every email to Brendan Hanley cites Yukon food affordability. Every email to Jaime Battiste acknowledges the first Mi'kmaw MP's Indigenous rights portfolio. Not merge fields in a template. Actual GPT-4o compositions shaped by the target MP's record and the supporter's own words. We also bring a writing-style enforcement pipeline (em-dash scrubbing, no AI tells, no buzzwords, tone randomization) that's specifically designed to make generated content indistinguishable from human-written email.

**Why this accelerates**: parliamentary staffers filter out template mail at a glance. Real letters get read. The opposition will attack anything that reads as astroturfed, especially in the FNFFS context where Coalition legitimacy depends on the campaign feeling First-Nations-led, not AI-generated. This is the single most important piece of intellectual value we bring to the engagement. It's what nothing on the market does for FNFFS.

### 5. 30-Day Drip Scheduler

**What New/Mode gives you**: campaign-level scheduling (start date, end date, maybe send windows). No native multi-day drip cadence with supporter-side spacing. Each action is triggered by a supporter submission, not a pre-scheduled send plan.

**What we add**: a sustained-pressure cadence engine. Queues sends across the 30-day window. Spaces messages 45 minutes apart. Randomizes timing within business hours. Rotates subject lines. Keeps the flow looking like real people sending real mail at natural intervals.

**Why this accelerates**: a single-day blast hits spam filters and burns sender reputation. A sustained 30-day drip with natural pacing keeps MP inboxes lit up for weeks and looks organic from every angle. The difference between a one-day spike and a month-long presence is, honestly, most of the campaign.

### 6. LTE Tool Amplification

**What New/Mode gives you**: a real letter-to-the-editor tool at Movement Builder+, with publication matching by postcode, submission routing, and moderation. This is a genuine strength of the platform.

**What we add**: the intellectual layer on top. Pre-drafted, publication-tailored letters generated by GPT-4o. Each respects its outlet's length limit (Globe and Mail wants under 150 words, Times Colonist 250, Vancouver Sun around 200), tone, and submission style. Duplicate-subject protection across supporter submissions so editors don't see the same letter forty times. Integration with the same voice approval workflow as email, so FNFFS reviews letters before they go out.

**Why this accelerates**: New/Mode's LTE tool is a vehicle. Without us, it sends whatever the supporter writes or a generic template. With us, it sends a publication-specific, voice-approved, per-editor draft that has a real chance of getting printed. LTEs that actually run in the Times Colonist and Campbell River Mirror are worth more than a hundred that get deleted.

### 7. New/Mode V2 API Integration (The Connective Tissue)

**What New/Mode gives you**: a documented V2 REST API at Movement Builder+ tier, with OAuth2 credentials.

**What we add**: the actual integration work. OAuth2 credential management, field schema discovery via `GET /campaign/{id}/form`, per-submission push via `POST /campaign/{id}/submit`, submission polling for analytics via `GET /submission`, error handling, rate management, retry logic.

**Why this matters**: not a flashy scope item but it's the one that makes everything else possible. The targeting layer, the AI writer, the drip scheduler, the LTE amplification, all of it flows through this integration. Think of it as plumbing for the whole system.

### 8. Reply Capture and Campaign Health Analytics

**What New/Mode gives you**: submission counts, basic engagement metrics, CRM sync for data export.

**What we add**: reply tracking specifically (are MPs responding at all, and what are they saying). Cross-reference of MP engagement against our persuadability scores (are we right about who's movable). A campaign health view that surfaces which ridings are activating, which messages are landing, where pressure is concentrating.

**Why this accelerates**: the campaign needs to learn as it runs. If we're drowning Patrick Weiler's office and getting nothing from Philip Earle, we shift weight. New/Mode shows you sends and opens. We show you whether the campaign is actually changing minds.

### 9. Supporter Voice Approval Workflow

Called out separately from the Operations Console because it's the critical control point.

**What New/Mode gives you**: submission moderation at the Teams tier and above. A Coalition staffer can approve or reject individual supporter submissions before they go out, but only for the content the supporter themselves wrote.

**What we add**: upstream voice review. Before any generated content can be sent at scale, a sample batch of 20 messages goes to FNFFS leadership for review. Voice gets locked. Every subsequent batch is spot-checked. Every send has a real constituent behind it, a "sent on behalf of" attribution, and Coalition sign-off on the voice framework.

**Why this accelerates**: it's the insurance policy that makes the whole system deployable in the FNFFS context. Without this, no amount of clever technology is politically defensible. With it, every claim we make about authenticity holds up.

### 10. Deployment, Hosting, and FNFFS Staff Training

Infrastructure work plus a half-day training session. Included as a line item but not individually scoped above because it's table stakes.

**Timeline for the MVP as a whole**: 6 to 8 weeks from kickoff to first production send. Voice approval session with FNFFS by end of Week 4.

---

## Additional Scope Options (Phase 2, costs extra $$)

Same framing as the MVP items. What New/Mode does, what we'd add, why it amplifies. Each module is standalone. Jessie picks which ones to offer.

### Rapid-Response Trigger System - $$

**What New/Mode gives you**: nothing in this category. New/Mode campaigns are pre-composed. They don't react to real-world events automatically.

**What we add**: a monitoring system watching DFO announcements, FOPO committee schedules, Hansard mentions, opposition press releases. When something breaks (a minister statement, a committee vote, a Wild First campaign going viral), the system auto-drafts a response email, an LTE, and a social post, then routes them to FNFFS for approval within minutes.

**Why this accelerates**: every news cycle is an opportunity. Without this, FNFFS is always a day late. With it, the campaign is inside every cycle, always responding before the conversation moves on.

### Digital Ad Creative Generator - $$

**What New/Mode gives you**: no ad creative tooling at all. New/Mode does advocacy delivery, not advertising.

**What we add**: riding-specific ad variants generated at scale. Ads targeting Weiler's constituents speak to the Sunshine Coast. Ads targeting Hanley speak to Yukon food costs. A/B testing rig integrated with Meta and Google Ads. Creative shifts automatically based on what's converting.

**Why this accelerates**: generic campaign ads get ignored. Hyperlocal, riding-specific creative converts multiple times better. This module makes the paid media budget work harder, which matters a lot in a campaign where FNFFS is trying to move specific MPs in specific places.

### "Which Nations Decide?" Interactive Map - $$

**What New/Mode gives you**: nothing. This is pure custom creative.

**What we add**: an embedded BC coast map showing the territories of FNFFS member Nations where disclosed, the licensed farm sites within them, and the jurisdictional story. It reframes the "120 First Nations support the ban" counter-narrative by showing the question isn't a head-count. It's a territorial-authority question under UNDRIP.

**Why this accelerates**: this is the single highest-leverage piece of campaign creative in the entire Phase 2 list. It neutralizes the opposition's strongest framing in one visual. Jessie, if the client has budget for only one Phase 2 module, this is the one to push.

### Analytics and Optimization Dashboard - $$

**What New/Mode gives you**: basic campaign analytics (sends, opens, submission counts).

**What we add**: riding heatmaps, persuadability-score-versus-action-rate analysis, ad-spend feedback loop, supporter journey tracking, MP engagement cross-reference. Deeper than the MVP Operations Console. This is for the client who wants to actively optimize week over week.

**Why this accelerates**: the campaign runs for 60 days. Teams that can measure and adjust beat teams that can't. This module gives FNFFS the data to tighten targeting mid-campaign.

### Expanded LTE Distribution - $$

**What New/Mode gives you**: the LTE tool at Movement Builder+ with their publication database.

**What we add**: regional paper coverage beyond New/Mode's core list (Campbell River Mirror, North Island Gazette, Coast Reporter, Nunatsiaq News, Yukon News, Ha-Shilth-Sa, APTN). Editorial calendar tracking. Placement success analytics. Follow-up routing for letters that generate editor response.

**Why this accelerates**: the MVP already has strong LTE reach through New/Mode's database. This module extends it into the specific regional outlets in each target MP's home riding, which is where local pressure actually gets noticed by staffers.

### Storytelling Engine - $$

**What New/Mode gives you**: form capture of supporter details. Not storytelling.

**What we add**: at supporter intake, we capture a single sentence about what salmon means to each person's food security and family. Best stories feed ad creative, LTE quotes, and campaign collateral. Consent-tagged and organized into a searchable library.

**Why this accelerates**: authentic voices are the most persuasive content in any advocacy campaign. This module turns every supporter submission into potential creative fuel for the rest of the campaign, plus FNFFS's future work.

### Counter-Narrative Monitoring - $$

**What New/Mode gives you**: nothing in this category.

**What we add**: scraping of Wild First, Pacific Wild, Watershed Watch, David Suzuki Foundation, and Coastal First Nations output. Alerts FNFFS comms when an opposition claim is gaining traction. Best paired with the rapid-response trigger system.

**Why this accelerates**: the opposition is loud and well-resourced. This module makes sure FNFFS never gets blindsided by a counter-campaign and always has the option to respond before a narrative solidifies.

### Operations Retainer (Monthly, During Active Campaign) - $$

**What this covers**: approval queue triage, weekly analytics review, ad creative iteration, rapid-response activation, deliverability monitoring, strategic adjustments. Recommended window is 60 days aligned to the active campaign. Billed monthly, separate from the MVP build.

**Why this matters**: we build the platform but the campaign needs active operation to perform. This is the ongoing hand on the tiller. Without it, the client gets a Ferrari with no driver.

---

## What the Client Needs to Provide

Jessie, these are hard dependencies we need locked in before kickoff:

1. **A designated voice approver at FNFFS.** One person or a small committee who signs off on generated copy. Heavy engagement in Weeks 2 to 4 during voice tuning, lighter ongoing review during the campaign.
2. **Decision on member-list disclosure.** The Coalition has 17 member Nations but hasn't publicly disclosed the full list, citing community safety. The campaign cannot go live without a decision on which Nations can be named. It's a political call only FNFFS can make, and it's a known counter-narrative vulnerability we need a prepared answer for.
3. **Introduction to Brian Kingzett (BCSFA) or Dr. Ahmed Siah (BC CAHS)** to obtain the actual PDFs of the science review chapters. We need them for naming specific researchers in campaign creative. See Appendix C. Hard Week 1 task.
4. **Priority MP list sign-off.** We've pre-built a 30-MP target list (Appendix A). FNFFS confirms or adjusts in Week 1.
5. **Active Movement Builder+ subscription on New/Mode** at $709 CAD per month, month-to-month. Needs to be in place by end of Week 2 so we can start API integration work. We can help procure it.
6. **Coordination channel with whoever runs paid media** so creative, targeting, and campaign messaging stay aligned across owned and paid channels.

---

## Open Decisions for Jessie

Things to clarify with FNFFS before we lock final scope:

1. **Is paid media buy in scope for this engagement?** We've carved it out as "separate agency, we coordinate with them." If FNFFS expects us to do media buying, that's a completely different conversation and a significantly larger engagement. Clarify before quoting anything.
2. **Who at FNFFS is the project sponsor, and who is the day-to-day contact?** We need one primary point of contact for execution. Dallas Smith is the public spokesperson but probably isn't the day-to-day operator.
3. **Campaign duration expectations.** We've scoped a 60-day active window with a 30-day core drip. If the client wants longer (90 days, bracketing the licence review), the operations retainer scales accordingly.
4. **Branding and design intensity.** Does FNFFS have existing brand guidelines or are we designing from scratch? Affects website build effort significantly.
5. **Which Phase 2 modules (if any) to fold into the base MVP offer.** The "Which Nations Decide?" map is strategically strong enough that we might want to promote it into MVP depending on budget appetite. Your call based on the client conversation.
6. **Pricing range for FNFFS.** We have no signal yet on what the client has budgeted. Probe and come back with target numbers before we commit scope.

---

## Pending External Validation

Items in flight that will tighten execution detail but don't block scoping:

**1. New/Mode sales inquiry - SENT.** Covers V2 API credentials, BC MP database coverage, LTE publication list, message variation behavior, parl.gc.ca deliverability insights. Waiting on response. Month-to-month billing at Movement Builder+ already confirmed at $709 CAD per month.

**2. New/Mode portal capability validation - DEFERRED to Week 1 of engagement.** Our current free-tier New/Mode account doesn't expose the features we need to validate hands-on (bulk recipient upload, API access, target metadata). Validation happens in Week 1 once Movement Builder+ is active. The V2 API is well-documented through the open-source Parsons library so the plan is technically sound in the interim.

**3. BCSFA/FNFFS science review chapter PDFs - PENDING CLIENT INTRODUCTION.** Required for naming specific chapter authors in campaign creative. The public BCSFA site serves chapters through a viewer that doesn't allow extraction. Hard Week 1 task.

**4. MP targeting list final verification - 60% COMPLETE.** Appendix A contains a curated 30-MP list with FOPO committee membership verified directly from the House of Commons site, Minister Thompson's appointment confirmed, and 14 of 30 margins verified from primary news sources. Remaining 16 ridings flagged `[VERIFY]` for pre-launch cleanup. Doesn't affect strategy, just persuadability scoring detail.

---

---

# Appendix A - Target MP List (pre-built)

**Summary.** 30 sitting Liberal MPs whose votes, voices, or constituency pressure points can most plausibly move the Carney government during the 2026 two-year licence review. Tier 1 concentrates on the Liberals on the FOPO committee (the direct legislative chokepoint) and Minister of Fisheries Joanne Thompson. Tier 2 adds the remaining BC Liberal MPs plus Atlantic FOPO Liberals. Tier 3 adds Liberal MPs in northern, remote, and rural ridings where food affordability is a demonstrable top constituency issue.

## Tier 1 - FOPO committee and Minister

| MP | Riding | 2025 Margin | Notes | Score |
|---|---|---|---|---|
| **Patrick Weiler** | West Vancouver, Sunshine Coast, Sea to Sky Country (BC) | 59.7% (+26.7) | **FOPO Chair.** Sunshine Coast aquaculture constituency. Highest-leverage single target. | 9 |
| **Ernie Klassen** | South Surrey, White Rock (BC) | Close win `[VERIFY]` | **Sits on FOPO.** New MP 2025, first-term, thin margin, highly pressure-sensitive. | 9 |
| **Joanne Thompson** | St. John's East (NL) | 62% (+36) | **Minister of Fisheries**, appointed March 14, 2025. The decision-owner. | 7 |

## Tier 2 - BC Liberal caucus, Atlantic FOPO Liberals, Fisheries-file veterans

| MP | Riding | 2025 Margin | Notes | Score |
|---|---|---|---|---|
| Terry Beech | Burnaby North, Seymour (BC) | 59.1% | Former Parliamentary Secretary to Fisheries. Deep file knowledge. | 8 |
| Stephanie McLean | Esquimalt, Saanich, Sooke (BC) | 49.4% | First Liberal win since 2004. Island coastal riding, direct aquaculture exposure. | 9 |
| Will Greaves | Victoria (BC) | 54.3% | First Liberal win since 2008. UVic professor, evidence-oriented. | 8 |
| Jonathan Wilkinson | North Vancouver, Capilano (BC) | `[VERIFY]` | Former Natural Resources / Environment Minister. Knows the file from the 2020 Discovery Islands decision. | 6 |
| Jill McKnight | Delta (BC) | `[VERIFY]` | Delta commercial fishing and seafood processing workforce. | 8 |
| Parm Bains | Richmond East, Steveston (BC) | `[VERIFY]` | Historic BC fishing community. | 8 |
| Gregor Robertson | Vancouver Fraserview, South Burnaby (BC) | `[VERIFY]` | Former Vancouver mayor. High-profile. | 6 |
| Taleeb Noormohamed | Vancouver Granville (BC) | `[VERIFY]` | BC caucus vote. | 5 |
| Hedy Fry | Vancouver Centre (BC) | `[VERIFY]` | Longest-serving BC Liberal. Caucus weight. | 5 |
| Stephen Fuhr | Kelowna (BC) | Close win `[VERIFY]` | New MP, interior BC. | 7 |
| Ron McKinnon | Coquitlam, Port Coquitlam (BC) | `[VERIFY]` | Returning MP. | 5 |
| Randeep Sarai | Surrey Centre (BC) | `[VERIFY]` | Returning BC Liberal. | 5 |
| Sukh Dhaliwal | Surrey Newton (BC) | `[VERIFY]` | Returning BC Liberal. | 5 |
| **Paul Connors** | Avalon (NL) | 58.6% (+22.6) | **Sits on FOPO.** NL fisheries riding. | 8 |
| **Serge Cormier** | Acadie, Bathurst (NB) | `[VERIFY]` | **Sits on FOPO.** NB salmon aquaculture-familiar Acadian fishing riding. | 8 |
| **Bobby Morrissey** | Egmont (PEI) | `[VERIFY]` | **Sits on FOPO.** PEI fisheries, file-literate. | 7 |

## Tier 3 - Food-affordability ridings

| MP | Riding | 2025 Margin | Notes | Score |
|---|---|---|---|---|
| Brendan Hanley | Yukon | 52.8% (+14.1) | Food affordability is a defining northern issue. Physician. | 8 |
| Rebecca Alty | Northwest Territories | 53.8% | Food affordability the #1 NT issue. Former Yellowknife mayor. | 8 |
| Philip Earle | Labrador (NL) | 51.5% (+9.8) | New MP, thin margin, food security and fisheries. | 9 |
| Carol Anstey | Long Range Mountains (NL) | 50.3% (+7.6) | Razor-thin margin, rural NL, fisheries-dependent coast. | 9 |
| Jonathan Rowe | Terra Nova, The Peninsulas (NL) | `[VERIFY]` | New rural NL fisheries MP. | 8 |
| Tom Osborne | Cape Spear (NL) | `[VERIFY]` | New MP, coastal NL. | 7 |
| **Jaime Battiste** | Cape Breton, Canso, Antigonish (NS) | 51.6% (+8.4) | **First Mi'kmaw MP.** Indigenous rights framing highly relevant. Thin margin. | 9 |
| Mike Kelloway | Sydney, Glace Bay (NS) | 54.6% (+16.5) | Rural Cape Breton fisheries. | 7 |
| Kody Blois | Kings, Hants (NS) | `[VERIFY]` | Rural NS, agriculture/food policy focus. | 7 |
| Patty Hajdu | Thunder Bay, Superior North (ON) | ~55% | **Former Minister of Indigenous Services.** Indigenous rights framing resonates. | 7 |
| Marcus Powlowski | Thunder Bay, Rainy River (ON) | `[VERIFY]` | Physician, northern Ontario, rural food costs. | 7 |
| Dominic LeBlanc | Beauséjour (NB) | Safe | Senior cabinet, former Fisheries Minister 2015-18. **Deep file history.** | 6 |

**Methodology.** Tier 1 is FOPO Liberal membership plus the Minister. Tier 2 is the full BC Liberal caucus plus remaining Atlantic FOPO Liberals. Tier 3 is Liberal MPs in ridings where food affordability is a widely-documented top constituent issue. Persuadability scored 1 to 10 on 2025 margin tightness, committee or minister role, coastal or rural fisheries exposure, and receptivity signals. Margins marked `[VERIFY]` finalized pre-launch against official Elections Canada results.

---

# Appendix B - Authenticity and Ethical Framework

Internal note for Jessie: authenticity is the core political argument of the FNFFS campaign. If the outreach reads as astroturfed or AI-generated, the Coalition's position loses legitimacy. This framework is how we protect against that. It should be explicit in any client-facing proposal because FNFFS will absolutely ask about it.

**Every message has a real constituent behind it.** Supporters explicitly opt in on the campaign site, enter their own details, and tell us one thing about why this matters in their own words. That sentence shapes the message. No send happens without consent. Every email carries a "sent on behalf of [supporter name]" attribution.

**Every message is reviewed by FNFFS before it sends.** The approval workflow is a hard block in the system, not a trust-based convention. A Coalition-designated reviewer sees every batch before push to New/Mode.

**The voice is FNFFS's from first principles.** The AI writer inherits no framework from other campaigns. The prompt, tone guidance, factual grounding, and style rules are rebuilt specifically for this engagement and reviewed with Coalition leadership during Weeks 2 to 4. Twenty sample emails produced and explicitly approved before any production send.

**No performatively Indigenous voice.** The writer is instructed not to generate Indigenous-voice cosplay. When a constituent is Indigenous and self-identifies, their voice is theirs. When a constituent is an ally, the message reflects that honestly. The campaign is First-Nations-led, not First-Nations-imitated.

**Standard unsubscribe, correction path, full audit trail.** Every message unsubscribable. Any constituent who believes a message was sent incorrectly has a one-click correction path. Every send, approval, edit, and submission logged and exportable. If FNFFS is ever asked to document the consent chain behind a specific email, we produce it.

**Stop-line.** If at any point during the campaign FNFFS decides a specific approach crosses an authenticity line, we stop it. Technology serves Coalition judgment, not the other way around.

---

# Appendix C - Science Review Citation Strategy

The BCSFA / FNFFS / BC CAHS science review is the campaign's strongest factual asset and its most obvious attack surface. Opponents will frame it as industry-funded unless we can cite specific named researchers from within it.

**Public-facing names we can cite safely today**:
- **Dallas Smith** (FNFFS spokesperson, Tlowitsis Nation). The Indigenous-led framing voice.
- **Dr. Ahmed Siah** (Managing Director, BC Centre for Aquatic Health Sciences). The credentialed non-BCSFA scientist. Most important single name for rebutting "industry-funded."
- **Brian Kingzett** (Executive Director, BC Salmon Farmers Association). The sector voice. Use sparingly.

**Defensible headline findings from public launch coverage**:
- $1.142 billion in direct annual economic activity
- $51 million annually to First Nations
- ~6,000 direct and indirect jobs, ~500 Indigenous
- 12+ coastal First Nations host finfish farms
- 38 million meals produced annually

**What we need from FNFFS in Week 1**: access to the actual chapter PDFs via a warm introduction to Brian Kingzett at BCSFA or Dr. Siah at BC CAHS. The public website serves chapters through a viewer that doesn't allow extraction. We cannot run campaign creative citing specific chapters until we can name the reviewers and peer-reviewed papers inside them. Hard Week 1 task.

**Chapters to lead with**: Chapter 4 (Indigenous Stewardship) and Chapter 13 (Community Benefits). Both carry food sovereignty and economic arguments and have defensible named voices.

**Chapters to handle carefully**: Chapter 10 (Sea Lice) and Chapter 11 (Fish Health). The opposition's strongest attack vectors. Do not cite without named authors and specific peer-reviewed sources in hand.
