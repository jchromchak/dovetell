# completed-tasks.md
# Dogfood POC — Completed Tasks
# Full entries moved here from tasks.md on completion.
# Flat append log. Newest at bottom. Never delete.

---

## Schema

- [x] Task title
  id: task-[8char]
  priority: now|next|later
  source: codex-[hash] | prompt-[hash]
  created: YYYY-MM-DDTHH:MMZ
  completed: YYYY-MM-DDTHH:MMZ
  completed-session: codex-[hash]

  owner: [who was responsible]
  persona: persona-[8char]
  decision: decision-[8char]
  rule: rule-[8char]
  process: process-[8char]
  opp: opp-[8char]
  risk: risk-[8char]

  notes:
    [original task notes preserved on move]

  completion-notes:
    [what was done, any follow-on items created, any decisions or rules that resulted]

---

## Completed Tasks

[Entries moved here from tasks.md on completion. Newest at bottom.]

- [x] Add project navigation and dashboard density pass
  id: task-4d9c0a7e
  priority: now
  revisionId: rev-7f2a8d3c
  created: 2026-05-07T01:59Z
  completed: 2026-05-07T02:47Z
  completed-session: codex-7588c8e2

  owner: john
  persona: none
  decision: none
  rule: none
  process: none
  opp: none
  risk: none

  notes:
    Move project navigation into the desktop sidebar under Dashboard, keep Dashboard global and object pages project-specific, provide an add-project affordance, tighten dashboard row/card density so text clamps instead of overlapping, and establish .dovetell-tasks-context/style-guide.md as human-readable UI guidance with traceable bullet references.

  completion-notes:
    Added desktop sidebar project navigation under Dashboard with public/private indicators and an add-project affordance. Kept Dashboard global while object pages remain project-specific. Added .dovetell-tasks-context/style-guide.md for human-readable UI guidance. Tightened dashboard rows so long titles and metadata clamp or truncate instead of overlapping. Follow-up tasks created for the project source management flow and mobile bottom-nav width cleanup.

- [x] Fix mobile bottom navigation width
  id: task-f3a92c10
  priority: now
  revisionId: rev-7f2a8d3c
  created: 2026-05-07T02:47Z
  completed: 2026-05-07T02:47Z
  completed-session: codex-7588c8e2

  owner: john
  persona: none
  decision: none
  rule: none
  process: none
  opp: none
  risk: none

  notes:
    Remove the mobile bottom-nav scale hack and make the six-tab navigation span the full viewport width without clipping, shrinking, or leaving a blank strip.

  completion-notes:
    Removed the mobile bottom-nav scale transform and switched the six-tab layout to full-width equal grid columns at small breakpoints.

- [x] Extract shared CSS and GitHub/auth utilities
  id: task-a27da8f3
  priority: now
  revisionId: rev-62ecc615
  created: 2026-05-06T02:21Z
  completed: 2026-05-06T02:21Z
  completed-session: codex-7588c8e2

  owner: john
  persona: none
  decision: none
  rule: none
  process: none
  opp: none
  risk: none

  notes:
    Extract shared CSS and shared GitHub/auth utilities from the static pages without changing page behavior, routes, markdown data formats, or GitHub write semantics.

  completion-notes:
    Added assets/css/shared.css and assets/js/shared.js. Updated tasks, decisions, rules, risks, and opportunities pages to load shared assets and delegate GitHub GET/PUT, PAT storage, timestamps, ID generation, and escaping to shared utilities while keeping page-specific parsing and rendering local. Verified script parsing, whitespace, token prompt rendering, desktop shell, and mobile shell behavior.

- [x] Extract shared shell and interaction helpers
  id: task-51a43e7c
  priority: next
  revisionId: rev-5143d294
  created: 2026-05-06T02:21Z
  completed: 2026-05-06T13:36Z
  completed-session: codex-7588c8e2

  owner: john
  persona: none
  decision: none
  rule: none
  process: none
  opp: none
  risk: none

  notes:
    Follow the completed shared CSS and GitHub/auth utility extraction by moving shell, status, toast, sheet, and common list/bulk interaction helpers into reusable assets. Keep markdown parsers, render-card logic, route structure, data formats, and GitHub write semantics page-specific until a later architecture decision.

  completion-notes:
    Added shared status, toast, add-sheet, and bulk-sheet helpers to assets/js/shared.js. Updated tasks, decisions, rules, risks, and opportunities pages to delegate existing page-level wrapper functions to the shared helpers while preserving inline handlers, route structure, page-specific reset/focus behavior, markdown parsing, and GitHub write semantics. Verified JavaScript parsing and desktop/mobile token-prompt shell rendering across all five pages.

- [x] Establish brand guidance and dashboard visual direction
  id: task-ba584083
  priority: next
  revisionId: rev-acf5d65d
  created: 2026-05-06T13:36Z
  completed: 2026-05-06T13:47Z
  completed-session: codex-7588c8e2

  owner: john
  persona: none
  decision: none
  rule: none
  process: none
  opp: none
  risk: none

  notes:
    Create a brand.md source of truth and use the supplied desktop/mobile dashboard mockups to define visual principles, tokens, navigation patterns, cards, severity language, and responsive dashboard direction before applying larger visual changes.

  completion-notes:
    Added .dovetell-tasks-context/brand.md as the visual source of truth for Dovetell. Captured identity, tone, color tokens, typography, layout, navigation, component rules, language guidance, responsive requirements, dashboard direction, implementation guardrails, and open questions based on the supplied desktop and mobile dashboard mockups.

- [x] Apply brand guidance to dashboard shell
  id: task-a8a8f3a2
  priority: next
  revisionId: rev-12b0e3b6
  created: 2026-05-06T13:47Z
  completed: 2026-05-06T14:31Z
  completed-session: codex-7588c8e2

  owner: john
  persona: none
  decision: none
  rule: none
  process: none
  opp: none
  risk: none

  notes:
    Use .dovetell-tasks-context/brand.md to guide the first visual implementation pass. Start with shared CSS tokens and dashboard shell/navigation direction before applying deeper page-specific visual changes. Preserve static portability, routes, markdown data formats, and GitHub write semantics.

  completion-notes:
    Updated assets/css/shared.css with brand-aligned color tokens, dark workspace backgrounds, compact controls, desktop sidebar navigation, mobile bottom-nav constraints, and token-prompt overflow fixes. Updated tasks, decisions, rules, risks, and opportunities pages so the shared brand layer loads after legacy inline styles, allowing the shell to update without changing page logic, routes, markdown data formats, or GitHub write semantics. Queued task-37e67370 to create the first dashboard overview route.

- [x] Create dashboard overview route
  id: task-37e67370
  priority: next
  revisionId: rev-b3ef3363
  created: 2026-05-06T14:31Z
  completed: 2026-05-06T15:18Z
  completed-session: codex-7588c8e2

  owner: john
  persona: none
  decision: none
  rule: none
  process: none
  opp: none
  risk: none

  notes:
    Add a lightweight dashboard route that uses the established brand shell and summarizes current tasks, risks, decisions, and recent changes from the existing markdown-backed sources. Preserve static portability, existing routes, markdown data formats, and GitHub write semantics. Treat aggregation and project drill-in as incremental; do not introduce a build step.

  completion-notes:
    Added dashboard/index.html as a static overview route. The dashboard reuses shared PAT/GitHub utilities, reads existing markdown-backed tasks, decisions, risks, opportunities, and changelog files, and renders context health, hot tasks, active risks, recent decisions, and recent changes. Updated index.html and manifest.json to start at the dashboard. Added Dashboard to the existing page navigation while preserving all existing routes and write semantics. Queued task-9a1c2691 to validate and refine the authenticated loaded state.

- [x] Define private context project source configuration
  id: task-1f3704d5
  priority: now
  revisionId: rev-1b7a2e4c
  created: 2026-05-06T17:56Z
  completed: 2026-05-06T18:21Z
  completed-session: codex-7588c8e2

  owner: john
  persona: none
  decision: none
  rule: none
  process: none
  opp: none
  risk: none

  notes:
    Add a multi-project source configuration concept before wiring more dashboard behavior. Include jchromchak/dovetell-private as a private context-file repo intended to store personal/private decisions and context outside the public dovetell-tasks repo. Define source metadata for repo owner/name, display name, visibility indicator public/private/unknown, context file paths, and per-project PAT handling because fine-grained PAT permissions may differ by repo. Recommend a lock/globe indicator in project rows/cards when visibility metadata is configured or inferable.

  completion-notes:
    Added assets/js/projects.js with public and private project source metadata, including jchromchak/dovetell-private as a private context source. Added per-project PAT storage helpers, dashboard aggregation across configured projects, configured globe/lock indicators, missing-token prompts per project, and a ten-minute dashboard refresh interval. Queued task-bd02e9a4 for project-aware drill-in and write target selection across item pages.

- [x] Add project-aware drill-in and write target selection
  id: task-bd02e9a4
  priority: now
  revisionId: rev-5c6d8e90
  created: 2026-05-06T18:21Z
  completed: 2026-05-06T19:00Z
  completed-session: codex-7588c8e2

  owner: john
  persona: none
  decision: none
  rule: none
  process: none
  opp: none
  risk: none

  notes:
    Extend the app beyond dashboard aggregation so item pages and write flows can understand which configured project owns an item. Preserve the current markdown formats and direct GitHub write semantics while adding project-aware drill-in behavior, a clear create/edit target selection model, and guardrails so private context writes go to the selected private repo instead of the public project by accident.

  completion-notes:
    Added shared project-page initialization, a compact project source selector, project-specific token prompts, and dashboard drill-in URLs that preserve the source project. Tasks, decisions, rules, risks, and opportunities now map CONFIG owner/repo/path/token from the selected project before loading or writing, so create/edit/bulk actions continue using the existing page code while targeting the selected project source. Queued task-c8e72b9d for editable project source management instead of hardcoded source additions.

- [x] Add editable project source management
  id: task-c8e72b9d
  priority: next
  revisionId: rev-dfb4037a
  created: 2026-05-06T19:00Z
  completed: 2026-05-06T19:18Z
  completed-session: codex-7588c8e2

  owner: john
  persona: none
  decision: none
  rule: none
  process: none
  opp: none
  risk: none

  notes:
    Replace hardcoded project source additions with a lightweight static-app project settings flow. Let a user add or edit project source metadata on-device, including owner/repo, display name, public/private/unknown visibility, context file paths, and per-project PAT storage keys. Preserve static portability and avoid transmitting PATs anywhere except GitHub API calls.

  completion-notes:
    Added local project source storage helpers that merge built-in defaults with browser-local custom sources and overrides. Added a dashboard Project sources sheet for adding, editing, and deleting local project source metadata, including context file paths and token storage keys. Existing built-in projects remain available, while local overrides can adjust them without editing assets/js/projects.js.

---

*completed-tasks.md — Dogfood POC — v0.1*
*tasks move here when done — they do not stay in tasks.md.*
*never delete entries — this is the completion record.*
