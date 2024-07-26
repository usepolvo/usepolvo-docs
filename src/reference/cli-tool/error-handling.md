# Error Handling

The **usepolvo** CLI tool includes built-in error handling to help you manage errors gracefully.

## Example: Handling Errors in Commands

When an error occurs, the CLI tool will display an error message with details about the issue.

```bash
usepolvo stripe list-customers
```

If an error occurs, you will see an output like:

```bash
Error: Invalid API key
```

Ensure that your API keys are configured correctly and try again.