# ImpactOutreach Build Notes

## Approved frontend direction
- Concept: Indigo light full-site v2
- Brand: ImpactOutreach
- Tagline: Voices organized for influence
- Logo: Signal Arc, light mode
- Accent system: indigo / violet
- Keep the current visual design intact unless explicitly instructed otherwise

## Current state
- Frontend-only MVP
- Static contact form
- No backend integrations yet
- No CMS yet
- No analytics wiring yet

## Main working files
- src/App.jsx
- src/main.jsx
- src/index.css

## Vercel April 2026 Security Incident — Response (2026-04-30)

ImpactOutreach was **not in the affected subset** per Vercel's notification. Preventive hygiene applied: the one production secret in Vercel (`MAILGUN_API_KEY`) flipped from non-sensitive to `type: sensitive`, targets reduced to `[production, preview]` (development removed — required for sensitive flag). Production unaffected.

**Local dev impact:** `vercel env pull` no longer downloads `MAILGUN_API_KEY` for development. Maintain via `.env.local` or re-add a dev-scoped copy via dashboard if local testing of email-send features is needed.

**Backup of values:** `/tmp/vercel-env-backup-2026-04-24/impactoutreach.env`

**Separate (local hygiene, not Vercel-related):** Postgres password, Mailgun API key, and a dashboard admin login `Admin` / `ImpactAdmin$` are all visible in plaintext inside `.claude/settings.local.json` past Bash allowlist entries (lines 43, 58, 64, 79). File is globally gitignored so not committed, but anyone with filesystem access to this machine sees them. Worth purging those allowlist entries when you have time, and rotating those three credentials in their respective dashboards if you suspect any compromise.

---

## TODO

### Website (impactoutreach.co)
- [ ] Wire contact form
- [ ] Add campaign detail pages
- [ ] Add structured campaign data or CMS
- [ ] Add analytics
- [ ] Add matching favicon

### Dashboard (dashboard.impactoutreach.co)
- [ ] Update dashboard logo/icon to match the website's radar/signal SVG logo
- [ ] Add SMS/text messaging capability (Telnyx integration)
