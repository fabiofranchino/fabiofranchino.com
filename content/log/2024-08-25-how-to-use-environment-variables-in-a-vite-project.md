---
title: How to use environment variables in a Vite project
date: 2024-08-25 10:40:00 +0100
---



To use environment variables in a Vite project, follow these steps:

**Create an `.env` file**: In the root of your project, add environment variables prefixed with `VITE_`. For example:

```shell
VITE_API_URL=https://api.example.com
```

**Access the environment variable in your code**: You can reference the variable using `import.meta.env.VITE_API_URL` in your JavaScript/TypeScript files:

```js
const apiUrl = import.meta.env.VITE_API_URL;
console.log(apiUrl); // Outputs: https://api.example.com
```

**Reload your Vite server**: Make sure to restart your Vite server after adding or updating environment variables so that changes take effect.

Vite only exposes environment variables prefixed with `VITE_`. This ensures that only variables intended to be exposed are accessible in the frontend.

This method fits well with the concise and straightforward style reflected in your other posts, focusing on practical and actionable advice for development tasks.