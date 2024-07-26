# Error Handling

The **usepolvo** API uses standard HTTP status codes to indicate the success or failure of an API request. In addition, error responses include a JSON body with more details about the error.

## Error Response Format

```json
{
  "error": {
    "code": "error_code",
    "message": "Detailed error message"
  }
}
```

## Common Error Codes

- `400 Bad Request`: The request was invalid or cannot be otherwise served.
- `401 Unauthorized`: Authentication credentials were missing or incorrect.
- `403 Forbidden`: The request is understood, but it has been refused or access is not allowed.
- `404 Not Found`: The URI requested is invalid or the resource requested does not exist.
- `429 Too Many Requests`: Too many requests hit the API too quickly. Rate limiting has been applied.
- `500 Internal Server Error`: An error occurred on the server.