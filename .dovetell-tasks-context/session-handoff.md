session: codex-7588c8e2
date: 2026-05-06
source: codex-7588c8e2
scope: Extracted shared CSS, shared GitHub/auth utilities, shared shell interaction helpers, the first brand-aligned shell layer, a dashboard overview route, and configured public/private project dashboard loading from the static pages without changing markdown data formats or existing GitHub write semantics.
files-reviewed:
  - launcher.md
  - .dovetell-tasks-context/rules.md
  - supplied desktop and mobile dashboard mockups
  - tasks/index.html
  - decisions/index.html
  - rules/index.html
  - risks/index.html
  - opportunities/index.html
  - dashboard/index.html
  - index.html
  - manifest.json
  - assets/js/projects.js
files-touched:
  - assets/css/shared.css
  - assets/js/shared.js
  - assets/js/projects.js
  - tasks/index.html
  - decisions/index.html
  - rules/index.html
  - risks/index.html
  - opportunities/index.html
  - dashboard/index.html
  - index.html
  - manifest.json
  - .dovetell-tasks-context/brand.md
  - .dovetell-tasks-context/tasks.md
  - .dovetell-tasks-context/tasks-completed.md
  - .dovetell-tasks-context/changelog.md
  - .dovetell-tasks-context/session-handoff.md
  - .dovetell-tasks-context/brand.md
findings: The first shared layer is now in place. Each page links the shared CSS and shared JavaScript, uses shared GitHub read/write helpers, uses shared PAT storage helpers, and keeps page-specific parsing, rendering, filters, forms, bulk import behavior, and commit messages local.
implementation-update: Shared status, toast, add-sheet, and bulk-sheet helpers were added to assets/js/shared.js. Existing page-level function names were preserved and now delegate to shared helpers so inline handlers and page-specific behavior continue to work.
brand-update: Created .dovetell-tasks-context/brand.md as the source of truth for identity, tone, color, typography, layout, navigation, components, language, responsive requirements, dashboard direction, and implementation guardrails.
shell-update: Applied the brand shell layer through assets/css/shared.css. Existing pages now load shared CSS after legacy inline styles, giving them the new dark token system, desktop sidebar navigation, mobile bottom-nav constraints, compact controls, and token-prompt overflow fixes without changing page scripts or write paths.
dashboard-update: Added dashboard/index.html as the static overview route. It reads existing GitHub markdown sources through shared utilities and renders context health, hot tasks, active risks, recent decisions, opportunities count, and recent changelog entries. index.html and manifest.json now start at dashboard/.
dashboard-validation-update: Improved dashboard loaded-state handling so full auth failure renders an explicit GitHub access error and partial source failures render a warning while preserving available data. Mocked GitHub responses validated hot task, risk, decision, changelog, context health, bad-token, and partial-load paths without using a real PAT.
project-source-update: Added assets/js/projects.js with configured sources for dovetell-io/dovetell-sandbox and jchromchak/dovetell-private. Dashboard loading now aggregates configured project sources, prompts for one local PAT per project, marks public/private sources with globe/lock indicators from configuration, and refreshes every ten minutes.
project-page-update: Added shared project-page initialization so tasks, decisions, rules, risks, and opportunities choose owner/repo/path/token from the selected configured project. Dashboard drill-ins now include the source project in the URL, and item pages inject a compact project selector so create, edit, status, and bulk write flows continue using existing code while writing to the selected project source.
project-settings-update: Added browser-local project source management. Built-in project defaults are exposed separately from locally stored custom projects, and shared project helpers now merge defaults with local overrides. Dashboard includes a Project sources sheet for adding/editing owner, repo, display name, visibility, token key, and context file paths without changing code.
dashboard-live-fix-update: Patched a live dashboard loading-screen crash by exposing shared setStatus/showToast compatibility wrappers from assets/js/shared.js. Added timeout-backed GitHub fetch helpers, cache-busted dashboard shared script URLs, and changed project source failures to render as grouped visible warnings with per-project token replacement forms where relevant.
source-shape-update: Seeded jchromchak/dovetell-private with the configured .dovetell-tasks-context/tasks.md, decisions.md, risks.md, opportunities.md, rules.md, and changelog.md files; pushed private commit 98ff4ff. Added root changelog.md to dovetell-io/dovetell-sandbox; pushed sandbox commit e277d61.
dashboard-visual-update: Replaced the context-health CSS border gauge with a shared-path SVG gauge. This fixes the misaligned teal/gray arcs seen on wider dashboard cards and keeps the gauge visible on tablet/mobile breakpoints.
project-nav-density-update: Started the information-architecture and density pass. Added .dovetell-tasks-context/style-guide.md with fixed H3 guidance sections and traceable bullet references. Added shared sidebar project navigation under Dashboard for desktop layouts, retained the dashboard Projects button as the mobile/manage-project path, and tightened dashboard row text so titles clamp and metadata truncates instead of colliding.
project-nav-closeout-update: Marked task-4d9c0a7e complete after desktop project navigation, add-project access, mobile Projects button behavior, and dashboard density improved. Compact project chips now show visibility icon plus initials with full project details on hover. Queued task-8e2f6b91 to redesign/debug the project source management flow after a manual add-project test failed. Completed task-f3a92c10 by removing the mobile bottom-nav scale hack and restoring full-width equal columns.
project-source-flow-update: Began task-8e2f6b91. The project sheet now presents itself as "Add GitHub project source," generates project ID and token key from owner/repo, defaults new projects to .dovetell-tasks-context/*.md paths, captures a per-project PAT, validates required paths, and verifies repo plus tasks path access before reload. Failed verification remains visible in the sheet and leaves the local project source available for correction.
project-source-flow-closeout: Completed task-8e2f6b91. The redesigned project sheet passed JavaScript parsing, whitespace checks, and a mobile screenshot review. The sheet now keeps GitHub verification failures visible, prevents silent reload failures, and preserves the local source entry for correction without exposing PAT values.
journal-planning-update: Added .dovetell-tasks-context/journal.md as the planned free-flow capture file, updated launcher and seed guidance, added task context blocks for resumability, and recorded decision-6b2f4a91 with the dovetell:global flag so the journal concept can be reconciled for promotion to the shared/global dovetell model.
journal-implementation-update: Started task-e7c3a9d4. Journal is now a configured per-project context path. The dashboard can load journal entries, tolerate missing journal.md as empty, render a desktop right rail with project selector, composer, expandable cards, and append new entries to GitHub, creating journal.md on first write when needed.
journal-reconciliation-update: Continued task-e7c3a9d4 by choosing tasks as the first manual reconciliation action. Expanded journal cards now expose a create-task action that appends a task to the selected project's tasks.md and records the created task ID in the journal entry actions field.
journal-mobile-update: User agreed with mobile journal as a dashboard-launched sheet and with an initial create-item workflow. Dashboard now shows Open journal on mobile, opens a bottom sheet with selector/composer/cards, and uses a create-task preview sheet with editable title and priority before writing.
context-commit-decision-update: User decided that context updates should be committed at each meaningful run/checkpoint so external active-project feeds can consume the repo as the current project event stream. Recorded decision-90e1768a with dovetell:global.
dashboard-health-update: Added a tooltip explaining the Context Health formula and added the source project badge to the Last Change panel.
dashboard-refresh-update: Dashboard already auto-refreshed, but at ten minutes with generic status text. Changed refresh cadence to five minutes and updated the upper-right status to show Updating, Connected, or Disconnected with the last local update time.
activity-feed-update: Replaced the dashboard Changelog panel with a derived Activity Feed that combines recent changelog entries, journal notes, and dated tasks across configured projects. The feed is read-only and uses existing loaded markdown data.
project-controls-json-update: Added assets/config/account-projects.json as the repo-backed default source for account and project controls. assets/js/projects.js now loads the JSON synchronously to preserve the existing Dovetell.allProjects API, falls back to embedded defaults if the file is unavailable, and continues to merge browser-local custom project additions through shared helpers. PAT values remain local-only. The project sheet copy now explains that local additions should eventually be promoted to account-projects.json.
project-json-promotion-update: Added shared helpers to build a canonical account-projects.json from repo defaults plus browser-local project additions and overrides. Dashboard Project sources now includes a Repo JSON promotion panel with Preview JSON and Copy JSON actions. The generated payload includes project metadata, context paths, and token keys but never token values. The project settings list now labels default, local, and local override sources. assets/js/projects.js also normalizes loaded config JSON before exposing it globally.
context-awareness-direction-update: User clarified Dovetell should become a context management awareness system, not primarily a project operating system or task manager. It should answer what has been happening behind the scenes across projects, keep tasks alive as one signal, and help reconcile activity into shared stable knowledge. Future persistence may move toward Postgres where appropriate. User prefers a standard context folder like .dovetell-context or .project-context over the current project-specific .dovetell-tasks-context name.
agnostic-context-update: User clarified the context system should be agnostic, so .project-context is the preferred folder direction over a Dovetell-branded name. Next conceptual direction is easier auditing between projects in a multi-team view, with attention to whether truth is maintained or appended to the primary role. User plans to upload concepts before deeper implementation.
activity-feed-bugfix-update: User reported duplicate Activity Feed rows titled "Task title." Root cause was dashboard parseTasks reading the schema example before ## Tasks in each project tasks.md, then treating placeholder created/updated dates as activity. dashboard/index.html now parses tasks after ## Tasks, filters activity dates to real YYYY-MM-DD values, and tolerates spaces after task metadata colons.
project-config-hardening-update: Removed real project profile objects from assets/js/projects.js so production profiles live in assets/config/account-projects.json only. Added assets/config/account-projects.fixture.json as an explicit test/demo config that can be loaded via ?projectConfig=... or DOVETELL_PROJECT_CONFIG_URL. The add-project flow now defaults context paths to .project-context/*.md and the copy reflects the agnostic convention.
decisions-made:
  - decision-6b2f4a91: Add project journal as a global dovetell concept candidate
  - decision-90e1768a: Commit context updates at each meaningful run checkpoint
  - decision-55bcfc5c: Store default account and project controls in repo JSON
  - decision-2a8f4d91: Treat Dovetell as context management awareness
  - decision-7c91d4a2: Prefer agnostic project context conventions
decisions-proposed: A later prompt should decide whether to keep direct browser-to-GitHub writes as the long-term model before deeper multi-project work.
tasks-added:
  - task-9a1c2691: Validate dashboard loaded state with GitHub data
  - task-bd02e9a4: Add project-aware drill-in and write target selection
  - task-c8e72b9d: Add editable project source management
  - task-e7c3a9d4: Add project journal capture and reconciliation flow
  - task-2c4a9f18: Promote local project sources into repo JSON
  - task-9f1a62d0: Refactor project config boot to async loading
  - task-6e8d4b25: Add create-decision reconciliation from journal
  - task-d7a3e014: Add Activity Feed filters by project and object type
  - task-4dd0b71e: Export active-project tracker feed
  - task-bf4d0a73: Standardize context folder naming
  - task-c9e2fb64: Design multi-team context audit view
tasks-completed:
  - task-a27da8f3: Extract shared CSS and GitHub/auth utilities
  - task-51a43e7c: Extract shared shell and interaction helpers
  - task-ba584083: Establish brand guidance and dashboard visual direction
  - task-a8a8f3a2: Apply brand guidance to dashboard shell
  - task-37e67370: Create dashboard overview route
  - task-1f3704d5: Define private context project source configuration
  - task-bd02e9a4: Add project-aware drill-in and write target selection
  - task-c8e72b9d: Add editable project source management
  - task-8e2f6b91: Revisit project source management flow
  - task-9a1c2691: Validate dashboard loaded state with GitHub data
  - task-e7c3a9d4: Add project journal capture and reconciliation flow
  - task-a6541f36: Add dashboard recent activity feed
  - task-55bcfc5c: Introduce repo-backed account and project controls JSON
  - task-2c4a9f18: Promote local project sources into repo JSON
  - task-e3f8c2b0: Fix Activity Feed schema task leak
  - task-8bf12e44: Remove embedded project profiles from JavaScript
rules-added: none
boundary-conditions-triggered:
  - data-boundary-considered: PAT handling was refactored into shared utilities without exposing, logging, transmitting, or changing any stored PAT value.
validation:
  - JavaScript parse check passed for assets/js/shared.js and all five page scripts.
  - git diff --check passed for touched files.
  - Local browser token-prompt verification passed for tasks, decisions, rules, risks, and opportunities.
  - Headless Chrome desktop viewport check passed for shared asset links, token prompt, topbar, filter bar, visible main content, and no console errors on all five pages.
  - Headless Chrome mobile viewport check passed for token prompt, visible shell, no console errors, and no horizontal overflow on all five pages after tightening status-row styles.
  - Re-ran Headless Chrome desktop and mobile viewport checks after extracting shell helpers; all five pages rendered the token prompt, topbar, filter bar, and no console errors.
  - Re-ran JavaScript parse checks and git diff whitespace checks after applying the brand shell.
  - Captured local file-render screenshots for desktop and mobile to inspect the shared shell. Desktop sidebar rendered correctly; mobile token prompt and bottom-nav constraints were tightened after visual review.
  - JavaScript parse check passed for dashboard/index.html, assets/js/shared.js, and all existing page scripts.
  - git diff --check passed after dashboard route and navigation updates.
  - Served dashboard route rendered the no-token shell on desktop and mobile through headless Chrome. Desktop fit looked good; mobile no-token shell was tightened for nav and token copy. Live authenticated data rendering still needs a real local PAT check.
  - Mocked loaded-state validation passed for dashboard summaries, auth failure, and partial source failure.
  - Mocked multi-project dashboard validation passed for public data, private data, public marker, private marker, missing token prompts, and partial warning states.
  - JavaScript parse check passed for assets/js/projects.js, dashboard/index.html, assets/js/shared.js, and all existing page scripts.
  - In-process project mapping validation passed for tasks, decisions, rules, risks, and opportunities across public/private source selections and per-project token storage.
  - In-process project settings validation passed for local project add, default context path merge, default project override, and local project delete behavior.
  - In-app browser reload passed after the live dashboard loading fix: dashboard rendered sandbox data and showed grouped source warnings instead of staying on the loading screen.
  - Repo source-shape fixes pushed for the known missing files: private context folder at jchromchak/dovetell-private@98ff4ff and sandbox changelog at dovetell-io/dovetell-sandbox@e277d61.
  - In-app browser visual check passed for the SVG context-health gauge alignment after replacing the CSS border arc.
  - JavaScript parse check passed after adding sidebar project navigation and dashboard row density rules. Local browser confirmed project navigation is present in the DOM; current in-app browser width uses mobile bottom navigation, so desktop sidebar should be visually rechecked at a wide viewport.
  - JavaScript parse check and git diff whitespace check passed after redesigning the project source sheet. Headless Chrome mobile screenshot confirmed the add-project sheet opens with stacked fields rather than a clipped two-column form.
  - Context-only journal planning update completed; no app code was changed.
  - User confirmed the pushed project-source flow worked with a real project/PAT.
  - JavaScript parse checks passed for dashboard/index.html inline scripts, assets/js/shared.js, and assets/js/projects.js after journal reconciliation changes.
  - git diff --check passed after journal reconciliation changes.
  - Headless Chrome desktop screenshot at 1440x960 confirmed the dashboard token-prompt/shell still fits cleanly without PATs.
  - Mocked journal create path passed: missing journal.md seeds the file, appends the entry, writes with sha:null, and parses back.
  - Mocked journal-to-task reconciliation passed: create-task writes tasks.md, then writes journal.md with the created task ID in actions.
  - Mocked create-task preview flow passed: sheet opens, custom task title and priority are applied, tasks.md is written, and journal.md receives the created task ID.
  - Headless mobile screenshot confirmed the Open journal trigger is visible without colliding with the bottom nav, and the journal sheet opens with selector, composer, and journal cards.
  - JavaScript parse checks and git diff whitespace checks passed after latest-change project badge and context health tooltip.
  - JavaScript parse checks and git diff whitespace checks passed after five-minute refresh and local last-update status changes.
  - User completed the live browser/PAT smoke test: wrote to the journal, refreshed and saw the note, created a task, and saw the task appear in the task list.
  - JavaScript parse checks, git diff whitespace checks, and a mocked mixed feed order/render path passed after adding Activity Feed.
  - JavaScript parse checks, JSON parsing, git diff whitespace checks, and a headless dashboard render passed after adding repo-backed project controls. The local server log confirmed /assets/config/account-projects.json returned 200.
  - JavaScript parse checks passed for assets/js/projects.js, assets/js/shared.js, and the dashboard inline script after repo JSON promotion changes.
  - A VM-based helper test exported repo defaults plus a simulated local project into valid account-projects.json and confirmed no token-like value was leaked.
  - git diff --check passed after repo JSON promotion changes.
  - Headless Chrome rendered the dashboard token prompt after the project config normalization and promotion UI changes.
  - Dashboard inline script parse, git diff whitespace check, and a parser regression harness passed after the Activity Feed schema task leak fix.
  - Project config override harness passed for default account-projects.json and fixture account-projects.fixture.json. assets/js/projects.js parse and dashboard inline script parse passed after removing embedded project profiles.
pending: Six active tasks remain open: task-bf4d0a73, task-c9e2fb64, task-9f1a62d0, task-6e8d4b25, task-d7a3e014, and task-4dd0b71e.
next-session-start-here: Pause before deeper implementation if the user is still thinking or uploading concepts. The strongest next slice is task-bf4d0a73, standardizing around .project-context, followed by task-c9e2fb64 after the user's concepts arrive. Continue committing context files with meaningful checkpoints.
