# object-model.md
# Dovetell - Context Governance Object Model
# Draft data model for sources, context items, reviews, activity, artifacts, and promotion.
# Read when designing schemas, app state, API contracts, markdown formats, or future database tables.

---

## 1. Principles

- Model context governance before work management.
- Preserve source ownership and source trace on every important object.
- Make status explicit instead of inferring trust from location.
- Separate durable customer truth from Dovetell coordination state.
- Support file-backed markdown now and database-backed storage later.
- Keep enough structure to enable portfolio views, review queues, activity feeds, and asset refinery promotion.

---

## 2. Context Source

A connected repo, folder, document set, app, or asset library that Dovetell can read, render, or coordinate.

context_source:
  fields:
    - id
    - name
    - owner
    - repo
    - repoUrl
    - repoType: project-context|business-context|asset-refinery|canonical-assets|docs|app
    - visibility: public|private|local|airgapped
    - defaultBranch
    - contextRoot
    - healthState: current|drifting|stale|unknown
    - healthScore
    - queueCount
    - staleCount
    - unvettedCount
    - vettedCount
    - lastActivityAt
    - lastActivityBy
    - lastSyncAt
    - syncStatus: connected|disconnected|updating|error|local-only
    - createdAt
    - updatedAt

notes:
  - A "project" in the UI is usually a context_source with repoType project-context or business-context.
  - Asset refinery and canonical assets are sources, but they should not pretend to have task-dashboard semantics.

---

## 3. Context Item

A unit of context that can be reviewed, rendered, trusted, superseded, or promoted.

context_item:
  fields:
    - id
    - sourceId
    - type: decision|assumption|definition|policy|journal|task|risk|opportunity|changelog|gap|stale-flag|pattern|prompt|schema|guide
    - title
    - summary
    - detail
    - status: unvetted|vetted|rejected|deferred|stale|superseded|draft
    - priority: now|next|later|none
    - severity: low|medium|high|critical|none
    - sourcePath
    - sourceLine
    - sourceRef
    - sourceHash
    - createdBy
    - createdAt
    - updatedBy
    - updatedAt
    - vettedBy
    - vettedAt
    - supersededBy
    - tags
    - relatedItemIds

notes:
  - The same parser can lift markdown objects into this shape.
  - Markdown remains the human-owned source; this model is the normalized working representation.
  - Supporting item types such as task and journal are valid context, but should not pull Dovetell into execution management.

---

## 4. Review Item

A governance work unit that asks a person or role to decide whether context should become, remain, or stop being trusted.

review_item:
  fields:
    - id
    - sourceId
    - contextItemId
    - reviewType: new|proposed-update|staleness-review|gap-resolution|conflict-resolution|promotion-review
    - category: decision|assumption|definition|policy|supporting|asset
    - currentVersion
    - proposedVersion
    - diff
    - plainEnglishSummary
    - sourceTrace
    - requestedBy
    - requestedAt
    - reviewerRole
    - reviewerId
    - action: pending|confirm|flag|skip|accept|reject|defer
    - reason
    - finalSigner
    - finalStatus: pending|accepted|rejected|deferred|not-required
    - completedAt

notes:
  - Review is where candidate context moves toward trusted truth.
  - The app should support small-team mode and governed mode without changing the object shape.

---

## 5. Activity Event

An append-only event that explains what happened behind the scenes.

activity_event:
  fields:
    - id
    - sourceId
    - contextItemId
    - reviewItemId
    - actor
    - actorType: human|system|agent
    - eventType: added|updated|flagged|stale-detected|gap-detected|conflict-detected|vetted|deferred|rejected|superseded|promoted|synced|sync-failed
    - occurredAt
    - sourceTrace
    - statusBefore
    - statusAfter
    - summary
    - suggestedNextAction

notes:
  - Activity feed items should be derived from these events.
  - Review queue items may generate activity events, but the feed is not the queue.

---

## 6. Artifact

A context-bearing object that may not be a markdown object by itself.

artifact:
  fields:
    - id
    - artifactType: image|prompt|schema|demo-html|audit-output|migration-map|document|export
    - title
    - slug
    - sourceId
    - path
    - uri
    - contentHash
    - provenanceId
    - createdBy
    - createdAt
    - capturedAt
    - generatedBy
    - relatedItemIds
    - tags

image_artifact:
  extends: artifact
  fields:
    - imageId
    - watermark
    - promptHash
    - visualConceptId
    - filenamePattern

notes:
  - The suggested watermark format is dovetell:image-[8char] / [slug] / YYYY-MM-DD.
  - A future ingestion flow can OCR the watermark, find or create the artifact record, and route it into the right source.

---

## 7. Provenance

The trace of where an object came from and how it changed.

provenance:
  fields:
    - id
    - originType: human-note|agent-output|repo-file|demo-file|image-generation|manual-entry|import|audit
    - originSource
    - originPath
    - originRef
    - originHash
    - promptHash
    - model
    - createdBy
    - createdAt
    - transformedBy
    - transformedAt
    - transformationSummary

notes:
  - Provenance should be light enough to use everywhere and strong enough to audit later.

---

## 8. Promotion Candidate

A reusable learning that may move from project-specific context into an asset-refinery source, then into canonical assets.

promotion_candidate:
  fields:
    - id
    - sourceId
    - originItemIds
    - candidateType: pattern|prompt-template|schema-change|audit-rule|guide|command|convention
    - title
    - summary
    - evidence
    - reusePotential: low|medium|high
    - maturity: raw|draft|tested|candidate|promoted|rejected
    - targetSourceId
    - targetPath
    - reviewedBy
    - reviewedAt
    - promotedAt

notes:
  - Promotion is curation, not copying.
  - A promoted item should retain backlinks to the project evidence that justified it.

---

## 9. Sync State

Coordination state for reading from and writing to customer-owned sources.

sync_state:
  fields:
    - id
    - sourceId
    - provider: github|gitlab|local|drive|manual|airgap
    - status: connected|disconnected|updating|error|local-only
    - lastPullAt
    - lastPushAt
    - lastErrorAt
    - lastError
    - pendingWriteCount
    - queuedWriteCount
    - conflictCount
    - localRevision
    - remoteRevision

notes:
  - Tokens should not be persisted into repo config.
  - Local working config can preserve state while writes are queued or retried.

---

## 10. Relationships

Recommended relational edges:

- context_source has many context_items
- context_source has many sync_states over time
- context_item has many review_items
- context_item has many activity_events
- context_item may supersede context_item
- context_item may conflict with context_item
- artifact may support context_item
- artifact may generate context_item
- promotion_candidate derives from context_items
- promotion_candidate may create artifact or context_item in target source

edge:
  fields:
    - id
    - fromType
    - fromId
    - toType
    - toId
    - relationType: supports|derived-from|supersedes|conflicts-with|promotes-to|renders-as|mentions|blocks|resolves
    - confidence
    - createdAt
    - createdBy

notes:
  - A normalized relational database can handle this first.
  - A graph projection may become useful later if traversal, impact analysis, or lineage queries become central.

---

## 11. Storage Path

near-term:
  - markdown files remain durable context storage
  - browser localStorage can cache working config and pending writes
  - repo JSON can store source configuration
  - derived objects can be parsed at runtime

mid-term:
  - normalized database stores source metadata, item indexes, review state, activity events, sync state, and provenance
  - customer-owned markdown remains canonical for accepted context where promised

long-term:
  - optional graph projection supports lineage, impact analysis, conflict traversal, and promotion path queries

---

## 12. Open Questions

- Which fields belong in markdown versus derived app state?
- Should review_item and activity_event be persisted in customer repos, Dovetell state, or both?
- How should airgapped transfer packages represent provenance and review state?
- What is the minimum viable schema for the next dashboard iteration?
- How much source content can be indexed before it conflicts with the "customer owns truth" promise?

---

*object-model.md - Dovetell - v0.1*
*This model is a draft. Keep it practical enough to implement and clear enough to govern.*
