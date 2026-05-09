# visual-concepts.md
# Dovetell — Visual Product Concepts
# Captures rendered concept images and the product meaning they imply.
# Read when shaping UX, IA, onboarding, review queues, repo architecture, or product positioning.

---

## Schema

- concept-[8char]
  title:
  status: active|superseded
  source: user-rendered-image | codex
  created: YYYY-MM-DDTHH:mm:ssZ
  updated: YYYY-MM-DDTHH:mm:ssZ
  flags:
    - dovetell:global

  visual-summary:
    [What the concept image shows.]

  product-meaning:
    [What product truth or direction this concept encodes.]

  interface-implications:
    - [Specific UI/UX implication]

  architecture-implications:
    - [Specific system/data implication]

  guardrails:
    - [Scope boundary or design rule reinforced by this concept]

  references:
    - decision-[8char]
    - rule-[8char]

---

## Concepts

- concept-1a7c3d9e
  title: Team context foundation onboarding
  status: active
  source: user-rendered-image
  created: 2026-05-09T00:29:04Z
  updated: 2026-05-09T00:29:04Z
  flags:
    - dovetell:global

  visual-summary:
    A first-run onboarding flow asks a team to define its project profile, connect a repository, seed initial context, and review before initialization. The setup frames Dovetell around a repo-owned context folder and common seed categories such as decisions, assumptions, definitions, and policies.

  product-meaning:
    Dovetell should start by helping a team establish a context foundation, not by creating a task workspace. The first meaningful act is connecting a source of truth and creating shared context categories that future agents and humans can query, vet, and maintain.

  interface-implications:
    - Onboarding should make repository ownership and context folder creation explicit.
    - Seed categories should be simple and team-readable: decisions, assumptions, definitions, policies.
    - The setup flow should explain that Dovetell reads and writes context files in the user's repo.
    - Team size and tool stack can guide defaults without turning Dovetell into an all-in-one workspace.

  architecture-implications:
    - The connected repo remains the durable content store for markdown context.
    - Dovetell stores identity and state, not the team's actual context content.
    - Initialization should create or validate a scoped context folder before other workflows depend on it.

  guardrails:
    - Keep setup focused on context foundation and source-of-truth connection, not project management configuration.

  references:
    - decision-9d2e6a41
    - rule-6b1f2c9d

- concept-4e8b2f10
  title: Context console and portfolio overview
  status: active
  source: user-rendered-image
  created: 2026-05-09T00:29:04Z
  updated: 2026-05-09T00:29:04Z
  flags:
    - dovetell:global

  visual-summary:
    The app shows a context console with health, decisions, assumptions, definitions, policies, recent activity, review queue, and project selection. A portfolio view lists multiple projects with context health, queue counts, last activity, and review actions.

  product-meaning:
    Dovetell's primary dashboard should surface the health and trust state of shared context across sources. The center of gravity is not work throughput; it is whether context is current, vetted, stale, drifting, or waiting for review.

  interface-implications:
    - Context health should be visible at both project and portfolio levels.
    - Queue count is a governance signal, not a workload metric.
    - Recent activity should show what changed, where it changed, who changed it, and whether it is vetted.
    - Context categories should be first-class surfaces, especially decisions, assumptions, definitions, and policies.

  architecture-implications:
    - Context entries need status, vetting state, source trace, timestamps, and actor metadata.
    - Portfolio views need normalized status across heterogeneous context sources.
    - Health scoring should be explainable and grounded in context freshness, queue age, staleness, and vetting.

  guardrails:
    - Do not let the queue become a task assignment system; keep it framed as context review and trust maintenance.

  references:
    - decision-4f7b9c2e
    - decision-9d2e6a41
    - rule-6b1f2c9d

- concept-7f2d91a6
  title: Repo-owned context and Dovetell-shaped rendering
  status: active
  source: user-rendered-image
  created: 2026-05-09T00:29:04Z
  updated: 2026-05-09T00:29:04Z
  flags:
    - dovetell:global

  visual-summary:
    A diagram shows a customer-owned repository containing a context folder with markdown files. Dovetell reads scoped context, parses markdown into structured context, shapes it into prompts, renders it for developers and non-technical users, and writes decisions back. The side panel states that Dovetell stores identity and state only, not content.

  product-meaning:
    This is a core architecture promise: context stays in the customer's repo; Dovetell shapes it, does not own it. The same context should be useful to developer tools and non-technical stakeholders through different renderings.

  interface-implications:
    - UI should show source files and trace information clearly.
    - Non-technical views should render plain-English meaning with source badges.
    - Developer-tool integrations should answer questions with source traces and vetting status.
    - The product should repeatedly reinforce "your context stays in your repo."

  architecture-implications:
    - Token scope should be limited to the context folder when possible.
    - Dovetell state should be limited to identity, queue state, vet history, sync timestamps, and benchmarking answers.
    - Content parsing should preserve source file and line references.
    - Rendering should be a layer above repo-owned markdown, not a replacement for markdown.

  guardrails:
    - Do not ingest or store customer markdown content in Dovetell as the canonical truth.

  references:
    - decision-9d2e6a41
    - rule-6b1f2c9d

- concept-3c0a5b72
  title: Architecture blueprint from connect to monitor
  status: active
  source: user-rendered-image
  created: 2026-05-09T00:29:04Z
  updated: 2026-05-09T00:29:04Z
  flags:
    - dovetell:global

  visual-summary:
    A service blueprint maps six stages: connect, import, extract, review, query, and monitor. It separates customer actions, frontstage system actions, backstage system actions, support processes, and physical evidence. It emphasizes that truth is made in review and value is delivered in query.

  product-meaning:
    The product flow is a context governance loop. Raw context becomes useful only after extraction, classification, review, and acceptance. Querying is valuable because the response carries source and trace. Monitoring keeps context from drifting.

  interface-implications:
    - Review should be treated as the truth-making moment.
    - Query surfaces should include source trace and vetting status.
    - Monitor surfaces should show drift, staleness, and queue health.
    - Physical evidence should include token confirmation, upload success, queue state, accepted status, MCP response, drift score, and stale flags.

  architecture-implications:
    - The system needs extraction, confidence scoring, queueing, MCP serving, query indexing, drift scoring, and staleness monitoring.
    - BYOK/local inference should be supported in the model; Dovetell should not silently call external models on the user's behalf.
    - The context folder plus git remains the source of content truth.

  guardrails:
    - Dovetell may coordinate the review loop, but should not become the execution system that owns all downstream work.

  references:
    - decision-9d2e6a41
    - rule-6b1f2c9d

- concept-9e4f6d28
  title: Competitive position as official but accessible context review
  status: active
  source: user-rendered-image
  created: 2026-05-09T00:29:04Z
  updated: 2026-05-09T00:29:04Z
  flags:
    - dovetell:global

  visual-summary:
    A positioning map compares Dovetell against GitHub PRs, Jira/Linear, Teams/SharePoint, Confluence, Notion, Google Docs, Slack, and DocuSign. The axes are how official it is and who can use it. Dovetell is positioned as rigorous/open and accessible/non-technical.

  product-meaning:
    Dovetell's gap is not "another place to write things." It is where decisions get made official with plain-English review, full vet history, and low training burden. The competitive wedge is combining auditability with accessibility.

  interface-implications:
    - Review interactions should be simple enough for non-technical stakeholders.
    - Audit trail and vet history should be visible and trustworthy.
    - Approval should feel lightweight, not like legal signing or developer-only pull requests.

  architecture-implications:
    - Every accepted context change needs provenance, reviewer, timestamp, source, and status.
    - Rejected/deferred states matter as much as accepted states for auditability.

  guardrails:
    - Avoid building a generic wiki or doc editor; the value is official context review and traceable acceptance.

  references:
    - decision-9d2e6a41
    - rule-6b1f2c9d

- concept-5b8a13c4
  title: Non-technical review queue
  status: active
  source: user-rendered-image
  created: 2026-05-09T00:29:04Z
  updated: 2026-05-09T00:29:04Z
  flags:
    - dovetell:global

  visual-summary:
    Mobile and desktop review concepts show queue items for policy and definition changes. Users can approve with "Looks right," flag with "Something's off," or skip. A desktop side diagram shows current truth, proposed change, unvetted queue, review gate, accepted/rejected paths, and new truth written back to a source file.

  product-meaning:
    The review queue is the heart of Dovetell's human-in-the-loop trust model. It turns proposed context changes into vetted truth through plain-language review rather than developer-only pull request mechanics.

  interface-implications:
    - Review cards should show category, status, plain-English summary, source file, author, timestamp, and current/proposed differences when applicable.
    - Primary actions should stay simple: accept, flag, skip/defer.
    - Mobile review matters because business reviewers may approve context outside developer workflows.
    - The UI should make it clear that accepting changes writes or confirms truth, not just dismisses a notification.

  architecture-implications:
    - Queue items need types such as decision, assumption, definition, and policy.
    - Queue items need accepted, rejected, deferred, unvetted, and stale states.
    - The system needs diff support for proposed updates to existing context.
    - Accepted items should update the repo-owned context file with provenance.

  guardrails:
    - The queue is for context approval, not for assigning execution tasks.

  references:
    - decision-9d2e6a41
    - rule-6b1f2c9d

- concept-8d42f6a1
  title: Context import and extraction preview
  status: active
  source: user-rendered-image
  created: 2026-05-09T02:54:00Z
  updated: 2026-05-09T02:54:00Z
  flags:
    - dovetell:global

  visual-summary:
    A context import screen lets users upload markdown, text, PDFs, Notion exports, or Confluence exports. The extraction preview classifies candidate items as decisions, assumptions, or uncertain definitions, shows confidence scores, routes items to an unvetted queue, and exposes extraction settings such as auto-classification, low-confidence flagging, and local/BYOK inference model selection.

  product-meaning:
    Import is not just file upload. It is the intake stage where raw documents become candidate context with type, confidence, review state, and source trace. The product promise is strongest when every imported item is useful but not automatically authoritative.

  interface-implications:
    - Import should show candidate extraction in real time or near real time.
    - Confidence and classification should be visible before review.
    - Low-confidence items should be flagged without blocking the whole import.
    - Users should be able to choose local, BYOK, or custom inference paths.

  architecture-implications:
    - Extraction needs source file, confidence, inferred type, and queue routing metadata.
    - Imported items should default to unvetted until reviewed.
    - The system should support local and BYOK inference without assuming hosted model calls.

  guardrails:
    - Imported context is candidate truth, not official truth.

  references:
    - decision-9d2e6a41
    - rule-6b1f2c9d

- concept-2f9b70c4
  title: Prompt assembly from personal, team, conversation, and base context
  status: active
  source: user-rendered-image
  created: 2026-05-09T02:54:00Z
  updated: 2026-05-09T02:54:00Z
  flags:
    - dovetell:global

  visual-summary:
    A prompt assembly diagram states that prompts are assembled, not written, and context is pulled, not remembered. Personal prompts, team prompts, conversation context, and the living context base combine into a Dovetell prompt output that is delivered into the user's development flow. Code changes then feed back as unvetted context updates.

  product-meaning:
    Dovetell can be positioned as the assembly layer between static prompt libraries and governed living context. The user should not have to manually remember which prompt fragments, team conventions, current decisions, and recent conversations matter for a work session.

  interface-implications:
    - The product should show which context layers are being assembled.
    - Prompt outputs should identify personal, team, conversation, and context-base ingredients.
    - Feedback from code and source updates should return as unvetted candidates.

  architecture-implications:
    - Prompt assembly requires context selection, ranking, and provenance.
    - Personal and team prompt sources may be distinct from project context sources.
    - Conversation-derived context should be tracked as candidate context until reviewed.

  guardrails:
    - Prompt assembly should use governed context instead of becoming an unmanaged prompt snippet library.

  references:
    - decision-9d2e6a41
    - rule-6b1f2c9d

- concept-6c81d3b7
  title: Dovetell as context layer in the agent harness
  status: active
  source: user-rendered-image
  created: 2026-05-09T02:54:00Z
  updated: 2026-05-09T02:54:00Z
  flags:
    - dovetell:global

  visual-summary:
    A positioning diagram places Dovetell between model providers, agent tools, memory/state, and the codebase. A market evolution diagram moves from static docs to DIY prompt libraries, then Dovetell as context base plus prompt assembly, and eventually toward a queryable context graph.

  product-meaning:
    Dovetell is not the model and not the coding tool. It is the context layer that makes agentic development safer, more consistent, and more team-aware. The market thesis is that teams will move from static docs and personal prompt libraries toward governed, queryable context.

  interface-implications:
    - Integrations should emphasize compatibility with existing coding tools rather than replacement.
    - Context graph language can be used as a future-state direction, not an immediate MVP requirement.
    - Product messaging should make the harness position clear: Dovetell sits between tools and source-of-truth context.

  architecture-implications:
    - Near-term storage can remain normalized and file-backed while preserving graph-like relationships.
    - Future graph projections should focus on decision traces, lineage, conflicts, and impact analysis.

  guardrails:
    - Do not overbuild the future context graph before the source, review, and assembly loops are solid.

  references:
    - decision-9d2e6a41
    - rule-6b1f2c9d

- concept-1e5a9b2d
  title: MVP prompt assembly with integrations
  status: active
  source: user-rendered-image
  created: 2026-05-09T02:54:00Z
  updated: 2026-05-09T02:54:00Z
  flags:
    - dovetell:global

  visual-summary:
    An MVP framework shows personal local prompts, team shared prompts, conversation context, a living context base, integrations, assembled prompts, code work, push code, and unvetted source document updates. It separates available-today components from coming-soon integrations using filled and dashed boxes.

  product-meaning:
    The MVP can start by assembling context from already-owned files and delivering better prompts into existing workflows. Automation and deep integrations can come later, as long as unvetted updates remain visible and reviewable.

  interface-implications:
    - The app should distinguish live capabilities from future integrations.
    - "Start here" can be a focused workflow: configure personal prompts, team prompts, and context base, then assemble.
    - Integration panels should clarify that source updates remain unvetted until reviewed.

  architecture-implications:
    - Prompt assembly can be implemented before full import automation.
    - Integrations should be adapters around the same context_source and context_item model.
    - Source document updates need status and provenance even when created automatically.

  guardrails:
    - Do not imply automation makes context authoritative without review.

  references:
    - decision-9d2e6a41
    - rule-6b1f2c9d

- concept-4b7c0e91
  title: Platform layers for governed prompts and living context
  status: active
  source: user-rendered-image
  created: 2026-05-09T02:54:00Z
  updated: 2026-05-09T02:54:00Z
  flags:
    - dovetell:global

  visual-summary:
    A platform-layer diagram shows a personal layer, team layer, Dovetell platform, integrations, development workflow, git hosting, and document updates. It frames Dovetell as a single source of truth with conversations becoming prompts, prompts referencing a living markdown context base, and unvetted document updates feeding back into governance.

  product-meaning:
    Dovetell's platform promise is governed prompts plus living context. Better code is an outcome, but the mechanism is team alignment, traceable context, and review-before-authority.

  interface-implications:
    - The app should help users see how personal, team, and platform layers interact.
    - Benefits should map to governed by default, team alignment, living context, better code, and safe by design.
    - Source update states should be visible in integration flows.

  architecture-implications:
    - Personal prompt repos and team prompt repos may become first-class source types or source profiles.
    - Document updates from code workflows should be modeled as unvetted context changes.

  guardrails:
    - "Single source of truth" should mean coordinated truth state, not Dovetell owning all customer content.

  references:
    - decision-9d2e6a41
    - rule-6b1f2c9d

- concept-0a63d8ef
  title: Code context flow with external integrations
  status: active
  source: user-rendered-image
  created: 2026-05-09T02:54:00Z
  updated: 2026-05-09T02:54:00Z
  flags:
    - dovetell:global

  visual-summary:
    A flow diagram shows the user coding in a preferred environment, personal prompts, local context, team prompts, conversation context, context base, assembled context, integrations such as GitHub, GitLab, Slack, Linear, and Notion, and source document updates that require review and merge before becoming authoritative.

  product-meaning:
    The product should meet developers where they already work while preserving a governed feedback loop from code and collaboration back into context. The tag line "Your code. Your context. Your team's truth." sharpens the human/team positioning.

  interface-implications:
    - Coding environment and integration surfaces should feel connected but not mandatory.
    - The assembled context surface should make source contribution understandable.
    - Review and merge requirements should be explicit in integration-driven updates.

  architecture-implications:
    - Integrations should write candidate updates with status and source, not silently mutate accepted context.
    - Local context can be part of the assembly path while remaining distinct from team truth.

  guardrails:
    - Keep the authority boundary clear: unvetted updates are useful signals, not truth.

  references:
    - decision-9d2e6a41
    - rule-6b1f2c9d

---

## Cross-Concept Product Truths

- Dovetell should make shared context official without making the user live inside Dovetell.
- The connected repository is the durable truth store for markdown content.
- Dovetell stores identity and state, not canonical customer context content.
- Dovetell assembles prompts from personal, team, conversation, and context-base layers rather than asking users to manually remember every prompt fragment.
- Dovetell sits inside the agent harness as the context layer between models, coding tools, memory/state, and the codebase.
- Review is where truth is made; query is where value is delivered; monitor keeps truth from decaying.
- Import and extraction create candidate context; they do not make context authoritative by themselves.
- The primary context categories are decisions, assumptions, definitions, and policies, with tasks/journal acting as supporting reconciliation surfaces.
- The review queue is a trust mechanism, not a work-management queue.
- The competitive wedge is official plus accessible: audit-grade enough to trust, simple enough for non-technical stakeholders.
- The architecture should support developer tools, non-technical views, and future MCP/query surfaces over the same source-traced context.
- A future context graph may be valuable, but the near-term product should first harden sources, review, assembly, provenance, and sync.

---

*visual-concepts.md — Dovetell — v0.1*
*Rendered concepts are product evidence. Preserve them as context, not decoration.*
