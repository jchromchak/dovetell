# risks.md
# Dogfood POC — Risk Register
# Likelihood, impact, mitigation. Flat append log. Newest at bottom.
# Read when session scope touches delivery, scope, or stability.

---

## Schema

- risk-[8char]
  title:
  status: open|mitigated|closed
  source: codex-[hash] | prompt-[hash]
  created: YYYY-MM-DDTHH:MMZ
  updated: YYYY-MM-DDTHH:MMZ

  description:
    [what is the risk? what could go wrong and under what conditions?]

  likelihood: low|medium|high
  impact: low|medium|high
  severity: low|medium|high
    [derived from likelihood + impact — set explicitly, do not auto-calculate]

  persona: persona-[8char]
    [which persona(s) are affected if this risk materializes?]

  decision: decision-[8char]
    [decision that created, accepted, or mitigated this risk]

  process: process-[8char]
    [process affected if this risk materializes]

  rule: rule-[8char]
    [rule that governs or constrains this risk]

  mitigation:
    [what is being done to reduce likelihood or impact?]

  contingency:
    [if the risk materializes despite mitigation, what is the response plan?]

  trigger:
    [what signal or event would indicate this risk is materializing?]

  closed-reason:
    [if status is closed or mitigated, why and how?]
    date: YYYY-MM-DDTHH:MMZ
    source: codex-[hash] | prompt-[hash]

  notes:
    - [additional context or dependencies]
    - source: codex-[hash] | prompt-[hash]
    - date: YYYY-MM-DDTHH:MMZ

---

## Risks

[Append new risks below. Newest at bottom.]

---

*risks.md — Dogfood POC — v0.1*
*open risks are reviewed at session start when scope is relevant.*
*closed and mitigated risks stay in the log — never delete.*
