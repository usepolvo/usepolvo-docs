# Authentication

Authentication is a crucial aspect of API integration, and polvo simplifies this process by providing a unified approach to handling authentication across different services.

## Supported Authentication Methods

polvo supports various authentication methods, including:

- API Keys
- OAuth 2.0
- JWT (JSON Web Tokens)

## How Authentication Works in polvo

1. **Initial Setup**: You provide your authentication credentials when initializing the client for a specific service.
2. **Automatic Handling**: polvo automatically handles the authentication process for each API request.
3. **Token Refresh**: For OAuth 2.0, polvo manages token refresh automatically when necessary.

## Example: Stripe Authentication

Here's how you might set up authentication for Stripe:

```python
from usepolvo.stripe import StripeClient

# Using an API key
client = StripeClient(api_key='your_stripe_api_key')

# Or, using an environment variable
import os
os.environ['STRIPE_API_KEY'] = 'your_stripe_api_key'
client = StripeClient()  # Automatically uses the environment variable
```

## Example: OAuth 2.0 (e.g., for HubSpot)

For services using OAuth 2.0, the process might look like this:

```python
from usepolvo.hubspot import HubSpotClient

client = HubSpotClient(
    client_id='your_client_id',
    client_secret='your_client_secret',
    redirect_uri='your_redirect_uri'
)

# Get the authorization URL
auth_url = client.get_auth_url()

# After the user authorizes, you'll receive a code
# Use this code to get the access token
await client.fetch_access_token(code='authorization_code')

# Now you can use the client to make authenticated requests
contacts = await client.contacts.list_contacts()
```

## Security Best Practices

1. Never hardcode sensitive credentials in your source code.
2. Use environment variables or secure vaults to store API keys and secrets.
3. For OAuth 2.0, securely store refresh tokens and handle token revocation when necessary.
4. Regularly rotate your API keys and secrets.

polvo's authentication handling simplifies the process of working with various APIs, allowing you to focus on building your application logic rather than managing different authentication flows.