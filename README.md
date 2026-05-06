# README.md
# Context Governance Schema
# A structured markdown system for AI-assisted project sessions.

---

## What this is

A portable context governance system for teams using AI coding tools
(Codex, Claude Code, Cursor, or similar). It captures decisions, rules,
processes, risks, tasks, and personas in a structured file system that
any AI session can read, reference, and write back to.

The goal: every AI session starts with vetted context, works within
defined constraints, flags divergence before acting, and leaves a full
audit trail when it closes.

---

## How it works

### The two root files

**launcher.md** — loaded into your ChatGPT or Claude project once.
Governs every session. Declares the context folder, ground rules,
boundary conditions, ID conventions, and session open/close behavior.
Update only when ground rules change.

**_prompt-shaper.md** — paste into Claude or ChatGPT when you want to
riff on what to build before handing a prompt to Codex. Asks for your
project name, helps you shape scope, and outputs a tight token-efficient
prompt with a prompt-[8char] hash for lineage tracking.

### The context folder

Everything in `.<project-name>-context/` is the living memory of the project.
The AI reads from it, writes back to it, and never acts without checking it first.

### The session loop

```
1. open session (codex or claude code)
2. codex reads launcher → session-handoff → seed → scope files
3. codex announces session hash and confirms scope
4. work happens within declared constraints
5. boundary conditions trigger hard stops when needed
6. session closes → codex writes session-handoff.md
7. completed tasks move to tasks-completed.md
```

### The prompt shaping loop

```
1. paste _prompt-shaper.md into claude or chatgpt
2. answer: what is the project name?
3. describe what you want to do in plain language
4. shaper asks clarifying questions, confirms scope
5. shaper outputs a tight prompt with prompt-[8char] hash
6. hand that prompt to codex
7. codex session runs — codex-[hash] + prompt-[hash] travel together
```

---

## Folder structure

```
project-root/
├── launcher.md                        governs every session
├── _prompt-shaper.md                  human riffing → tight codex prompt
├── audits/
│   ├── audit-rules.md                 runnable prompt — business rules discovery
│   ├── audit-data-lineage.md          runnable prompt — data lineage mapping
│   └── output/
│       ├── audit-rules-YYYY-MM-DD.md  dated rules audit output
│       └── data-lineage-YYYY-MM-DD.md dated data lineage output
├── ref/
│   └── queries.md                     reference queries — consulted not executed
└── .<project-name>-context/
    ├── seed.md                        deep living memory
    ├── session-handoff.md             micro-seed, replaced every session
    ├── product-profile.md             living white paper
    ├── personas.md                    user personas
    ├── opportunities.md               landscape file, not commitments
    ├── tasks.md                       active work queue
    ├── tasks-completed.md             completed tasks, moved from tasks.md
    ├── decisions.md                   commitment log
    ├── rules.md                       business rules and constraints
    ├── risks.md                       risk register
    ├── processes.md                   business process definitions
    ├── mapping-discrepancies.md       auto-resolved and pending-review naming conflicts
    └── changelog.md                   revision log — join key for all object lineage
```

---

## Hash and ID conventions

Every session and every object carries a hash for full lineage tracking.
All hashes are cryptographically random 8-character lowercase hex strings.
Good examples: 4fd8063e · ed54693b · 8393d543. Never sequential like a1b2c3d4.

| type | format | scope |
|------|--------|-------|
| codex session | codex-[8char] | one per context window |
| claude session | [8char] | the hash of the claude/chatgpt conversation |
| prompt | prompt-[claude-session-hash]-[8char] | one per shaped prompt |
| revision | rev-[8char] | one per atomic action |
| task | task-[8char] | per task |
| decision | decision-[8char] | per decision |
| rule | rule-[8char] | per rule |
| risk | risk-[8char] | per risk |
| process | process-[8char] | per process |
| opportunity | opp-[8char] | per opportunity |
| persona | persona-[8char] | per persona |
| mapping | mapping-[8char] | per mapping discrepancy |

### Object lineage convention

Objects carry only one lineage field:
```
revisionId: rev-[8char]
```

All lineage detail lives in changelog.md. The revisionId is the join key.
No source strings, no user fields, no session references on objects.

### Changelog convention

Every atomic action writes one entry to changelog.md:
```
- rev-[8char]
  date: YYYY-MM-DDTHH:MMZ
  user: [username]
  origin: direct|codex|prompt
  codex-session: codex-[hash]
  claude-session: [claude-session-hash]
  prompt: prompt-[claude-session-hash]-[prompt-hash]
  objects:
    - [object-id]: [action]
  action: created|updated|completed|retired|migrated
  summary: [one line]
```

Full lineage: conversation → prompt → codex session → revision → objects.

### Version history convention

```
- YYYY-MM-DDTHH:MMZ (codex-[hash] | prompt-[hash]): [what changed and why]
```

---

## File conventions

- all files are flat append logs — newest entries at bottom
- never delete entries — superseded and retired items stay in the log
- lowercase kebab-case for all filenames and field names
- UTC timestamps everywhere: YYYY-MM-DDTHH:MMZ
- no tables inside data files — flat bullet format only
- no headers inside data files unless specified in the schema

---

## Boundary conditions

The launcher declares four hard stops that apply to every session:

| condition | trigger | output |
|-----------|---------|--------|
| scope | change requires touching a file outside declared scope | SCOPE BOUNDARY |
| rule | proposed change conflicts with an active rule | RULE BOUNDARY |
| process | proposed change affects a defined process step | PROCESS BOUNDARY |
| data | proposed change touches sensitive or proprietary fields | DATA BOUNDARY |

Codex stops, surfaces the condition, and waits for explicit instruction.

---

## Running audits

Audit prompts live in `audits/` and are reusable standing files.

```
tell Codex: "run audits/audit-rules.md"
→ output: audits/output/audit-rules-YYYY-MM-DD.md

tell Codex: "run audits/audit-data-lineage.md"
→ output: audits/output/data-lineage-YYYY-MM-DD.md
```

Audit outputs are dated — old runs are preserved. Review the output,
promote keepers into rules.md or decisions.md, discard the rest.

Audits are read-only — Codex never modifies existing files when running an audit.

---

## Setting up a new project

1. copy launcher.md and _prompt-shaper.md to your project root
2. create `.<project-name>-context/` folder
3. copy all files from `project-context/` into that folder
4. update launcher.md: set `project:` and `context-folder:`
5. fill in seed.md with your project context
6. load launcher.md into your ChatGPT or Claude project
7. run your first session — codex will generate the first session hash

---

## Migrating from an existing project

See `migration/migration-map.md` for the full translation from old file
patterns to this schema, including a shaped migration prompt ready to
hand to Codex.

---

*README.md — Context Governance Schema — v0.1*
*this schema is the thing. the project context is yours.*
