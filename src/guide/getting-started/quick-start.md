# Quick Start Guide

This guide will help you quickly get up and running with polvo. We'll use the Stripe integration as an example to demonstrate basic usage.

## Setup

First, make sure you have polvo installed. If not, follow our [Installation Guide](./installation).

## Initializing the Client

Start by importing the StripeClient from polvo and creating a client instance:

```python
from usepolvo.stripe import StripeClient

client = StripeClient()
```

## Basic Usage Example

Here's a simple script that demonstrates listing customers and creating a new customer using the Stripe integration:

```python
import asyncio
from usepolvo.stripe import StripeClient

client = StripeClient()

async def main():
    # List customers
    customers = await client.customers.list_customers(page=1, size=10)
    for customer in customers:
        print(f"Customer ID: {customer.id}, Email: {customer.email}")

    # Create a new customer
    new_customer = await client.customers.create_customer(email="new_customer@example.com")
    print(f"Created Customer ID: {new_customer.id}, Email: {new_customer.email}")

if __name__ == "__main__":
    asyncio.run(main())
```

This script does two things:

1. Lists the first 10 customers in your Stripe account.
2. Creates a new customer with the email "new_customer@example.com".

## Running the Script

Save the above code in a file (e.g., stripe_example.py) and run it:

```python
python stripe_example.py
```

## Understanding the Code

- *polvo* uses asynchronous programming to improve performance. That's why we use async def and await.
- The client.customers.list_customers() method returns an iterable of customer objects.
- The client.customers.create_customer() method creates a new customer and returns the customer object.

## Next Steps

This is just a basic example of what you can do with polvo. To learn more:

1. Explore the Core Concepts to understand the key features of polvo.
2. Check out the Python Client Reference for detailed API documentation.
3. Try integrating with other services, like HubSpot.

Remember, polvo is designed to provide a consistent interface across different APIs, so the patterns you learn with one integration will apply to others as well.

If you encounter any issues or have questions, don't hesitate to check our Troubleshooting section or reach out to the community for help.

Happy coding with polvo!