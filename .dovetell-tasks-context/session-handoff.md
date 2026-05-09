session: codex-53476bae
closeout: 2026-05-09T12:18:01Z
command: ctx:close/manual-v0.1
scope: Step 0 local housing cleanup before Dovetell repo role cleanup.
context-loaded:
  - launcher.md
  - .dovetell-tasks-context/commands.md
  - .dovetell-tasks-context/rank.md
  - .dovetell-tasks-context/session-handoff.md
  - .dovetell-tasks-context/repo-manifest.md
  - .dovetell-tasks-context/operating-model.md
  - .dovetell-tasks-context/object-model.md
  - .dovetell-tasks-context/changelog.md
files-updated:
  - .dovetell-tasks-context/repo-manifest.md
  - .dovetell-tasks-context/changelog.md
  - .dovetell-tasks-context/session-handoff.md
local-move:
  from: /Users/johnchromchak/Documents/Codex/2026-05-05/i-d-like-to-connect-to/dovetell-tasks
  intermediate: /Users/johnchromchak/Documents/projects/dovetell-context-workbench
  to: /Users/johnchromchak/projects/dovetell-context-workbench
current-state:
  - The local Dovetell workbench now lives at /Users/johnchromchak/projects/dovetell-context-workbench.
  - The repo remains on branch main with origin git@github.com:jchromchak/dovetell-tasks.git.
  - This was intentionally a housing cleanup step, not the repo role split or privacy cleanup itself.
  - The Documents/projects location was avoided because Documents may be iCloud-managed and caused git operations to hang.
  - The latest architectural truth remains: Dovetell is a context governance layer, not a task manager or work hub.
validation:
  - Confirmed the moved folder is still the git toplevel.
  - Confirmed branch main.
  - Confirmed origin remote still points to git@github.com:jchromchak/dovetell-tasks.git.
  - Confirmed the old Codex-session path is no longer the active repo location.
  - Confirmed git status responds quickly from /Users/johnchromchak/projects/dovetell-context-workbench.
  - Removed the old /Users/johnchromchak/Documents/projects/dovetell-context-workbench duplicate after the local projects copy was verified and committed.
top-next:
  - task-1f9c6b8a: Repo role cleanup and reconciliation across Dovetell-related repos.
  - task-9f1a62d0: Refactor project config boot to async loading.
  - task-8a7d2c19: Convert the rank command from documented pattern into repeatable workflow.
  - task-c9e2fb64: Design the multi-team context audit view after concept uploads.
open-risks:
  - The repo/domain cleanup is still conceptually ahead of the app implementation.
  - The Google Drive artifact flow is currently local-sync based; a connector/API upload flow is not yet implemented.
pending: Step 0 local housing cleanup is complete. Step 1 repo role cleanup can now begin from the stable local workbench path.
next-session-start-here: Start in /Users/johnchromchak/projects/dovetell-context-workbench and run ctx:start. The strongest next slice is task-1f9c6b8a: inventory Dovetell repos, confirm repo roles and visibility intent, and plan cleanup without moving sensitive business or GTM context into public spaces. Keep rule-6b1f2c9d in mind: Dovetell is the context governance layer, not the work hub.
