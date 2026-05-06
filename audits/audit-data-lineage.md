# audit-data-lineage.md
# Runnable audit prompt — data lineage mapping
# Usage: tell Codex "run audits/audit-data-lineage.md"
# Output: audits/output/data-lineage-YYYY-MM-DD.md

---

## Instructions

Read all files in `/output/` and `ref/queries.md`.

Do not make any changes to any existing files.

Map the data lineage for every field visible in the UI. Trace each field from
database through to the label the user sees.

Write results to `audits/output/data-lineage-[YYYY-MM-DD].md` using today's date.
Use the schema below.

---

## Output Schema

Each entry:

- field-[random 8char hex]
  label: [what the user sees in the UI]
  field-name: [variable or key name in the code]
  file: [filename where found]
  location: [function name or approximate line range]
  source: [database table/field from queries.md | API endpoint | calculated | hardcoded | unknown]
  query: [query ID or name from queries.md if applicable]
  transformations:
    [any formatting, calculation, or mapping applied between source and display]
    [if none, state: none]
  conditions:
    [any logic that controls whether or when this field is shown]
    [if none, state: none]
  revisionId: rev-[random 8char hex]
  origin: codex
  notes:
    [anything ambiguous or requiring backend confirmation]

  flag: backend-review-needed
    [include this field only if source cannot be determined from frontend code]

---

## On Completion

Write a summary at the top of the output file:

  audit-date: YYYY-MM-DD
  files-scanned: [list]
  total-fields-mapped: [n]
  traced-to-queries: [n]
  flagged-backend-review: [n]
  hardcoded-values: [n]
  calculated-fields: [n]

Do not modify any existing files.

---

*audit-data-lineage.md — v0.1*
*reusable — run any time the data model or UI changes significantly*
*output is always dated — old outputs are preserved*
*requires ref/queries.md to trace fields to database sources*
