# changelog.md
# dovetell-tasks — Changelog
# One entry per atomic action. All objects touched in one operation share a revisionId.
# The revisionId is the join key back to any object. Flat append log. Newest at bottom.
# Never delete entries.

---

## Schema

- rev-[8char]
  date: YYYY-MM-DDTHH:MMZ
  user: [username]
  origin: direct|codex|prompt
  codex-session: codex-[hash]
  claude-session: [claude-session-hash]
  prompt: prompt-[claude-session-hash]-[prompt-hash]
  objects:
    - [object-id]: [action — created|updated|completed|retired|migrated]
  action: created|updated|completed|retired|migrated
  summary: [one line — what changed and why]

---

## Notes

- one rev-[8char] per atomic action — one motion, one rev
- all objects touched in the same operation share the same revisionId
- origin: direct — user typed it, omit codex-session and prompt
- origin: codex — codex generated it, omit prompt
- origin: prompt — shaped prompt drove it, include all three session fields
- objects field lists every ID touched in this revision
- objects carry only revisionId — all detail lives here

---

## Entries

[Append new entries below. Newest at bottom.]

- rev-8a8c830b
  date: 2026-05-06T01:05Z
  user: john
  origin: codex
  codex-session: codex-7588c8e2
  objects:
    - seed.md: updated
    - launcher.md: updated
    - ref/queries.md: created
    - audits/output/README.md: created
    - context-framework: created
  action: created
  summary: Integrated the Dovetell context governance framework into dovetell-tasks.

---

*changelog.md — dovetell-tasks — v0.1*
*this is the source of truth for who changed what, when, and why.*
*objects carry only revisionId — all detail lives here.*
