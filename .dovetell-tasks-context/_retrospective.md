# _retrospective.md
# Dovetell - Development Retrospective
# Append-only reflections on how the context management process is working.
# Read before changing context structure, agent handoff patterns, or repo workflow.

---

## 2026-05-09

### What Worked

- Repo-backed markdown made the work transmissible across sessions and tools.
- Stable canonical IDs made the conversation easier to resume.
- The journal and changelog model created a useful event stream.
- Visual concepts acted as product evidence, not just decoration.
- The product guardrail became clearer through use: Dovetell is a context governance layer, not a task manager or work hub.
- Dogfooding exposed real product needs quickly: repo roles, private GTM context, asset refinery, docs-as-code, prompt assembly, review gates, and context health.
- The system is beginning to show a useful memory stack: conversation as working memory, context files as durable memory, changelog as audit trail, rank as pointer index, and commits as cross-tool transport.

### What Did Not Work

- Too much important context still lived in chat before being captured.
- The session handoff became long and implementation-heavy.
- Some objects require too many lookups to understand priority.
- Repo roles evolved faster than repo names.
- Changelog is valuable, but it can become a giant append-only haystack.
- Some files mix canonical content with derived or presentational content.
- The static dashboard helped us move fast, but shared state and source management are now too complex for ad hoc browser JavaScript to scale gracefully.

### What We Learned

- Context transmissibility is the product problem, not just a project-management convenience.
- Agent memory should not be trusted as canonical.
- The system needs more pointers and fewer broad lookups.
- Derived indexes are necessary.
- Review is the trust-making loop.
- Private working context and public sellable output need different homes.
- React should begin when we build the real product shell, not because static HTML is bad.

### What To Do Differently

- Start future sessions by reading pointer files first:
  - rank.md
  - session-handoff.md
  - operating-model.md
  - object-model.md
  - latest changelog.md entries
- End future sessions by updating:
  - changelog.md
  - session-handoff.md
  - rank.md when priorities changed
  - any decision/task/opportunity/risk files touched by the session
- Create or maintain derived index files with explicit rebuild rules so they do not become competing sources of truth.
- Add canonical refs more consistently.
- Keep context cleanup separate from product implementation when possible.
- Treat repo cleanup as migration work, not cosmetic renaming.

### Recommended Next Loop

1. Establish pointer-first continuity files.
2. Clean up repo roles and privacy boundaries.
3. Create a rank index.
4. Start the React shell around shared data shapes.
5. Build the MVP review queue loop.
6. Revisit docs-as-code and asset-refinery promotion after the source/review loop is clearer.

---

*_retrospective.md - Dovetell - v0.1*
*Retrospectives should describe how the process is working, not just what shipped.*
