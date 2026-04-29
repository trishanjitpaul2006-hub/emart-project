# EMART Backend

Express + MySQL API for EMART products, users, orders, and Razorpay checkout.

## Setup

1. Install Node.js.
2. Open this folder and run:

```bash
npm install
copy .env.example .env
npm run init-db
npm run dev
```

3. Add Razorpay test credentials to `.env`.

The frontend expects the API at `http://localhost:5000/api`.
