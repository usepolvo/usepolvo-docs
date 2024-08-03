# Pagination

When working with APIs, it's common to deal with large sets of data that are split into multiple pages. usepolvo provides a unified approach to pagination across different services, simplifying the process of retrieving and processing large datasets.

## Unified Pagination Interface

usepolvo abstracts away the differences in pagination mechanisms used by different APIs, providing a consistent interface:

```python
from usepolvo.stripe import StripeClient

client = StripeClient()

async def list_all_customers():
    async for customer in client.customers.list_all_customers():
        print(customer.id, customer.email)
```

This works the same way regardless of whether the underlying API uses cursor-based, offset-based, or page-based pagination.

## Manual Pagination

If you need more control, you can manually paginate:

```python
customers = await client.customers.list_customers(page=1, size=100)
for customer in customers:
    print(customer.id, customer.email)

# Get the next page
next_customers = await client.customers.list_customers(page=2, size=100)
```

## Async Iteration

For efficient processing of large datasets, usepolvo supports async iteration:

```python
async for customer in client.customers.iter_customers(batch_size=100):
    # Process each customer
    await process_customer(customer)
```

This allows you to start processing data as soon as it's available, rather than waiting for an entire page to load.

## Handling Pagination Metadata

Some operations return pagination metadata along with the results:

```python
results, metadata = await client.customers.list_customers_with_metadata(page=1, size=100)
print(f"Total customers: {metadata.total_count}")
print(f"Next page: {metadata.next_page}")
```

## Best Practices

1. Use `list_all_` methods for small to medium datasets.
2. Use `iter_` methods for large datasets or when you need to process items as they become available.
3. Be mindful of rate limits when dealing with large datasets.
4. Consider using background jobs for very large data synchronization tasks.

usepolvo's unified pagination approach allows you to write clean, efficient code for data retrieval across different APIs, improving the maintainability and performance of your applications.