# Rate Limiting

The **usepolvo** API applies rate limiting to ensure fair usage and prevent abuse. If you exceed the rate limits, you will receive a `429 Too Many Requests` response.

## Rate Limit Headers

The response headers include information about your rate limit status:

- `X-RateLimit-Limit`: The maximum number of requests that the client is allowed to make in a specific time window.
- `X-RateLimit-Remaining`: The number of requests remaining in the current rate limit window.
- `X-RateLimit-Reset`: The time at which the current rate limit window resets in UTC epoch seconds.

## Handling Rate Limits

If you receive a `429 Too Many Requests` response, you should wait until the rate limit window resets before making additional requests.