# Error Handling

Proper error handling is crucial when working with APIs. polvo provides a standardized way to handle errors across different services, making your code more robust and easier to maintain.

## Unified Error Types

polvo defines a set of common error types that you'll encounter across different API integrations:

- `ApiError`: Base class for all API-related errors
- `AuthenticationError`: Issues with API keys or authentication tokens
- `RateLimitError`: You've exceeded the API's rate limit
- `ResourceNotFoundError`: The requested resource doesn't exist
- `ValidationError`: The API request was invalid
- `ServerError`: The API server encountered an error

## Handling Errors

Here's an example of how to handle errors in polvo:

```python
from usepolvo.stripe import StripeClient
from usepolvo.exceptions import ApiError, AuthenticationError, RateLimitError, ResourceNotFoundError

client = StripeClient()

try:
    customer = await client.customers.get_customer('cus_123456789')
except AuthenticationError:
    print("Check your API key")
except RateLimitError as e:
    print(f"Rate limit exceeded. Retry after {e.retry_after} seconds")
except ResourceNotFoundError:
    print("Customer not found")
except ApiError as e:
    print(f"An API error occurred: {str(e)}")
```

## Error Attributes

polvo error objects contain useful information to help you diagnose and handle the error:

```python
try:
    # Some API operation
except ApiError as e:
    print(f"Error Code: {e.code}")
    print(f"Error Message: {e.message}")
    print(f"Request ID: {e.request_id}")
```

## Retry Mechanism

For certain types of errors (like temporary server issues or rate limit errors), polvo includes a built-in retry mechanism:

```python
from usepolvo.stripe import StripeClient
from usepolvo.retry import retry_with_exponential_backoff

client = StripeClient()

@retry_with_exponential_backoff(max_retries=3)
async def get_customer(customer_id):
    return await client.customers.get_customer(customer_id)

customer = await get_customer('cus_123456789')
```

## Best Practices

1. Always wrap API calls in try-except blocks to handle potential errors.
2. Log errors for debugging and monitoring purposes.
3. Implement appropriate fallback behavior for different types of errors.
4. Use the retry decorator for operations that might fail due to temporary issues.
5. Provide meaningful error messages to your users when API operations fail.

By leveraging polvo's standardized error handling, you can create more resilient applications that gracefully handle various API-related issues.