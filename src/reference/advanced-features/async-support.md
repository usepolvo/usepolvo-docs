# Asynchronous Support

**usepolvo** provides full asynchronous support to handle I/O-bound operations efficiently. By using asynchronous functions, you can improve the performance of your application, especially when dealing with multiple API requests.

## Benefits of Asynchronous Support

- Improved performance for I/O-bound tasks.
- Efficient use of resources.
- Ability to handle multiple tasks concurrently.

## Example: Asynchronous Function in Python

Here's an example of using an asynchronous function to list customers in Stripe:

```python
import asyncio
from usepolvo.stripe.customers import StripeCustomerClient

async def list_customers():
    client = StripeCustomerClient(api_key="your_stripe_api_key")
    customers = await client.list_customers(page=1, size=10)
    for customer in customers:
        print(f'Customer ID: {customer.id}, Email: {customer.email}')

asyncio.run(list_customers())
```