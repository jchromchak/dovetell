# Clean React app shell

Use this shape before creating or initializing the clean Dovetell app repo.

The shell should prove the product boundary: Dovetell coordinates context truth
across owned sources. It does not become the team's work hub.

## Product boundary

The first shell should help a user answer four questions:

- What sources are connected?
- What context needs review?
- What changed behind the scenes?
- Which sources are healthy, stale, drifting, or blocked?

It should not optimize for assigning work, managing schedules, or replacing
GitHub, Linear, Notion, or a project tracker.

## First routes

| Route | Purpose |
| --- | --- |
| `/` | Redirect to `/sources` or the default source portfolio view. |
| `/sources` | Source portfolio with repo role, visibility, health, sync state, and review counts. |
| `/sources/:sourceId` | Source detail with context categories, health signals, recent activity, and trace links. |
| `/review` | Unified review queue for new, stale, conflicted, and promotion review items. |
| `/review/:reviewId` | Plain-English review detail with source trace, diff, decision controls, and write-back state. |
| `/activity` | Append-only activity feed across sources. |
| `/refinery` | Asset-refinery candidates and promotion state. |
| `/settings/sources` | Source connection and local token management. |

## First navigation

Use a restrained app navigation:

- Sources
- Review
- Activity
- Refinery
- Settings

Do not keep the old prototype tabs for Tasks, Decisions, Opportunities, Rules,
and Risks as primary navigation. Those are context item categories inside a
source, not product-level destinations.

## First data models

Start with normalized client models that match `object-model.md`:

- `ContextSource`
- `ContextItem`
- `ReviewItem`
- `ActivityEvent`
- `Artifact`
- `PromotionCandidate`
- `SyncState`

Keep markdown as the source-owned durable layer. The React app owns normalized
view state, review state, sync state, health signals, and provenance indexes.

## Source connection model

The clean shell should keep these boundaries:

- Repo config describes sources, not tokens.
- Tokens stay local or in the eventual backend secret store.
- Source roles are explicit: `project-context`, `business-context`,
  `asset-refinery`, `canonical-assets`, `docs`, and `app`.
- Source health is derived from review backlog, staleness, drift, sync status,
  and conflict signals.
- Asset-refinery and canonical-assets are sources, but they should not pretend
  to be task dashboards.

## Review queue entry point

The review queue is the first vertical workflow.

It should support:

- new context review
- proposed update review
- staleness review
- gap resolution
- conflict resolution
- promotion review

Each review item needs:

- plain-English summary
- source trace
- current version
- proposed version or detected issue
- action controls: accept, reject, defer, flag, skip
- final status
- write-back or no-write-back result

## Activity and awareness surface

Activity should explain what happened, not ask the user to manage work.

Show:

- source synced
- item added or updated
- stale context detected
- gap detected
- conflict detected
- item vetted, deferred, rejected, superseded, or promoted
- write-back succeeded or failed

Each event should link to the source, item, review, and trace when available.

## State boundaries

Use these boundaries in the first React implementation:

- `config`: loaded source configuration and source role defaults
- `sources`: normalized `ContextSource` records
- `contextItems`: parsed markdown-derived items
- `reviews`: review queue and review detail state
- `activity`: append-only event stream
- `sync`: provider status, pending writes, and errors
- `ui`: filters, selected source, panels, drawers, and local-only view state

Avoid a global task state model. Tasks can appear as context items when a source
contains them, but they should not become the primary app entity.

## Reuse from the prototype

Reuse these lessons:

- source configuration structure from `assets/config/account-projects.json`
- source role vocabulary and profile defaults from `assets/js/projects.js`
- token-storage boundary from `assets/js/shared.js`
- dashboard density patterns that avoid marketing-style layouts
- source settings flow for adding and verifying repos
- health, queue, stale, and activity vocabulary

## Leave behind

Do not carry these prototype choices into the clean shell:

- static HTML page-per-object architecture
- synchronous config loading
- product-level tabs for each markdown file type
- inline script-heavy dashboard state
- emoji or character-based icons as permanent UI
- sandbox-specific naming in banners, footers, or config defaults
- browser localStorage as the long-term sync model

## First implementation slices

1. Create the clean React app scaffold.
2. Add routing, layout, and the primary navigation.
3. Add typed source config loading.
4. Add source portfolio and source detail views.
5. Add normalized context item parsing behind an adapter.
6. Add review queue and review detail shell.
7. Add activity feed from derived events.
8. Add source settings with local token handling.
9. Add health signal derivation.
10. Add write-back queue stubs before real writes.

## Validation checklist

- The first screen shows the source portfolio, not a landing page.
- Primary navigation is Sources, Review, Activity, Refinery, Settings.
- The app can represent multiple source roles without task-dashboard semantics.
- The review queue is visible as a trust-making workflow.
- Token keys are not written to repo config.
- Static prototype code is treated as reference, not source to port wholesale.
- The shell supports context governance and awareness, not work management.

---

*react-app-shell.md - Dovetell - v0.1*
