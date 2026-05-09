# commands.md
# Dovetell - Context Commands
# Registry for lightweight context commands and their expected behavior.
# Read when adding command-like workflows such as ctx:rank, ctx:audit, or ctx:promote.

---

## Principles

- Commands should operate on context objects by canonical ID.
- Commands should prefer pointer indexes over duplicated content.
- Commands may be manual, agent-assisted, or automated, but their output should say which mode produced it.
- Commands should write traceable changes to context files and changelog.md when they alter durable context.

---

## Commands

- ctx:command
  status: proposed
  purpose:
    Show the available context commands, their purpose, expected inputs, outputs, and guardrails.

  reads:
    - commands.md

  writes:
    - none by default

  output:
    A concise command menu. For a specific command, return its purpose, reads, writes, output, and guardrails.

  examples:
    - ctx:command
    - ctx:command ctx:start
    - ctx:command ctx:rank

  guardrails:
    - Do not execute the command being described unless explicitly requested.
    - Prefer short usage guidance over restating the whole registry.

- ctx:start
  status: proposed
  purpose:
    Orient a new session from durable repo context before doing work.

  reads:
    - rank.md
    - session-handoff.md
    - repo-manifest.md
    - operating-model.md
    - object-model.md
    - recent changelog.md entries
    - canonical IDs referenced by the user's request

  writes:
    - none by default

  output:
    A concise orientation summary covering current project state, top priorities, active risks or confusions, recommended next action, and likely files to touch.

  guardrails:
    - Do not rely on chat history as canonical memory.
    - Do not broad-read every context file before checking pointer files.
    - Follow canonical IDs only as needed for the current request.

- ctx:close
  status: proposed
  purpose:
    Close a session by writing durable context updates before the chat or tool context disappears.

  reads:
    - changed files
    - rank.md
    - session-handoff.md
    - changelog.md
    - tasks.md
    - decisions.md
    - opportunities.md
    - risks.md

  writes:
    - changelog.md
    - session-handoff.md
    - rank.md when priorities changed
    - any canonical object files needed for decisions, tasks, risks, opportunities, rules, concepts, commands, or repo mappings

  output:
    A closeout summary covering what changed, what was validated, unresolved risks, top next IDs, and a recommended next-session prompt.

  guardrails:
    - Do not leave important decisions only in chat.
    - Do not duplicate full object bodies in rank.md or session-handoff.md.
    - Do not commit secrets, PATs, local browser storage, or unrelated local noise.

- ctx:rank
  status: proposed
  purpose:
    Re-rank active context action points across tasks, opportunities, risks, review items, and promotion candidates.

  reads:
    - tasks.md
    - opportunities.md
    - risks.md
    - decisions.md
    - operating-model.md
    - object-model.md
    - session-handoff.md

  writes:
    - rank.md
    - changelog.md

  output:
    A short ordered pointer index with canonical IDs, reason, refs, generated timestamp, method, and scope.

  guardrails:
    - Do not duplicate full object bodies.
    - Do not make rank.md the canonical task list.
    - Include no-task-* placeholders only when work clearly exists but has not been promoted into a canonical task yet.

- ctx:handoff
  status: proposed
  purpose:
    Create or refresh the next-session handoff for another tool, agent, or future chat.

  reads:
    - rank.md
    - changelog.md
    - operating-model.md
    - object-model.md
    - changed context files

  writes:
    - session-handoff.md
    - changelog.md

  output:
    A concise continuation note with current state, changed files, top IDs, risks, and recommended next prompt.

- ctx:promote
  status: proposed
  purpose:
    Move a reusable learning from project context into asset refinery or canonical assets.

  reads:
    - opportunities.md
    - visual-concepts.md
    - demo-references.md
    - operating-model.md
    - object-model.md

  writes:
    - pattern-candidates.md or equivalent asset-refinery file
    - changelog.md

  output:
    A promotion candidate with source evidence, reuse potential, target source, and maturity.

---

*commands.md - Dovetell - v0.1*
*Commands make the context system easier to steer without becoming a separate app layer.*
