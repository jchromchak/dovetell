# style-guide.md
# dovetell-tasks UI Style Guide
# Human-readable implementation guidance. Fixed H3 sections. Append or edit bullets in place.

---

### Navigation

- Dashboard is global and project-agnostic; project-specific pages inherit the selected project context. [rev-1d4e8c2a]
- Desktop project navigation lives in the sidebar directly under Dashboard, with public/private indicators and an add-project action. [rev-1d4e8c2a]
- Mobile project navigation should remain compact and avoid competing with the bottom object navigation. [rev-1d4e8c2a]

### Dashboard Density

- Dashboard cards should remain compact, but row text must never overlap adjacent columns or controls. [rev-1d4e8c2a]
- Row titles may clamp to two lines; supporting metadata should truncate before it collides with status, score, date, or revision chips. [rev-1d4e8c2a]
- Changelog rows need the tightest treatment because summaries, project chips, dates, and revision IDs are all competing for horizontal space. [rev-1d4e8c2a]

### Project Sources

- Project source metadata is browser-local until a durable account-level model exists. [rev-1d4e8c2a]
- PATs are stored per project and should never be logged, hardcoded, or transmitted outside GitHub API requests for the configured repo. [rev-1d4e8c2a]
- Public/private visibility should be shown with a compact icon plus text where space allows, and icon-only where space is tight. [rev-1d4e8c2a]

### Shared CSS

- Shared shell, navigation, controls, sheets, tokens, and reusable density rules belong in `assets/css/shared.css`. [rev-1d4e8c2a]
- Page-specific layout can stay local until at least two pages need the same pattern; then extract the common rule. [rev-1d4e8c2a]
- Inline styles should be treated as temporary scaffolding when a pattern is still settling. [rev-1d4e8c2a]

### Traceability

- Every new or edited bullet in this file ends with a revision reference in square brackets. [rev-1d4e8c2a]
- Prefer editing an existing bullet when guidance changes; append a new bullet only when the guidance is genuinely new. [rev-1d4e8c2a]
- Revision details live in changelog.md; this file carries only lightweight references. [rev-1d4e8c2a]

---

*style-guide.md - dovetell-tasks - v0.1*
