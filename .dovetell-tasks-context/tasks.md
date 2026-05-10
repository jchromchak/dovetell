# tasks.md
# Dogfood POC — Task Queue
# Active work only. Flat append log. Newest at bottom.
# Completed tasks move to completed-tasks.md — do not leave them here.

---

## Schema

- [ ] Task title
  id: task-[8char]
  local-alias: task-workbench-[0000]
  slug: [short-readable-slug]
  priority: now|next|later
  status: open|in-progress|blocked|migrated
  source: codex-[hash] | prompt-[hash]
  created: YYYY-MM-DDTHH:mm:ssZ
  updated: YYYY-MM-DDTHH:mm:ssZ
  due: YYYY-MM-DDTHH:mm:ssZ

  owner: [who is responsible]
  persona: persona-[8char]
  decision: decision-[8char]
  rule: rule-[8char]
  process: process-[8char]
  opp: opp-[8char]
  risk: risk-[8char]
  flags:
    - dovetell:global

  notes:
    [Free text. What needs to happen and why.]

  context:
    [Detailed resumability context: user intent, constraints, relevant files,
    object IDs, acceptance signals, non-goals, and useful prompt background.]

  blocked-by:
    - task-[8char]
    - [external dependency description]

---

## Tasks

[Append new tasks below. Newest at bottom.]
[When a task is completed, move the full entry to completed-tasks.md.]

- [ ] Refactor project config boot to async loading
  id: task-9f1a62d0
  local-alias: task-workbench-0001
  slug: refactor-project-config-boot-to-async-loading
  priority: next
  status: open
  revisionId: rev-4b9d2f61
  created: 2026-05-07T15:44Z
  updated: 2026-05-07T18:40Z
  due: none

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
    Replace the synchronous account-projects.json loader with a cleaner async bootstrap across dashboard and item pages.
    Ownership remains in workbench. This is prototype/static implementation
    cleanup, not a product requirement migration candidate.

  context:
    Current state: assets/js/projects.js uses synchronous XMLHttpRequest so existing pages can continue calling Dovetell.allProjects() during initial script execution. This was an intentional first pass to avoid a broad refactor. Follow up with an async initialization model that loads repo JSON cleanly, preserves resilient fallback behavior, and updates dashboard/tasks/decisions/rules/risks/opportunities boot order without breaking static-file usage or token prompts.

  blocked-by:
    - none

- [x] Add create-decision reconciliation from journal
  id: task-6e8d4b25
  local-alias: task-workbench-0002
  aliases:
    - dovetell-ctx-app-private/task-6e8d4b25
    - task-app-pvt-0006
  slug: add-create-decision-reconciliation-from-journal
  priority: next
  status: migrated
  revisionId: rev-4b9d2f61
  created: 2026-05-07T15:44Z
  updated: 2026-05-10T03:02:16Z
  due: none

  owner: john
  persona: none
  decision: decision-6b2f4a91
  rule: none
  process: none
  opp: none
  risk: none
  flags:
    - dovetell:global

  notes:
    Mirror the working create-task journal reconciliation flow with a create-decision path.
    Ownership migrated to `dovetell-ctx-app-private/task-6e8d4b25` on
    2026-05-10T03:02:16Z. Keep this entry as prototype provenance, not active
    workbench ownership.

  context:
    Current state: dashboard journal cards can create tasks through a preview sheet and record the created task ID in the journal entry actions field. Add a decision version that appends to the selected project's decisions.md, supports editable title/context/decision fields where useful, and records the created decision ID back on the journal entry. Preserve the manual preview-before-write behavior.

  blocked-by:
    - none

- [x] Add Activity Feed filters by project and object type
  id: task-d7a3e014
  local-alias: task-workbench-0003
  aliases:
    - dovetell-ctx-app-private/task-d7a3e014
    - task-app-pvt-0004
  slug: add-activity-feed-filters-by-project-and-object-type
  priority: later
  status: migrated
  revisionId: rev-4b9d2f61
  created: 2026-05-07T15:44Z
  updated: 2026-05-10T02:46:35Z
  due: none

  owner: john
  persona: none
  decision: decision-90e1768a
  rule: none
  process: none
  opp: none
  risk: none
  flags:
    - dovetell:global

  notes:
    Add compact filters to the dashboard Activity Feed so recent movement can be narrowed by source project and object type.
    Ownership migrated to `dovetell-ctx-app-private/task-d7a3e014` on
    2026-05-10T02:46:35Z. Keep this entry as prototype provenance, not active
    workbench ownership.

  context:
    Current state: the dashboard Activity Feed is read-only and derived from loaded changelog entries, journal notes, and dated tasks across configured projects. Add project and type controls that fit the dense dashboard surface without turning it into a separate page. Acceptance signals: user can filter feed items by project and by type such as changelog, journal, and task; empty filtered states are clear; mobile layout remains usable.

  blocked-by:
    - none

- [x] Export active-project tracker feed
  id: task-4dd0b71e
  local-alias: task-workbench-0004
  aliases:
    - dovetell-ctx-app-private/task-4dd0b71e
    - task-app-pvt-0005
  slug: export-active-project-tracker-feed
  priority: later
  status: migrated
  revisionId: rev-4b9d2f61
  created: 2026-05-07T15:44Z
  updated: 2026-05-10T02:51:19Z
  due: none

  owner: john
  persona: none
  decision: decision-90e1768a
  rule: none
  process: none
  opp: none
  risk: none
  flags:
    - dovetell:global

  notes:
    Produce a repo-readable feed for the user's external active-project tracker, derived from context files rather than browser-local state. The feed should answer what has been going on behind the scenes across projects.
    Ownership migrated to `dovetell-ctx-app-private/task-4dd0b71e` on
    2026-05-10T02:51:19Z. Keep this entry as prototype provenance, not active
    workbench ownership.

  context:
    Current state: the user has a separate tool tracking active projects in real time and wants a continuous feed. Dovetell now commits meaningful context checkpoints and has a dashboard Activity Feed derived from markdown. Define and implement an exportable feed artifact or endpoint that can be consumed outside the browser, likely from changelog, journal, tasks, decisions, and project controls. This is less a task-manager feed than a context-coordination feed: it should preserve active work signals while helping surface stable shared knowledge and cross-project shape. Avoid exposing PATs or user-private data beyond what is already committed to the relevant repo.

  blocked-by:
    - none

- [x] Design multi-team context audit view
  id: task-c9e2fb64
  local-alias: task-workbench-0005
  aliases:
    - dovetell-ctx-app-private/task-c9e2fb64
    - task-app-pvt-0003
  slug: design-multi-team-context-audit-view
  priority: next
  status: migrated
  revisionId: rev-e158a7c9
  created: 2026-05-07T18:53Z
  updated: 2026-05-10T02:41:57Z
  due: none

  owner: john
  persona: none
  decision: decision-7c91d4a2
  rule: none
  process: none
  opp: none
  risk: none
  flags:
    - dovetell:global

  notes:
    Design a multi-team audit view for comparing context across projects and checking whether truth is being maintained or appended to the primary role.
    Ownership migrated to `dovetell-ctx-app-private/task-c9e2fb64` on
    2026-05-10T02:41:57Z. Keep this entry as concept provenance, not active
    workbench ownership.

  context:
    User wants to easily audit between projects and treat the system as a multi-team context view. The goal is to know what has been going on behind the scenes across projects, while ensuring shared truth is maintained, appended, and reconciled into the primary role or stable knowledge layer. The user plans to upload concepts; this task should absorb those concepts, define terms such as project truth, primary role, append-only knowledge, divergence, and audit signal, then turn the direction into UI/data requirements.

  blocked-by:
    - user concept uploads

- [x] Shape clean React app shell
  id: task-08030ad5
  local-alias: task-workbench-0006
  aliases:
    - dovetell-ctx-app-private/task-08030ad5
    - task-app-pvt-0002
  slug: shape-clean-react-app-shell
  priority: next
  status: migrated
  revisionId: rev-6d2f914e
  created: 2026-05-09T15:19:50Z
  updated: 2026-05-10T01:41:39Z
  due: none

  owner: john
  persona: none
  decision: decision-9d2e6a41
  rule: rule-6b1f2c9d
  process: none
  opp: none
  risk: none
  flags:
    - dovetell:global

  notes:
    Define the first clean React product shell for Dovetell before creating or initializing jchromchak/dovetell-ctx-app.
    Ownership migrated to `dovetell-ctx-app-private/task-08030ad5` on
    2026-05-10T01:41:39Z. Keep this entry as prototype provenance, not active
    workbench ownership.

  context:
    User decided not to turn dovetell-tasks into the product app repo. Treat dovetell-tasks / local dovetell-context-workbench as prototype, workbench, and history. Shape what the clean React app should be born with: source connection model, context source portfolio, review queue entry point, activity/awareness surface, route structure, state boundaries, what to reuse from the static prototype, and what to leave behind. Keep rule-6b1f2c9d active: the shell should support context governance and awareness, not become a work hub.

    Initial shell shape is captured in .dovetell-tasks-context/react-app-shell.md. Next pass should either turn it into a repo scaffold plan or create the clean React app repo after confirming the target repo name and package stack.

  blocked-by:
    - none

- [x] Design context rank index and ctx:rank command
  id: task-8a7d2c19
  local-alias: task-workbench-0007
  aliases:
    - dovetell-assets/task-8a7d2c19
    - task-assets-0005
  slug: design-context-rank-index-and-ctx-rank-command
  priority: later
  status: migrated
  revisionId: rev-2d6f4a90
  created: 2026-05-09T03:42:00Z
  updated: 2026-05-10T02:05:00Z
  due: none

  owner: john
  persona: none
  decision: none
  rule: none
  process: none
  opp: opp-4c2e9a71
  risk: none
  flags:
    - dovetell:global

  notes:
    Define a derived rank file and ctx:rank workflow that orders active context action points by priority, dependency, urgency, risk, and strategic value.
    Ownership migrated to `dovetell-assets/task-8a7d2c19` on
    2026-05-10T02:05:00Z. Keep this entry as prototype provenance, not active
    workbench ownership.

  context:
    The user proposed a rank or sort-order layer to make prioritization easier across many context files. The first version should probably be a simple markdown index of canonical IDs with rank number, rationale, and last-ranked timestamp. The command should rerank tasks, opportunities, risks, review items, and promotion candidates without duplicating full object content. Treat the rank file as rebuildable derived state, not the source of truth.

  blocked-by:
    - none

---

*tasks.md — Dogfood POC — v0.1*
*Active tasks only. This file should stay lean.*
*Completed tasks live in completed-tasks.md.*
