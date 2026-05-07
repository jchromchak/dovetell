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

- [ ] Revisit project source management flow
  id: task-8e2f6b91
  priority: next
  status: open
  revisionId: rev-7f2a8d3c
  created: 2026-05-07T02:47Z
  updated: 2026-05-07T02:47Z
  due: none

  owner: john
  persona: none
  decision: none
  rule: none
  process: none
  opp: none
  risk: none

  notes:
    Redesign and debug the project source sheet. The current sheet is useful as a local settings editor but feels deceiving for first-time project addition, and a manual add-project test did not work as expected. Revisit copy, required fields, validation, default paths, token setup, post-save confirmation, and whether add-project should immediately verify repo/file access.

  blocked-by:
    - none

- [ ] Validate dashboard loaded state with GitHub data
  id: task-9a1c2691
  priority: next
  status: blocked
  revisionId: rev-c63d9a74
  created: 2026-05-06T15:18Z
  updated: 2026-05-07T00:26Z
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
    Progress: created the configured private context folder shape in jchromchak/dovetell-private and pushed commit 98ff4ff. Added missing dovetell-io/dovetell-sandbox changelog.md and pushed commit e277d61. The previous source-file 404 causes should now be cleared; final status still needs a browser reload with the existing per-project PATs.
    Progress: replaced the dashboard context-health CSS border gauge with an SVG semicircle so the fill and rail share one path and stay aligned across desktop, iPad, and mobile widths.

  blocked-by:
    - final live browser reload with existing public and private repo PATs

---

*tasks.md — Dogfood POC — v0.1*
*Active tasks only. This file should stay lean.*
*Completed tasks live in completed-tasks.md.*
