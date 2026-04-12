---
name: release-notes
description: Use when writing release notes for ShopFlow. Trigger phrases "write release notes", "create release note", "document this feature release", "new release note for", "write a deprecation notice", "document this enhancement". Use for new features, enhancements, and deprecations only. Do NOT use for bug fixes those follow a different format.
---

# Release Notes Skill for ShopFlow

## What this skill does

Produces release notes that match the global companies release note format: minimal, formal, audience-focused, and scannable. Each release note is a standalone page identified by release date.

## URL pattern

https://jv1996-writer.github.io/writing-portfolio/release-notes/YYYY/MM/DD/

## Page structure

Every release note follows this exact structure:

```markdown
---
title: Feature Name (Product Category)
description: One sentence describing what changed and who it affects.
keywords: [ShopFlow, product category, feature name, release]
---

[One paragraph for simple features. Multiple paragraphs for complex features — split by concept, not by word count.
Write in formal but approachable tone. No bullet points unless the feature has 3 or more distinct sub-changes.]

To learn more, see [Feature Name documentation](link).
```

## Release note types

### New feature
```markdown
We're excited to announce [Feature Name], which lets you [primary benefit in one sentence]. [Optional: one sentence
of additional context or availability.] To learn more, see [Feature Name](link).
```

### Enhancement
```markdown
[Feature Name] now [what changed and primary benefit]. [Optional: one sentence on how to access or use the change.] To learn more, see [Feature Name](link).
```

### Deprecation
```markdown
[Feature Name] is deprecated as of [date] and will reach end of life on [date]. [One sentence on what to use instead.] [One sentence on migration path if applicable.]  To learn more, see [Migration Guide](link).
```

## Title format

Feature Name (Product Category)

Accepted examples:
- Metrics Transformation Rules (Metrics)
- AWS Observability Solution (Observability)
- Scheduled Views (Log Management)
- Multi-Factor Authentication (Security)

Unaccepted examples:

New Metrics Feature        ← no product category
Metrics Transformation     ← missing category in brackets
(Metrics) Transformation   ← category must be at the end

## Writing rules

### Tone

- Formal but approachable
- Second person — "you can now", "your dashboards"
- Present tense — "lets you", "enables", "supports"
- Banned words: never use powerful, revolutionary, utilize, excellent, clearly, significantly
- Never start a sentence with "Our team"
- "We're excited to announce" → allowed "excited" word only for new features anywhere else usage is banned

### Content length

- Simple feature    → 1 paragraph + learn more link
- Complex feature   → 2-3 paragraphs + learn more link
- Multiple changes  → 1 paragraph per major change + learn more
- Deprecation       → 2 paragraphs (what + migration) + link

### Learn more link

- Always the last line of the release note
- Always "To learn more, see Page Title."
- Links to the feature documentation page
- Never "Click here" or "Read more"
- Never omit the learn more link

### What NOT to include

- Implementation details — how it was built
- Internal team names — "the platform team has..."
- Pricing information — link to pricing page instead
- Beta/preview labels unless officially announced
- Vague timelines — "coming soon", "in the future"


## Gotchas

- Product category always in brackets at end of title. Never at the start, never without brackets
- Learn more link always last line, ALWAYS same format "To learn more, see Title."
- Never start with "Our team". Start with the feature name or what it does
- Present tense always. "lets you filter" not "will let you filter"
- No bullet points for single changes. Only use bullets when 3+ distinct sub-changes exist
- Description frontmatter under 160 characters. AI crawlers truncate longer values
- URL is the release date. One page per release date — not one page per feature. Multiple features on same date go on the same page with same release date.