# Efficient Caching

**usepolvo** includes a caching layer to reduce the number of API calls and improve performance. By caching responses, you can minimize the load on the API and retrieve data faster.

## Benefits of Caching

- Reduced API calls.
- Faster response times.
- Improved performance.

## Example: Using Caching with Stripe API

Here's an example of how to use caching when listing customers in Stripe:

```python
import asyncio
from usepolvo.stripe.customers import StripeCustomerClient
from usepolvo.cache import Cache

cache = Cache()

async def list_customers():
    client = StripeCustomerClient(api_key="your_stripe_api_key")
    cached_customers = cache.get("customers")
    if cached_customers:
        return cached_customers
    
    customers = await client.list_customers(page=1, size=10)
    cache.set("customers", customers)
    return customers

async def print_customers():
    customers = await list_customers()
    for customer in customers:
        print(f'Customer ID: {customer.id}, Email: {customer.email}')

asyncio.run(print_customers())
```