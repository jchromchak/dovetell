# Cleanup and partitioning playbook

Use this playbook to clean up an AI-assisted project workspace and turn the
cleanup into reusable assets.

The playbook works best after a project has enough history to reveal patterns,
but before the team starts a clean product repo or public package.

---

## Goals

- Move active work into a stable local workspace.
- Clarify repo roles and privacy boundaries.
- Move sensitive context into private sources before migration.
- Separate prototype history from clean product work.
- Update app-readable source configuration after repo changes.
- Capture reusable cleanup steps as asset-refinery candidates.

---

## Non-goals

- Do not create a task manager.
- Do not publish private business context.
- Do not rename a prototype repo into a product repo by default.
- Do not turn cleanup notes into public docs without review.
- Do not store tokens, credentials, or private customer data in package assets.

---

## Style rules

Write cleanup docs like product documentation:

- Use concise, direct, precise language.
- Write from the user perspective.
- Use task sections and checklists.
- Use sentence case for headings.
- Use Markdown, not custom HTML.
- Prefer short paragraphs and lists.
- Avoid marketing claims.
- Avoid "easy" and "simple."
- Use `example.com` and fake values in examples.
- Use private-safe summaries when content is sensitive.

Reference style: GitLab Documentation Style Guide.

---

## Roles

Project owner
: Decides repo roles, visibility, and what content can move.

Context steward
: Maintains context files, changelog, handoff, and rank.

Implementation agent
: Performs verified file moves, config updates, and repo checks.

Asset curator
: Converts repeated cleanup steps into reusable templates or package assets.

---

## Source types

Use these source types when you partition a workspace:

| Source type | Purpose |
| --- | --- |
| `app` | Product application code. |
| `app-context` | Private context for the app itself. |
| `business-context` | Private GTM, product, startup, and operating context. |
| `project-context` | Context for a specific product, project, team, or process. |
| `experiment-context` | Isolated or airgapped dogfood work. |
| `asset-refinery` | Private workspace for reusable patterns, prompts, schemas, and guides. |
| `canonical-assets` | Public or sellable stable asset library. |
| `docs` | Public documentation and education surfaces. |
| `archive` | Frozen historical source retained for traceability. |

---

## Workflow

### 1. Stabilize the local workspace

Move active work out of transient chat/session folders and sync-managed folders
before repo surgery.

Checklist:

- Identify the current repo root.
- Choose a local non-sync workspace path.
- Move or copy the repo intact.
- Verify `.git`, branch, remote, and status.
- Remove old duplicate folders only after verification.
- Update handoff and manifest paths.
- Commit the context checkpoint.

Output:

- Stable local workspace.
- Context update that records the old path, new path, and verification.

### 2. Inventory repo roles

Separate reachable repo facts from intended repo roles.

Checklist:

- List current repo roles from the manifest.
- Verify reachability without changing repo settings.
- Record reachable, inaccessible, proposed, active, archived, and unknown repos.
- Record visibility intent separately from verified visibility.
- Avoid renames until target roles are stable.
- Write an inventory snapshot with method and caveats.

Output:

- Repo manifest snapshot.
- Cleanup questions for the project owner.

### 3. Protect private business context

Protect private GTM, business, customer, operating, or strategy context before
reading, summarizing, moving, or documenting it.

Checklist:

- Identify the likely sensitive source.
- Make the source private before inspecting contents.
- Create a private target repo if needed.
- Migrate private-to-private.
- Preserve IDs, filenames, and lineage where possible.
- Add a private migration note to the source.
- Archive the old source after migration.
- Do not reveal sensitive contents in public docs, public READMEs, or broad summaries.

Output:

- Active private business-context source.
- Archived private source with a migration note.
- Changelog entry with commit IDs, not sensitive content.

### 4. Split prototype from product

Do not rename a messy prototype into the clean product app just because it
contains useful history.

Checklist:

- Keep the prototype/workbench/history repo stable.
- Defer the clean app repo until the product shell is shaped.
- Promote lessons, not prototype assumptions.
- Decide what to reuse, rewrite, discard, and document.
- Keep private app-context separate from app code.

Output:

- Prototype repo remains available as history.
- Clean app repo is deferred or created intentionally.
- Follow-up task defines the clean app shell.

### 5. Update source configuration

Repo role changes must update app-readable source configuration.

Checklist:

- Update source IDs after renames.
- Update repo names after renames.
- Update `repoType` when a source changes role.
- Update visibility after privacy changes.
- Avoid token keys and secrets.
- Preserve historical mentions in changelog and completed task records.
- Validate JSON and loader scripts.

Output:

- Updated source configuration.
- Validation notes in handoff or changelog.

### 6. Write durable closeout

Meaningful cleanup steps should write durable context before the session ends.

Checklist:

- Update canonical object files.
- Update changelog.
- Update session handoff.
- Update rank if priorities changed.
- Commit and push when the repo is an active context stream.

Output:

- A future session can resume from repo context without relying on chat history.

### 7. Promote reusable patterns

Turn repeated cleanup steps into asset-refinery candidates.

Checklist:

- Identify the repeatable pattern.
- Remove project-specific or sensitive details.
- Convert the pattern into task-oriented docs.
- Add prerequisites, steps, validation, and outputs.
- Add example prompts when useful.
- Link evidence from project context.
- Decide whether the asset is internal, private package, or public/canonical.

Output:

- Asset-refinery candidate.
- Promotion path into canonical assets or package docs.

---

## Reusable package candidates

### Repo role cleanup kit

Helps a team separate landing, docs, app, app-context, business-context,
asset-refinery, canonical-assets, and archive repos.

Includes:

- repo role vocabulary
- inventory worksheet
- visibility checklist
- rename decision tree
- archive checklist
- source configuration update checklist

### Private business context migration kit

Helps a team protect and migrate sensitive business context.

Includes:

- data boundary checklist
- private-to-private migration steps
- migration note template
- changelog template
- validation checklist

### Prototype-to-product partitioning guide

Helps a team decide when to keep a prototype as history and start a clean app.

Includes:

- prototype audit worksheet
- promote/rewrite/discard matrix
- clean repo creation checklist
- app-context separation checklist

### Context closeout kit

Helps AI-assisted teams preserve continuity.

Includes:

- session handoff template
- changelog entry template
- rank update template
- closeout checklist

### Artifact intake queue template

Helps teams route screenshots, diagrams, prompts, and generated assets.

Includes:

- route folder pattern
- enqueued/done/errored workflow
- provenance filename rules
- needs-review rules
- artifact index template

---

## Prompt templates

### Repo role inventory prompt

```text
Read the repo manifest and current source config.
Inventory reachable repositories without changing settings.
Return a table with repo, current role, target role, visibility intent,
verified reachability, unknowns, and recommended next action.
Do not inspect sensitive file contents.
```

### Privacy-first migration prompt

```text
Plan a private-to-private context migration.
Inspect filenames and structure first.
Do not print, summarize, or expose sensitive object contents.
Preserve IDs and lineage where possible.
Write a migration plan with source, target, files, validation, and rollback.
```

### Prototype partitioning prompt

```text
Review the prototype repo as history, not as the future app.
Identify what to reuse, rewrite, discard, document, and promote.
Recommend whether to create a clean product repo now or defer until the app shell is shaped.
```

---

## Promotion path

1. Keep this working doc in project context while the cleanup is still active.
2. Copy a refined version into the private asset refinery as a pattern candidate.
3. Add examples and package boundaries.
4. Review for privacy and remove project-specific details.
5. Promote stable parts into canonical assets or package docs.

---

## Validation checklist

- The playbook does not include secrets or private business object contents.
- The playbook uses direct, task-oriented language.
- Each workflow has prerequisites, steps, and outputs.
- Examples use fake or generic values.
- Public package candidates do not depend on private repo names.
- Source evidence remains traceable in project context.

---

*cleanup-playbook.md - Dovetell - v0.2*
