# Intelligent Rate Limiting

**usepolvo** includes built-in rate limiting to help you manage API rate limits gracefully. This ensures that your application doesn't exceed the allowed number of requests and handles retries effectively.

## How Rate Limiting Works

- **Rate Limits**: Each API has its own rate limits, and **usepolvo** tracks these limits.
- **Retry Logic**: When the rate limit is reached, **usepolvo** automatically retries the request after the appropriate delay.

## Example: Rate Limiting in Action

Here's an example of how to handle rate limiting when listing customers in Stripe:

```python
import asyncio
from usepolvo.stripe.customers import StripeCustomerClient

async def list_customers():
    client = StripeCustomerClient(api_key="your_stripe_api_key")
    try:
        customers = await client.list_customers(page=1, size=10)
        for customer in customers:
            print(f'Customer ID: {customer.id}, Email: {customer.email}')
    except RateLimitError as e:
        print(f'Rate limit exceeded. Retry after {e.retry_after} seconds.')

asyncio.run(list_customers())
```