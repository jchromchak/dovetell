# rules.md
# Dogfood POC — Business Rules
# Product behavior, logic constraints, and scope guardrails.
# Flat append log. Newest at bottom.
# Always check this file before changing business logic in any session.

---

## Schema

- rule-[8char]
  title:
  status: active|retired
  source: codex-[hash] | prompt-[hash]
  created: YYYY-MM-DDTHH:mm:ssZ
  updated: YYYY-MM-DDTHH:mm:ssZ

  description:
    [What is the rule? State it explicitly and unambiguously.]

  rationale:
    [Why does this rule exist? What problem does it prevent?]

  scope:
    [Where does this rule apply? Which files, fields, processes, or personas?]

  persona: persona-[8char]
    [Which persona(s) does this rule affect?]

  decision: decision-[8char]
    [The decision that created or governs this rule.]

  process: process-[8char]
    [The process this rule governs or constrains.]

  exceptions:
    - [Any known legitimate exceptions to this rule]
    - [If none, state: none]

  violation-behavior:
    [What should happen if this rule is violated or about to be violated?
    Flag only | Block and ask | Auto-correct with log]

  retired-by: rule-[8char]
    [If this rule was retired and replaced, reference the replacement.]

  notes:
    - [Additional context or edge cases]
    - source: codex-[hash] | prompt-[hash]
    - date: YYYY-MM-DDTHH:mm:ssZ

---

## Rules

[Append new rules below. Newest at bottom.]

- rule-6b1f2c9d
  title: Dovetell must remain a context governance layer, not a work hub
  status: active
  source: codex-7588c8e2
  created: 2026-05-09T00:11:00Z
  updated: 2026-05-09T00:11:00Z

  description:
    Dovetell is not a task manager, project operating system, or one-stop work hub. Dovetell should help shared context stay true enough for work to happen elsewhere by improving context fidelity, traceability, auditability, reusable learning, and governance across human and agentic work.

  rationale:
    The product can easily drift toward replacing execution tools because context workflows touch tasks, decisions, journals, and repo changes. That drift would make Dovetell compete with ClickUp-style work management instead of occupying the clearer product position: shared contextual awareness and governed promotion of trusted knowledge.

  scope:
    Applies to product strategy, roadmap shaping, dashboard/refinery workflow design, source integration decisions, and any feature that resembles assignment, scheduling, backlog optimization, or execution management.

  persona: persona-none
    Product owner, context steward, and team members who need trusted shared context without moving all work into Dovetell.

  decision: decision-9d2e6a41
    The decision that created this product guardrail.

  process: none
    This rule constrains future workflow design rather than one existing process.

  exceptions:
    - Dovetell may create lightweight tasks or reconciliation records when needed to preserve context continuity, but those records should support context governance rather than become a full execution system.
    - Dovetell may integrate with execution tools and reference their objects, but should not try to replace them.

  violation-behavior:
    Flag and ask whether the feature primarily improves context trust/governance/reuse or primarily manages work execution. If it primarily manages execution, prefer integration, reference, or export over building the workflow inside Dovetell.

  retired-by: none

  notes:
    - Product test: "Does this help the team understand, trust, govern, or reuse context?" If yes, it likely belongs. "Does this mainly assign, schedule, optimize, or manage work execution?" If yes, integrate or reference it instead.
    - source: codex-7588c8e2
    - date: 2026-05-09T00:11:00Z

---

*rules.md — Dogfood POC — v0.1*
*Codex checks this file before changing any business logic.*
*Retired rules stay in the log — never delete.*
