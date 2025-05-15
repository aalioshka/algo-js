# 🧩 Interview Prompt

💬 "Imagine you're building a backend endpoint for a Mint-like app. You need an API to return all accounts (credit cards, loans, etc.) for a given user. Design this API and implement it in code."

### 🛠️ Backend Design Goals

* **Route**: GET /users/:userId/accounts
* **Response**: All credit-related accounts for a user
* **Data Types**: CreditCardAccount, LoanAccount, CheckingAccount, etc.
* Optional: add a filter like ?type=credit or ?type=loan

### 🧪 Sample Request

```http
GET /users/user123/accounts
→ returns all 3 accounts

GET /users/user123/accounts?type=credit
→ returns only Chase Freedom
```

### 🧪 Sample Response

```json
[
  {
    "id": "acc1",
    "type": "credit",
    "provider": "Chase",
    "accountName": "Chase Freedom",
    "balance": 1200.45,
    "currency": "USD",
    "details": {
      "creditLimit": 5000,
      "availableCredit": 3800,
      "apr": 19.99,
      "dueDate": "2025-06-15"
    }
  },
  {
    "id": "acc2",
    "type": "loan",
    "provider": "SoFi",
    "accountName": "Student Loan",
    "balance": 8000,
    "currency": "USD",
    "details": {
      "principal": 10000,
      "interestRate": 4.5,
      "remainingTermMonths": 12
    }
  },
  {
    "id": "acc3",
    "type": "checking",
    "provider": "Wells Fargo",
    "accountName": "Wells Fargo Checking",
    "balance": 3400,
    "currency": "USD",
    "details": {
      "overdraftProtection": true,
      "routingNumber": "123456789"
    }
  }
]

```

### ✅ Example: Node.js (Express) Skeleton

```JS
// server.js
const express = require('express');
const app = express();
const port = 3000;

const { getUserAccounts } = require('./services/accountService');

app.get('/users/:userId/accounts', async (req, res) => {
    const { userId } = req.params;
    const { type } = req.query;

    try {
        const accounts = await getUserAccounts(userId, type);
        res.json({ userId, accounts });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
```

### 🧠 Business Logic Layer

```JS
// services/accountService.js

const db = require('../db/fakeDb');

// Simulate filtering accounts by type (e.g., credit, loan)
function getUserAccounts(userId, type) {
    const accounts = db[userId] || [];
    if (type) {
        return accounts.filter(acc => acc.type === type);
    }
    return accounts;
}

module.exports = { getUserAccounts };
```

### 📦 Fake In-Memory DB

```JS
// db/fakeDb.js

module.exports = {
  'user123': [
    {
      id: 'acc1',
      type: 'credit',
      provider: 'Chase',
      accountName: 'Chase Freedom',
      balance: 1200.45,
      currency: 'USD',
      details: {
        creditLimit: 5000,
        availableCredit: 3800,
        apr: 19.99,
        dueDate: '2025-06-15'
      }
    },
    {
      id: 'acc2',
      type: 'loan',
      provider: 'SoFi',
      accountName: 'Student Loan',
      balance: 8000,
      currency: 'USD',
      details: {
        principal: 10000,
        interestRate: 4.5,
        remainingTermMonths: 12
      }
    },
    {
      id: 'acc3',
      type: 'checking',
      provider: 'Wells Fargo',
      accountName: 'Wells Fargo Checking',
      balance: 3400,
      currency: 'USD',
      details: {
        overdraftProtection: true,
        routingNumber: '123456789'
      }
    }
  ],
  'user456': [
    {
      id: 'acc4',
      type: 'credit',
      provider: 'Amex',
      accountName: 'Amex Gold',
      balance: 2500,
      currency: 'USD',
      details: {
        creditLimit: 10000,
        availableCredit: 7500,
        apr: 23.99,
        dueDate: '2025-06-10'
      }
    }
  ]
};


```

### 🧠 Type Definitions (for clarity)


```ts
interface Account {
  id: string;
  userId: string;
  type: 'credit' | 'loan' | 'checking';
  provider: string;
  accountName: string;
  balance: number;
  currency: string;
  details: CreditCardDetails | LoanDetails | CheckingDetails;
}

```

### 🧱 Database Schema (If Replacing Fake DB)

#### Relational (PostgreSQL)

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  name TEXT
);

CREATE TABLE accounts (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  type TEXT CHECK (type IN ('credit', 'loan', 'checking')),
  provider TEXT,
  account_name TEXT,
  balance DECIMAL,
  currency TEXT,
  last_updated TIMESTAMP DEFAULT NOW(),
  details JSONB
);

```

#### NoSQL (MongoDB)

```js
{
  _id: "acc123",
  userId: "user123",
  type: "credit",
  provider: "Chase",
  accountName: "Chase Freedom",
  balance: 1200.45,
  currency: "USD",
  details: {
    creditLimit: 5000,
    availableCredit: 3800,
    apr: 19.99,
    dueDate: "2025-06-15"
  }
}
```

### 📚 What This Shows the Interviewer

* You understand routes, parameters, and query strings
* You separate concerns: routing vs business logic
* You can simulate a DB call
* You write robust API code that handles errors


# 🚀 Scale-Up Plan

### 🧱 Step 1: Replace In-Memory with Real DB

* Use PostgreSQL or MongoDB
* Add indexes on userId, type
* Normalize data or use document model depending on growth

Tradeoff:
* SQL gives you joins, constraints (good for consistency).
* NoSQL scales faster horizontally (good for flexibility and speed).

### 🚦 Step 2: Add Caching Layer

Use **Redis** or **Memcached** to cache frequent results:
* Cache the result of /users/:userId/accounts
* Invalidate cache when accounts change (update/create/delete)

<br /> ✅ Boosts read performance dramatically
<br /> ⏱ Reduces load on DB for common queries

### 🛸 Step 3: API Gateway / Load Balancer

Introduce an API gateway (e.g., Kong, NGINX, AWS API Gateway) to:
* Route requests to appropriate backend services
* Enforce authentication / rate limiting
* Serve static config (API keys, headers)

### 📊 Step 4: Monitoring and Alerts

Use tools like:
* Datadog / Prometheus + Grafana → to track latency, error rates
* Sentry / Rollbar → to track code exceptions
* Alerts on DB slow queries, memory spikes, etc.

### 🧯 Step 5: Queue for Async Tasks (Optional)

For heavy backend jobs (e.g., account syncing from external services), offload work to a queue:
* Queue: Kafka, RabbitMQ, or AWS SQS
* Workers: Separate service processes queue and updates DB
* Keep the API fast while doing heavy lifting in background

### Step 6: Horizontal Scalability

* Use containerization (Docker + Kubernetes)
* Auto-scale based on CPU/RAM
* DB: Use read replicas or sharding
* Cache: Clustered Redis

### 🧠 Diagram Summary

```scss
        ┌──────────────┐
        │  Client App  │
        └──────┬───────┘
               │
               ▼
       ┌──────────────┐
       │  API Gateway │
       └──────┬───────┘
              │
     ┌────────┴────────┐
     │     Load        │
     │    Balancer     │
     └────────┬────────┘
              │
      ┌───────▼────────┐
      │  Express API   │ <──── Auth, rate-limit, logging
      └──────┬─────────┘
             │
     ┌───────▼─────────┐
     │ Business Logic  │
     │ Layer (Services)│
     └──────┬──────────┘
            │
   ┌────────▼──────────────┐
   │     Redis Cache       │ <── frequently accessed results
   └────────┬──────────────┘
            │(miss)
   ┌────────▼──────────────┐
   │   Primary Database     │ <── (PostgreSQL / Mongo)
   └────────┬──────────────┘
            │
   ┌────────▼──────────────┐
   │ Background Workers     │ <── e.g., syncing with external APIs
   │ via Queue (SQS/Kafka)  │
   └────────────────────────┘

```

### 🧑‍💼 In the Interview, say something like:

```text
"I’d start with a simple monolith with caching and monitoring. As traffic grows, I’d split into services — one for accounts, one for transactions — and use queues for async tasks like syncing accounts. Redis will help cache frequent queries. API Gateway and Load Balancer will manage request routing and rate limiting."
```