# changelog.md
# dovetell-tasks — Changelog
# One entry per atomic action. All objects touched in one operation share a revisionId.
# The revisionId is the join key back to any object. Flat append log. Newest at bottom.
# Never delete entries.

---

## Schema

- rev-[8char]
  date: YYYY-MM-DDTHH:MMZ
  user: [username]
  origin: direct|codex|prompt
  codex-session: codex-[hash]
  claude-session: [claude-session-hash]
  prompt: prompt-[claude-session-hash]-[prompt-hash]
  objects:
    - [object-id]: [action — created|updated|completed|retired|migrated]
  action: created|updated|completed|retired|migrated
  summary: [one line — what changed and why]

---

## Notes

- one rev-[8char] per atomic action — one motion, one rev
- all objects touched in the same operation share the same revisionId
- origin: direct — user typed it, omit codex-session and prompt
- origin: codex — codex generated it, omit prompt
- origin: prompt — shaped prompt drove it, include all three session fields
- objects field lists every ID touched in this revision
- objects carry only revisionId — all detail lives here

---

## Entries

[Append new entries below. Newest at bottom.]

- rev-8a8c830b
  date: 2026-05-06T01:05Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - seed.md: updated
    - launcher.md: updated
    - ref/queries.md: created
    - audits/output/README.md: created
    - context-framework: created
  action: created
  summary: Integrated the Dovetell context governance framework into dovetell-tasks.

- rev-62ecc615
  date: 2026-05-06T02:21Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - task-a27da8f3: completed
    - task-51a43e7c: created
    - tasks.md: updated
    - tasks-completed.md: updated
  action: updated
  summary: Recorded the shared CSS and GitHub/auth extraction work and added the next shared-helper refactor task.

- rev-5143d294
  date: 2026-05-06T13:36Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - task-51a43e7c: completed
    - task-ba584083: created
    - tasks.md: updated
    - tasks-completed.md: updated
  action: updated
  summary: Completed the shared shell and interaction helper extraction and added the brand guidance task.

- rev-acf5d65d
  date: 2026-05-06T13:47Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - brand.md: created
    - task-ba584083: completed
    - task-a8a8f3a2: created
    - tasks.md: updated
    - tasks-completed.md: updated
  action: updated
  summary: Created the Dovetell brand guidance file and queued the dashboard shell visual implementation task.

- rev-12b0e3b6
  date: 2026-05-06T14:31Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - assets/css/shared.css: updated
    - tasks/index.html: updated
    - decisions/index.html: updated
    - rules/index.html: updated
    - risks/index.html: updated
    - opportunities/index.html: updated
    - task-a8a8f3a2: completed
    - task-37e67370: created
    - tasks.md: updated
    - tasks-completed.md: updated
  action: updated
  summary: Applied the Dovetell brand shell layer across existing static pages and queued the dashboard overview route task.

- rev-b3ef3363
  date: 2026-05-06T15:18Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - dashboard/index.html: created
    - index.html: updated
    - manifest.json: updated
    - tasks/index.html: updated
    - decisions/index.html: updated
    - rules/index.html: updated
    - risks/index.html: updated
    - opportunities/index.html: updated
    - assets/css/shared.css: updated
    - task-37e67370: completed
    - task-9a1c2691: created
    - tasks.md: updated
    - tasks-completed.md: updated
  action: updated
  summary: Added the dashboard overview route, made it the app entry point, wired navigation, and queued live-data validation.

- rev-9963c27d
  date: 2026-05-06T16:55Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - dashboard/index.html: updated
    - assets/css/shared.css: updated
    - task-9a1c2691: updated
    - tasks.md: updated
  action: updated
  summary: Improved dashboard loaded-state, bad-token, and partial-load handling; blocked final live validation on a real local PAT check.

- rev-8890a80c
  date: 2026-05-06T17:56Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - task-1f3704d5: created
    - tasks.md: updated
  action: updated
  summary: Added the private context repo and per-project PAT/source configuration task ahead of multi-project dashboard work.

- rev-1b7a2e4c
  date: 2026-05-06T18:21Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - assets/js/projects.js: created
    - assets/js/shared.js: updated
    - dashboard/index.html: updated
    - assets/css/shared.css: updated
    - task-1f3704d5: completed
    - task-9a1c2691: updated
    - task-bd02e9a4: created
    - tasks.md: updated
    - tasks-completed.md: updated
  action: updated
  summary: Wired configured public/private project sources into the dashboard with per-project PAT prompts, visibility indicators, and ten-minute refresh behavior.

- rev-5c6d8e90
  date: 2026-05-06T19:00Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - assets/js/shared.js: updated
    - assets/js/projects.js: updated
    - assets/css/shared.css: updated
    - dashboard/index.html: updated
    - tasks/index.html: updated
    - decisions/index.html: updated
    - rules/index.html: updated
    - risks/index.html: updated
    - opportunities/index.html: updated
    - task-bd02e9a4: completed
    - task-9a1c2691: updated
    - task-c8e72b9d: created
    - tasks.md: updated
    - tasks-completed.md: updated
  action: updated
  summary: Added project-aware item-page loading, drill-in routing, source selection, and per-project write target handling.

- rev-dfb4037a
  date: 2026-05-06T19:18Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - assets/js/shared.js: updated
    - assets/js/projects.js: updated
    - dashboard/index.html: updated
    - task-c8e72b9d: completed
    - task-9a1c2691: updated
    - tasks.md: updated
    - tasks-completed.md: updated
  action: updated
  summary: Added browser-local project source settings so additional repos can be added or overridden without code edits.

- rev-a4f9c1d2
  date: 2026-05-06T20:04Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - assets/js/shared.js: updated
    - dashboard/index.html: updated
    - task-9a1c2691: updated
    - tasks.md: updated
    - changelog.md: updated
    - session-handoff.md: updated
  action: updated
  summary: Fixed the live dashboard loading-screen crash, added GitHub request timeouts, cache-busted dashboard shared scripts, and made project source failures visible.

- rev-b8d3a6e1
  date: 2026-05-06T23:56Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - jchromchak/dovetell-private:.dovetell-tasks-context/tasks.md: created
    - jchromchak/dovetell-private:.dovetell-tasks-context/decisions.md: created
    - jchromchak/dovetell-private:.dovetell-tasks-context/risks.md: created
    - jchromchak/dovetell-private:.dovetell-tasks-context/opportunities.md: created
    - jchromchak/dovetell-private:.dovetell-tasks-context/rules.md: created
    - jchromchak/dovetell-private:.dovetell-tasks-context/changelog.md: created
    - dovetell-io/dovetell-sandbox:changelog.md: created
    - task-9a1c2691: updated
    - tasks.md: updated
    - changelog.md: updated
    - session-handoff.md: updated
  action: updated
  summary: Seeded the private context repo and added the missing sandbox changelog file so configured project sources can load without file-path 404s.

- rev-c63d9a74
  date: 2026-05-07T00:26Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - dashboard/index.html: updated
    - task-9a1c2691: updated
    - tasks.md: updated
    - changelog.md: updated
    - session-handoff.md: updated
  action: updated
  summary: Replaced the dashboard context-health CSS border gauge with an SVG gauge to keep rail and fill alignment stable across responsive widths.

---

*changelog.md — dovetell-tasks — v0.1*
*this is the source of truth for who changed what, when, and why.*
*objects carry only revisionId — all detail lives here.*
