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
  revisionId: rev-9963c27d
  created: 2026-05-06T15:18Z
  updated: 2026-05-06T16:55Z
  due: none

  owner: john
  persona: none
  decision: none
  rule: none
  process: none
  opp: none
  risk: none

  notes:
    Verify the dashboard using live GitHub-loaded markdown data on a local device with an existing PAT. Confirm task, risk, decision, opportunity, and changelog summaries render correctly after authentication. Refine empty, partial-load, and loaded states without changing markdown data formats or GitHub write semantics.
    Progress: improved dashboard handling for bad-token and partial-source states. Mocked GitHub loaded-state validation passed for hot tasks, active risks, recent decisions, changelog, context health, bad-token handling, and partial-load warnings without exposing or requesting a PAT.

  blocked-by:
    - live local browser validation with an existing GitHub PAT

---

*tasks.md — Dogfood POC — v0.1*
*Active tasks only. This file should stay lean.*
*Completed tasks live in completed-tasks.md.*
