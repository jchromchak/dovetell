# opportunities.md
# Dogfood POC — Opportunities
# Landscape file. Not commitments. Scope-checked before elevating to decisions.
# Read when session scope touches feature exploration or roadmap framing.

---

## Schema

- opp-[8char]
  title:
  status: open|elevated|closed|deferred
  source: codex-[hash] | prompt-[hash]
  created: YYYY-MM-DDTHH:mm:ssZ
  updated: YYYY-MM-DDTHH:mm:ssZ

  description:
    [What is the opportunity? What problem does it address or what value does it unlock?]

  persona: persona-[8char]
    [Which persona(s) does this opportunity serve?]

  signal:
    [What evidence or observation surfaced this? User feedback, session observation, pattern noticed?]

  scope-check:
    [Does this make the product more useful within its defined scope,
    or does it expand scope into new territory? Be explicit.]
    verdict: in-scope|scope-expansion|unclear

  effort: low|medium|high
  value: low|medium|high

  elevation:
    [If elevated to a decision, reference here.]
    decision: decision-[8char]
    date: YYYY-MM-DDTHH:mm:ssZ

  notes:
    - [Additional context, constraints, or dependencies]
    - source: codex-[hash] | prompt-[hash]
    - date: YYYY-MM-DDTHH:mm:ssZ

---

## Opportunities

[Append new opportunities below. Newest at bottom.]

- opp-7d3a1f5b
  title: Docs-as-code markdown viewer for governed context and sellable assets
  status: open
  source: codex-7588c8e2
  created: 2026-05-09T03:08:00Z
  updated: 2026-05-09T03:08:00Z

  description:
    Build a robust docs-as-code viewer that renders markdown context, decisions, tasks, assets, guides, templates, and presentation breadcrumbs into a human-readable documentation site. The experience should feel closer to docs.github.com than a raw file browser: navigable, source-traced, searchable, version-aware, and organized by shaped granularity.

  persona: none
    Serves non-technical buyers, implementation teams, internal product owners, and future Dovetell users who need to understand the system without reading raw repo files.

  signal:
    User wants day-one documentation for sellable Gumroad templates and a built-as-we-go explanation layer showing how each part works in human-readable English.

  scope-check:
    This is in scope if treated as a presentation and education layer over governed context, not as a separate CMS or replacement for source-owned markdown.
    verdict: in-scope

  effort: high
  value: high

  elevation:
    decision: none
    date: none

  notes:
    - Should support docs-as-code and preserve source breadcrumbs back to decisions, tasks, assets, changelog entries, images, and prompts.
    - Should eventually support templates/packages sold externally, with documentation generated from the same context system used to build them.
    - Could become a major bridge between dovetell-assets-private, canonical dovetell-assets, and public docs.
    - Avoid turning this into a separate content authoring platform too early.
    - source: codex-7588c8e2
    - date: 2026-05-09T03:08:00Z

- opp-4c2e9a71
  title: Context rank index and ctx:rank prioritization command
  status: open
  source: codex-7588c8e2
  created: 2026-05-09T03:42:00Z
  updated: 2026-05-09T03:42:00Z

  description:
    Add a rank index for context action points so the system can surface priorities without rereading every context file from scratch. The rank file could list ordered references such as task, opportunity, risk, decision, or review item IDs, and a ctx:rank command could re-evaluate and rewrite that priority index.

  persona: none
    Serves project owners and future agents who need fast prioritization across many context files.

  signal:
    User wants an index-like prioritization layer that can make top-action lists easier, for example "1 - task-1a2b3c4d, opp-9g8h7i6k" and "2 - risk-867530d", instead of requiring the system to read and synthesize every context file each time.

  scope-check:
    This is in scope if treated as a derived prioritization index over context objects, not as a replacement for the underlying object files or a task-management ranking system.
    verdict: in-scope

  effort: medium
  value: high

  elevation:
    decision: none
    date: none

  notes:
    - Possible file: rank.md or context-rank.md in the project context folder.
    - Possible command: ctx:rank reranks active tasks, opportunities, risks, review items, and promotion candidates.
    - The rank file should reference canonical IDs and short reasons rather than duplicating full object content.
    - The rank file should be explicitly derived/rebuildable so it does not become a competing source of truth.
    - source: codex-7588c8e2
    - date: 2026-05-09T03:42:00Z

---

*opportunities.md — Dogfood POC — v0.1*
*This is a landscape file, not a commitment list.*
*Elevate to decisions.md only after explicit scope confirmation.*
