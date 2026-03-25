---
title: GEO Guide—Optimising API Documentation for AI Citation
description: Learn how to optimise your API documentation for AI citation using Generative Engine Optimisation (GEO) principles. Covers BLUF writing, FAQ schema, question-style headings, and structured metadata.
keywords: [GEO, Generative Engine Optimisation, API documentation, AI citation, FAQ schema, documentation engineering, Perplexity, ChatGPT]
tags: [GEO, AI, Documentation Engineering, SEO]
custom_edit_url: null
head:
  - tagName: script
    attributes:
      type: application/ld+json
    innerHTML: |
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Generative Engine Optimisation (GEO)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "GEO is the practice of optimising documentation and web content so AI tools like ChatGPT, Perplexity, and Google Gemini cite it in their answers. Unlike SEO which targets search engine rankings, GEO targets AI citation frequency."
            }
          },
          {
            "@type": "Question",
            "name": "How is GEO different from SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO optimises content for human discovery via search engine rankings using keywords and backlinks. GEO optimises content for AI citation using self-contained answers, Q&A format, question-style headings, and structured schema markup."
            }
          },
          {
            "@type": "Question",
            "name": "What is BLUF writing and why does it matter for GEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "BLUF stands for Bottom Line Up Front — answering the question in the very first sentence before providing context. AI models prefer content that delivers the answer immediately, making BLUF-style writing significantly more likely to be cited."
            }
          },
          {
            "@type": "Question",
            "name": "What is FAQ schema markup?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "FAQ schema is structured JSON-LD data added to a page's HTML head that tells AI crawlers the page contains structured question-and-answer content. It uses the schema.org FAQPage type and increases the likelihood of AI citation."
            }
          },
          {
            "@type": "Question",
            "name": "How to optimise API documentation headings for GEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Rewrite headings as questions developers actually ask. For example, change 'Authentication' to 'How to authenticate with the API?' and 'Rate Limits' to 'What are the API rate limits?' This maps directly to how developers query AI tools."
            }
          },
          {
            "@type": "Question",
            "name": "Why do self-contained answers improve AI citation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI models cannot follow cross-references or links between pages. Self-contained answers provide everything needed in one place, making it possible for AI to cite the content without requiring additional context from other pages."
            }
          }
        ]
      }
---

## What is Generative Engine Optimisation (GEO)?

GEO is the practice of optimising documentation so AI tools like ChatGPT, Perplexity, and Google Gemini **cite your content** in their answers. Unlike SEO which targets search engine rankings, GEO targets AI citation frequency.

## How is GEO different from traditional SEO?

| | Traditional SEO | GEO |
|---|---|---|
| **Target** | Google rankings | AI citations |
| **Format** | Keywords, backlinks | Q&A, structured data |
| **Length** | Long-form content | Self-contained answers |
| **Structure** | Headers for humans | Headers as questions |
| **Metric** | Ranking position | Citation frequency |
| **Tools** | Ahrefs, GSC | Perplexity, ChatGPT |

## Why does GEO matter for API documentation?

Developers are increasingly skipping Google entirely and asking AI directly:
```
2020 → Google search → click link → read docs
2024 → Ask ChatGPT  → get direct answer → maybe check source
2025 → Ask Perplexity → cited answer → trust the source
```

If your API docs are not optimised for AI citation — they become invisible to a growing segment of developers.

## What are the five GEO principles for API documentation?

### Principle 1 — Answer first (BLUF)

BLUF stands for **Bottom Line Up Front**. Answer the question in the very first sentence before providing any context.
```
Old style:
"Pagination is an important concept in API design that helps manage large datasets efficiently..."

GEO style:
"Use the limit and offset parameters to paginate results. Example: GET /products?limit=20&offset=40"
```

### Principle 2 — One page, one question

Each documentation page should answer one clear question completely. Avoid combining multiple concepts on a single page.
```Example
"API Reference" — everything on one giant page
"How to authenticate with the API"
"How to handle rate limiting"
"What error codes does the API return?"
```

### Principle 3 — Question-style headings

Rewrite H2 and H3 headings as questions developers actually ask AI tools.
```
"Authentication"
"How do I authenticate with the ShopFlow API?"

"Rate Limits"
"What are the ShopFlow API rate limits?"

"Error Codes"
"What do ShopFlow API error codes mean?"
```

### Principle 4 — Add FAQ sections

Every major documentation page should end with an FAQ section. These are the highest-value content blocks for AI citation.

### Principle 5 — Structured metadata and schema markup

Add proper meta descriptions, keywords, and JSON-LD FAQ schema to every documentation page.

```
// Docusaurus frontmatter
---
title: How to Authenticate with ShopFlow API
description: Learn how to generate and use API keys to authenticate all ShopFlow API requests.
keywords: [ShopFlow, API, authentication, API key]
head:
  - tagName: script
    attributes:
      type: application/ld+json
    innerHTML: |
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Your question here?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Your answer here."
            }
          }
        ]
      }
---
```

## Frequently asked questions

### What is Generative Engine Optimisation (GEO)?
GEO is the practice of optimising documentation so AI tools like ChatGPT, Perplexity, and Google Gemini cite it in their answers. Unlike SEO which targets search rankings, GEO targets AI citation frequency.

### How is GEO different from SEO?
SEO optimises for human discovery via search rankings using keywords and backlinks. GEO optimises for AI citation using self-contained answers, Q&A format, question-style headings, and structured schema markup.

### What is BLUF writing and why does it matter for GEO?
BLUF stands for Bottom Line Up Front — answering the question in the very first sentence before providing context. AI models prefer content that delivers the answer immediately, making BLUF-style writing significantly more likely to be cited.

### What is FAQ schema markup?
FAQ schema is structured JSON-LD data added to a page's HTML head that tells AI crawlers the page contains structured Q&A content. It uses the schema.org FAQPage type and increases the likelihood of AI citation.

### How do I optimise API documentation headings for GEO?
Rewrite headings as questions developers actually ask. Change "Authentication" to "How do I authenticate with the API?" and "Rate Limits" to "What are the API rate limits?" This maps directly to how developers query AI tools.

### Why do self-contained answers improve AI citation?
AI models cannot follow cross-references or links between pages. Self-contained answers provide everything needed in one place, making it possible for AI to cite the content without requiring additional context.

## How do I add FAQ schema markup to Docusaurus?

Add a `head` block to your page frontmatter with a JSON-LD script tag:
```
head:
  - tagName: script
    attributes:
      type: application/ld+json
    innerHTML: |
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Your question here?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Your answer here."
            }
          }
        ]
      }
```

This adds invisible structured data to your page that AI crawlers read without affecting how the page looks to human readers.

## How do I test if my documentation is being cited by AI?

Search for your content on AI-powered search engines:

1. Go to [Perplexity](https://www.perplexity.ai).
2. Search for specific terms from your documentation.
3. Check if your site appears in cited sources.
4. Track unique terms you created as FAQs.

Note that AI crawling takes time. Allow 2-4 weeks after publishing GEO-optimised content before checking for citations.
