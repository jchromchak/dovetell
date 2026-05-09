# cleanup-playbook.md
# Dovetell - Cleanup And Partitioning Playbook
# Working master doc for reusable cleanup, repo partitioning, and asset packaging patterns.

---

## Purpose

This file captures cleanup and utility patterns that should become reusable Dovetell assets instead of staying buried in one project history.

The goal is to turn lived cleanup work into deployable templates, checklists, prompts, and package-ready guides for future Gumroad-style products, client implementations, or internal Dovetell onboarding.

---

## Partitioning Principle

Partitioning starts when a project has generated enough messy but useful learning that reuse would otherwise require re-reading the whole history.

Do not wait until the app is rebuilt. Start partitioning learnings as soon as:

- repo roles have been clarified
- privacy boundaries have been protected
- a pattern has repeated or proved useful
- an operational step could help another project avoid relearning the same thing
- a future buyer or implementer would benefit from a checklist instead of a transcript

---

## Asset Layers

### Local project context

Where messy source evidence lives.

Examples:
- session handoffs
- changelog entries
- repo cleanup decisions
- migration notes
- task context blocks
- screenshots and visual concepts

### Asset refinery

Where reusable candidates are shaped.

Examples:
- cleanup playbooks
- prompt templates
- migration checklists
- repo role maps
- context folder conventions
- source configuration patterns
- artifact ingestion workflows

### Canonical assets

Where reviewed and packaged assets live.

Examples:
- public/sellable templates
- buyer-facing guides
- stable diagrams
- package READMEs
- onboarding docs
- implementation checklists

---

## Reusable Patterns From This Cleanup

### Local housing cleanup

Pattern:
Move active work out of transient chat/session folders and sync-managed folders before repo surgery.

Reusable checklist:
- identify current repo root
- choose local non-sync workbench path
- move or copy repo intact
- verify `.git`, branch, remote, and status
- remove old duplicate only after verification
- update handoff and manifest paths
- commit the context checkpoint

### Repo role inventory

Pattern:
Separate reachable repo facts from intended repo roles.

Reusable checklist:
- list current repo roles from manifest
- verify reachability without changing settings
- distinguish active, proposed, unknown, archived, and inaccessible repos
- record visibility intent separately from verified visibility
- avoid renames until target roles are stable
- write an inventory snapshot with method and caveats

### Privacy-first business context cleanup

Pattern:
Protect private business/GTM context before reading, summarizing, moving, or documenting it.

Reusable checklist:
- identify likely sensitive context source
- make source private before inspecting contents
- create private target repo if needed
- migrate private-to-private
- preserve IDs and lineage where possible
- add private migration note to source
- archive old source after migration
- never reveal sensitive contents in public docs or broad summaries

### Prototype versus product app split

Pattern:
Do not rename a messy prototype into the clean product app just because it contains useful history.

Reusable checklist:
- keep prototype/workbench/history repo stable
- create clean product repo only after product shell is shaped
- promote lessons, not assumptions
- decide what to reuse, rewrite, discard, and document
- keep private app-context separate from app code

### Source configuration cleanup

Pattern:
Repo role changes must update app-readable source configuration.

Reusable checklist:
- update source IDs and repo names after renames
- update repoType when a source changes role
- update visibility after privacy changes
- avoid storing token keys or secrets
- preserve historical mentions in changelog/completed tasks
- validate JSON and loader scripts

### Context closeout discipline

Pattern:
Meaningful cleanup steps should write durable context before the session ends.

Reusable checklist:
- update canonical object file
- update changelog
- update session handoff
- update rank if priorities changed
- commit and push if this repo is acting as an active context stream

---

## Candidate Package Ideas

- Repo Role Cleanup Kit
- AI Project Context Migration Kit
- Private Business Context Protection Checklist
- Prototype-To-Product Partitioning Guide
- Context Source Configuration Template
- Context Closeout And Handoff Template
- Artifact Intake Queue Template

---

## Promotion Notes

This is a working master doc, not yet a canonical asset.

Next step is to move a refined version into the private asset refinery as a pattern candidate, with examples, prompts, and a buyer-facing checklist.

---

*cleanup-playbook.md - Dovetell - v0.1*
*Cleanups are assets when they teach the next project how not to repeat the mess.*
