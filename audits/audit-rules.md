# audit-rules.md
# Runnable audit prompt — business rules discovery
# Usage: tell Codex "run audits/audit-rules.md"
# Output: audits/output/audit-rules-YYYY-MM-DD.md

---

## Instructions

Read all files in `/output/` — HTML, CSS, and JavaScript including any shared common files.

Do not make any changes to any existing files.

Identify every business rule implicitly encoded across the codebase:
- conditionals and branching logic
- validations and constraints
- calculations and derived values
- field constraints and allowed values
- edge case handling
- status transitions
- UI behavior rules and display logic

Write results to `audits/output/audit-rules-[YYYY-MM-DD].md` using today's date.
Use the schema below. Do not write to rules.md yet — output is for review only.

---

## Output Schema

Each entry:

- rule-draft-[random 8char hex]
  title: [short descriptive name]
  status: draft
  revisionId: rev-[random 8char hex]
  origin: codex
  file: [filename where found]
  location: [function name or approximate line range]
  description:
    [what is the rule? state it explicitly.]
  candidate-for: rules.md|decisions.md|processes.md
    [where should this be documented if promoted?]
  notes:
    [anything ambiguous, uncertain, or requiring human confirmation]

---

## On Completion

Write a summary at the top of the output file:

  audit-date: YYYY-MM-DD
  files-scanned: [list]
  total-rules-found: [n]
  breakdown-by-file: [file: count]
  flagged-for-review: [n — entries with ambiguous or uncertain notes]

Do not modify any existing files. Do not promote to rules.md without explicit instruction.

---

*audit-rules.md — v0.1*
*reusable — run any time the codebase changes significantly*
*output is always dated — old outputs are preserved*
