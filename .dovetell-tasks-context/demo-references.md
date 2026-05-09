# demo-references.md
# Dovetell — Demo Reference Files
# Captures implementation-adjacent demo screens and the product semantics they imply.
# Read when designing activity feeds, project portfolios, review queues, context health, or demo-to-product migration.

---

## Schema

- demo-[8char]
  title:
  status: active|superseded
  source-url:
  created: YYYY-MM-DDTHH:mm:ssZ
  captured: YYYY-MM-DDTHH:mm:ssZ
  flags:
    - dovetell:global

  screen-summary:
    [What the demo file shows.]

  model-signals:
    - [Object, status, action, or relationship implied by the demo.]

  product-meaning:
    [What the demo contributes to Dovetell's operating model.]

  migration-notes:
    - [What should be carried forward into the real app.]

  open-questions:
    - [What needs decision before implementation.]

---

## References

- demo-feed-a4c9e213
  title: Activity feed across context changes
  status: active
  source-url: https://github.com/dovetell-io/dovetell/blob/main/app-demo/feed.html
  created: 2026-05-02T20:12:31Z
  captured: 2026-05-09T02:02:30Z
  flags:
    - dovetell:global

  screen-summary:
    A dark-mode activity feed shows context changes across all projects. Items include decisions, assumptions, definitions, policies, context gaps, and stale flags. Entries include project badges, type tags, vetted/unvetted status, actor, time, source file, summary, plain-language detail, and inline actions such as vet, defer, review all, or create definition.

  model-signals:
    - Object types: decision, assumption, definition, policy, gap flagged, stale flagged.
    - Statuses: vetted and unvetted are visible in the feed.
    - Automated system actors can create feed items, such as context gap analyzer and staleness detector.
    - Feed items should preserve project, source file, actor, timestamp, status, and suggested next action.
    - The activity feed can be filtered by object type, unvetted-only, and stale-only.
    - "Needs your review" is a subset of feed activity, not the whole feed.

  product-meaning:
    The activity feed is the "what changed behind the scenes?" surface. It is not a task inbox; it is a context-change ledger that helps users see new truth candidates, drift, gaps, and stale knowledge across projects.

  migration-notes:
    - Carry forward type chips and status chips for fast scanning.
    - Keep source-file trace visible on every meaningful item.
    - Preserve automated feed entries for gap detection and staleness detection.
    - Treat "create definition" as a context repair action, not task assignment.

  open-questions:
    - Should feed items and review queue items share one underlying object model with different views?
    - Should automated gap/stale detections be queueable by default or remain feed-only until promoted?

- demo-projects-6d0b31a8
  title: Multi-project context portfolio
  status: active
  source-url: https://github.com/dovetell-io/dovetell/blob/main/app-demo/projects.html
  created: 2026-05-02T20:12:31Z
  captured: 2026-05-09T02:02:30Z
  flags:
    - dovetell:global

  screen-summary:
    A multi-project view lists connected projects with health score, context status, queue count, last activity, and action buttons. Summary metrics show project count, queue items, stale items, vetted items, and average health. Project states include current, drifting, and stale.

  model-signals:
    - Portfolio health aggregates project-level context health.
    - Project status values include current, drifting, and stale.
    - Queue count is a context governance signal.
    - Stale item count and vetted item count are portfolio-level trust signals.
    - Last activity should include timestamp and actor.
    - "New project" means connect a repo and initialize a context base.

  product-meaning:
    The portfolio is a governance overview across context sources. It answers which context bases are healthy, drifting, stale, or waiting for review without trying to become a project management dashboard.

  migration-notes:
    - Use "context source" language where possible, but preserve the user-facing simplicity of "project" when the source is a project context.
    - Make context health explainable from queue, staleness, drift, and vetting signals.
    - Distinguish "review queue" action from generic task workflow.

  open-questions:
    - How should asset-refinery, canonical-assets, docs, and app repoTypes appear in a portfolio view?
    - Should "project health" become "context health" everywhere to avoid work-management drift?

- demo-review-2f5e8c77
  title: Non-technical context review flow
  status: active
  source-url: https://github.com/dovetell-io/dovetell/blob/main/app-demo/review.html
  created: 2026-05-09T02:02:30Z
  captured: 2026-05-09T02:02:30Z
  flags:
    - dovetell:global

  screen-summary:
    A light-mode non-technical review flow walks a user through context updates with progress, plain-language cards, source metadata, and simple actions. One item is a new policy. Another is a proposed update to an existing definition with a side-by-side current/proposed diff. Actions are "Looks right," "Something's off," and "Skip for now." The done state says responses go to a final signer before anything becomes official.

  model-signals:
    - Queue item types include new context and proposed updates to existing context.
    - Reviewable categories include policy and definition.
    - Review items need plain-English rendering, source file, actor, added time, status, and current vetting state.
    - Proposed updates need current/proposed diff support.
    - Review actions include confirm, flag, and skip.
    - There may be a two-step workflow: non-technical reviewer response followed by final sign-off.
    - The side diagram models current truth, proposed change, unvetted queue, review gate, accepted/rejected paths, and new truth.

  product-meaning:
    This is the clearest expression of Dovetell's trust-making workflow. It shows that non-technical stakeholders can participate in making context official without using pull requests, ticket systems, or document comment threads.

  migration-notes:
    - Preserve the plain-language card as the primary review unit.
    - Preserve "current vs proposed" diff for updates.
    - Keep actions minimal and human-readable.
    - Make final sign-off explicit if the reviewer is not authorized to make truth official.
    - Store flagged reasons as first-class review evidence.

  open-questions:
    - Which roles can make context official versus only recommend approval?
    - Does "Looks right" immediately vet an item in small-team mode, or always route to a final signer?
    - How are skipped items represented: deferred, snoozed, or left unvetted?

---

## Cross-Demo Product Signals

- Activity, project portfolio, and review are three views over the same context-governance system.
- Core context categories remain decisions, assumptions, definitions, and policies.
- Supporting signals include context gaps, stale flags, health scores, queue counts, and vetting history.
- Review is not merely notification dismissal; it is the step that moves a candidate toward official truth.
- The product needs both dark operational surfaces and a lighter, non-technical review mode.
- "Current," "drifting," and "stale" describe project/source context health.
- "Unvetted," "vetted," "rejected," "deferred/skipped," and "stale" describe item-level trust state.
- Source trace should be visible wherever context is rendered.
- The app should preserve the guardrail that Dovetell coordinates context truth, not work execution.

---

## Candidate Object Model

context_source:
  fields:
    - id
    - name
    - repo
    - repoType
    - contextHealth
    - healthState: current|drifting|stale
    - queueCount
    - staleCount
    - vettedCount
    - lastActivityAt
    - lastActivityBy

context_item:
  fields:
    - id
    - sourceId
    - type: decision|assumption|definition|policy|gap|stale-flag
    - title
    - summary
    - detail
    - status: unvetted|vetted|rejected|deferred|stale|superseded
    - sourceFile
    - sourceLine
    - createdBy
    - createdAt
    - vettedBy
    - vettedAt

review_item:
  fields:
    - id
    - contextItemId
    - reviewType: new|proposed-update|staleness-review|gap-resolution
    - reviewerRole
    - currentVersion
    - proposedVersion
    - diff
    - action: confirm|flag|skip|accept|reject|defer
    - reason
    - finalSigner
    - finalStatus

activity_event:
  fields:
    - id
    - sourceId
    - contextItemId
    - actor
    - actorType: human|system
    - eventType: added|updated|flagged|stale-detected|gap-detected|vetted|deferred|rejected
    - occurredAt
    - sourceTrace

---

*demo-references.md — Dovetell — v0.1*
*Demo files are product evidence. Preserve what they imply before rewriting what they show.*
