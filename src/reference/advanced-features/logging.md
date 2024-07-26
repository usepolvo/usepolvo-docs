# Robust Logging

**usepolvo** integrates structured logging to help you monitor and debug integrations effectively. By using structured logs, you can easily trace issues and understand the flow of your application.

## Benefits of Structured Logging

- Easier debugging and issue tracing.
- Improved visibility into application behavior.
- Consistent log format.

## Example: Using Logging in Stripe Integration

Here's an example of how to use logging when listing customers in Stripe:

```python
import asyncio
from usepolvo.stripe.customers import StripeCustomerClient
from usepolvo.logger import get_logger

logger = get_logger(__name__)

async def list_customers():
    client = StripeCustomerClient(api_key="your_stripe_api_key")
    try:
        customers = await client.list_customers(page=1, size=10)
        for customer in customers:
            logger.info(f'Customer ID: {customer.id}, Email: {customer.email}')
    except Exception as e:
        logger.error(f'Error listing customers: {e}')

asyncio.run(list_customers())
```