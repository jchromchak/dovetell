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

  notes:
    [Free text. What needs to happen and why.]

  blocked-by:
    - task-[8char]
    - [external dependency description]

---

## Tasks

[Append new tasks below. Newest at bottom.]
[When a task is completed, move the full entry to completed-tasks.md.]

- [ ] Validate dashboard loaded state with GitHub data
  id: task-9a1c2691
  priority: next
  status: blocked
  revisionId: rev-a4f9c1d2
  created: 2026-05-06T15:18Z
  updated: 2026-05-06T20:04Z
  due: none

  owner: john
  persona: none
  decision: none
  rule: none
  process: none
  opp: none
  risk: none

  notes:
    Verify the dashboard and project-aware item pages using live GitHub-loaded markdown data on a local device with existing per-project PATs. Confirm public and private project sources render together, public/private indicators appear, settings-added local project sources persist, and task, risk, decision, rule, opportunity, and changelog summaries render correctly after authentication. Refine empty, partial-load, loaded, source-switching, and local project-settings states without changing markdown data formats or GitHub write semantics.
    Progress: improved dashboard handling for bad-token and partial-source states. Mocked validation passed for hot tasks, active risks, recent decisions, changelog, context health, bad-token handling, partial-load warnings, public project markers, private project markers, missing per-project token prompts, project-aware item-page routing, source selection, per-project token mapping, and local project source add/edit/delete storage without exposing or requesting a PAT.
    Progress: live browser validation exposed a dashboard loading-screen crash caused by dashboard/index.html calling global setStatus before shared.js exposed that compatibility wrapper. Patched shared.js to expose global setStatus/showToast, added request timeouts for GitHub reads/writes, cache-busted the dashboard shared script URLs, and made project source failures render visibly. Current live state renders dashboard data and shows source issues for missing configured files: dovetell sandbox changelog.md 404 and dovetell private .dovetell-tasks-context path 404s.

  blocked-by:
    - decide/fix configured markdown paths for missing project files before treating multi-project live validation as complete

---

*tasks.md — Dogfood POC — v0.1*
*Active tasks only. This file should stay lean.*
*Completed tasks live in completed-tasks.md.*
