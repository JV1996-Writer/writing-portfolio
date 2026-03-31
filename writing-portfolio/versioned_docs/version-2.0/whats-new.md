---
title: What's new in ShopFlow API v2.0
description: ShopFlow API v2.0 introduces new endpoints for featured products and bulk orders, improved response times, better error messages, and new SDK support for Swift and Kotlin.
keywords: [ShopFlow API, v2.0, changelog, new features, API updates]
---

## What's new in ShopFlow API v2.0

### New endpoints

- `GET /products/featured`. Retrieve featured products.
- `POST /orders/bulk`. Create more than one orders in a single request.

### Improvements

- Faster response times. Reduced latency by 40%.
- Better error messages. All errors now include suggestion field.
- New SDK support. Swift and Kotlin added.

### Breaking changes

- `price` field now returns in rupees instead of paise.
- `GET /products` now returns 20 results by default instead of 10.