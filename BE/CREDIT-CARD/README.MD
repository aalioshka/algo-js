🧩 Example Prompt

💬 "Imagine you're building a backend endpoint for a Mint-like app. You need an API to return all accounts (credit cards, loans, etc.) for a given user. Design this API and implement it in code."

🛠️ Backend Design Goals

* **Route**: GET /users/:userId/accounts
* **Response**: All credit-related accounts for a user
* **Data Types**: CreditCardAccount, LoanAccount, CheckingAccount, etc.
* Optional: add a filter like ?type=credit or ?type=loan

✅ Example: Node.js (Express) Skeleton

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

🧠 Business Logic Layer

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

📦 Fake In-Memory DB

```JS
// db/fakeDb.js

module.exports = {
    'user123': [
        { id: 'acc1', type: 'credit', name: 'Chase Freedom', balance: 1200 },
        { id: 'acc2', type: 'loan', name: 'Student Loan', balance: 8000 },
        { id: 'acc3', type: 'checking', name: 'Wells Fargo Checking', balance: 3400 }
    ],
    'user456': [
        { id: 'acc4', type: 'credit', name: 'Amex Gold', balance: 2500 }
    ]
};
```

🧪 Sample Request

```pgsql
GET /users/user123/accounts
→ returns all 3 accounts

GET /users/user123/accounts?type=credit
→ returns only Chase Freedom
```

📚 What This Shows the Interviewer

* You understand routes, parameters, and query strings
* You separate concerns: routing vs business logic
* You can simulate a DB call
* You write robust API code that handles errors

🚀 Want to take it further?

<br /> Try these:
* Add validation: check if user exists
* Return 404 if user not found
* Add caching (e.g., memoization)
* Add pagination (limit, offset)
* Add Swagger-style API documentation