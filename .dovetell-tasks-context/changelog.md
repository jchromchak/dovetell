# changelog.md
# dovetell-tasks — Changelog
# One entry per atomic action. All objects touched in one operation share a revisionId.
# The revisionId is the join key back to any object. Flat append log. Newest at bottom.
# Never delete entries.

---

## Schema

- rev-[8char]
  date: YYYY-MM-DDTHH:mm:ssZ
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

- rev-1d4e8c2a
  date: 2026-05-07T01:59Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - .dovetell-tasks-context/style-guide.md: created
    - task-4d9c0a7e: created
    - assets/js/shared.js: updated
    - assets/css/shared.css: updated
    - dashboard/index.html: updated
    - tasks.md: updated
    - changelog.md: updated
  action: updated
  summary: Started the project-navigation and dashboard-density pass, including sidebar project links, add-project access, compact row treatment, and a traceable UI style guide.

- rev-7f2a8d3c
  date: 2026-05-07T02:47Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - dashboard/index.html: updated
    - assets/css/shared.css: updated
    - task-4d9c0a7e: completed
    - task-8e2f6b91: created
    - task-f3a92c10: completed
    - tasks.md: updated
    - tasks-completed.md: updated
    - changelog.md: updated
  action: updated
  summary: Marked the project-navigation/density pass complete, compacted project chips to visibility icon plus initials, queued the project source flow revisit, and completed the mobile bottom-nav width fix.

- rev-9c4e1f70
  date: 2026-05-07T03:03Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - dashboard/index.html: updated
    - task-8e2f6b91: updated
    - tasks.md: updated
    - changelog.md: updated
  action: updated
  summary: Started the project source management flow redesign with clearer add-project copy, generated local IDs, per-project token capture, context-path validation, and GitHub access verification.

- rev-3f77a1d2
  date: 2026-05-07T03:13Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - dashboard/index.html: updated
    - task-8e2f6b91: completed
    - tasks.md: updated
    - tasks-completed.md: updated
    - changelog.md: updated
    - session-handoff.md: updated
  action: updated
  summary: Completed the project source flow revisit by validating the redesigned sheet layout, keeping failed GitHub verification visible in-sheet, and recording the task completion.

- rev-a2d4c8f1
  date: 2026-05-07T03:27Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - launcher.md: updated
    - seed.md: updated
    - journal.md: created
    - tasks.md: updated
    - decisions.md: updated
    - decision-6b2f4a91: created
    - task-e7c3a9d4: created
    - changelog.md: updated
    - session-handoff.md: updated
  action: created
  summary: Added project journal as a planned context type, introduced task context blocks for resumability, and recorded the dovetell:global decision for future reconciliation.

- rev-4a9e2c73
  date: 2026-05-07T03:49Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - task-9a1c2691: completed
    - task-e7c3a9d4: updated
    - assets/js/shared.js: updated
    - assets/js/projects.js: updated
    - dashboard/index.html: updated
    - tasks.md: updated
    - tasks-completed.md: updated
    - changelog.md: updated
    - session-handoff.md: updated
  action: updated
  summary: Recorded successful live project-source validation and started the dashboard project journal implementation with load, display, composer, and append support.

- rev-18087956
  date: 2026-05-07T13:08Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - task-e7c3a9d4: updated
    - dashboard/index.html: updated
    - tasks.md: updated
    - changelog.md: updated
  action: updated
  summary: Added the first manual journal reconciliation action so a journal entry can create a task and record the created task ID back on the entry.

- rev-8fa60ffe
  date: 2026-05-07T13:36Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - task-e7c3a9d4: updated
    - dashboard/index.html: updated
    - tasks.md: updated
    - changelog.md: updated
    - session-handoff.md: updated
  action: updated
  summary: Added mobile journal capture as a bottom sheet and changed journal task creation to a preview flow with editable title and priority.

- rev-ba0b1ebd
  date: 2026-05-07T13:50Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - decision-90e1768a: created
    - dashboard/index.html: updated
    - decisions.md: updated
    - changelog.md: updated
    - session-handoff.md: updated
  action: updated
  summary: Recorded the dovetell:global convention to commit context updates at meaningful checkpoints and added the latest-change project badge plus context health formula hint.

- rev-41486859
  date: 2026-05-07T14:00Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - dashboard/index.html: updated
    - changelog.md: updated
    - session-handoff.md: updated
  action: updated
  summary: Changed dashboard auto-refresh to five minutes and replaced the header status copy with connected, updating, and disconnected states that show the last local update time.

- rev-6056726b
  date: 2026-05-07T14:11Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - task-e7c3a9d4: completed
    - tasks.md: updated
    - tasks-completed.md: updated
    - changelog.md: updated
    - session-handoff.md: updated
  action: completed
  summary: Closed the project journal capture and reconciliation task after live PAT-backed validation wrote a journal note, refreshed it, created a task, and showed it in the task list.

- rev-aace2a68
  date: 2026-05-07T14:26Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - task-a6541f36: completed
    - dashboard/index.html: updated
    - tasks-completed.md: updated
    - changelog.md: updated
    - session-handoff.md: updated
  action: completed
  summary: Replaced the dashboard changelog panel with a derived recent activity feed that combines changelog entries, journal notes, and dated tasks across projects.

- rev-0862d875
  date: 2026-05-07T15:36Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - decision-55bcfc5c: created
    - task-55bcfc5c: completed
    - assets/config/account-projects.json: created
    - assets/js/projects.js: updated
    - dashboard/index.html: updated
    - decisions.md: updated
    - tasks.md: updated
    - tasks-completed.md: updated
    - changelog.md: updated
    - session-handoff.md: updated
  action: completed
  summary: Added repo-backed account/project controls JSON, kept PATs local-only, and preserved the current project-loading API with an embedded fallback.

- rev-4b9d2f61
  date: 2026-05-07T15:44Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - task-2c4a9f18: created
    - task-9f1a62d0: created
    - task-6e8d4b25: created
    - task-d7a3e014: created
    - task-4dd0b71e: created
    - tasks.md: updated
    - changelog.md: updated
    - session-handoff.md: updated
  action: created
  summary: Re-populated the active backlog with project JSON promotion, async config boot, journal-to-decision reconciliation, activity feed filtering, and active-project feed export tasks.

- rev-4d52e8c1
  date: 2026-05-07T16:13Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - task-2c4a9f18: completed
    - assets/js/projects.js: updated
    - assets/js/shared.js: updated
    - dashboard/index.html: updated
    - tasks.md: updated
    - tasks-completed.md: updated
    - changelog.md: updated
    - session-handoff.md: updated
  action: completed
  summary: Added a token-free repo JSON promotion path for browser-local project sources and hardened account-projects.json normalization.

- rev-9c4f20ab
  date: 2026-05-07T18:40Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - decision-2a8f4d91: created
    - task-bf4d0a73: created
    - task-9f1a62d0: updated
    - task-4dd0b71e: updated
    - decisions.md: updated
    - tasks.md: updated
    - changelog.md: updated
    - session-handoff.md: updated
  action: updated
  summary: Recorded the dovetell:global direction that Dovetell is a context management awareness system, not primarily a task manager, and queued context folder standardization.

- rev-e158a7c9
  date: 2026-05-07T18:53Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - decision-7c91d4a2: created
    - task-bf4d0a73: updated
    - task-c9e2fb64: created
    - decisions.md: updated
    - tasks.md: updated
    - changelog.md: updated
    - session-handoff.md: updated
  action: updated
  summary: Captured the agnostic .project-context direction and queued multi-team context audit design for cross-project truth maintenance.

- rev-6d94c2f8
  date: 2026-05-07T19:04Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - task-e3f8c2b0: completed
    - dashboard/index.html: updated
    - tasks-completed.md: updated
    - changelog.md: updated
    - session-handoff.md: updated
  action: completed
  summary: Fixed Activity Feed task parsing so schema examples and placeholder dates no longer render as task activity.

- rev-b1a9c073
  date: 2026-05-08T01:11Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - task-8bf12e44: completed
    - assets/config/account-projects.fixture.json: created
    - assets/js/projects.js: updated
    - dashboard/index.html: updated
    - tasks-completed.md: updated
    - changelog.md: updated
    - session-handoff.md: updated
  action: completed
  summary: Removed embedded project profiles from JavaScript, added an explicit config fixture for tests, and changed new project defaults to .project-context paths.

- rev-4bb28c91
  date: 2026-05-08T04:46Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - task-bf4d0a73: completed
    - assets/config/account-projects.json: updated
    - jchromchak/dovetell-private:.project-context: updated
    - tasks.md: updated
    - tasks-completed.md: updated
    - changelog.md: updated
    - session-handoff.md: updated
  action: completed
  summary: Migrated the private context repo to the agnostic .project-context directory and updated dashboard project paths to match.

- rev-72f4a6d3
  date: 2026-05-08T14:31Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - task-3c1d9f2a: completed
    - assets/config/account-projects.json: updated
    - assets/config/account-projects.fixture.json: updated
    - assets/js/projects.js: updated
    - assets/js/shared.js: updated
    - dashboard/index.html: updated
    - tasks-completed.md: updated
    - changelog.md: updated
    - session-handoff.md: updated
  action: completed
  summary: Cleaned up project PAT storage by deriving localStorage keys from project IDs and keeping legacy token keys as migration fallback only.

- rev-c9d8a1f4
  date: 2026-05-08T17:06Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - decision-4f7b9c2e: created
    - decisions.md: updated
  action: created
  summary: Reframed connected projects as connected context sources and identified repoType as the next model abstraction.

- rev-3b4e8f91
  date: 2026-05-08T17:20Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - assets/config/account-projects.json: updated
    - assets/config/account-projects.fixture.json: updated
    - assets/js/projects.js: updated
    - assets/js/shared.js: updated
    - dashboard/index.html: updated
    - decision-4f7b9c2e: implemented
  action: updated
  summary: Added repoType to context source configuration and renamed the dashboard source-management UI toward connected context sources.

- rev-7a2c6d40
  date: 2026-05-08T17:25Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - changelog.md: updated
    - decisions.md: updated
    - journal.md: updated
    - mapping-discrepancies.md: updated
    - opportunities.md: updated
    - personas.md: updated
    - processes.md: updated
    - product-profile.md: updated
    - risks.md: updated
    - rules.md: updated
    - tasks-completed.md: updated
    - tasks.md: updated
  action: updated
  summary: Standardized context template timestamp placeholders to YYYY-MM-DDTHH:mm:ssZ so minutes are not confused with month fields or normalized to midnight.

- rev-2c7f9a11
  date: 2026-05-08T18:27Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - assets/config/account-projects.json: updated
    - assets/config/account-projects.fixture.json: updated
    - assets/js/projects.js: updated
    - assets/js/shared.js: updated
    - dashboard/index.html: updated
  action: updated
  summary: Added source-profile defaults so asset-refinery repos use asset files instead of task-dashboard files, and kept the dashboard aggregation focused on dashboard-ready context sources.

- rev-8d1b7a3e
  date: 2026-05-08T19:46Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - refinery/index.html: created
    - assets/css/shared.css: updated
    - assets/js/shared.js: updated
    - dashboard/index.html: updated
  action: created
  summary: Added an initial asset refinery view for asset-refinery sources, including file presence status, source metadata, and a first-pass promotion candidate reader.

- rev-4a91d6e2
  date: 2026-05-09T00:11:00Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - decision-9d2e6a41: created
    - rule-6b1f2c9d: created
    - decisions.md: updated
    - rules.md: updated
    - product-profile.md: updated
  action: created
  summary: Documented the core product guardrail that Dovetell should remain a shared context awareness and governance layer rather than becoming a task manager, project operating system, or one-stop work hub.

- rev-b73e9d14
  date: 2026-05-09T00:29:04Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - visual-concepts.md: created
    - concept-1a7c3d9e: created
    - concept-4e8b2f10: created
    - concept-7f2d91a6: created
    - concept-3c0a5b72: created
    - concept-9e4f6d28: created
    - concept-5b8a13c4: created
  action: created
  summary: Captured rendered product concept images as durable context covering onboarding, console/portfolio views, repo-owned context architecture, service blueprint, competitive positioning, and non-technical review queue.

- rev-d8f3a0b6
  date: 2026-05-09T02:02:30Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - demo-references.md: created
    - demo-feed-a4c9e213: created
    - demo-projects-6d0b31a8: created
    - demo-review-2f5e8c77: created
  action: created
  summary: Captured Claude-created app demo files as implementation-adjacent references for activity feed, multi-project portfolio, and non-technical review queue concepts.

- rev-6e19c4a2
  date: 2026-05-09T02:21:00Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - operating-model.md: created
  action: created
  summary: Added a first operating model that connects product guardrails, context ownership, lifecycle stages, trust states, review flow, activity feed semantics, health signals, asset refinery, and artifact provenance.

- rev-0c8b2f79
  date: 2026-05-09T02:32:00Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - object-model.md: created
  action: created
  summary: Added a draft context governance object model for sources, context items, review items, activity events, artifacts, provenance, promotion candidates, sync state, and relationship edges.

- rev-3f74a9e1
  date: 2026-05-09T02:54:00Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - visual-concepts.md: updated
    - operating-model.md: updated
    - concept-8d42f6a1: created
    - concept-2f9b70c4: created
    - concept-6c81d3b7: created
    - concept-1e5a9b2d: created
    - concept-4b7c0e91: created
    - concept-0a63d8ef: created
  action: updated
  summary: Added prompt assembly, import/extraction, agent-harness positioning, integration, and living-context concept evidence; updated the operating model with a governed prompt assembly layer.

- rev-5a2c8d31
  date: 2026-05-09T03:08:00Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - opp-7d3a1f5b: created
    - opportunities.md: updated
    - operating-model.md: updated
  action: created
  summary: Captured the docs-as-code markdown viewer opportunity and added docs/presentation as an operating-model layer for rendering governed context into human-readable, source-traced documentation.

- rev-8b4d1f62
  date: 2026-05-09T03:22:00Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - decision-5c8e2a74: created
    - task-1f9c6b8a: created
    - decisions.md: updated
    - tasks.md: updated
  action: created
  summary: Documented the repo-role cleanup direction and the decision to treat dovetell-sandbox / future dovetell-gtm as a private business-context repo rather than a public storage point.

- rev-2d6f4a90
  date: 2026-05-09T03:42:00Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - dashboard/index.html: updated
    - opp-4c2e9a71: created
    - task-8a7d2c19: created
    - opportunities.md: updated
    - tasks.md: updated
  action: updated
  summary: Moved the mobile dashboard Activity Feed ahead of Hot Items and captured the context rank index / ctx:rank command idea as a future prioritization workflow.

- rev-1e7a6c4d
  date: 2026-05-09T04:05:00Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - _retrospective.md: created
    - context-transmissibility.md: created
    - repo-manifest.md: created
    - rank.md: created
    - commands.md: created
    - operating-model.md: updated
  action: created
  summary: Added pointer-first continuity artifacts for cross-tool context transmissibility, including a retrospective, repo manifest, rank index, command registry, and operating-model section for portable memory.

- rev-9b3a0d6e
  date: 2026-05-09T04:18:00Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - commands.md: updated
    - context-transmissibility.md: updated
  action: updated
  summary: Added ctx:command, ctx:start, and ctx:close to the command registry and tied start/close to the session continuity read-write pattern.

- rev-6a91f2c8
  date: 2026-05-09T04:26:00Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - launcher.md: updated
  action: updated
  summary: Reframed launcher.md as the root bootstrap and aligned session startup with the pointer-first ctx:start flow and ctx:close closeout pattern.

- rev-4f91c8b2
  date: 2026-05-09T04:42:00Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - operating-model.md: updated
    - object-model.md: updated
  action: updated
  summary: Clarified image artifact provenance rules so image-generation prompts must include a pre-generated image ID in the watermark, filename, and artifact record.

- rev-8c2f1a9d
  date: 2026-05-09T10:42:00Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - artifact-index.md: created
    - visual-concepts.md: updated
    - concept-d4a8c7f2: created
    - concept-3f7a9d1e: created
    - concept-7f3b8c29: created
  action: created
  summary: Captured generated promotion, repo operating model, and context change request images as provenance-bearing artifacts and noted a duplicate image-id collision for one alternate promotion render.

- rev-6d73e4a1
  date: 2026-05-09T10:49:00Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - artifact-9b4f2e7c: created
    - artifact-index.md: updated
    - visual-concepts.md: updated
  action: created
  summary: Captured the corrected promotion-pipeline image render with unique provenance ID dovetell:image-9b4f2e7c.

- rev-2f8c0d41
  date: 2026-05-09T11:12:00Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - artifact-9b4f2e7c: updated
    - artifact-index.md: updated
    - Google Drive dovetell-assets README.md: created
  action: updated
  summary: Created the Google Drive dovetell-assets README and copied the corrected promotion-pipeline image into visual-artifacts/promotion-pipeline with its provenance filename.

- rev-5e7b91c4
  date: 2026-05-09T11:24:00Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - commands.md: updated
    - artifact-index.md: updated
  action: updated
  summary: Added ctx:ingest-artifacts and documented the dovetell-processing enqueued/done/errored filesystem queue for artifact ingestion.

- rev-3b8f1d0a
  date: 2026-05-09T11:52:00Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - session-handoff.md: updated
  action: updated
  summary: Ran a ctx:close-style handoff checkpoint capturing artifact provenance work, ctx:ingest-artifacts, Google Drive outputs, validation, and next-session restart pointers.

- rev-cd98dbc4
  date: 2026-05-09T12:18:01Z
  user: john
  origin: codex
  codex-session: codex-53476bae
  objects:
    - local dovetell-context-workbench: moved
    - repo-manifest.md: updated
    - session-handoff.md: updated
  action: updated
  summary: Moved the local workspace out of the Codex session folder into Documents/projects/dovetell-context-workbench as step 0 housing cleanup before repo role cleanup.

- rev-ab0b5656
  date: 2026-05-09T12:39:45Z
  user: john
  origin: codex
  codex-session: codex-53476bae
  objects:
    - local dovetell-context-workbench: moved
    - repo-manifest.md: updated
    - session-handoff.md: updated
  action: updated
  summary: Moved the local workspace from iCloud-managed Documents/projects into /Users/johnchromchak/projects/dovetell-context-workbench and resumed the step 0 housing cleanup checkpoint there.

- rev-14606fe1
  date: 2026-05-09T13:05:29Z
  user: john
  origin: codex
  codex-session: codex-53476bae
  objects:
    - task-1f9c6b8a: updated
    - repo-manifest.md: updated
    - session-handoff.md: updated
  action: updated
  summary: Started the repo role cleanup with a read-only remote reachability inventory and marked task-1f9c6b8a in progress.

- rev-8a171e7a
  date: 2026-05-09T13:26:00Z
  user: john
  origin: codex
  codex-session: codex-53476bae
  objects:
    - task-1f9c6b8a: updated
    - repo-manifest.md: updated
    - session-handoff.md: updated
  action: updated
  summary: Recorded the approved repo cleanup direction and the execution boundary that repo administration changes require unavailable GitHub visibility/create/rename/archive tooling.

- rev-42c7d91f
  date: 2026-05-09T13:40:00Z
  user: john
  origin: codex
  codex-session: codex-53476bae
  objects:
    - repo-manifest.md: updated
    - artifact-index.md: updated
    - commands.md: updated
  action: updated
  summary: Added route-based artifact intake paths so ctx:ingest-artifacts can use /Users/johnchromchak/Downloads/{route}/dovetell-processing for dovetell, famframe, and legacy queues.

- rev-ef092435
  date: 2026-05-09T14:24:21Z
  user: john
  origin: codex
  codex-session: codex-53476bae
  objects:
    - task-1f9c6b8a: updated
    - repo-manifest.md: updated
    - session-handoff.md: updated
  action: updated
  summary: Recorded the user-reported GitHub admin execution: sandbox made private and dovetell-gtm created, with Codex access verification still pending for the new private GTM repo.

- rev-4f177bde
  date: 2026-05-09T14:44:49Z
  user: john
  origin: codex
  codex-session: codex-53476bae
  objects:
    - task-1f9c6b8a: updated
    - repo-manifest.md: updated
    - assets/config/account-projects.json: updated
    - assets/config/account-projects.fixture.json: updated
    - session-handoff.md: updated
  action: updated
  summary: Added the sandbox-to-gtm migration plan from filename-only structure inspection and updated project source config for private sandbox, private gtm, and asset-refinery roles.

- rev-d58648cb
  date: 2026-05-09T14:52:27Z
  user: john
  origin: codex
  codex-session: codex-53476bae
  objects:
    - dovetell-io/dovetell-gtm: initialized
    - task-1f9c6b8a: updated
    - repo-manifest.md: updated
    - session-handoff.md: updated
  action: updated
  summary: Verified SSH access to private dovetell-gtm and pushed initial private GTM context scaffold at e68c675.

- rev-80db0d78
  date: 2026-05-09T14:56:25Z
  user: john
  origin: codex
  codex-session: codex-53476bae
  objects:
    - dovetell-io/dovetell-gtm: updated
    - dovetell-io/dovetell-sandbox: updated
    - task-1f9c6b8a: updated
    - repo-manifest.md: updated
    - session-handoff.md: updated
  action: updated
  summary: Completed private-to-private sandbox-to-gtm context migration, pushed GTM migration commit 6c32e01, and marked sandbox with private migration note commit 53fd481.

- rev-c5fd4961
  date: 2026-05-09T15:05:35Z
  user: john
  origin: codex
  codex-session: codex-53476bae
  objects:
    - dovetell-io/dovetell-sandbox: archived
    - task-1f9c6b8a: updated
    - repo-manifest.md: updated
    - session-handoff.md: updated
  action: updated
  summary: Recorded user-reported archive of private dovetell-sandbox after GTM migration; dovetell-gtm is now the sole active business-context source.

- rev-07b7f34e
  date: 2026-05-09T15:14:52Z
  user: john
  origin: codex
  codex-session: codex-53476bae
  objects:
    - jchromchak/dovetell-ctx-app-private: renamed
    - jchromchak/dovetell-private: superseded
    - assets/config/account-projects.json: updated
    - assets/config/account-projects.fixture.json: updated
    - task-1f9c6b8a: updated
    - repo-manifest.md: updated
    - session-handoff.md: updated
  action: updated
  summary: Recorded app-context repo rename from dovetell-private to dovetell-ctx-app-private and updated project source config to the new canonical repo name.

- rev-8c28de00
  date: 2026-05-09T15:19:50Z
  user: john
  origin: codex
  codex-session: codex-53476bae
  objects:
    - task-1f9c6b8a: completed
    - task-08030ad5: created
    - repo-manifest.md: updated
    - tasks.md: updated
    - tasks-completed.md: updated
    - rank.md: updated
    - session-handoff.md: updated
  action: updated
  summary: Closed repo role cleanup, deferred clean dovetell-ctx-app creation, and promoted shape clean React app shell into canonical task-08030ad5.

- rev-50f791be
  date: 2026-05-09T15:27:01Z
  user: john
  origin: codex
  codex-session: codex-53476bae
  objects:
    - cleanup-playbook.md: created
    - opp-5580c40a: created
    - task-26be1c6d: created
    - opportunities.md: updated
    - tasks.md: updated
    - rank.md: updated
    - session-handoff.md: updated
  action: created
  summary: Started a working cleanup and partitioning master doc and queued asset-refinery refinement so reusable cleanup learnings can become package candidates.

---

*changelog.md — dovetell-tasks — v0.1*
*this is the source of truth for who changed what, when, and why.*
*objects carry only revisionId — all detail lives here.*
