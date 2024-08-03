# Asynchronous Operations

usepolvo is built with asynchronous programming at its core, leveraging Python's `asyncio` library to provide efficient, non-blocking I/O operations.

## Why Asynchronous?

Asynchronous programming allows your application to perform multiple I/O operations concurrently without using multiple threads or processes. This is particularly beneficial when working with APIs, as it allows you to:

- Make multiple API calls simultaneously
- Handle high concurrency efficiently
- Improve overall application performance

## How It Works in usepolvo

All API operations in usepolvo are designed to be used asynchronously. This means you'll be using `async/await` syntax when working with usepolvo.

## Example

Here's a simple example of how asynchronous operations work in usepolvo:

```python
import asyncio
from usepolvo.stripe import StripeClient

client = StripeClient()

async def fetch_customers_and_charges():
    # These two operations will run concurrently
    customers_future = client.customers.list_customers(page=1, size=10)
    charges_future = client.charges.list_charges(page=1, size=10)
    
    # Wait for both operations to complete
    customers, charges = await asyncio.gather(customers_future, charges_future)
    
    return customers, charges

# Run the async function
customers, charges = asyncio.run(fetch_customers_and_charges())
```

In this example, the customer list and charge list are fetched concurrently, potentially saving significant time compared to fetching them sequentially.

## Best Practices

1. Use `asyncio.gather()` to run multiple operations concurrently.
2. Be mindful of rate limits when running many operations concurrently.
3. Use `asyncio.run()` to run your main async function if you're not in an async context.
4. Consider using `async for` for paginated results to process items as they become available.

By leveraging usepolvo's asynchronous design, you can build highly efficient applications that can handle multiple API interactions smoothly and quickly.