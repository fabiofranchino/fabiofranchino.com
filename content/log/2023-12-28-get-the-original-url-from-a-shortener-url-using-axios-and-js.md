---
title: Get the original URL from a shortener URL using Axios and js
date: 2023-12-28 08:25:00 +0100
---



To retrieve the original URL from a shortened URL using Axios and JavaScript, you can employ a concise and effective approach. 

Here the tip:

```js
const response = await axios.get('https://bit.ly/something')
console.log(response.request.res.responseUrl)
```

The key aspect of this method is accessing the `responseUrl` property from the response object. After sending the GET request. This approach is especially useful for developers needing to programmatically resolve shortened URLs to their original form, aiding in tasks such as link validation, redirection handling, and content verification. It showcases the ease and efficiency of combining Axios with JavaScript for web-related tasks.