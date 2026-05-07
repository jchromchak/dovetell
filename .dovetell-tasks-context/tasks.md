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

- [ ] Add project journal capture and reconciliation flow
  id: task-e7c3a9d4
  priority: now
  status: in-progress
  revisionId: rev-4a9e2c73
  created: 2026-05-07T03:27Z
  updated: 2026-05-07T03:49Z
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
    Build a project journal feature backed by .dovetell-tasks-context/journal.md. On desktop, the journal should appear as a right-hand sidebar with a top composer for free-flow thoughts and truncated journal cards that can expand. Entries should support quick slash-style actions such as add task or add decision, with created object IDs captured in the journal entry actions field. Initial implementation may use a manual reconciliation step; future versions can move toward live LLM-assisted reconciliation.
    Progress: started the first dashboard implementation slice. Added journal as a configured project context path, added dashboard journal loading with missing-file tolerance, added the desktop journal right rail, project selector, composer, expandable entry cards, and an append-to-GitHub journal write path that can create journal.md when absent.

  context:
    User intent: capture ideas in the moment without forcing immediate classification. The journal is a thinking surface that can later reconcile into formal context objects while honoring existing project context, rules, and decisions.
    Initial journal schema: journal-id: journal-[random 8char hash]; create-date: UTC timestamp; edit-date: UTC timestamp; author: logged-in user; content: free-flow markdown/text; actions: IDs for any tasks, decisions, risks, rules, opportunities, or other objects created from the entry.
    UI direction: desktop right sidebar; top new-entry composer; below it truncated entry cards that expand inline. Mobile behavior still needs design, likely a sheet or dedicated journal route rather than a permanent side rail.
    Reconciliation direction: because there is no realtime LLM update yet, add a reconciliation pass that reviews journal entries, proposes or creates formal objects, and records created object IDs in actions. Reconciliation must preserve context and avoid inventing commitments without explicit user intent.
    Related global decision: decision-6b2f4a91 records this as a dovetell:global concept candidate. The dovetell:global flag definition itself still needs reconciliation before automation depends on it.

  blocked-by:
    - browser verification of desktop rail and journal append behavior
    - final decision on first mobile journal interaction pattern

---

*tasks.md — Dogfood POC — v0.1*
*Active tasks only. This file should stay lean.*
*Completed tasks live in completed-tasks.md.*
