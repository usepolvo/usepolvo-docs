---
{ 'home': False, 'prev': False, 'next': False }
---
# Polvo: Intelligent API Integration Toolkit

Polvo is a Python toolkit that makes API integrations effortless. Build robust integrations using traditional code-first approaches or leverage AI capabilities for natural language interactions with your APIs.

## Installation

```bash
pip install usepolvo
```

## Core Concepts

### Brain System

The Brain system lets you build AI-powered applications that can interact with APIs using natural language. It provides:

```python
from usepolvo.brain import create_brain
from usepolvo.tentacles.integration import HubSpotClient

brain = await create_brain(
    name="CRM Assistant",
    tentacles=[HubSpotClient()],
    system_prompt="You are a helpful CRM assistant."
)

# Let AI handle the interaction
response = await brain.process(
    "Update john@example.com's phone number to +1-555-0123"
)
```

### Tentacle Framework

The Tentacle framework provides a structured way to build reusable API integrations:

```python
from usepolvo.arms.clients import RESTClient
from usepolvo.arms.tentacles import APITentacle
from pydantic import BaseModel

class WeatherInput(BaseModel):
    city: str
    days: int = 5

class WeatherOutput(BaseModel):
    temperature: float
    conditions: str

class WeatherTentacle(APITentacle[WeatherInput, WeatherOutput]):
    def __init__(self):
        self.client = WeatherClient()
        super().__init__(self.client)

    async def execute(self, input: WeatherInput):
        data = await self.client.get_forecast(input.city)
        return WeatherOutput(**data)
```

### Built-in Features

All integrations automatically get:
- **Authentication**: OAuth2, JWT, and API key support
- **Rate Limiting**: Intelligent request throttling
- **Error Handling**: Standardized errors and retries
- **Type Safety**: Full Pydantic integration

## Examples

### Traditional Integration

Create a weather service integration:

```python
weather = WeatherTentacle()

# Use with type validation
result = await weather(WeatherInput(city="san-francisco"))
print(f"Temperature: {result.temperature}°C")

# Use with dictionary
result = await weather({"city": "new-york"})
print(f"Conditions: {result.conditions}")
```

### AI-Powered Integration

Let AI handle your API interactions:

```python
# Create a brain with multiple capabilities
brain = await create_brain(
    name="Assistant",
    tentacles=[
        WeatherTentacle(),
        HubSpotClient(),
    ]
)

# Natural language interaction
responses = await brain.process("""
    1. What's the weather in San Francisco?
    2. Create a contact for john@example.com
""")
```

### Custom Tentacles

Create your own API integration:

```python
class MyAPITentacle(APITentacle[MyInput, MyOutput]):
    def __init__(self):
        self.client = MyClient()  # Your API client
        super().__init__(self.client)

    async def execute(self, input: MyInput):
        # Your integration logic here
        result = await self.client.some_operation(input.data)
        return MyOutput(**result)
```

## Environment Setup

Create a `.env` file:

```env
POLVO_ENCRYPTION_KEY=your_encryption_key
POLVO_CLAUDE_API_KEY=your_claude_api_key  # For Brain system
```

## Troubleshooting

### Common Issues

1. **Authentication Errors**
   - Verify API credentials
   - Check environment variables
   - Ensure OAuth tokens are fresh

2. **Rate Limiting**
   - Use the built-in rate limiters
   - Implement backoff strategies
   - Monitor API usage

3. **Type Errors**
   - Ensure input/output models match API data
   - Use proper type hints
   - Validate data before sending

For more help, visit our [GitHub issues](https://github.com/usepolvo/polvo-python/issues) or join our Discord.