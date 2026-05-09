# rank.md
# Dovetell - Current Priority Index
# Derived pointer index for what matters next.
# Rebuild with ctx:rank. Do not treat as a canonical source of truth.

generated: 2026-05-09T15:19:50Z
method: ctx:rank/manual-v0.1
scope: dovetell-app-and-context-system
status: derived

---

## Top Action Points

1. task-08030ad5
   reason: The repo cleanup deliberately deferred dovetell-ctx-app creation until the clean React shell is shaped; this is now the next product-definition blocker.
   refs:
     - decision-9d2e6a41
     - rule-6b1f2c9d
     - operating-model.md
     - object-model.md

2. task-9f1a62d0
   reason: Async source config is needed before source management and React shell work can scale beyond synchronous static loading.
   refs:
     - decision-55bcfc5c

3. task-8a7d2c19
   reason: The rank index reduces lookup cost and makes future context sessions easier to resume.
   refs:
     - opp-4c2e9a71
     - context-transmissibility.md

4. no-task-review-queue-mvp
   reason: Review is the trust-making loop and should become the first real vertical product workflow.
   refs:
     - demo-review-2f5e8c77
     - object-model.md
     - operating-model.md

5. no-task-repo-manifest-json
   reason: Repo role mapping should eventually become app-ingestible data, but markdown is enough while the React shell shape is still moving.
   refs:
     - repo-manifest.md
     - task-08030ad5

6. no-task-import-extraction
   reason: Import and extraction create candidate context and connect raw documents to the review queue.
   refs:
     - concept-8d42f6a1
     - object-model.md

7. no-task-prompt-assembly-mvp
   reason: Prompt assembly is a core product wedge: personal + team + conversation + context base, with provenance.
   refs:
     - concept-2f9b70c4
     - concept-1e5a9b2d
     - operating-model.md

8. opp-7d3a1f5b
   reason: Docs-as-code is central to sellable assets and human-readable explanation, but should follow source/review model clarity.
   refs:
     - operating-model.md

9. task-c9e2fb64
    reason: Multi-team audit matters for the broader product thesis, but should build on repo role cleanup and shared object model.
    refs:
      - decision-7c91d4a2

---

## Notes

- no-task-* entries are known work candidates that should be converted into canonical task IDs before execution.
- This file should remain short and pointer-based.
- If priority changes, update this file and record the changelog revision.

---

*rank.md - Dovetell - v0.1*
*A map, not the territory.*
