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
decisions-made: none
decisions-proposed: A later prompt should decide whether to keep direct browser-to-GitHub writes as the long-term model before deeper multi-project work.
tasks-added:
  - task-9a1c2691: Validate dashboard loaded state with GitHub data
  - task-bd02e9a4: Add project-aware drill-in and write target selection
  - task-c8e72b9d: Add editable project source management
tasks-completed:
  - task-a27da8f3: Extract shared CSS and GitHub/auth utilities
  - task-51a43e7c: Extract shared shell and interaction helpers
  - task-ba584083: Establish brand guidance and dashboard visual direction
  - task-a8a8f3a2: Apply brand guidance to dashboard shell
  - task-37e67370: Create dashboard overview route
  - task-1f3704d5: Define private context project source configuration
  - task-bd02e9a4: Add project-aware drill-in and write target selection
  - task-c8e72b9d: Add editable project source management
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
pending: task-9a1c2691 is blocked only on final browser reload with existing public/private repo PATs. No PAT value was exposed, logged, or requested.
next-session-start-here: Reload dashboard/ with the existing project tokens. Confirm no source-warning panel appears, then drill into one item from each project and verify selected-project writes still target the intended repo.
