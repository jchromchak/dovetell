# journal.md
# dovetell-tasks — Project Journal
# Free-flow capture. Reconcile into structured objects when ready.
# Flat append log. Newest at bottom.

---

## Schema

- journal-[8char]
  journal-id: journal-[8char]
  revisionId: rev-[8char]
  create-date: YYYY-MM-DDTHH:mm:ssZ
  edit-date: YYYY-MM-DDTHH:mm:ssZ
  author: [logged-in user]
  flags:
    - dovetell:global

  content:
    [Free-flow project thought, note, draft prompt, observation, or idea.]

  actions:
    - task-[8char]: [created|updated|linked]
    - decision-[8char]: [created|updated|linked]
    - risk-[8char]: [created|updated|linked]
    - rule-[8char]: [created|updated|linked]
    - opp-[8char]: [created|updated|linked]
    - none

---

## Journal

[Append journal entries below. Newest at bottom.]

---

*journal.md — dovetell-tasks — v0.1*
*Journal entries are capture records. Formal commitments live in tasks, decisions, rules, risks, opportunities, and changelog.*
