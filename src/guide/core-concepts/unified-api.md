# Unified API Interface

polvo's Unified API Interface is a core feature that simplifies working with multiple third-party APIs by providing a consistent pattern for interactions across different services.

## Key Benefits

- **Consistency**: Use the same methods and patterns across different API integrations.
- **Simplicity**: Reduce the learning curve for working with new APIs.
- **Maintainability**: Easier to maintain code that interacts with multiple services.

## How It Works

polvo abstracts away the differences between various APIs, presenting a uniform interface for common operations. For example, whether you're working with Stripe, HubSpot, or any other supported service, you'll use similar methods for operations like creating, reading, updating, or deleting resources.

## Example

Here's how you might interact with different services using polvo's unified interface:

```python
from usepolvo.stripe import StripeClient
from usepolvo.hubspot import HubSpotClient

stripe = StripeClient()
hubspot = HubSpotClient()

# Listing customers in Stripe
stripe_customers = await stripe.customers.list_customers(page=1, size=10)

# Listing contacts in HubSpot
hubspot_contacts = await hubspot.contacts.list_contacts(page=1, size=10)

# Creating a customer in Stripe
new_stripe_customer = await stripe.customers.create_customer(email="example@email.com")

# Creating a contact in HubSpot
new_hubspot_contact = await hubspot.contacts.create_contact(email="example@email.com")
```

Notice how the method names and structure are similar across different services.

## Customization

While polvo provides a unified interface, it also allows for service-specific customization when necessary. You can always access service-specific features when needed.

By leveraging polvo's Unified API Interface, you can significantly reduce the complexity of working with multiple APIs in your projects.