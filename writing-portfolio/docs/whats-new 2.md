---
title: What's new in v2.0
description: New features and improvements in ShopFlow API v2.0
---

## What's new in ShopFlow API v2.0

### New endpoints
- `GET /products/featured`, retrieve featured products
- `POST /orders/bulk`, create several orders in one request

### Improvements
- Faster response times, reduced latency by 40%
- Better error messages, all errors now include suggestion field
- New SDK support, Swift and Kotlin added

### Breaking changes
- `price` field now returns in rupees instead of paise
- `GET /products` now returns 20 results by default instead of 10