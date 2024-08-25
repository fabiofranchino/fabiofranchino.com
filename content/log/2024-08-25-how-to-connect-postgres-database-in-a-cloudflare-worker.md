---
title: How to connect postgres database in a Cloudflare worker
date: 2024-08-25 13:14:00 +0100
---



To connect to a PostgreSQL database in a Cloudflare Worker, you'll need to use a client like `pg`, but there are some limitations. Cloudflare Workers run in a V8 environment similar to a browser, which does not support TCP connections natively. Therefore, connecting directly to a PostgreSQL database requires a workaround, typically involving an HTTP-based proxy or tunneling service.

Here’s how you can set it up using a typical PostgreSQL client:

```js
import { Client } from 'pg';

export default {
  async fetch(request, env, ctx) {
    const client = new Client({
      connectionString: env.DB_URL, // Cloudflare's Workers' environment variables
    });

    await client.connect();

    try {
      // Execute your query
      const res = await client.query('SELECT NOW()');
      return new Response(JSON.stringify(res.rows), { status: 200 });
    } finally {
      // Ensure the connection is closed
      ctx.waitUntil(client.end());
    }
  }
};
```

**Key Points:**

- **Client Setup**: Use `new Client({ connectionString: env.DB_URL })`.
- **Connection Handling**: Use `ctx.waitUntil(client.end())` to handle the connection lifecycle in a worker context.

