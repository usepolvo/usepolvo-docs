# Getting Started

Welcome to **usepolvo**! Follow these steps to get up and running quickly.

## Prerequisites

Before you begin, ensure you have the following:

- Python 3.7 or higher
- pip package manager

## Installation

To install **usepolvo**, run:

```bash
pip install usepolvo
```

## Configuration

Create a `.env` file in your project directory with the following content:

```ini
# Example configuration for Stripe
STRIPE_API_KEY=your_encrypted_stripe_api_key

# Example configuration for HubSpot
HUBSPOT_API_KEY=your_hubspot_api_key

# Encryption key for securing sensitive information
ENCRYPTION_KEY=your_generated_encryption_key
```

## Basic Usage

Here's a quick example to get you started with **usepolvo**.

### List Customers in Stripe

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

### Create a Customer in Stripe

```python
import asyncio
from usepolvo.stripe.customers import StripeCustomerClient

async def create_customer():
    client = StripeCustomerClient(api_key="your_stripe_api_key")
    customer = await client.create_customer(email="new_customer@example.com")
    print(f'Created Customer ID: {customer.id}, Email: {customer.email}')

asyncio.run(create_customer())
```

You're all set to explore the full potential of **usepolvo**. Happy coding!