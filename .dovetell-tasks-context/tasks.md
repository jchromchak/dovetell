# tasks.md
# Dogfood POC — Task Queue
# Active work only. Flat append log. Newest at bottom.
# Completed tasks move to completed-tasks.md — do not leave them here.

---

## Schema

- [ ] Task title
  id: task-[8char]
  priority: now|next|later
  status: open|in-progress|blocked
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

  context:
    Current state: assets/js/projects.js uses synchronous XMLHttpRequest so existing pages can continue calling Dovetell.allProjects() during initial script execution. This was an intentional first pass to avoid a broad refactor. Follow up with an async initialization model that loads repo JSON cleanly, preserves resilient fallback behavior, and updates dashboard/tasks/decisions/rules/risks/opportunities boot order without breaking static-file usage or token prompts.

  blocked-by:
    - none

- [ ] Add create-decision reconciliation from journal
  id: task-6e8d4b25
  priority: next
  status: open
  revisionId: rev-4b9d2f61
  created: 2026-05-07T15:44Z
  updated: 2026-05-07T15:44Z
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

  context:
    Current state: dashboard journal cards can create tasks through a preview sheet and record the created task ID in the journal entry actions field. Add a decision version that appends to the selected project's decisions.md, supports editable title/context/decision fields where useful, and records the created decision ID back on the journal entry. Preserve the manual preview-before-write behavior.

  blocked-by:
    - none

- [ ] Add Activity Feed filters by project and object type
  id: task-d7a3e014
  priority: later
  status: open
  revisionId: rev-4b9d2f61
  created: 2026-05-07T15:44Z
  updated: 2026-05-07T15:44Z
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

  context:
    Current state: the dashboard Activity Feed is read-only and derived from loaded changelog entries, journal notes, and dated tasks across configured projects. Add project and type controls that fit the dense dashboard surface without turning it into a separate page. Acceptance signals: user can filter feed items by project and by type such as changelog, journal, and task; empty filtered states are clear; mobile layout remains usable.

  blocked-by:
    - none

- [ ] Export active-project tracker feed
  id: task-4dd0b71e
  priority: later
  status: open
  revisionId: rev-4b9d2f61
  created: 2026-05-07T15:44Z
  updated: 2026-05-07T15:44Z
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

  context:
    Current state: the user has a separate tool tracking active projects in real time and wants a continuous feed. Dovetell now commits meaningful context checkpoints and has a dashboard Activity Feed derived from markdown. Define and implement an exportable feed artifact or endpoint that can be consumed outside the browser, likely from changelog, journal, tasks, decisions, and project controls. This is less a task-manager feed than a context-coordination feed: it should preserve active work signals while helping surface stable shared knowledge and cross-project shape. Avoid exposing PATs or user-private data beyond what is already committed to the relevant repo.

  blocked-by:
    - task-2c4a9f18

- [ ] Design multi-team context audit view
  id: task-c9e2fb64
  priority: next
  status: open
  revisionId: rev-e158a7c9
  created: 2026-05-07T18:53Z
  updated: 2026-05-07T18:53Z
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

  context:
    User wants to easily audit between projects and treat the system as a multi-team context view. The goal is to know what has been going on behind the scenes across projects, while ensuring shared truth is maintained, appended, and reconciled into the primary role or stable knowledge layer. The user plans to upload concepts; this task should absorb those concepts, define terms such as project truth, primary role, append-only knowledge, divergence, and audit signal, then turn the direction into UI/data requirements.

  blocked-by:
    - user concept uploads

- [ ] Audit and clean up Dovetell repo roles
  id: task-1f9c6b8a
  priority: next
  status: in-progress
  revisionId: rev-4f177bde
  created: 2026-05-09T03:22:00Z
  updated: 2026-05-09T14:44:49Z
  due: none

  owner: john
  persona: none
  decision: decision-5c8e2a74
  rule: none
  process: none
  opp: none
  risk: none
  flags:
    - dovetell:global

  notes:
    Inventory the active Dovetell repos, assign each a repo role, and plan cleanup/rename/privacy changes. Make dovetell-sandbox / future dovetell-gtm private because it represents business-context rather than public demo storage.

  context:
    Current target map: dovetell-io/dovetell = landing; dovetell-io/docs = docs; dovetell-io/dovetell-assets = canonical-assets; jchromchak/dovetell-assets-private = asset-refinery; jchromchak/dovetell-ctx-app or current app repo = app; jchromchak/dovetell-ctx-app-private / current dovetell-private = app-context; dovetell-sandbox / future dovetell-gtm = private business-context; famframe-private and dogfood-private = project/experiment context. Cleanup should happen through inventory, role assignment, migration notes, then rename/privacy changes. Avoid moving or exposing secrets and do not rename until target roles are clear.

  blocked-by:
    - Codex access verification for private dovetell-io/dovetell-gtm
    - execution of migration-2026-05-09T14:44:49Z after access is available

- [ ] Design context rank index and ctx:rank command
  id: task-8a7d2c19
  priority: later
  status: open
  revisionId: rev-2d6f4a90
  created: 2026-05-09T03:42:00Z
  updated: 2026-05-09T03:42:00Z
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

  context:
    The user proposed a rank or sort-order layer to make prioritization easier across many context files. The first version should probably be a simple markdown index of canonical IDs with rank number, rationale, and last-ranked timestamp. The command should rerank tasks, opportunities, risks, review items, and promotion candidates without duplicating full object content. Treat the rank file as rebuildable derived state, not the source of truth.

  blocked-by:
    - none

---

*tasks.md — Dogfood POC — v0.1*
*Active tasks only. This file should stay lean.*
*Completed tasks live in completed-tasks.md.*
