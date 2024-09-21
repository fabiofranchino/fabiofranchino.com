---
title: How to detect a Cloudflare Worker in dev local mode
date: 2024-09-21 09:50:00 +0100
---





When developing Cloudflare Workers, it's often necessary to differentiate between development and production environments to handle environment-specific logic, debugging, or configurations. A simple yet effective way to detect if your Cloudflare Worker is running in local development mode is by setting up environment variables. 

This approach allows you to toggle between development and production modes seamlessly without hardcoding any values directly into your code. In this guide, I’ll show you how to implement a `DEV` flag using Wrangler, Cloudflare’s CLI tool, to easily distinguish between the two environments.



To detect if a Cloudflare Worker is running in local development mode, follow these steps:

### Step 1: Define a DEV variable in `wrangler.toml`

In your `wrangler.toml`, set up a `DEV` variable that defaults to `false`:

```toml
DEV = false
```

### Step 2: Override DEV in `.dev.vars` for local development

Create a `.dev.vars` file in your project's root directory, and override the `DEV` variable to `true` for local development:

```toml
DEV = true
```

This file will only be used when running in development mode.

### Step 3: Access the DEV variable in your Worker

You can then access this `DEV` variable in your Cloudflare Worker through the environment configuration:

```js
const { DEV } = env;

if (DEV) {
  // Logic for development
} else {
  // Logic for production
}
```

### Step 4: Run in development

When you run the worker locally using `wrangler dev`, the `DEV` variable will be set to `true`, allowing you to detect the development environment. In production, the `DEV` variable remains `false`.

