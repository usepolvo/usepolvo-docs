# Webhooks

Webhooks are a crucial component of many API integrations, allowing your application to receive real-time updates from the services you're integrating with. usepolvo provides a unified interface for handling webhooks across different services.

## Webhook Basics

Webhooks are HTTP callbacks that are triggered by specific events in the source system. They allow your application to be notified immediately when something happens, rather than having to poll the API for changes.

## Setting Up Webhooks with usepolvo

usepolvo simplifies the process of setting up and handling webhooks:

```python
from usepolvo.stripe import StripeWebhookHandler
from usepolvo.exceptions import WebhookError

webhook_handler = StripeWebhookHandler(webhook_secret='your_webhook_secret')

@webhook_handler.on('customer.created')
async def handle_customer_created(event):
    customer = event.data.object
    print(f"New customer created: {customer.id}")

@webhook_handler.on('charge.succeeded')
async def handle_charge_succeeded(event):
    charge = event.data.object
    print(f"Charge succeeded: {charge.id}, Amount: {charge.amount}")

# In your web framework (e.g., FastAPI)
@app.post("/webhook/stripe")
async def stripe_webhook(request: Request):
    payload = await request.body()
    signature = request.headers.get('Stripe-Signature')
    
    try:
        event = webhook_handler.construct_event(payload, signature)
        await webhook_handler.handle_event(event)
        return {"status": "success"}
    except WebhookError as e:
        return {"status": "error", "message": str(e)}
```

## Webhook Verification

usepolvo automatically handles webhook signature verification to ensure that the incoming webhooks are legitimate:

```python
try:
    event = webhook_handler.construct_event(payload, signature)
except WebhookError as e:
    print(f"Webhook error: {str(e)}")
    # Handle invalid webhook
```

## Handling Different Event Types

You can easily handle different types of webhook events:

```python
@webhook_handler.on('customer.subscription.created')
async def handle_subscription_created(event):
    subscription = event.data.object
    # Handle new subscription

@webhook_handler.on('customer.subscription.updated')
async def handle_subscription_updated(event):
    subscription = event.data.object
    # Handle subscription update
```

## Best Practices

1. Always verify webhook signatures to ensure security.
2. Implement proper error handling for webhook processing.
3. Respond quickly to webhook requests (process asynchronously if needed).
4. Set up retry logic for failed webhook processing.
5. Monitor your webhook endpoints for errors or missed events.

## Testing Webhooks

usepolvo provides tools to help you test your webhook handling:

```python
from usepolvo.stripe import StripeWeb
```