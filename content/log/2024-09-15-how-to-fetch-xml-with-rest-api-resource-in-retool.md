---
title: "How to fetch XML with REST API resource in Retool"
date: 2024-09-15 07:04:00 +0100
subtitle: 15th September, 2024
description: ""
categories: Logs
tags: [log]
layout: "layouts/blog.njk"
permalink: "/{{ page.filePathStem }}/"
---



To fetch an XML resource in Retool using the REST API, you first need to create a new REST query by navigating to the Retool interface and selecting the **Create Query** option. Once there, choose **REST API** as the resource type and enter the API endpoint that provides the XML data. It's important to set the appropriate method, such as GET, depending on how the API is structured. 

Since Retool defaults to expecting JSON responses, you need to adjust the response handling by specifying **Raw** or **Text** as the **Response Type** in the query settings. This allows Retool to retrieve the raw XML response without trying to parse it as JSON. 

Once the XML data is fetched, it will likely come in a text format, so you’ll need to process it using JavaScript. You can parse the XML response using `DOMParser` to convert it into an XML Document object that Retool can work with.

Here is a step-by-step guide on how to fetch an XML resource in Retool using the REST API:

**Set up the REST API resource in Retool**:
- Add a new REST API resource as you would normally do. In this example, we'll be fetching the sitemap from [eloquentops.com](https://eloquentops.com/sitemap.xml).

![img](/assets/blog/how-to-fetch-xml-with-rest-api-resource-in-retool/01.png)

**Transform the response using the `Transform results` tab**:
- The raw XML response needs to be parsed into something more usable, like a list of URLs. To do this, we'll leverage the browser's built-in `DOMParser`, which can convert the XML string into a document object.

![img](/assets/blog/how-to-fetch-xml-with-rest-api-resource-in-retool/02.png)

**Transform the raw XML**:
- Here's the JavaScript code to parse the XML:

```js
const doc = new window.DOMParser().parseFromString(data.rawXml, "text/xml");
const locs = doc.querySelectorAll('loc');
const urls = [...locs].map(d => d.innerHTML);
return urls;
```

- In this code:
  - `data.rawXml`: This is the raw XML string returned by the REST API call.
  - `DOMParser`: Converts this string into an XML DOM object.
  - `loc`: In this example, the XML nodes are named `loc`, which contain the URLs. You may need to adjust the selector based on your XML structure.
  - The result is an array `urls`, containing all the URLs from the sitemap.
- **Use the `urls` array in your Retool component**:
  - Now that the XML is transformed into an array of URLs, you can use this array in your Retool components, such as in tables or lists.

![img](/assets/blog/how-to-fetch-xml-with-rest-api-resource-in-retool/03.png)

This approach allows you to effectively parse and handle XML data directly within Retool using its built-in transformation capabilities. 