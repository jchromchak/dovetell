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

- [x] Revisit project source management flow
  id: task-8e2f6b91
  priority: next
  revisionId: rev-3f77a1d2
  created: 2026-05-07T02:47Z
  completed: 2026-05-07T03:13Z
  completed-session: codex-7588c8e2

  owner: john
  persona: none
  decision: none
  rule: none
  process: none
  opp: none
  risk: none

  notes:
    Redesign and debug the project source sheet. The previous sheet was useful as a local settings editor but felt deceiving for first-time project addition, and a manual add-project test did not work as expected. Revisit copy, required fields, validation, default paths, token setup, post-save confirmation, and whether add-project should immediately verify repo/file access.

  completion-notes:
    Changed the dashboard sheet to a clearer Add GitHub project source flow. New projects generate project ID and token key from owner/repo, default to .dovetell-tasks-context/*.md paths, capture a per-project GitHub token, validate required context paths, and verify repo plus tasks path access before reload. Failed verification now stays in the sheet with the exact error and preserves the local project source for correction. Confirmed JavaScript parsing, whitespace checks, and a mobile screenshot of the redesigned sheet.

- [x] Validate dashboard loaded state with GitHub data
  id: task-9a1c2691
  priority: next
  revisionId: rev-4a9e2c73
  created: 2026-05-06T15:18Z
  completed: 2026-05-07T03:49Z
  completed-session: codex-7588c8e2

  owner: john
  persona: none
  decision: none
  rule: none
  process: none
  opp: none
  risk: none

  notes:
    Verify the dashboard and project-aware item pages using live GitHub-loaded markdown data on a local device with existing per-project PATs. Confirm public and private project sources render together, public/private indicators appear, settings-added local project sources persist, and task, risk, decision, rule, opportunity, and changelog summaries render correctly after authentication. Refine empty, partial-load, loaded, source-switching, and local project-settings states without changing markdown data formats or GitHub write semantics.

  completion-notes:
    User confirmed the pushed add-project flow worked with a real project/PAT. Prior checks covered mocked loaded state, bad-token handling, partial warnings, public/private markers, project-aware routing, local project source storage, and the visual gauge fix. The live validation blocker is cleared.

- [x] Add project journal capture and reconciliation flow
  id: task-e7c3a9d4
  priority: now
  revisionId: rev-6056726b
  created: 2026-05-07T03:27Z
  completed: 2026-05-07T14:11Z
  completed-session: codex-7588c8e2

  owner: john
  persona: none
  decision: decision-6b2f4a91
  rule: none
  process: none
  opp: none
  risk: none

  notes:
    Build a project journal feature backed by .dovetell-tasks-context/journal.md. On desktop, the journal should appear as a right-hand sidebar with a top composer for free-flow thoughts and truncated journal cards that can expand. Entries should support quick slash-style actions such as add task or add decision, with created object IDs captured in the journal entry actions field. Initial implementation may use a manual reconciliation step; future versions can move toward live LLM-assisted reconciliation.

  completion-notes:
    Added journal as a configured per-project context path. Dashboard loads journal entries, tolerates missing journal.md, renders a desktop journal column, exposes mobile journal capture through a bottom sheet, appends notes to GitHub, and creates journal.md on first write. Added task reconciliation through a preview sheet with editable title and priority, then records the created task ID in the journal entry actions field. User confirmed the live flow with a saved PAT: wrote to the journal, refreshed and saw the note, created a task from it, and saw the task appear in the task list.

- [x] Add dashboard recent activity feed
  id: task-a6541f36
  priority: next
  revisionId: rev-aace2a68
  created: 2026-05-07T14:26Z
  completed: 2026-05-07T14:26Z
  completed-session: codex-7588c8e2

  owner: john
  persona: none
  decision: decision-90e1768a
  rule: none
  process: none
  opp: none
  risk: none

  notes:
    Replace the narrow dashboard changelog panel with a project activity feed that better supports the user's external active-project tracker direction. Keep it read-only and derived from existing loaded markdown files.

  completion-notes:
    Changed the dashboard Changelog panel to Activity Feed. The feed merges recent changelog entries, journal notes, and dated tasks across configured projects, sorts them by date, shows compact type avatars, project chips, metadata, and links task activity back to the relevant task page. Verified JavaScript parsing, whitespace checks, and a mocked mixed feed order/render path.

- [x] Introduce repo-backed account and project controls JSON
  id: task-55bcfc5c
  priority: now
  revisionId: rev-0862d875
  created: 2026-05-07T15:05Z
  completed: 2026-05-07T15:36Z
  completed-session: codex-7588c8e2

  owner: john
  persona: none
  decision: decision-55bcfc5c
  rule: none
  process: none
  opp: none
  risk: none
  flags:
    - dovetell:global

  notes:
    Move default account/project controls out of hidden browser-local state and into repo-backed JSON so project continuity and external active-project feeds can rely on versioned configuration. Preserve local-only PAT storage and keep browser-local project additions as temporary overrides until a promotion flow exists.

  completion-notes:
    Added assets/config/account-projects.json as the versioned default source for account and project controls, including default context file paths and the configured sandbox/private project sources. Updated assets/js/projects.js to load the JSON while preserving the current synchronous Dovetell.allProjects API and keeping an embedded fallback for static demo resilience. PATs remain browser-local only; later work should promote local project additions back into repo JSON and move project bootstrapping to an async path.

- [x] Promote local project sources into repo JSON
  id: task-2c4a9f18
  priority: now
  revisionId: rev-4d52e8c1
  created: 2026-05-07T15:44Z
  completed: 2026-05-07T16:13Z
  completed-session: codex-7588c8e2

  owner: john
  persona: none
  decision: decision-55bcfc5c
  rule: none
  process: none
  opp: none
  risk: none
  flags:
    - dovetell:global

  notes:
    Add a promotion/export path so browser-local project source additions can become entries in assets/config/account-projects.json. This should reduce continuity gaps while keeping PATs local-only.

  completion-notes:
    Added shared account config helpers that merge repo defaults with browser-local project additions and overrides into a canonical, token-free account-projects.json payload. The dashboard project sheet now includes a Repo JSON promotion panel with preview and copy actions, and project source labels distinguish default, local, and local override entries. Hardened assets/js/projects.js so loaded JSON is normalized and malformed project entries fall back safely before reaching the rest of the app.

- [x] Fix Activity Feed schema task leak
  id: task-e3f8c2b0
  priority: now
  revisionId: rev-6d94c2f8
  created: 2026-05-07T19:04Z
  completed: 2026-05-07T19:04Z
  completed-session: codex-7588c8e2

  owner: john
  persona: none
  decision: decision-2a8f4d91
  rule: none
  process: none
  opp: none
  risk: none
  flags:
    - dovetell:global

  notes:
    User reported two Activity Feed rows titled "Task title" on the dashboard.

  completion-notes:
    Fixed dashboard task parsing so it starts after the ## Tasks section instead of reading the schema sample at the top of tasks.md. Added a date guard so placeholder values like YYYY-MM-DDTHH:MMZ cannot appear as feed activity, and made task metadata parsing tolerate spaces after colons.

---

*completed-tasks.md — Dogfood POC — v0.1*
*tasks move here when done — they do not stay in tasks.md.*
*never delete entries — this is the completion record.*
