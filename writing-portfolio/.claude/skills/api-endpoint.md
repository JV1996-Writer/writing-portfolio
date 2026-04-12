---
name: api-endpoint
description: Use when documenting an API endpoint. Trigger phrases "document this endpoint", "write endpoint doc", "create API reference for", "document the POST/GET/PUT/DELETE endpoint", "add endpoint documentation". Always include curl + JavaScript examples, request body table, success response, per-endpoint error table, BLUF opening, and FAQ section. Follow CLAUDE.md style rules throughout.
---

# API endpoint documentation skill

Use this skill when asked to document an API endpoint. Follow every rule below without exception.
## Output structure

Produce the endpoint doc in this exact order:

### 1. Frontmatter

```yaml
---
title: <verb> <resource> — short, sentence-case
description: One sentence — what the endpoint does and who it helps.
keywords: [keyword1, keyword2, keyword3]
---
```

### 2. BLUF opening (required)

The very first sentence after the title must state what the endpoint does and what the caller gets back. No background first.

**Pattern:** `The <METHOD> /path endpoint <action> and returns <result>.`

**Example:**
> The POST /orders endpoint creates a new order and returns the order ID with an estimated fulfillment date.


### 3. Request details

#### Endpoint line

```
METHOD /path
```

#### Request body table

Always include this table, even for GET requests with query parameters (use "Query parameter" in the Type column).

| Field | Type | Required | Description |
|---|---|---|---|
| `fieldName` | string | Yes | What this field does. Max/min constraints if any. |
| `fieldName` | integer | No | What this field does. Default value if any. |

#### Code examples

Always include **both** curl and JavaScript. Use the endpoint's actual method and path.

**curl**

```bash
curl -X POST https://api.example.com/v1/orders \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "customerId": "cust_abc123",
    "items": [{ "productId": "prod_xyz", "quantity": 2 }]
  }'
```

**JavaScript**

```javascript
const response = await fetch('https://api.example.com/v1/orders', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    customerId: 'cust_abc123',
    items: [{ productId: 'prod_xyz', quantity: 2 }],
  }),
});

const data = await response.json();
```


### 4. Success response

Always show the HTTP status code and a complete example JSON body. Use realistic placeholder values.

**Status:** `201 Created`

```json
{
  "orderId": "ord_789def",
  "status": "pending",
  "estimatedFulfillmentDate": "2026-04-15",
  "createdAt": "2026-04-12T10:30:00Z"
}
```


### 5. Error table

List only the errors that this specific endpoint can return. Do not paste a generic global error table.

| Status code | Error code | Meaning | How to fix |
|---|---|---|---|
| `400` | `INVALID_ITEM` | One or more item IDs are malformed or missing. | Verify each `productId` exists and is correctly formatted. |
| `401` | `UNAUTHORIZED` | The bearer token is missing or expired. | Refresh the token and retry. |
| `404` | `CUSTOMER_NOT_FOUND` | No customer exists with the supplied `customerId`. | Check the ID against the customers endpoint. |
| `422` | `INSUFFICIENT_STOCK` | Requested quantity exceeds available stock. | Reduce quantity or split the order. |


### 6. FAQ section (required)

Every endpoint doc must end with a FAQ. Minimum two questions. Write questions a developer would actually ask.

**Pattern:**

```markdown
## FAQ

**Can the endpoint handle partial fulfillment?**
No. The endpoint rejects the entire order if any item is out of stock. Submit separate orders for available items.

**What happens if the request times out?**
The endpoint is idempotent when you pass the same `idempotencyKey`. Retry the request with the same key; a duplicate order will not be created.
```

## Gotchas

- Sentence case for all headings.
- Active voice throughout. Rewrite any passive construction before saving.
- No first-person pronouns (`I`, `we`, `my`, `our`). Use second person or third person.
- No banned words: `utilize` (use "use"), `excellent`, `clearly`, `significantly`.
- No space before or after a dash inside compound modifiers. If you need an aside, use a comma instead of an em dash.
- BLUF first: conclusion before background, always.


## Checklist before saving

- [ ] Frontmatter has `title`, `description`, and `keywords`.
- [ ] Opening sentence names the method, path, action, and return value.
- [ ] Request body table covers every field (or query parameter).
- [ ] curl example matches the actual method and path.
- [ ] JavaScript example matches the actual method and path.
- [ ] Success response shows the correct status code and a full JSON example.
- [ ] Error table lists only errors for this endpoint.
- [ ] FAQ section has at least two questions.
- [ ] No banned words.
- [ ] No first-person pronouns.
- [ ] All headings in sentence case.
