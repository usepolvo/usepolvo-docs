# Error Handling

The **usepolvo** Python client includes built-in error handling to help you manage errors gracefully.

## Example: Handling Errors in Asynchronous Functions

```python
import asyncio
from usepolvo.stripe.customers import StripeCustomerClient
from usepolvo.exceptions import UsePolvoError

async def list_customers():
    client = StripeCustomerClient(api_key="your_stripe_api_key")
    try:
        customers = await client.list_customers(page=1, size=10)
        for customer in customers:
            print(f'Customer ID: {customer.id}, Email: {customer.email}')
    except UsePolvoError as e:
        print(f'Error: {e}')

asyncio.run(list_customers())
```

## Example: Handling Errors in Synchronous Functions

```python
import asyncio
from usepolvo.stripe.customers import StripeCustomerClient
from usepolvo.exceptions import UsePolvoError

def list_customers_sync():
    client = StripeCustomerClient(api_key="your_stripe_api_key")
    try:
        customers = asyncio.run(client.list_customers(page=1, size=10))
        for customer in customers:
            print(f'Customer ID: {customer.id}, Email: {customer.email}')
    except UsePolvoError as e:
        print(f'Error: {e}')

# Example usage
list_customers_sync()
```