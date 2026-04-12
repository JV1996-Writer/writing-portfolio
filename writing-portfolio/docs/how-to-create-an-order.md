---
title: How to create an order
description: Learn how to create a single order and batched orders using the ShopFlow API POST /orders endpoint.
keywords: [ShopFlow API, create order, bulk orders, POST orders, e-commerce API, order management]
tags: [Orders, API, How-to]
custom_edit_url: null
---

Use `POST /orders` to place an order in your ShopFlow store. The API calculates the total price automatically and decrements stock on success. For bulk scenarios, send sequential requests inside a loop, as the API does not expose a native bulk endpoint.

## Prerequisites

- A ShopFlow API key, generate one in **Settings → API Keys**.
- At least one product in your catalogue. Use `GET /products` to find valid product IDs.
- Node.js 18+ if you use the SDK examples below.

Set your API key as an environment variable before running any example:

```bash
export SHOPFLOW_API_KEY="your_api_key_here"
```

---

## Create a single order

Send a `POST` request to `/orders` with a `productId` and `quantity`. Both fields are required.

**Endpoint**

```
POST https://api.shopflow.com/v1/orders
```

**Request body**

| Field | Type | Required | Description |
|---|---|---|---|
| `productId` | string | Yes | ID of the product to order. |
| `quantity` | integer | Yes | Number of units to order. Must be ≥ 1. |

### curl

```bash
curl -X POST https://api.shopflow.com/v1/orders \
  -H "X-API-Key: $SHOPFLOW_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "productId": "prod_001",
    "quantity": 2
  }'
```

### JavaScript SDK

```javascript
const ShopFlow = require('shopflow-sdk');

const client = new ShopFlow({ apiKey: process.env.SHOPFLOW_API_KEY });

async function createOrder() {
  const order = await client.orders.create({
    productId: 'prod_001',
    quantity: 2,
  });

  console.log(`Order created: ${order.id} — Status: ${order.status}`);
}

createOrder();
```

### Success response

A `201 Created` response returns the new order object. The `totalPrice` is in paise (₹ × 100).

```json
{
  "id": "ord_001",
  "productId": "prod_001",
  "quantity": 2,
  "status": "confirmed",
  "totalPrice": 59998,
  "createdAt": "2024-01-15T11:00:00Z"
}
```

`totalPrice` of `59998` equals ₹599.98 (2 units × ₹299.99).

---

## Create bulk orders

The ShopFlow API processes one order per request. To place orders for two or more products, send a `POST /orders` request for each product. Use `Promise.all` to run the requests concurrently and reduce total wait time.

```javascript
const ShopFlow = require('shopflow-sdk');

const client = new ShopFlow({ apiKey: process.env.SHOPFLOW_API_KEY });

async function createBulkOrders(items) {
  // items = [{ productId, quantity }, ...]
  const requests = items.map((item) =>
    client.orders.create({
      productId: item.productId,
      quantity: item.quantity,
    })
  );

  const orders = await Promise.all(requests);
  orders.forEach((order) => {
    console.log(`Order ${order.id} — ${order.status}`);
  });

  return orders;
}

// Example: order three different products simultaneously
createBulkOrders([
  { productId: 'prod_001', quantity: 2 },
  { productId: 'prod_002', quantity: 1 },
  { productId: 'prod_003', quantity: 5 },
]);
```

**Response**

Each request returns an independent `Order` object. `Promise.all` resolves when all requests complete and preserves the input order.

```json
[
  { "id": "ord_001", "productId": "prod_001", "quantity": 2, "status": "confirmed", "totalPrice": 59998, "createdAt": "2024-01-15T11:00:00Z" },
  { "id": "ord_002", "productId": "prod_002", "quantity": 1, "status": "confirmed", "totalPrice": 14999, "createdAt": "2024-01-15T11:00:01Z" },
  { "id": "ord_003", "productId": "prod_003", "quantity": 5, "status": "confirmed", "totalPrice": 9995,  "createdAt": "2024-01-15T11:00:01Z" }
]
```

> **Rate limits:** The Free plan allows 60 requests per minute. If your bulk list exceeds that, batch requests into groups and wait for the `Retry-After` value from a `429` response before sending the next batch.

---

## Error handling

Handle these errors for both single and bulk order flows:

| Status | Error code | Cause | Fix |
|---|---|---|---|
| `401` | `INVALID_API_KEY` | Missing or malformed API key. | Check the `X-API-Key` header value. |
| `404` | `PRODUCT_NOT_FOUND` | The `productId` does not exist. | Call `GET /products` to retrieve valid IDs. |
| `422` | `VALIDATION_ERROR` | Insufficient stock or invalid `quantity`. | Reduce quantity or check stock with `GET /products/{id}`. |
| `429` | `RATE_LIMIT_EXCEEDED` | Too many requests. | Wait for the `Retry-After` duration, then retry. |

```javascript
async function safeCreateOrder(productId, quantity) {
  try {
    const order = await client.orders.create({ productId, quantity });
    return order;
  } catch (error) {
    if (error.status === 404) {
      console.error(`Product not found: ${productId}`);
    } else if (error.status === 422) {
      console.error(`Validation error: ${error.message}`);
    } else if (error.status === 429) {
      const retryAfter = error.headers['Retry-After'];
      console.error(`Rate limited. Retry after ${retryAfter}s.`);
    } else {
      console.error(`Unexpected error: ${error.message}`);
    }
    return null;
  }
}
```

---

## FAQ

**Can two or more products be ordered in a single API call?**
No. `POST /orders` accepts one `productId` per request. Use `Promise.all` to send concurrent requests for two or more products, as shown in the preceding bulk orders example.

**Does creating an order reserve stock?**
Yes. ShopFlow decrements the product's stock count immediately when you create an order. If the order is later cancelled, stock is not automatically restored. Contact ShopFlow support to adjust inventory.

**What does `totalPrice` represent?**
The `totalPrice` field is in paise (₹ × 100). Divide by 100 to get the price in Indian Rupees. For example, `59998` equals ₹599.98.

**What order statuses appear after creation?**
New orders start with `confirmed` status. The full lifecycle is: `pending` → `confirmed` → `shipped` → `delivered`. An order can move to `cancelled` at any point before delivery.

**What happens if one request fails in a bulk order flow?**
`Promise.all` rejects immediately if any request fails, leaving other in-flight requests unresolved. Wrap each `client.orders.create` call in a try/catch (as shown in the error handling example) and use `Promise.allSettled` instead if you want all requests to complete regardless of individual failures.
