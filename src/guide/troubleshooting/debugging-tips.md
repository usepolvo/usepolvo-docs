# Debugging Tips

When you encounter issues while using usepolvo, these debugging tips can help you identify and resolve problems more efficiently.

## Enable Verbose Logging

usepolvo provides detailed logging that can be incredibly helpful for debugging. To enable verbose logging:

```python
import logging
logging.basicConfig(level=logging.DEBUG)
```

This will print detailed information about API requests, responses, and any errors encountered.

## Use Try-Except Blocks

Wrap your API calls in try-except blocks to catch and examine specific exceptions:

```python
from usepolvo.exceptions import ApiError, AuthenticationError, RateLimitError

try:
    result = await client.some_method()
except AuthenticationError as e:
    print(f"Authentication failed: {str(e)}")
except RateLimitError as e:
    print(f"Rate limit exceeded: {str(e)}")
except ApiError as e:
    print(f"API error occurred: {str(e)}")
```

## Inspect Request and Response Data

For deeper debugging, you can access the raw request and response data:

```python
try:
    result = await client.some_method()
except ApiError as e:
    print(f"Request URL: {e.request.url}")
    print(f"Request Method: {e.request.method}")
    print(f"Request Headers: {e.request.headers}")
    print(f"Request Body: {e.request.body}")
    print(f"Response Status: {e.response.status_code}")
    print(f"Response Body: {e.response.text}")
```

## Use the Python Debugger

For step-by-step debugging, use Python's built-in debugger:

```python
import pdb

async def some_function():
    # ... some code ...
    pdb.set_trace()  # Debugger will start here
    result = await client.some_method()
    # ... more code ...
```

## Check API Credentials

Verify that you're using the correct API credentials:

```python
print(client.api_key)  # Will print the first and last 4 characters
```

## Test with Minimal Example
If you're having issues, try to reproduce the problem with a minimal example. This can help isolate the issue and make it easier to debug.

## Use Async Event Loop Debug Mode

For debugging asynchronous code, enable the async event loop debug mode:

```python
import asyncio

asyncio.get_event_loop().set_debug(True)
```

This will provide more detailed information about the execution of your async code.

## Check for Version Compatibility

Ensure you're using a compatible version of usepolvo with your Python version and the APIs you're integrating with. You can check the installed version:

```python
import usepolvo
print(usepolvo.__version__)
```

Remember, if you're still stuck after trying these debugging tips, don't hesitate to consult our FAQ, search for similar issues in our GitHub repository, or reach out to the community for help.