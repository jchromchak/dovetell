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
  created: YYYY-MM-DDTHH:MMZ
  updated: YYYY-MM-DDTHH:MMZ

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
    - date: YYYY-MM-DDTHH:MMZ

---

## Rules

[Append new rules below. Newest at bottom.]

---

*rules.md — Dogfood POC — v0.1*
*Codex checks this file before changing any business logic.*
*Retired rules stay in the log — never delete.*
