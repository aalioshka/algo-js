## ✅ Typical Setup (Real-World Use Case)

In most modern architectures, especially microservices or serverless, the common setup is:

#### 🔹 Client → API Gateway → Load Balancer → Services

```rust
┌────────┐     ┌────────────┐     ┌────────────┐        ┌────────────┐
│ Client │ --> │ API Gateway│ --> │ Load Balancer │ --> │ Backend Services │
└────────┘     └────────────┘     └────────────┘        └────────────┘

```

### 🔍 Why this order?

#### 🧱 1. API Gateway first

* Handles authentication, rate limiting, logging, request shaping, etc.
* Knows about paths (e.g., `/users`, `/orders`) and can route requests smartly.
* Reduces unnecessary traffic hitting the backend services.

#### 🧱 2. Load Balancer next

* Takes requests from the API Gateway and distributes them across multiple instances of a backend service.
* Ensures scalability and high availability of each microservice.

#### 🧯 Alternate: Load Balancer → API Gateway (Rare, But Possible)

This is less common, but can be used if:
* You have multiple API Gateway instances for availability/scale and want to spread load across them.
* You're self-hosting your API Gateway, and it doesn't auto-scale.

Example:

```rust
Client → Load Balancer → [API Gateway A, API Gateway B] → Services
```

#### 🧠 Rule of Thumb
* ✅ For SaaS, microservices, or serverless → API Gateway before Load Balancer
* 🛠️ For self-hosted, on-premise, or custom API Gateway setups → Load Balancer might come first