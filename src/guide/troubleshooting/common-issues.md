# Common Issues

While using usepolvo, you might encounter some common issues. This guide will help you identify and resolve these problems quickly.

## Authentication Errors

**Symptom**: You receive `AuthenticationError` when trying to make API calls.

**Possible Causes**:
- Incorrect API key or credentials
- Expired OAuth token
- Using test credentials in production environment (or vice versa)

**Solutions**:
1. Double-check your API keys and credentials
2. Ensure your OAuth tokens are up to date and refresh if necessary
3. Verify you're using the correct environment (test/production)

## Rate Limiting Issues

**Symptom**: You're receiving `RateLimitError` frequently.

**Possible Causes**:
- Making too many requests in a short time
- Incorrect rate limit configuration

**Solutions**:
1. Implement exponential backoff in your requests
2. Use usepolvo's built-in rate limiting features
3. Optimize your code to reduce the number of API calls

## Integration-Specific Problems

### Stripe

**Issue**: Charges are being declined unexpectedly

**Solutions**:
1. Check the card details are correct
2. Ensure you're using a valid test card in test mode
3. Verify the charge amount is above the minimum allowed

### HubSpot

**Issue**: Contact creation fails

**Solutions**:
1. Ensure all required fields are provided
2. Check for duplicate contacts (email address must be unique)
3. Verify your HubSpot account has sufficient contact limit

## General Performance Issues

**Symptom**: API calls are taking longer than expected

**Possible Causes**:
- Network latency
- Large data sets
- Inefficient code

**Solutions**:
1. Use asynchronous methods for better performance
2. Implement pagination for large data sets
3. Optimize your code to reduce unnecessary API calls

If you're experiencing issues not covered here, please check our [Debugging Tips](./debugging-tips) or [FAQ](./faq) for more information. If the problem persists, don't hesitate to reach out to our community or support channels.