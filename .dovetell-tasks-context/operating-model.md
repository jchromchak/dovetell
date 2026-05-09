# operating-model.md
# Dovetell — Operating Model
# Defines how shared context becomes trusted truth.
# Read when designing source ingestion, review queues, activity feeds, context health, asset refinery, or query surfaces.

---

## 1. Core Principle

Dovetell shapes context. The customer owns truth.

Dovetell should help teams make shared context visible, reviewable, source-traced, and durable. It should not become the place where all work is planned, assigned, scheduled, or executed.

governing-decision: decision-9d2e6a41
governing-rule: rule-6b1f2c9d

---

## 2. Product Job

Dovetell coordinates context truth across human and agentic work.

It exists for teams that have important knowledge spread across repositories, documents, chats, tickets, agent sessions, and individual memory. The product helps those teams identify candidate truth, review it in plain English, write accepted context back to owned sources, and monitor decay over time.

This is a context governance layer, not a task manager.

---

## 3. Ownership Boundary

customer-owned:
  - source repositories
  - markdown context files
  - canonical decisions, assumptions, definitions, and policies
  - business/process truth
  - approval authority

dovetell-owned:
  - identity and access state
  - source connection metadata
  - queue state
  - review state
  - sync timestamps
  - health signals
  - provenance and trace indexes
  - rendering and query surfaces

guardrail:
  Dovetell may cache, index, transform, and render context for usefulness, but the durable source of truth remains in the customer's owned system unless the customer explicitly chooses otherwise.

---

## 4. Context Categories

core:
  - decisions: what the team has agreed to do or believe operationally
  - assumptions: what the team is acting as if true, even if not fully verified
  - definitions: shared meaning for terms, boundaries, concepts, metrics, and roles
  - policies: rules the team agrees to follow

supporting:
  - journal: raw observations, notes, and narrative context
  - tasks: action items that preserve context continuity, not a replacement for work management
  - changelog: what changed, when, why, and by whom
  - risks: threats to context correctness, trust, access, or continuity
  - opportunities: possible improvements or promotions

---

## 5. Lifecycle

1. Connect
   Customer connects an owned source such as a GitHub repository and grants scoped access.

2. Import / Extract
   Dovetell reads structured context files, uploaded documents, or agent outputs and identifies candidate context.

3. Review
   Humans review new or changed context in plain English. This is where candidate context moves toward trusted truth.

4. Accept / Write Back
   Accepted context is written back to the customer-owned source with timestamp, source trace, status, and review evidence.

5. Query / Render
   Developers, agents, and non-technical users query the same trusted context through views appropriate to their needs.

6. Monitor
   Dovetell watches for staleness, drift, unresolved assumptions, unvetted changes, conflicting entries, and review backlog.

---

## 6. Prompt Assembly

Dovetell should assemble prompts from governed context layers rather than asking people to manually remember and paste prompt fragments.

layers:
  - personal: local preferences, coding guidelines, style, and individual working context
  - team: shared standards, conventions, architecture guidance, and security principles
  - conversation: relevant decisions, clarifications, threads, discussions, and work-in-progress context
  - context-base: vetted decisions, assumptions, definitions, policies, and supporting source-traced context

assembly-output:
  The assembled prompt should carry enough provenance to show which layers contributed to the response or instruction.

feedback-loop:
  Code changes, conversations, and document updates can create new candidate context, but those candidates remain unvetted until reviewed.

guardrail:
  Dovetell should be a governed prompt assembly layer, not an unmanaged prompt snippet library.

---

## 7. Trust States

item-status:
  - unvetted: captured but not accepted as official
  - vetted: reviewed and trusted
  - stale: may no longer be current because of age or drift
  - superseded: replaced by newer accepted context
  - rejected: reviewed and not accepted
  - deferred: acknowledged but not acted on yet

source-health:
  - current: context appears reviewed, recent, and coherent
  - drifting: signals suggest context may be diverging from reality
  - stale: context has aged, conflicted, or accumulated unresolved review debt

---

## 8. Source Types

project-context:
  A context source for a specific product, app, team, process, or operating area.

business-context:
  A context source for startup, product, GTM, operating, or business decisions.

asset-refinery:
  A private lab that ingests learnings from context sources and turns them into reusable patterns, templates, prompts, guides, or schema candidates.

canonical-assets:
  The stable public or sellable asset library after patterns have been curated and promoted.

docs:
  Public documentation and education surfaces.

app:
  The software product that consumes, renders, and coordinates context.

---

## 9. Review Model

Review is not notification dismissal. Review is the trust-making mechanism.

review-item:
  fields:
    - id
    - sourceId
    - contextItemId
    - reviewType: new|proposed-update|staleness-review|gap-resolution
    - category: decision|assumption|definition|policy|supporting
    - currentVersion
    - proposedVersion
    - plainEnglishSummary
    - sourceTrace
    - reviewerRole
    - action: confirm|flag|skip|accept|reject|defer
    - reason
    - finalSigner
    - finalStatus

small-team-mode:
  A reviewer may be allowed to make context official immediately.

governed-mode:
  A reviewer may recommend approval, but a final signer makes truth official.

---

## 10. Activity Model

The activity feed answers: what has been happening behind the scenes?

It should show context movement across sources without becoming a work inbox.

activity-event:
  fields:
    - id
    - sourceId
    - contextItemId
    - actor
    - actorType: human|system|agent
    - eventType: added|updated|flagged|stale-detected|gap-detected|vetted|deferred|rejected|superseded|promoted
    - occurredAt
    - sourceTrace
    - status
    - suggestedNextAction

---

## 11. Health Model

Context health should be explainable, not decorative.

signals:
  - unvetted item count
  - stale item count
  - unresolved assumption count
  - drift signal count
  - review backlog age
  - recent accepted changes
  - conflict count
  - source sync freshness
  - context coverage across core categories

health-score:
  The score is a summary of trust and freshness signals. It should always be explorable down to the signals that caused it.

---

## 12. Asset Refinery Model

The asset refinery is where local learning becomes reusable context infrastructure.

inputs:
  - project-context sources
  - business-context sources
  - dogfood experiments
  - visual concepts
  - demo references
  - retrospective notes
  - observed review failures

outputs:
  - pattern candidates
  - prompt templates
  - schema changes
  - audit prompts
  - context structure conventions
  - command definitions
  - promotion candidates for canonical assets

promotion-rule:
  A pattern should not be promoted to canonical assets just because it appeared once. It should have evidence, reuse potential, and a clear boundary.

---

## 13. Provenance

Every meaningful artifact should preserve provenance: where it came from, how it was created, what changed, and how to trace it later.

artifact-types:
  - markdown context file
  - demo HTML file
  - generated image
  - prompt
  - schema
  - audit output
  - review decision

image-artifact-pattern:
  watermark: dovetell:image-[8char] · [slug] · YYYY-MM-DD
  filename: image-[8char]__[slug]__YYYY-MM-DD.png

---

## 14. Docs And Presentation

Dovetell should be able to render governed context into human-readable documentation without moving truth out of source-owned files.

docs-as-code:
  Documentation should be generated from markdown context, asset files, decisions, prompts, examples, images, changelog entries, and review history.

presentation-layer:
  The docs viewer should help users understand the system at the right granularity: concept overview, implementation guide, template reference, audit rule, command, source trace, and change history.

breadcrumbs:
  Docs pages should preserve backlinks to the source context objects that shaped them.

guardrail:
  The docs viewer is a presentation layer over context, not a separate CMS that becomes another source of truth.

---

## 15. Context Transmissibility

Dovetell should make context portable across tools, chats, agents, machines, and future sessions.

memory-model:
  - conversation: working memory
  - context files: durable memory
  - changelog: audit trail
  - session handoff: continuation note
  - rank: derived priority pointer index
  - repo manifest: source and repo role map
  - commits: cross-tool transport

start-order:
  Future agents should start with rank.md, session-handoff.md, repo-manifest.md, operating-model.md, object-model.md, and recent changelog entries before doing broad file reads.

guardrail:
  If another tool cannot pick up the work from repo context alone, the continuity system needs improvement.

---

## 16. Open Gaps

- Define the exact scoring formula for context health.
- Decide when feed items and review queue items share one table versus separate tables with shared references.
- Decide role rules for small-team mode versus governed mode.
- Define conflict detection between two accepted context items.
- Define airgap transfer mechanics for dogfood-private and other disconnected sources.
- Define how asset-refinery promotions move into canonical-assets.
- Define whether "project" remains the user-facing noun or becomes "context source" in portfolio views.
- Define how personal and team prompt layers are represented as source types or source profiles.
- Define how assembled prompt provenance should be shown to developers and reviewers.
- Define what the docs viewer reads from source context versus derived indexes.
- Define how docs pages preserve breadcrumbs to context objects, visual artifacts, and review history.
- Define when repo-manifest.md should become repo-manifest.json for app ingestion.
- Define how ctx:* commands are executed manually, by agents, and eventually by the app.

---

## 17. Source Evidence

- visual-concepts.md
- demo-references.md
- decision-9d2e6a41
- rule-6b1f2c9d
- concept-3c0a5b72
- concept-9e4f6d28
- demo-feed-a4c9e213
- demo-projects-6d0b31a8
- demo-review-2f5e8c77
- concept-2f9b70c4
- concept-6c81d3b7
- concept-1e5a9b2d
- concept-4b7c0e91
- concept-0a63d8ef
- opp-7d3a1f5b
- context-transmissibility.md
- repo-manifest.md
- rank.md
- commands.md
- _retrospective.md

---

*operating-model.md — Dovetell — v0.1*
*Keep this focused on how context becomes trusted truth.*
