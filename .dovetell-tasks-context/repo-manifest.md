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
  status: deferred-pending-react-shell-shape
  notes:
    - Future clean product app repo.
    - Do not rename jchromchak/dovetell-tasks into this repo.
    - Creation is deferred until task-08030ad5 shapes the clean React app shell and clarifies what should be born clean versus promoted from prototype history.

- repo: local dovetell-context-workbench
  current-role: app-prototype
  target-role: prototype-workbench
  visibility-intent: working
  status: active-workbench
  notes:
    - Current static dashboard/prototype and context dogfood workspace.
    - Local path: /Users/johnchromchak/projects/dovetell-context-workbench.
    - Moved out of Codex/iCloud-managed Documents storage as step 0 local housing cleanup before repo role cleanup.
    - Treat as prototype/workbench/history, not the clean product app repo.
    - Static pages should become reference/demo artifacts once React shell begins.

- repo: jchromchak/dovetell-ctx-app-private
  current-role: app-context
  target-role: app-context
  visibility-intent: private
  status: active
  notes:
    - Private context repo for the Dovetell app itself.
    - User reported renaming this from jchromchak/dovetell-private on 2026-05-09.
    - SSH access verified at main 740e6ce.

- repo: jchromchak/dovetell-private
  current-role: app-context
  target-role: superseded-by-dovetell-ctx-app-private
  visibility-intent: private
  status: renamed-redirect
  notes:
    - Former private context repo backing app work.
    - GitHub SSH URL still redirects to the renamed repo at 740e6ce.
    - Uses .project-context after migration from .dovetell-tasks-context.

- repo: dovetell-io/dovetell-sandbox
  current-role: business-context
  target-role: archive
  visibility-intent: private
  status: archived
  notes:
    - Originally public as a convenient storage point.
    - User reported making this repo private on 2026-05-09.
    - Connector access now returns 404 while git ls-remote over SSH still reaches main at 9fa8f85, consistent with private repo visibility plus connector installation/access limits.
    - Context files were migrated into private dovetell-gtm at 6c32e01.
    - Private migration note was added at 53fd481.
    - User reported archiving this repo on 2026-05-09.
    - Treat as historical private archive only. Do not use as an active business-context source.
    - Governed by decision-5c8e2a74.

- repo: dovetell-io/dovetell-gtm
  current-role: business-context
  target-role: business-context
  visibility-intent: private
  status: active
  notes:
    - User reported creating this private repo on 2026-05-09.
    - Intended home for Dovetell startup, product, GTM, and operating context.
    - SSH access verified on 2026-05-09.
    - Initial private context scaffold pushed at e68c675.
    - Private sandbox context migrated at 6c32e01.

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

## Local Artifact Intake Routes

route-pattern: /Users/johnchromchak/Downloads/{route}/dovetell-processing

- route: dovetell
  root: /Users/johnchromchak/Downloads/dovetell/dovetell-processing
  owner-domain: Dovetell
  intended-use:
    - Dovetell operating-model visuals
    - repo operating-model visuals
    - promotion-pipeline visuals
    - docs, app, and asset-refinery artifacts
  queue-folders:
    - enqueued
    - done
    - errored

- route: famframe
  root: /Users/johnchromchak/Downloads/famframe/dovetell-processing
  owner-domain: Famframe
  intended-use:
    - Famframe project visuals
    - Famframe-specific context artifacts
    - reusable learnings that may later be tagged for promotion
  queue-folders:
    - enqueued
    - done
    - errored

- route: legacy
  root: /Users/johnchromchak/Downloads/dovetell-processing
  owner-domain: unscoped
  intended-use:
    - Backward-compatible intake only.
    - New artifact drops should use a route-specific folder.
  queue-folders:
    - enqueued
    - done
    - errored

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

## Execution Updates

- execution-2026-05-09T14:24:21Z
  revisionId: rev-ef092435
  scope: task-1f9c6b8a
  status: partial-external-execution
  reported-by: john
  actions-reported:
    - dovetell-io/dovetell-sandbox made private.
    - dovetell-io/dovetell-gtm created.
  verification:
    - GitHub connector _get_repo now returns 404 for dovetell-io/dovetell-sandbox after the reported privacy change.
    - git ls-remote over SSH still reaches dovetell-io/dovetell-sandbox main at 9fa8f85.
    - This is consistent with sandbox being private while the connector lacks private repo installation/access.
    - GitHub connector _get_repo returns 404 for dovetell-io/dovetell-gtm.
    - git ls-remote over SSH returns repository not found for dovetell-io/dovetell-gtm from this environment.
  interpretation:
    - Treat sandbox privacy as externally completed but not connector-visible.
    - Treat dovetell-gtm creation as user-reported and pending Codex access verification.
  next-actions:
    - Update GitHub app/connector or SSH access so Codex can verify and work with private dovetell-gtm.
    - Do not migrate or summarize GTM/business context until dovetell-gtm access is verified.
    - Once access is available, inspect only structure and migration needs first; avoid exposing sensitive GTM details in public repos or broad summaries.

---

## Migration Plans

- migration-2026-05-09T14:44:49Z
  revisionId: rev-4f177bde
  scope: sandbox-to-gtm
  status: completed
  source: dovetell-io/dovetell-sandbox
  target: dovetell-io/dovetell-gtm
  source-structure-observed:
    - README.md
    - business-rules.md
    - changelog.md
    - decisions.md
    - journal.md
    - opportunities.md
    - risks.md
    - tasks.md
  target-structure-proposed:
    - README.md
    - business-rules.md
    - changelog.md
    - decisions.md
    - journal.md
    - opportunities.md
    - risks.md
    - tasks.md
  config-update:
    - assets/config/account-projects.json now treats dovetell-sandbox as private business-context.
    - assets/config/account-projects.json now adds dovetell-gtm as private business-context and sets it as the default project source.
    - assets/config/account-projects.json now treats jchromchak/dovetell-assets-private as asset-refinery rather than project-context.
    - assets/config/account-projects.fixture.json was aligned with the same sandbox/gtm role and visibility changes.
  migration-sequence:
    - 1. Verify Codex or local SSH access to private dovetell-gtm. completed 2026-05-09T14:52:27Z.
    - 2. Initialize target files in dovetell-gtm with matching flat context filenames if they do not exist. completed at dovetell-gtm e68c675.
    - 3. Compare sandbox and gtm path lists before reading contents. completed by filename-only structure checks.
    - 4. Move or curate context object bodies only inside private repos. completed at dovetell-gtm 6c32e01.
    - 5. Preserve object IDs, revisionId fields, and changelog lineage wherever possible. completed by direct private file copy for matching context files.
    - 6. Add a private migration note to sandbox after content is protected. completed at dovetell-sandbox 53fd481.
    - 7. Mark sandbox archive-or-redirect only after gtm contains the needed business-context continuity. status updated to migrated-private-archive-pending.
  data-boundary:
    - This plan was drafted from filenames only.
    - Do not expose GTM/business object contents in public repos, public docs, or broad summaries.
    - If public docs need a reference later, describe only the existence of a private business-context source, not its substance.

---

## Scaffold Updates

- scaffold-2026-05-09T14:52:27Z
  revisionId: rev-d58648cb
  repo: dovetell-io/dovetell-gtm
  status: completed
  commit: e68c675
  files-created:
    - business-rules.md
    - changelog.md
    - decisions.md
    - journal.md
    - opportunities.md
    - risks.md
    - tasks.md
  files-updated:
    - README.md
  summary:
    Initialized the private GTM repo with empty flat context files and a privacy note. No sandbox content was copied in this scaffold step.

---

## Migration Executions

- migration-execution-2026-05-09T14:56:25Z
  revisionId: rev-80db0d78
  scope: sandbox-to-gtm
  status: completed
  source: dovetell-io/dovetell-sandbox
  target: dovetell-io/dovetell-gtm
  source-commit-before-note: 9fa8f85
  target-commit: 6c32e01
  source-note-commit: 53fd481
  files-migrated-by-direct-private-copy:
    - business-rules.md
    - changelog.md
    - decisions.md
    - journal.md
    - opportunities.md
    - risks.md
    - tasks.md
  files-preserved-as-private-reference:
    - README.md copied to dovetell-gtm as README.migrated-from-sandbox.md
  files-left-in-target:
    - README.md kept as the private GTM privacy/source note
  verification:
    - SHA-1 file hashes matched between sandbox and gtm for all seven copied context files before commit.
    - dovetell-gtm pushed migration commit 6c32e01.
    - dovetell-sandbox pushed private migration note commit 53fd481.
  data-boundary:
    - Migration was private-to-private.
    - Sandbox object contents were not printed or summarized in the workbench conversation.
    - Do not copy migrated GTM/business content into public docs or public assets without explicit review and promotion.

---

## Archive Updates

- archive-2026-05-09T15:05:35Z
  revisionId: rev-c5fd4961
  repo: dovetell-io/dovetell-sandbox
  status: archived
  reported-by: john
  verification:
    - GitHub connector still returns 404 because it cannot see the private org repo.
    - git ls-remote over SSH still reaches main at 53fd481, which is expected for a readable archived repository.
    - Archive state itself is user-reported because current tools cannot read private GitHub repo settings.
  role-after-archive:
    - historical-private-archive
  active-successor:
    - dovetell-io/dovetell-gtm
  notes:
    - Do not write new business-context objects to sandbox.
    - Do not use sandbox as an app project source except for historical audit if explicitly needed.

---

## Rename Updates

- rename-2026-05-09T15:14:52Z
  revisionId: rev-07b7f34e
  old-repo: jchromchak/dovetell-private
  new-repo: jchromchak/dovetell-ctx-app-private
  status: completed
  reported-by: john
  verification:
    - git ls-remote reaches jchromchak/dovetell-ctx-app-private main at 740e6ce.
    - git ls-remote for jchromchak/dovetell-private also reaches main at 740e6ce, consistent with GitHub rename redirect behavior.
  config-update:
    - assets/config/account-projects.json now points the app-context source at jchromchak/dovetell-ctx-app-private.
    - assets/config/account-projects.fixture.json now points the fixture app-context source at jchromchak/dovetell-ctx-app-private.
  notes:
    - Historical mentions of jchromchak/dovetell-private in changelog and completed task records were preserved as history.

---

## Deferred Repo Decisions

- defer-2026-05-09T15:19:50Z
  revisionId: rev-8c28de00
  scope: dovetell-ctx-app
  status: deferred
  decision:
    Defer creating or renaming into jchromchak/dovetell-ctx-app until the clean React app shell is shaped.
  rationale:
    The current dovetell-tasks/workbench repo contains useful prototype history, context experiments, artifact ingestion, source configuration, and cleanup records. Renaming it into the product app would drag prototype assumptions into the clean app. The better path is to keep the workbench as prototype/history and start the product app clean once the shell is defined.
  follow-up-task:
    - task-08030ad5

---

*repo-manifest.md - Dovetell - v0.1*
*This is the map of the repo universe, not the content itself.*
