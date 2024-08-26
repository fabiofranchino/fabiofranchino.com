---
title: How to insert a record into PostgresSQL from a Cloudflare Worker
date: 2024-08-26 07:24:00 +0100
---



Using Cloudflare Workers for serverless functions brings an incredible advantage in terms of performance and scalability, especially when combined with a PostgreSQL database. In this post, we’ll dive into how to set up a Cloudflare Worker to insert a record into a PostgreSQL database.

#### Setting up the PostgreSQL Client

First, you'll need to set up the PostgreSQL client using the `pg` library. Since Cloudflare Workers have limitations with native Node.js modules, ensure your environment is compatible.

```js
import { Client } from "pg";

const client = new Client(env.DB_URL);
await client.connect();
```

Here, `env.DB_URL` contains your PostgreSQL connection string, stored as an environment variable for security. The client is initialized and connected using `await client.connect()`.

#### Handling the Request and Inserting Data

Now, let’s break down how to handle an HTTP POST request to insert a new record into your PostgreSQL table.

```js
if (request.method === "POST") {
    const params = await request.json();
    const { message } = params || {};

    const insertQuery = `
        INSERT INTO "MyTable" (message)
        VALUES ($1)
        RETURNING *;
    `;

    const values = [message];
    const insertResult = await client.query(insertQuery, values);

    return new Response(JSON.stringify(insertResult.rows[0]));
}
```

The code first checks if the request method is POST, ensuring only POST requests trigger the database insert operation. It then parses the incoming request JSON, extracting the `message` parameter. The SQL query uses parameterized inputs (`$1`) to prevent SQL injection. After executing the query, the worker returns the inserted record as a JSON response.

#### Cleaning Up the Connection

Since Cloudflare Workers might continue running after the response is returned, ensure that the database connection is properly closed:

```js
ctx.waitUntil(client.end());
```

The `ctx.waitUntil()` function ensures the connection is closed, even if the worker exits earlier, preventing potential memory leaks or hanging connections.