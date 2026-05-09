# artifact-index.md
# Dovetell - Artifact Index
# Tracks generated images, diagrams, prompts, demo files, and other provenance-bearing artifacts.
# Read when referencing visual concepts, docs assets, prompt outputs, or promotion evidence.

---

## Schema

- artifact-[8char]
  type: image|prompt|demo-html|doc|other
  status: active|needs-review|superseded
  image-id: dovetell:image-[8char]
  slug:
  title:
  created: YYYY-MM-DD
  captured: YYYY-MM-DDTHH:mm:ssZ
  source-path:
  watermark:
  related:
    - concept-[8char]
    - decision-[8char]
    - task-[8char]
  notes:
    - [Provenance, quality, collision, or follow-up notes.]

---

## Artifacts

- artifact-d4a8c7f2
  type: image
  status: active
  image-id: dovetell:image-d4a8c7f2
  slug: promotion-pipeline-v0.1
  title: How Context Becomes a Promotable Asset
  created: 2026-05-09
  captured: 2026-05-09T10:42:00Z
  source-path: /Users/johnchromchak/Downloads/ChatGPT Image May 9, 2026 at 06_34_17 AM (1).png
  watermark: dovetell:image-d4a8c7f2 · promotion-pipeline-v0.1 · 2026-05-09
  related:
    - concept-d4a8c7f2
    - repo-manifest.md
    - operating-model.md
  notes:
    - Promotion pipeline diagram showing local signal, ctx:global candidate, asset refinery intake, review/shape, promotion decision, canonical asset, and distribution.
    - Strongly reinforces "Promotion is curation, not copying."

- artifact-3f7a9d1e
  type: image
  status: active
  image-id: dovetell:image-3f7a9d1e
  slug: repo-operating-model-v0.1
  title: Dovetell Repository Operating Model v0.1
  created: 2026-05-09
  captured: 2026-05-09T10:42:00Z
  source-path: /Users/johnchromchak/Downloads/ChatGPT Image May 9, 2026 at 06_26_36 AM.png
  watermark: dovetell:image-3f7a9d1e · repo-operating-model-v0.1 · 2026-05-09
  related:
    - concept-3f7a9d1e
    - repo-manifest.md
    - decision-5c8e2a74
  notes:
    - Repository operating model showing public/canonical, private refinery, and working context source layers.
    - Establishes private learning to curated assets to public truth.

- artifact-7f3b8c29
  type: image
  status: active
  image-id: dovetell:image-7f3b8c29
  slug: context-change-request-v0.1
  title: Context Change Request
  created: 2026-05-09
  captured: 2026-05-09T10:42:00Z
  source-path: /Users/johnchromchak/Downloads/ChatGPT Image May 9, 2026 at 06_33_03 AM.png
  watermark: dovetell:image-7f3b8c29 · context-change-request-v0.1 · 2026-05-09
  related:
    - concept-7f3b8c29
    - demo-review-2f5e8c77
    - operating-model.md
  notes:
    - Context change request diagram showing current truth, contributor/agent proposal, unvetted queue, review gate, rejected branch, accepted merge, and new truth.
    - Strong canonical visual for the truth-making workflow.

- artifact-3f7a9d1e-b
  type: image
  status: needs-review
  image-id: dovetell:image-3f7a9d1e
  slug: promotion-pipeline-v0.1
  title: How Context Becomes a Promotable Asset - alternate render
  created: 2026-05-09
  captured: 2026-05-09T10:42:00Z
  source-path: /Users/johnchromchak/Downloads/ChatGPT Image May 9, 2026 at 06_34_18 AM (2).png
  watermark: dovetell:image-3f7a9d1e · promotion-pipeline-v0.1 · 2026-05-09
  related:
    - concept-d4a8c7f2
    - artifact-d4a8c7f2
  notes:
    - Alternate promotion pipeline render.
    - Provenance issue: image-id collides with artifact-3f7a9d1e, which is the repo operating model image. Future artifact rules should reject duplicate image IDs across different slugs.
    - Keep for visual comparison, but regenerate or assign a corrected ID before treating as canonical.

- artifact-9b4f2e7c
  type: image
  status: active
  image-id: dovetell:image-9b4f2e7c
  slug: promotion-pipeline-v0.1
  title: How Context Becomes a Promotable Asset - corrected provenance render
  created: 2026-05-09
  captured: 2026-05-09T10:49:00Z
  source-path: /Users/johnchromchak/Downloads/ChatGPT Image May 9, 2026 at 06_49_44 AM.png
  drive-path: /Users/johnchromchak/Library/CloudStorage/GoogleDrive-dovetellio@gmail.com/My Drive/dovetell-assets/visual-artifacts/promotion-pipeline/image-9b4f2e7c__promotion-pipeline-v0.1__2026-05-09.png
  watermark: dovetell:image-9b4f2e7c · promotion-pipeline-v0.1 · 2026-05-09
  related:
    - concept-d4a8c7f2
    - artifact-d4a8c7f2
  notes:
    - Corrected promotion pipeline render with unique image ID after the duplicate image-id issue in artifact-3f7a9d1e-b.
    - Candidate to use as the preferred canonical promotion-pipeline visual after visual review.
    - Copied into the local Google Drive sync folder under dovetell-assets/visual-artifacts/promotion-pipeline.

---

## Index Notes

- Image IDs must be unique across artifacts.
- If a generated image uses a duplicate image ID with a different slug, mark the artifact as needs-review.
- The watermark in the image, artifact index, filename, and related visual concept should match before promotion into docs or canonical assets.
- When a Drive copy exists, record drive-path or drive-url on the artifact entry.

---

## Processing Queue

route-pattern: /Users/johnchromchak/Downloads/{route}/dovetell-processing
default-routes:
  - dovetell: /Users/johnchromchak/Downloads/dovetell/dovetell-processing
  - famframe: /Users/johnchromchak/Downloads/famframe/dovetell-processing
legacy-root: /Users/johnchromchak/Downloads/dovetell-processing

folders:
  - enqueued: files waiting for ingestion
  - done: original files that were copied, indexed, and completed
  - errored: original files that could not be classified, copied, or indexed cleanly

workflow:
  - Drop files into the route-specific enqueued folder.
  - Run ctx:ingest-artifacts with the route when needed.
  - Preserve existing provenance IDs when present.
  - Assign new IDs only when no valid ID exists, and mark those artifacts needs-review.
  - Copy artifacts into the durable asset library with provenance filenames.
  - Update artifact-index.md and changelog.md.
  - Move source files to done or errored.

notes:
  - The queue folder shape is a shared template for local file processing.
  - The route folder is the project or source namespace.
  - Use the dovetell route for Dovetell operating-model, repo-model, promotion, docs, and asset-refinery visuals.
  - Use the famframe route for Famframe-specific project artifacts and visual concepts.
  - The legacy root can be treated as an intake fallback during migration, but new drops should use a route-specific folder.
  - It is intentionally simple and Kanban-like.
  - The queue state is operational; artifact-index.md is the durable provenance index.

---

*artifact-index.md - Dovetell - v0.1*
*Artifacts are context too. Preserve where they came from and how to trace them.*
