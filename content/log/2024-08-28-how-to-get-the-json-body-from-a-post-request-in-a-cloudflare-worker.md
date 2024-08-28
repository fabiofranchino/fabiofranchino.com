---
title: How to get the JSON body from a POST request in a Cloudflare Worker
date: 2024-08-28 15:47:00 +0100
---





To handle a JSON body in a POST request within a Cloudflare Worker, follow these steps:

1. **Check the HTTP Method:** Ensure that the request method is `POST` before attempting to parse the body.

   ```js
   if (request.method === "POST") {
       // proceed with handling the request
   }
   ```

1. **Parse the JSON Body:** Use a `try-catch` block to handle potential parsing errors when retrieving the JSON body from the request. This prevents your worker from failing if the body is missing or malformed.

   ```js
   let body = null;
   try {
       body = await request.json();
   } catch (e) {
       return new Response('Missing body: ' + e.message, {status: 400});
   }
   ```

2. **Handle Empty Body:** After attempting to parse the body, you should check if it is `null` or empty. If it is, respond accordingly.

   ```js
   if (!body) {
       return new Response("Body empty", {status: 400});
   }
   ```

3. **Extract and Use the Data:** Once the JSON body is successfully parsed, you can extract the data and proceed with your logic.

   ```js
   const { message } = body || {};
   ```

4. **Complete Example:**

   ```js
   async function handleRequest(request) {
       if (request.method === "POST") {
           let body = null;
           try {
               body = await request.json();
           } catch (e) {
               return new Response('Missing body: ' + e.message, {status: 400});
           }
   
           if (!body) return new Response("Body empty", {status: 400});
   
           const { message } = body || {};
           // Further processing with 'message' or other extracted data
           return new Response(`Received message: ${message}`, {status: 200});
       }
       return new Response("Method not allowed", {status: 405});
   }
   ```

This code ensures that your Cloudflare Worker robustly handles a JSON body in a POST request while providing useful feedback if something goes wrong.