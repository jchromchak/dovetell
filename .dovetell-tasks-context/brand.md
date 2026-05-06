# brand.md
# dovetell-tasks — Brand and Interface Guidance
# Source of truth for visual direction, interaction tone, and dashboard consistency.

---

## Identity

product: dovetell-tasks
revisionId: rev-acf5d65d
status: active
created: 2026-05-06T13:47Z
updated: 2026-05-06T13:47Z

purpose:
  Dovetell is an operational context governance workspace. It helps a project team and AI sessions see what matters now, what changed recently, what is risky, and where the next decision or task belongs.

tone:
  Calm, precise, technical, and trustworthy. The interface should feel like a workbench for live project governance, not a marketing site or decorative dashboard.

---

## Visual Principles

- dense but readable
- dark, quiet, and high-contrast
- information-first, decoration-last
- compact cards and rows over large panels
- strong navigation hierarchy on desktop
- thumb-friendly summaries on mobile
- status and severity should be visible before reading details
- every visual flourish must help orientation, scanning, or confidence

---

## Color System

base:
  near-black: #050914
  app-bg: #070D18
  shell-bg: #0B1220
  panel-bg: #0E1624
  panel-raised: #121B2B
  row-bg: #141E2E
  border-subtle: rgba(148, 163, 184, 0.16)
  border-strong: rgba(148, 163, 184, 0.28)

text:
  primary: #F8FAFC
  secondary: #CBD5E1
  muted: #94A3B8
  faint: #64748B

brand:
  blue: #6EA8FF
  blue-strong: #3B82F6
  cyan: #67E8F9
  teal: #2DD4BF

status:
  success: #34D399
  warning: #F59E0B
  danger: #FF4D4D
  info: #60A5FA
  neutral: #94A3B8

severity:
  p0: #FF3B3B
  p1: #FF9F1C
  p2: #FACC15
  p3: #CBD5E1
  risk-high: #FF4D4D
  risk-medium: #F59E0B
  risk-low: #2DD4BF

usage:
  Use blue for navigation, links, and primary affordances. Use teal/green for health and positive completion. Use red/orange/yellow only for severity and risk signals, not decoration.

---

## Typography

families:
  interface: Plus Jakarta Sans
  mono: JetBrains Mono

rules:
  Use compact, work-surface typography. Prefer 12-14px for metadata and list rows, 16-20px for panel headings, and 24-32px for page titles or mobile dashboard headers. Do not use hero-scale type inside operational panels.

numbers:
  Health scores, risk scores, revision IDs, task IDs, and timestamps may use mono or tabular-feeling text. Scores should be visually prominent but not oversized.

---

## Layout

desktop:
  Use a persistent left sidebar for primary navigation. Main dashboard content should use a dense grid with panels for now tasks, active risks, recent decisions, and changelog. Top summary should include product/project name, context health, and last session.

mobile:
  Use a dashboard-first top summary with logo, page title, project name, and health score. Use stacked panels for last session, hot items, and recent changes. Use a bottom nav for primary sections and a floating add button for creation.

spacing:
  Use 8px as the base rhythm. Cards and panels should be tight, with 12-16px internal padding. Avoid nested cards unless the inner item is a repeated row or list item.

containers:
  Panels should have subtle borders and transparent dark backgrounds. The page should feel like one continuous workspace, not a collection of floating marketing cards.

---

## Navigation

primary sections:
  - dashboard
  - tasks
  - decisions
  - opportunities
  - rules
  - risks
  - processes
  - changelog

desktop behavior:
  Sidebar remains visible. Active item uses blue tint, icon, and stronger text. Collapse may be offered, but collapsed state must preserve recognizable icons.

mobile behavior:
  Bottom nav should prioritize dashboard, tasks, decisions, opportunities, rules, and risks. Less frequent sections such as processes and changelog can move behind a secondary menu if space requires it.

---

## Components

health score:
  Show context health as a compact gauge or arc with numeric score and `/100`. Use green/teal for healthy, yellow for caution, and red for unhealthy. Health should summarize context quality, not imply system uptime.

task rows:
  Show priority dot, priority label, title, short description, owner/avatar, and due date. Rows should scan vertically without expanding unless details are needed.

risk rows:
  Show risk score or severity first, then title and cause. High risk must be obvious through color and ordering. Include owner/avatar and date where available.

decision rows:
  Show decision title, ID, status chip, and date. Status chips should distinguish approved, implemented, superseded, deferred, and open.

changelog rows:
  Show actor/avatar, action verb, object type, object title, timestamp, and revision chip. Revision chips use mono text and subdued dark backgrounds.

avatars:
  Use initials in colored circles. Keep colors varied but controlled. Avatars are identity anchors, not decoration.

cards:
  Use small radii, subtle borders, and restrained backgrounds. Prefer list density over large empty card interiors.

buttons:
  Primary actions use blue. Destructive or risk actions use red only when the action itself is dangerous. Icon buttons should have clear tooltips where meaning is not obvious.

---

## Language

labels:
  Use direct nouns: Tasks, Decisions, Rules, Risks, Changelog, Context Health, Last Session, Hot Items.

verbs:
  Use operational verbs: Add, Update, Close, Archive, Register, View, Export.

avoid:
  Avoid marketing copy, feature explanations, and visible instructional text inside the app unless it resolves an empty/error state.

---

## Responsive Requirements

- desktop and mobile are both first-class
- mobile must not be a squeezed desktop layout
- desktop should support scanning and comparison across panels
- mobile should support quick status checks and common actions
- no horizontal overflow at 390px viewport width
- bottom nav and floating action button must not obscure important content
- text inside chips, buttons, cards, and nav items must not overflow its container

---

## Dashboard Direction

desktop dashboard:
  Left sidebar, top project/context summary, three-column content grid. Suggested panels: Now Tasks, Active Risks, Recent Decisions, Changelog. Include context health and last session near the top.

mobile dashboard:
  Compact header with logo, Dashboard title, project name, and health score. Stack Last Session, Hot Items, and Recent Changes. Use bottom nav and a floating add button.

aggregate behavior:
  When multi-project loading exists, dashboard panels should aggregate across projects first, then allow drill-in by project. Every aggregate row needs a project/source marker.

---

## Implementation Guardrails

- preserve static app portability
- do not add a build step unless explicitly approved
- do not change markdown data formats as part of visual work
- do not change GitHub write semantics as part of visual work
- centralize tokens in shared CSS before restyling pages
- convert one page or dashboard surface at a time
- verify desktop and mobile after each visual slice
- do not expose, log, or render PAT values

---

## Open Questions

- Should the app name shown in product chrome be `dovetell`, `Dovetell`, or project-specific?
- Should Context Health be manually derived from context files first, or computed from rules/tasks/changelog coverage?
- Should processes and changelog appear in mobile bottom nav or a secondary menu?
- Should brand tokens replace the current blurple palette immediately or through a staged compatibility layer?

---

*brand.md — dovetell-tasks — v0.1*
*Use this file before making broad visual, layout, or component changes.*
