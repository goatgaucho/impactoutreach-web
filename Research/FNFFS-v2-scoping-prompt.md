# Prompt — FNFFS MVP v2 proposal (campaign website + content + petition)

You are writing a revised MVP scope document for the FNFFS engagement. An earlier version of the proposal was built around an AI-amplified MP outreach system running on top of New/Mode. That scope is now dialled back. This document is for Jessie to use in client conversations. Not client-facing yet. Match the tone of the earlier proposal doc in the project files.

## Required reading before you start

The project folder contains three documents from the earlier version of this engagement. Read all of them in full before you start writing. They contain client context, the authenticity framework, the MP target list, and the science-review citation strategy — all of which still apply.

1. The full original FNFFS scope doc. Pay particular attention to:
   - The "Client Situation" section (carry forward verbatim or lightly edited)
   - Appendix A (30-MP target list) — still the target list, now used for ad geotargeting rather than email routing
   - Appendix B (authenticity framework) — still applies, now to blog voice and petition copy rather than AI-generated emails
   - Appendix C (science review citation strategy) — now critically important because it feeds the blog content
2. The short one-pager version of the original proposal
3. The New/Mode sales inquiry draft

You should also assume the following New/Mode answers came back definitive and are load-bearing for this rewrite:
- New/Mode CANNOT do coalition-as-sender, custom Reply-To, supporter-anonymous intake, or MP targeting restriction. That entire vector is dead.
- New/Mode CAN do petition signup with postcode-to-MP routing, and has a real LTE tool with Canadian publication coverage (Vancouver Sun, Times Colonist, Globe and Mail, National Post, The Tyee, Campbell River Mirror, North Island Gazette, Coast Reporter — all confirmed by sales).
- New/Mode's V2 API is at a higher tier ("Growing Organization") than Movement Builder+, not at MB+ as we originally thought. Pricing for that tier is unknown.
- Movement Builder+ is where the LTE tool lives. Public floor is ~$349 USD/mo, we'd been quoted $709 CAD/mo (likely annual or multi-seat).

## What changed in scope

**Cut from the original MVP**:
- AI email writer tuned for FNFFS voice
- 30-day drip scheduler
- New/Mode V2 API integration for per-recipient MP email push
- FNFFS Operations Console's voice-approval workflow (no AI-generated content to approve anymore)
- Reply capture and MP engagement analytics
- Supporter voice approval workflow for generated content

**New centerpiece**: a full FNFFS campaign website with an SEO-optimized blog/news section. Google Ads point to the petition and to the blog posts. Organic search and social drive supporters to the same destinations.

**Retained from the original**:
- Client situation and political framing (FNFFS, the 2029 ban, the 2026 licence review, Minister Thompson as decision-owner)
- 30-MP priority target list — now used for ad geotargeting by riding, not email routing
- Authenticity framework (Appendix B) — now applies to blog voice and petition copy
- Science review citation strategy (Appendix C) — now the backbone of the blog content
- LTE tool usage, still on New/Mode at Movement Builder+ tier, using their native LTE feature unchanged
- Coordination with paid media team (now Google Ads, explicit in scope)

**Deferred to post-MVP**:
- BC publication live-scrape / media monitoring feature — "what's being talked about where" around food scarcity and aquaculture. Out of MVP, but mention as a Phase 2 option with a clear value proposition.
- Any cross-jurisdictional media monitoring expansion beyond BC.

## MVP scope to document

Structure the new proposal the same way as the original (`Research/FNFFS-proposal.md`) — each item framed as "what New/Mode or another vendor does natively, what we add on top, why it accelerates" where that framing still makes sense, or a simpler "what we build and why" where it doesn't.

The MVP items to scope, as you currently understand them:

1. **FNFFS-branded campaign website.** Full branded site, narrative pages (the Coalition, the science, the stakes, take action, media resources, blog/news, about), purpose-built landing pages for Google Ads to convert against, SEO foundation, accessibility compliance, performance budget for Core Web Vitals (SEO-load-bearing). Owned digital asset that outlives the campaign.

2. **Blog / news-and-information section — 35+ SEO-optimized posts.** Sourced from client-provided material (FNFFS has what the client describes as "basically a textbook" on salmon aquaculture, Indigenous stewardship, food sovereignty, the science review chapters, etc.). Each post extracted and written fresh for search, not republished verbatim. Publishing cadence 2–3 posts per week post-launch, with at least [N — propose a number] ready at launch and the full 35+ landed within the active campaign window. SEO-optimized (keyword research against "salmon farming BC," "First Nations aquaculture," "open-net-pen ban," "BC food security," etc.), schema markup, internal linking, metadata. Client provides source material and voice notes. We extract, synthesize, and write in the agreed voice.

3. **Voice development and iteration process.** Propose a structured voice-tuning cycle with FNFFS: client provides voice notes and sample material, we produce draft posts in the proposed voice, client reviews and iterates, voice is locked. Budget for N rounds of iteration before production writing begins. Same principle as the original proposal's voice-approval cycle for AI-generated content — now applied to human-written editorial content instead.

4. **Petition platform integration.** New/Mode (most likely) is the petition backend. Supporters sign up via New/Mode's hosted page or an embedded form on the FNFFS site. We handle the UX of the intake on our site and the routing to New/Mode. Address the UX question: is the petition embedded, linked-out, or iframed? Propose the cleanest approach. Also assess whether a different petition vendor (Action Network, Do Gooder, or another) would be better for petition-only usage — especially if we care about data portability, supporter list ownership, or cost — with a clear recommendation.

5. **LTE amplification via New/Mode's native tool.** Unchanged from original MVP item 6, but simpler — we are NOT adding a GPT-4o drafting layer on top in the MVP. Supporters use New/Mode's LTE tool as-is. We can provide a starter letter template, publication-specific guidance baked into the UX, and integrate the LTE call-to-action into the campaign site. Acknowledge the media-scrape feature as Phase 2.

6. **Google Ads landing and conversion architecture.** Riding-specific or theme-specific landing pages that Google Ads point at. Conversion tracking (petition signup, LTE action, blog engagement as a soft conversion). UTM discipline. Reporting dashboard for the paid media team. Be explicit about where Google Ads sit relative to our work: we build the destinations, coordinate with whoever runs the paid buy, but the buy itself is likely out of scope (confirm this with Jessie).

7. **Analytics and campaign health.** Petition signup count, LTE submissions, blog post engagement, organic search rankings for target keywords, Google Ads conversion rate by landing page. A simple dashboard view, not the elaborate operations console from v1.

8. **Optional: light admin surface.** Evaluate whether the campaign site needs any of:
   - A portal for FNFFS staff to review/publish blog posts (CMS-backed)
   - A petition data view that pulls from New/Mode (if useful — New/Mode has its own admin, so duplicating it is probably not worth it)
   - A unified login that connects the FNFFS site to New/Mode's admin
   Give Jessie a clear recommendation on which of these are worth building and which are not. Default position: keep it narrow. Only build what New/Mode's own admin cannot do well.

9. **Deployment, hosting, CMS selection, staff training.** Infrastructure work. Include a CMS recommendation (headless like Sanity/Contentful/Payload, vs WordPress, vs Astro content collections, vs Next.js + MDX). Weigh editing UX for non-technical Coalition staff vs developer velocity vs SEO performance. Make a specific recommendation.

## Open decisions to surface for Jessie

Follow the same format as the original proposal's "Open Decisions for Jessie" section. Include at minimum:

1. Petition vendor — stay on New/Mode (keeps LTE under one roof) or split petition onto a cheaper / more flexible platform (Action Network at ~$15/mo) and keep New/Mode only for LTE? Pricing delta is real: LTE gating puts New/Mode at ~$349+ USD/mo minimum.
2. Who at FNFFS is the blog voice approver, and is it the same person as the overall project sponsor?
3. Blog content sourcing logistics — how does the client hand off their "textbook" of source material? Digital files, interviews, in-person working session, ongoing access? This affects timeline significantly.
4. Pre-launch post count — how many of the 35+ posts must be live at launch vs landed during the campaign? Affects writing velocity and timeline.
5. Google Ads buy — in scope (we build and run), coordinated (we build destinations only, someone else runs the buy), or hybrid?
6. Existing FNFFS brand guidelines — affects site design effort.
7. Domain and hosting — does FNFFS own a domain? Are we deploying to Vercel, Railway, their own hosting?
8. Is the future media-scrape / monitoring feature worth formally tagging as Phase 2 now so the client knows it's coming, or hold it back until we see appetite?

## Client dependencies

Update the "What the Client Needs to Provide" section from the original. Most of the original items drop away. New version should focus on:
- Source material handoff (the "textbook")
- Voice approver designated
- Brand guidelines or approval to design from scratch
- Domain and any existing digital properties
- Priority MP list sign-off (still relevant for ad geotargeting)
- Intro to BCSFA / BC CAHS for science review PDFs (still relevant for blog content, moves from "campaign creative" to "blog post sourcing")
- Paid media coordination channel

## Pending external validation

Carry forward only what's still relevant:
- Science review chapter PDFs still needed for blog content (now more important than ever — this is where the 35 posts come from in part)
- MP targeting list verification (still 60% done, still relevant for ad targeting)
- Petition vendor decision — may need a follow-up to Action Network if we go that route

Drop everything else from the original "pending" section (New/Mode V2 API validation, portal capability validation for sender architecture, etc.) — those questions are settled.

## Tone and structure notes

- Write for Jessie, not the client. This is an internal scoping doc that will inform a client-facing proposal later.
- Match the voice of the original FNFFS proposal in the project files — direct, confident, plain language, no consultancy buzzwords, no em dashes.
- Keep the "what [vendor] does / what we add / why" framing where it earns its place (petition, LTE). Drop it where it doesn't (the website and blog are fully ours, no vendor comparison needed).
- Call out anything you are uncertain about as `[NEEDS CONFIRMATION]` or `[ASK JESSIE]` inline. Do not invent answers. If you don't know how many posts should be live at launch, put a range and flag it.
- Do NOT propose rebuilding AI functionality we just cut. The point of this rewrite is that the AI layer is gone. If a specific AI touch (e.g. writing-assist for the blog authors) is genuinely worth keeping as a tool-for-us rather than a product feature, mention it briefly and move on.
- Preserve the MP list in Appendix A unchanged.
- Preserve the authenticity framework in Appendix B, but rewrite the framing to apply to blog voice and petition copy rather than AI-generated emails.
- Preserve the science review citation strategy in Appendix C, and note explicitly that the 35 blog posts are where this strategy gets deployed at scale.

## Output

Produce the new proposal as a single markdown document. Length target: same order of magnitude as the original (~300 lines of markdown before appendices). Don't rewrite sections that don't need rewriting — lift from the original where it still fits, adapt where it doesn't, cut what's gone.

When you're done, write a one-paragraph summary of the biggest changes vs the original proposal, and flag any decisions you had to make where you'd want Jessie's input before finalizing.
