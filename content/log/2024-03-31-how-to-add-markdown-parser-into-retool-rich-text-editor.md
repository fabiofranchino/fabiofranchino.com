---
title: How to add markdown parser into Retool rich text editor
date: 2024-03-31 09:28:00 +0100
---



Retool has a rich text editor component, which is great to allowe familiar formatting options people are used to find in standard text editors.

This component is designed to work with and produce HTML code.

When dealing with plain text inputs, they often appear in the editor as a singular block of text due to the fact that typical line breaks are not recognized.

To address this, processing the text via a markdown parser before inputting it into the editor can convert it to HTML format, thus preserving the intended formatting and structure.

In Retool, you just need to include, in the **App settings / Libraries** a markdown parser library, such as `marked` and voilà.

![](/assets/log/n325_screenshot-2024-03-22-at-09.59.12-1sl1di.webp)

Just add this url from a CDN:

```
https://cdnjs.cloudflare.com/ajax/libs/marked/12.0.1/marked.min.js
```

Now you can reference to it in your components such as:

```js
{{ marked.parse( mycomp.text ) }}
```

Hope this help!