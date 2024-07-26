# Example Code

## Listing Customers in Stripe

### Asynchronous

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

### Synchronous

```python
import asyncio
from usepolvo.stripe.customers import StripeCustomerClient

def list_customers_sync():
    client = StripeCustomerClient(api_key="your_stripe_api_key")
    customers = asyncio.run(client.list_customers(page=1, size=10))
    for customer in customers:
        print(f'Customer ID: {customer.id}, Email: {customer.email}')

# Example usage
list_customers_sync()
```

## Creating a Customer in Stripe

### Asynchronous

```python
import asyncio
from usepolvo.stripe.customers import StripeCustomerClient

async def create_customer():
    client = StripeCustomerClient(api_key="your_stripe_api_key")
    customer = await client.create_customer(email="new_customer@example.com")
    print(f'Created Customer ID: {customer.id}, Email: {customer.email}')

asyncio.run(create_customer())
```

### Synchronous

```python
import asyncio
from usepolvo.stripe.customers import StripeCustomerClient

def create_customer_sync():
    client = StripeCustomerClient(api_key="your_stripe_api_key")
    customer = asyncio.run(client.create_customer(email="new_customer@example.com"))
    print(f'Created Customer ID: {customer.id}, Email: {customer.email}')

# Example usage
create_customer_sync()
```