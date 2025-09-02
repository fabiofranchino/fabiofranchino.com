---
title: "Retool app to generate and export QR code with Metatools"
date: 2024-11-26 07:04:00 +0100
subtitle: 26th November, 2024
description: ""
categories: Logs
tags: [log]
layout: "layouts/blog.njk"
permalink: "/{{ page.filePathStem }}/"
---

In this second tutorial about QRCode generation using the [MetaTools](https://metatools.eloquentops.com/) suite API, here is the [first one](/blog/create-a-qr-code-generator-with-bolt-new-and-metatools), you'll learn how to set up a [Retool](https://retool.com/) app that generates a QRCode for each table row and provides the ability to export it as an SVG file.

---

Set up a data source in Retool and add a table component. The data should contain a `name` and `url` property for our purpose, as we want to generate a QRCode that points to a specific company URL. Here's an example of how the setup might look:

![](/assets/blog/retool-app-to-generate-and-export-qrcode-with-metatools/01.png)

---

Next, configure the [MetaTools QRCode API](https://metatools.eloquentops.com/qrcode) endpoint using its intuitive configurator. This step involves setting the parameters required for the API call, such as the desired output format and the QRCode content:

![](/assets/blog/retool-app-to-generate-and-export-qrcode-with-metatools/02.png)

---

Once the configuration is complete, retrieve the endpoint configuration from the API Snippet modal. This provides the necessary details such as the URL and the payload structure, as shown below:

![](/assets/blog/retool-app-to-generate-and-export-qrcode-with-metatools/03.png)

---

Go back to Retool to configure a Query Resource using a REST resource. Add the API URL, include the Authorization token in the header, and define the JSON payload. The `content` field should be dynamically linked to the selected row value in the table. Set the `format` field to `json`, as Retool automatically converts `raw` values to JSON:

![](/assets/blog/retool-app-to-generate-and-export-qrcode-with-metatools/04.png)

By triggering this query on each row selection event in the table, you'll be able to generate a new QRCode for each item in the table.

---

To display the generated QRCode in an Image component, convert the SVG string into a base64 string. This can be achieved using a small snippet of JavaScript code, as shown here:

```js
'data:image/svg+xml;base64,' + btoa(qrcode.data)
```



![](/assets/blog/retool-app-to-generate-and-export-qrcode-with-metatools/05a.png)

Although this code can be set in the **Transform Result** of the Query, it’s better to include it in the Image component if you also plan to use the SVG source for a download button:

![](/assets/blog/retool-app-to-generate-and-export-qrcode-with-metatools/05b.png)

---

Here's how the table looks with the QRCode displayed alongside it. The QRCode is dynamically generated for the selected row:

![](/assets/blog/retool-app-to-generate-and-export-qrcode-with-metatools/06.png)

---

To allow users to download the QRCode, set up a button with JavaScript to handle the SVG download. Since the QRCode is already in SVG format, the code to enable downloading is straightforward:

```js
utils.downloadFile(qrcode.data, table1.selectedRow.name, 'svg')
```



![](/assets/blog/retool-app-to-generate-and-export-qrcode-with-metatools/07.png)

---

Here’s the final Retool app in action, complete with QRCode generation and export capabilities:

![](/assets/blog/retool-app-to-generate-and-export-qrcode-with-metatools/08.gif)







