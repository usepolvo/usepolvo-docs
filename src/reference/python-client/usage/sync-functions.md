# Synchronous Functions

If you prefer to use the package synchronously, you can create a synchronous wrapper around the asynchronous functions.

## Example: Listing Customers in Stripe

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

## Example: Creating a Customer in Stripe

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