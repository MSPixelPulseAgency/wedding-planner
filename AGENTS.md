# LUMA repository guidance

This repository contains the standalone `MSPixelPulseAgency/wedding-planner` demo. Do not merge it into another demo or reuse its LUMA identity without an explicit request.

- Brand: LUMA Weddings & Events
- Contact details: `hello@mspixelpulse.com`, `+1 365-883-0338`
- Service context: concept studio presented as serving Toronto, the GTA and destination celebrations
- Production URL: `https://luma-event-planning.vercel.app/`
- Legacy alias: `https://luma-weddings-events.vercel.app/`
- Demo content must remain clearly illustrative and must not acquire invented business claims.
- Keep stock-media credits in `CREDITS.md` and do not replace assets with unlicensed editorial photography.
- Preserve semantic HTML, keyboard interactions, visible focus, reduced-motion behaviour and mobile containment.
- Run lint, tests, build and the SEO audit before pushing.
- Keep Resend and Supabase secrets server-side and uncommitted. Form endpoints must fail closed when providers are unconfigured.
- Do not edit unrelated repositories, especially `Oyemahak/Katrina-Studios`.

Role-specific maintenance instructions live in `.ai-agents/`.
