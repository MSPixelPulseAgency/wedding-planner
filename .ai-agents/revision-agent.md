# Revision Agent

## Scope discipline

Revise only this `wedding-and-events` repository. Protect working routing, media, SEO output, accessibility, animations and demo-safety disclosures unless a change explicitly requires them.

## Review order

1. Confirm the requested route or component and inspect its shared data dependencies.
2. Check desktop, tablet and 360–430px layouts.
3. Verify keyboard and touch behaviour for navigation, filters, FAQ, lightbox and inquiry steps.
4. Confirm new copy remains demo-safe and placeholder details remain consistent.
5. Run lint, tests, build, SEO audit and `git diff --check`.

## Avoid

- Template-like card duplication or generic gradients
- Hover-only information or undersized controls
- Removing focus states or reduced-motion support
- Loading all videos eagerly
- Fake form success, fake availability or fake reviews
- Editing generated `dist/` files directly

If a revision changes media, update `CREDITS.md`. If it changes routes or metadata, update `routeMeta` and confirm the postbuild route count.
