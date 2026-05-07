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
  revisionId: rev-8fa60ffe
  created: 2026-05-07T03:27Z
  updated: 2026-05-07T13:36Z
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
    Progress: added the first manual reconciliation action. Expanded journal cards can now create a task from the entry content, append it to the selected project's tasks.md, and record the created task ID in the journal entry actions field. Syntax checks, whitespace checks, desktop token-prompt screenshot, mocked journal create, and mocked journal-to-task reconciliation passed.
    Progress: added the agreed mobile journal behavior and create-item preview flow. On mobile, the dashboard shows an Open journal action that launches a bottom sheet with project selector, composer, and journal cards. Create task now opens a confirmation sheet with editable title and priority before writing tasks.md and updating journal actions.

  context:
    User intent: capture ideas in the moment without forcing immediate classification. The journal is a thinking surface that can later reconcile into formal context objects while honoring existing project context, rules, and decisions.
    Initial journal schema: journal-id: journal-[random 8char hash]; create-date: UTC timestamp; edit-date: UTC timestamp; author: logged-in user; content: free-flow markdown/text; actions: IDs for any tasks, decisions, risks, rules, opportunities, or other objects created from the entry.
    UI direction: desktop right sidebar; top new-entry composer; below it truncated entry cards that expand inline. Mobile behavior uses a dashboard-launched bottom sheet rather than a permanent rail.
    Reconciliation direction: because there is no realtime LLM update yet, add a reconciliation pass that reviews journal entries, proposes or creates formal objects, and records created object IDs in actions. The first implemented action is task creation with a preview sheet and editable priority. Reconciliation must preserve context and avoid inventing commitments without explicit user intent.
    Related global decision: decision-6b2f4a91 records this as a dovetell:global concept candidate. The dovetell:global flag definition itself still needs reconciliation before automation depends on it.

  blocked-by:
    - real browser/PAT smoke test for journal note and create-task writes

---

*tasks.md — Dogfood POC — v0.1*
*Active tasks only. This file should stay lean.*
*Completed tasks live in completed-tasks.md.*
