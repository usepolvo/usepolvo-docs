# Endpoints

The **usepolvo** API provides various endpoints for interacting with different third-party services.

## General Endpoints

These endpoints provide general functionalities.

### Health Check

```http
GET /health
```

Returns the health status of the API.

## Stripe Endpoints

These endpoints allow you to interact with Stripe.

### List Customers

```http
GET /stripe/customers
```

Lists customers in your Stripe account.

### Create Customer

```http
POST /stripe/customers
```

Creates a new customer in your Stripe account.

## HubSpot Endpoints

These endpoints allow you to interact with HubSpot.

### List Contacts

```http
GET /hubspot/contacts
```

Lists contacts in your HubSpot account.

### Create Contact

```http
POST /hubspot/contacts
```

Creates a new contact in your HubSpot account.

## Salesforce Endpoints

These endpoints allow you to interact with Salesforce.

### List Leads

```http
GET /salesforce/leads
```

Lists leads in your Salesforce account.

### Create Lead

```http
POST /salesforce/leads
```

Creates a new lead in your Salesforce account.