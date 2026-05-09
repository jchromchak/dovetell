# repo-manifest.md
# Dovetell - Repository Manifest
# Current map of repos, roles, visibility intent, and migration notes.
# Read before repo cleanup, source configuration, docs work, asset promotion, or cross-project audits.

---

## Role Vocabulary

- landing: public marketing or product landing site
- docs: public docs-as-code site
- app: public or product-facing application code
- app-context: private context repo for the app itself
- business-context: private startup, product, GTM, and operating context
- project-context: private or public context for a specific project/product/team
- experiment-context: private context for dogfood or isolated experiments
- asset-refinery: private lab for reusable patterns, prompts, schemas, guides, and templates
- canonical-assets: public or sellable stable asset library
- archive: frozen or superseded repo retained for history

---

## Manifest

- repo: dovetell-io/dovetell
  current-role: landing
  target-role: landing
  visibility-intent: public
  status: active
  notes:
    - Current landing/marketing site.
    - Also contains older app-demo reference files that should be treated as demo evidence, not canonical app architecture.

- repo: dovetell-io/docs
  current-role: docs
  target-role: docs
  visibility-intent: public
  status: planned-active
  notes:
    - Target home for docs-as-code markdown viewer and public human-readable documentation.
    - Should explain promoted assets, product concepts, templates, and operating model.

- repo: dovetell-io/dovetell-assets
  current-role: canonical-assets
  target-role: canonical-assets
  visibility-intent: public-or-sellable
  status: planned-active
  notes:
    - Canonical sellable prompt/context system assets.
    - Should receive promoted outputs from asset-refinery after curation.

- repo: jchromchak/dovetell-assets-private
  current-role: asset-refinery
  target-role: asset-refinery
  visibility-intent: private
  status: active
  notes:
    - Private lab for sellable assets before promotion.
    - Ingests learnings from app-context, business-context, project-context, and experiment-context repos.

- repo: jchromchak/dovetell-ctx-app
  current-role: app
  target-role: app
  visibility-intent: public-or-product
  status: proposed
  notes:
    - Proposed future name for the app formerly known as dovetell-tasks.
    - Current work may continue in the existing app repo until React/product objectives outgrow the prototype.

- repo: local dovetell-context-workbench
  current-role: app-prototype
  target-role: app
  visibility-intent: working
  status: active
  notes:
    - Current static dashboard/prototype and context dogfood workspace.
    - Local path: /Users/johnchromchak/projects/dovetell-context-workbench.
    - Moved out of Codex/iCloud-managed Documents storage as step 0 local housing cleanup before repo role cleanup.
    - Static pages should become reference/demo artifacts once React shell begins.

- repo: jchromchak/dovetell-ctx-app-private
  current-role: app-context
  target-role: app-context
  visibility-intent: private
  status: proposed
  notes:
    - Proposed private context repo for the Dovetell app itself.
    - Likely successor or rename target for current dovetell-private usage.

- repo: jchromchak/dovetell-private
  current-role: app-context
  target-role: app-context
  visibility-intent: private
  status: active
  notes:
    - Current private context repo backing app work.
    - Uses .project-context after migration from .dovetell-tasks-context.

- repo: dovetell-io/dovetell-sandbox
  current-role: business-context
  target-role: business-context
  visibility-intent: private
  status: needs-cleanup
  notes:
    - Originally public as a convenient storage point.
    - Should become private or be replaced by private dovetell-gtm because GTM/business context needs candid working space.
    - Governed by decision-5c8e2a74.

- repo: dovetell-io/dovetell-gtm
  current-role: none
  target-role: business-context
  visibility-intent: private
  status: proposed
  notes:
    - Proposed renamed/replacement home for Dovetell startup, product, GTM, and operating context.

- repo: dovetell-io/dovetell-internal
  current-role: unknown
  target-role: to-audit
  visibility-intent: private
  status: unused-or-unknown
  notes:
    - User mentioned this exists and may be unused.
    - Needs inventory before any rename or migration.

- repo: jchromchak/famframe-private
  current-role: project-context
  target-role: project-context
  visibility-intent: private
  status: active
  notes:
    - Family-first context management project.
    - Feeds learnings into asset-refinery when reusable patterns emerge.

- repo: jchromchak/dogfood-private
  current-role: experiment-context
  target-role: experiment-context
  visibility-intent: private-airgapped
  status: active
  notes:
    - Airgapped dogfood experiment context.
    - Needs transfer-friendly artifact/change-log patterns.

---

## Cleanup Sequence

1. Confirm inventory and access for every repo in this manifest.
2. Mark each repo active, proposed, archive, or unknown.
3. Confirm visibility intent before moving content.
4. Move context objects to the repo whose role owns them.
5. Add README migration notes or redirects where names change.
6. Rename or create repos only after role mapping is stable.
7. Update account/project source config and docs references.

---

## Open Questions

- Should repo-manifest become JSON later for app ingestion, or stay markdown until the model stabilizes?

---

## Inventory Snapshots

- snapshot-2026-05-09T13:05:29Z
  revisionId: rev-14606fe1
  method: git-ls-remote-read-only
  scope: task-1f9c6b8a
  notes:
    - This inventory confirms remote reachability and branch names only; it does not prove intended visibility where GitHub metadata was unavailable.
    - Repository not found can mean nonexistent, renamed, inaccessible, or private without the current key.
    - No repositories were renamed, made private, deleted, or otherwise changed.
  reachable:
    - dovetell-io/dovetell: main at b9c6cce
    - dovetell-io/docs: main at 07749b0
    - dovetell-io/dovetell-assets: main at 6a76bb9
    - jchromchak/dovetell-assets-private: main at 97ebafb
    - jchromchak/dovetell-private: main at 740e6ce
    - dovetell-io/dovetell-sandbox: main at 9fa8f85
    - jchromchak/famframe-private: main at 7d7cfd6
    - jchromchak/dogfood-private: main at 9072a2d
    - jchromchak/dovetell-tasks: main at 1a3c9d9; asset-refinery-overview at 52bc7cf
  not-found-or-no-access:
    - jchromchak/dovetell-ctx-app
    - jchromchak/dovetell-ctx-app-private
    - dovetell-io/dovetell-gtm
    - dovetell-io/dovetell-internal
  preliminary-cleanup-reads:
    - jchromchak/dovetell-tasks is the current app-prototype remote and local workbench source, not yet renamed to dovetell-ctx-app.
    - jchromchak/dovetell-private is reachable and currently fills the app-context role until a rename or successor is chosen.
    - dovetell-io/dovetell-sandbox is reachable and remains the business-context cleanup concern from decision-5c8e2a74.
    - dovetell-io/dovetell-gtm and dovetell-io/dovetell-internal are not actionable without user confirmation because they were not reachable with the current access path.

---

## Cleanup Decisions

- decision-set-2026-05-09T13:26:00Z
  revisionId: rev-8a171e7a
  status: approved-direction
  scope: task-1f9c6b8a
  decisions:
    - dovetell-io/dovetell-sandbox should be made private in place immediately.
    - Create a new private dovetell-io/dovetell-gtm repo for GTM/business context.
    - Start the future app repo clean instead of automatically renaming jchromchak/dovetell-tasks.
    - Lean toward renaming jchromchak/dovetell-private to jchromchak/dovetell-ctx-app-private.
    - Treat /Users/johnchromchak/projects/dovetell-context-workbench as a local cleanup/workbench/dumping-ground repo; if it becomes remote-backed later, it should be a private backup/project repo rather than the product app repo.
    - Keep dovetell-io/dovetell-assets as the public/sellable canonical asset library.
    - Keep jchromchak/dovetell-assets-private as the private asset refinery.
    - Keep dovetell-io/docs as the public docs-as-code home.
    - Archive dovetell-io/dovetell-internal if it exists and is reachable for administration.
    - Push the local context commits to origin/main after recording this planning checkpoint.
  execution-boundary:
    - GitHub connector metadata confirmed dovetell-io/dovetell-sandbox is public and the connected account has admin permission.
    - This environment does not currently expose gh, a shell GitHub token, or connector tools for repo visibility changes, repo creation, repo rename, or archive operations.
    - No GitHub repo administration changes were executed in this session.
  approved-execute-order:
    - 1. Make dovetell-io/dovetell-sandbox private immediately.
    - 2. Create private dovetell-io/dovetell-gtm.
    - 3. Migrate/curate GTM and business context from sandbox into dovetell-gtm only after sandbox privacy is protected.
    - 4. Rename jchromchak/dovetell-private to jchromchak/dovetell-ctx-app-private after confirming app-context continuity.
    - 5. Start a clean app repo later rather than turning dovetell-tasks directly into the app repo.
    - 6. Treat current workbench as local cleanup/backstop and possible future private backup.
    - 7. Archive dovetell-internal after its identity/access/content are confirmed.
    - 8. Update account-projects.json, repo-manifest.md, docs, and README migration notes after actual GitHub repo changes.
  data-boundary:
    - Do not inspect, quote, move, or promote GTM/business content from dovetell-sandbox into any public surface before sandbox is private and dovetell-gtm exists.
    - Do not create public redirects or README summaries that reveal sensitive business context.

---

*repo-manifest.md - Dovetell - v0.1*
*This is the map of the repo universe, not the content itself.*
