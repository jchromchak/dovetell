# decisions.md
# Dogfood POC — Decision Log
# Commitments made. Flat append log. Newest at bottom.
# Never delete. Superseded decisions stay with a reference to the replacement.

---

## Schema

- decision-[8char]
  title:
  status: active|resolved|superseded
  source: codex-[hash] | prompt-[hash]
  created: YYYY-MM-DDTHH:MMZ
  updated: YYYY-MM-DDTHH:MMZ
  flags:
    - dovetell:global

  context:
    [What situation or question prompted this decision?]

  decision:
    [What was decided? Be explicit and unambiguous.]

  rationale:
    [Why was this the right call? What alternatives were considered?]

  constraints:
    [What constraints shaped this decision?]

  outcomes:
    [What is expected to happen as a result?]

  persona: persona-[8char]
    [Which persona(s) does this decision affect?]

  rule: rule-[8char]
    [Rules created or modified as a result of this decision.]

  task: task-[8char]
    [Tasks created as a result of this decision.]

  process: process-[8char]
    [Processes affected by this decision.]

  opp: opp-[8char]
    [Opportunity this decision elevates or closes.]

  risk: risk-[8char]
    [Risks created, mitigated, or closed by this decision.]

  supersedes: decision-[8char]
    [If this replaces a prior decision, reference it here.]

  superseded-by: decision-[8char]
    [If this decision was later replaced, reference the replacement.]

  notes:
    - [Additional context or follow-up observations]
    - source: codex-[hash] | prompt-[hash]
    - date: YYYY-MM-DDTHH:MMZ

---

## Decisions

[Append new decisions below. Newest at bottom.]

- decision-6b2f4a91
  title: Add project journal as a global dovetell concept candidate
  status: active
  revisionId: rev-a2d4c8f1
  created: 2026-05-07T03:27Z
  updated: 2026-05-07T03:27Z
  flags:
    - dovetell:global

  context:
    The product needs a lower-friction capture surface for thoughts that are not yet tasks, decisions, risks, rules, or opportunities. Users should be able to write free-flow notes during work and later reconcile those notes into formal context objects.

  decision:
    Add project journal as a new context content type backed by .dovetell-tasks-context/journal.md. Treat the concept as a candidate for promotion into the shared dovetell model by marking it with dovetell:global.

  rationale:
    Immediate classification can interrupt thinking. A journal creates a softer intake path while preserving traceability from raw thought to structured context. The feature also creates a natural future path for LLM-assisted reconciliation without requiring realtime automation in the first implementation.

  constraints:
    The first implementation must preserve static-app portability, direct GitHub markdown storage, per-project context files, and existing object schemas. Journal entries must not store credentials or secrets. The dovetell:global flag is advisory until its definition is reconciled.

  outcomes:
    A near-term implementation task will add a desktop right-sidebar journal, a composer, expandable truncated entries, journal.md read/write support, and manual reconciliation support that records created object IDs in each journal entry actions field.

  persona: none

  rule: none

  task: task-e7c3a9d4

  process: none

  opp: none

  risk: none

  supersedes: none

  superseded-by: none

  notes:
    - dovetell:global should become a common flag, but its exact definition and promotion workflow still need reconciliation.
    - source: codex-7588c8e2
    - date: 2026-05-07T03:27Z

- decision-90e1768a
  title: Commit context updates at each meaningful run checkpoint
  status: active
  revisionId: rev-ba0b1ebd
  created: 2026-05-07T13:50Z
  updated: 2026-05-07T13:50Z
  flags:
    - dovetell:global

  context:
    The user tracks active projects in real time through a tool that consumes project context from repositories. If context updates stay local, the continuous feed can miss current project state, decisions, handoffs, and active work.

  decision:
    At the end of each meaningful run or checkpoint, commit the relevant project context changes with the implementation or planning changes they describe. Use context-only commits when the run only changes planning, triage, audit, or handoff state.

  rationale:
    Context files are the project event stream. Committing them regularly keeps external feeds, future AI sessions, and project history aligned without requiring hidden local state.

  constraints:
    Do not commit credentials, PATs, local browser storage, screenshots with secrets, generated temporary harnesses, or unrelated local noise. Prefer coherent checkpoints over a commit for every tiny edit.

  outcomes:
    Project feeds can consume up-to-date decisions, tasks, handoffs, and changelog entries directly from GitHub. Code and context changes should travel together when they describe the same work.

  persona: none

  rule: none

  task: none

  process: none

  opp: none

  risk: none

  supersedes: none

  superseded-by: none

  notes:
    - This is a dovetell:global operating convention candidate for all context-managed projects, including Famframe and Dovetell.
    - source: codex-7588c8e2
    - date: 2026-05-07T13:50Z

- decision-55bcfc5c
  title: Store default account and project controls in repo JSON
  status: active
  revisionId: rev-0862d875
  created: 2026-05-07T15:05Z
  updated: 2026-05-07T15:05Z
  flags:
    - dovetell:global

  context:
    Browser-local project metadata made continuity feel brittle. The user's active-project workflow needs project/account controls that can travel with the repo and be consumed by future sessions or external feed tools.

  decision:
    Introduce repo-backed JSON for default account and project controls. Browser-local projects remain a temporary override/addition layer, and PATs remain local only.

  rationale:
    Repo JSON makes project identity, visibility, context file paths, and default source controls inspectable, versioned, and portable. Keeping tokens local preserves the existing security boundary while reducing hidden configuration.

  constraints:
    The static app currently initializes project controls synchronously, so the first implementation should preserve the existing Dovetell.allProjects API. Do not commit credentials or PAT values into JSON.

  outcomes:
    assets/config/account-projects.json becomes the default project/account source. assets/js/projects.js loads that JSON and falls back to embedded defaults if needed. Later work can promote local project additions back into repo JSON and replace synchronous loading with a cleaner async boot path.

  persona: none

  rule: none

  task: task-55bcfc5c

  process: none

  opp: none

  risk: none

  supersedes: none

  superseded-by: none

  notes:
    - This is a dovetell:global model candidate for account/project configuration across Dovetell-managed projects.
    - source: codex-7588c8e2
    - date: 2026-05-07T15:05Z

---

*decisions.md — Dogfood POC — v0.1*
*Never delete entries. Superseded decisions stay in the log.*
*Full audit trail is the point.*
