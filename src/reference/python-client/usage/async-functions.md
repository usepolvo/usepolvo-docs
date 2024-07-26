# Asynchronous Functions

The **usepolvo** Python client supports asynchronous functions to handle I/O-bound operations efficiently.

## Example: Listing Customers in Stripe

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

## Example: Creating a Customer in Stripe

```python
import asyncio
from usepolvo.stripe.customers import StripeCustomerClient

async def create_customer():
    client = StripeCustomerClient(api_key="your_stripe_api_key")
    customer = await client.create_customer(email="new_customer@example.com")
    print(f'Created Customer ID: {customer.id}, Email: {customer.email}')

asyncio.run(create_customer())
```