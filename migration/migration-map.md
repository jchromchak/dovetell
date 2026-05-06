# migration-map.md
# Context Governance Schema — Migration Map
# Translates old file patterns to the new schema.
# Read this before running the migration prompt.

---

## File Translations

| old file | new file | action |
|----------|----------|--------|
| .codex/handoff.md | .<project-name>-context/session-handoff.md | reformat to schema |
| .codex/personas.md | .<project-name>-context/personas.md | carry forward, add source field |
| .codex/process.md | .<project-name>-context/processes.md | assign process IDs, add step timestamps |
| .codex/mapping-discrepancies.md | .<project-name>-context/mapping-discrepancies.md | carry forward, two sections kept |
| master_prompt.md | launcher.md | extract ground rules, generalize context-string |
| session_memory.md | .<project-name>-context/session-handoff.md | reformat to schema |

---

## ID Translations

| old pattern | new pattern | example |
|-------------|-------------|---------|
| none | task-[8char] | task-a1b2c3d4 |
| none | decision-[8char] | decision-f7e6d5c4 |
| none | rule-[8char] | rule-b3c4d5e6 |
| none | risk-[8char] | risk-e5f6a7b8 |
| none | process-[8char] | process-c7d8e9f0 |
| none | opp-[8char] | opp-d9e0f1a2 |
| none | persona-[8char] | persona-f1a2b3c4 |
| none | mapping-[8char] | mapping-a3b4c5d6 |
| none | codex-[8char] | codex-9z8y7x6w |
| none | prompt-[8char] | prompt-1a2b3c4d |

---

## Content Migration Plan

| content | source file | destination | action |
|---------|-------------|-------------|--------|
| session narrative | .codex/handoff.md | session-handoff.md | reformat to schema, generate codex-[hash] |
| personas | .codex/personas.md | personas.md | carry forward, add persona-[8char] IDs, add source field |
| process steps | .codex/process.md | processes.md | assign process-[8char] IDs, add step timestamps |
| auto-resolved items | mapping-discrepancies.md | mapping-discrepancies.md | assign mapping-[8char] IDs, carry forward |
| pending items | mapping-discrepancies.md | tasks.md + mapping-discrepancies.md | create task-[8char] IDs, cross-reference |
| ground rules | master_prompt.md | launcher.md | extract behavioral rules, generalize context-string |
| session state | session_memory.md | session-handoff.md | reformat to schema |
| any existing decisions | [source] | decisions.md | assign decision-[8char] IDs, add source field |
| any existing rules | [source] | rules.md | assign rule-[8char] IDs, add source field |

---

## Template-Only Files — No Source Content to Migrate

these files have no equivalent in the old structure. templates exist — populate them during migration.

| file | action |
|------|--------|
| seed.md | fill from project context sections in master_prompt.md + session_memory.md |
| product-profile.md | fill from problem statement sections in master_prompt.md |
| opportunities.md | template ready — populate as items are identified post-migration |
| risks.md | template ready — populate as risks are identified post-migration |
| tasks.md | template ready — seed from pending-review items in mapping-discrepancies.md |
| tasks-completed.md | template ready — empty on migration day |
| decisions.md | template ready — populate from any decisions documented in source files |

---

## Migration Status Checklist

- [ ] launcher.md context-string set for this project
- [ ] seed.md populated from master_prompt.md + session_memory.md
- [ ] session-handoff.md migrated from .codex/handoff.md
- [ ] personas.md migrated from .codex/personas.md
- [ ] processes.md migrated from .codex/process.md
- [ ] mapping-discrepancies.md migrated, mapping-[8char] IDs assigned
- [ ] tasks.md seeded from pending-review items in mapping-discrepancies.md
- [ ] tasks-completed.md ready — empty on migration day
- [ ] decisions.md populated from any decisions in source files
- [ ] rules.md ready — populate post-migration as rules are identified
- [ ] risks.md ready — populate post-migration as risks are identified
- [ ] opportunities.md ready — populate post-migration as items are identified
- [ ] product-profile.md populated from master_prompt.md problem statement sections
- [ ] master_prompt.md retired
- [ ] session_memory.md retired
- [ ] .codex/ archived

---

## Migration Prompt

Use this prompt with Codex or Claude Code to execute the migration.
Generate a prompt-[8char] hash before running.

---
PROMPT HASH: prompt-[generate before use]
GENERATED: YYYY-MM-DDTHH:MMZ

SCOPE
migrate existing project files to the context governance schema defined in launcher.md.

CONTEXT FILES TO READ
- launcher.md
- .<project-name>-context/session-handoff.md (if it exists)
- .codex/handoff.md
- .codex/personas.md
- .codex/process.md
- .codex/mapping-discrepancies.md
- master_prompt.md
- session_memory.md
- migration/migration-map.md

DO
- generate a session hash for this migration session: codex-[hash]
- create all missing files in .<project-name>-context/ using the schemas in migration-map.md
- migrate content from old files to new files following the content migration plan
- assign IDs to all objects that do not have them
- add source: codex-[hash] to all migrated objects
- add created: [original date if known, otherwise YYYY-MM-DDTHH:MMZ] to all objects
- carry forward all content — do not discard anything
- mark migration status checklist items as complete as each file is done
- write session-handoff.md on completion

DO NOT
- delete any old files — archive only
- modify source code or files outside the context folder and migration folder
- invent content that does not exist in the source files
- proceed past a boundary condition without flagging

BOUNDARY CONDITIONS
- data boundary: flag any content that appears sensitive, proprietary, or PII before migrating
- scope boundary: flag if migration requires touching files outside .codex/, root md files, or .<project-name>-context/
- rule boundary: check rules.md before modifying any business logic content

OUTPUT EXPECTED
- all files in .<project-name>-context/ created and populated
- migration-map.md checklist updated
- session-handoff.md written with full summary of what was migrated

SOURCE CONVENTION
all objects created this session: source: codex-[hash] | prompt-[prompt-hash]

SESSION CLOSE
write session-handoff.md before ending.
include prompt-[hash] in the handoff source line.
note any content that could not be migrated and why.
---

---

*migration-map.md — Context Governance Schema — v0.1*
*run the migration prompt after reading this file fully.*
*archive old files after migration is confirmed complete.*
