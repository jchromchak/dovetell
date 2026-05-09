# product-profile.md
# Dogfood POC — Product Profile
# Living white paper. Updated as the product evolves.
# Read when session scope touches product definition, problem framing, or roadmap.

---

## 1. Product Identity

product:
last-updated: YYYY-MM-DDTHH:mm:ssZ
source: codex-[hash]

name:
tagline:
status: discovery|active|stable|sunset

---

## 2. Problem Statement

problem:
  [What problem does this product solve?]

who-feels-it:
  [Who experiences this problem? Reference persona IDs where applicable.]
  - persona-[8char]: [one-line description]

when-it-hurts:
  [In what moment or context does the pain surface?]

cost-of-inaction:
  [What happens if this problem is not solved?]

---

## 3. Users

primary-users:
  - persona-[8char]: [one-line description]

secondary-users:
  - persona-[8char]: [one-line description]

non-users:
  [Who is explicitly not the target? Helps bound scope.]

---

## 4. Current State

what-exists-today:
  [What tools, processes, or workarounds are in use now?]

what-is-broken:
  [What specifically fails or frustrates?]

what-is-missing:
  [What doesn't exist at all that should?]

---

## 5. Desired State

desired-state:
  [What does good look like when this is working?]

success-indicators:
  [Observable signals that the product is working. Not metrics yet.]
  - [indicator]

out-of-scope:
  [What is explicitly not this product's job?]

product-guardrails:
  - Dovetell is not a task manager, project operating system, or one-stop work hub.
  - Dovetell is the place where shared context stays true enough for work to happen elsewhere.
  - Prefer features that improve context fidelity, traceability, auditability, reusable learning, and governance.
  - For features that primarily assign, schedule, optimize, or manage work execution, prefer integration or reference over native replacement.
  - governing-decision: decision-9d2e6a41
  - governing-rule: rule-6b1f2c9d

---

## 6. Constraints

technical:
  - [Technical constraints — stack, integrations, platform limitations]

organizational:
  - [Organizational constraints — process, policy, access, approvals]

regulatory:
  - [Compliance or regulatory constraints if applicable]

resource:
  - [Time, budget, or team constraints]

---

## 7. Key Decisions

[Reference IDs only — full entries live in decisions.md]

- decision-[8char]: [one-line summary]
- decision-9d2e6a41: Keep Dovetell focused on context governance instead of work management

---

## 8. Key Rules

[Reference IDs only — full entries live in rules.md]

- rule-[8char]: [one-line summary]
- rule-6b1f2c9d: Dovetell must remain a context governance layer, not a work hub

---

## 9. Open Questions

- [Unresolved question]
  source: codex-[hash]
  date: YYYY-MM-DDTHH:mm:ssZ

---

## 10. Version History

[Flat append log — newest at bottom]

- YYYY-MM-DDTHH:mm:ssZ (codex-[hash]): [what changed and why]
- 2026-05-09T00:11:00Z (codex-7588c8e2): Added the core product guardrail that Dovetell should remain a shared context awareness and governance layer rather than becoming a general task manager or one-stop work hub.

---

*product-profile.md — Dogfood POC — v0.1*
*This is the living white paper for the product.*
*Update when the problem framing, user definition, or scope meaningfully changes.*
