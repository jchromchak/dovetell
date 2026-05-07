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
  created: YYYY-MM-DDTHH:MMZ
  updated: YYYY-MM-DDTHH:MMZ
  due: YYYY-MM-DDTHH:MMZ

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

- [ ] Promote local project sources into repo JSON
  id: task-2c4a9f18
  priority: now
  status: open
  revisionId: rev-4b9d2f61
  created: 2026-05-07T15:44Z
  updated: 2026-05-07T15:44Z
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
    Add a promotion/export path so browser-local project source additions can become entries in assets/config/account-projects.json. This should reduce continuity gaps while keeping PATs local-only.

  context:
    Current state: account/project defaults now load from assets/config/account-projects.json, while assets/js/shared.js still merges localStorage custom projects and overrides. The user dislikes local-only project storage because it makes continuity weak. Build a flow that makes local project metadata easy to promote into the repo-backed JSON source, without committing token values or changing the PAT storage model. Acceptance signals: user can identify local-only sources, produce or apply safe JSON entries, and understand what remains local-only.

  blocked-by:
    - none

- [ ] Refactor project config boot to async loading
  id: task-9f1a62d0
  priority: next
  status: open
  revisionId: rev-4b9d2f61
  created: 2026-05-07T15:44Z
  updated: 2026-05-07T15:44Z
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
    - task-2c4a9f18

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
    Produce a repo-readable feed for the user's external active-project tracker, derived from context files rather than browser-local state.

  context:
    Current state: the user has a separate tool tracking active projects in real time and wants a continuous feed. Dovetell now commits meaningful context checkpoints and has a dashboard Activity Feed derived from markdown. Define and implement an exportable feed artifact or endpoint that can be consumed outside the browser, likely from changelog, journal, tasks, and project controls. Avoid exposing PATs or user-private data beyond what is already committed to the relevant repo.

  blocked-by:
    - task-2c4a9f18

---

*tasks.md — Dogfood POC — v0.1*
*Active tasks only. This file should stay lean.*
*Completed tasks live in completed-tasks.md.*
