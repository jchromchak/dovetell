# context-transmissibility.md
# Dovetell - Context Transmissibility
# Defines how work survives across tools, chats, machines, and context windows.
# Read at the start or end of any agent session.

---

## Principle

Do not assume any one chat, agent, IDE, or context window remembers everything.

Conversation is working memory.
Context files are durable memory.
Commits are cross-tool transport.
Canonical IDs are the shared addressing system.

---

## Why This Exists

Agent work creates useful knowledge inside fragile context windows. That knowledge may be summarized, truncated, unavailable to another tool, or lost when switching from Codex to Claude Code to Cursor or back again.

Dovetell should make that knowledge transmissible by writing important context into repo-readable files that humans and agents can both inspect.

---

## Memory Layers

conversation:
  role: working memory
  risk: ephemeral, tool-specific, summarized, or unavailable

context-files:
  role: durable project memory
  examples:
    - decisions.md
    - tasks.md
    - opportunities.md
    - risks.md
    - operating-model.md
    - object-model.md
    - visual-concepts.md

changelog:
  role: append-only audit trail of what changed, when, why, and by whom

session-handoff:
  role: latest continuation note for the next human or agent

rank:
  role: derived pointer index for what matters next

commits:
  role: transport mechanism between machines, tools, and future sessions

---

## Start-Of-Session Read Order

Use `ctx:start`.

1. rank.md
2. session-handoff.md
3. repo-manifest.md
4. operating-model.md
5. object-model.md
6. latest changelog.md entries
7. referenced canonical IDs from tasks, decisions, risks, opportunities, and concepts

---

## End-Of-Session Write Order

Use `ctx:close`.

1. Write or update canonical object files for any new decisions, tasks, opportunities, risks, rules, concepts, commands, or repo mappings.
2. Update changelog.md with the revision.
3. Update session-handoff.md with current state and next prompt.
4. Update rank.md if the priority order changed.
5. Commit meaningful context changes with the implementation or planning changes they describe.

---

## Pointer-First Rule

Prefer canonical references over duplicated summaries.

Good:
  - task-1f9c6b8a
  - decision-5c8e2a74
  - opp-4c2e9a71

Avoid:
  - Long copied descriptions in every file
  - Unstructured prose references that cannot be traced
  - Rank or handoff files that become a second source of truth

---

## Tool-Agnostic Continuity

Every important context artifact should be readable by Codex, Claude Code, Cursor, a human in GitHub, and a future Dovetell app.

That means plain markdown, stable IDs, clear backlinks, and minimal dependence on one chat's hidden memory.

---

## Guardrail

If a future agent cannot understand the next step from repo context alone, the continuity system failed and should be improved.

---

*context-transmissibility.md - Dovetell - v0.1*
*The repo is the shared memory. The chat is only the current workspace.*
