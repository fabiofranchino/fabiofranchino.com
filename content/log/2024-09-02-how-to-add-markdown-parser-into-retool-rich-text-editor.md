---
title: "How to add markdown parser into Retool rich text editor"
date: 2024-09-02 07:04:00 +0100
subtitle: 2nd September, 2024
description: ""
categories: Logs
tags: [log]
layout: "layouts/blog.njk"
permalink: "/{{ page.filePathStem }}/"
---

In **Retool** there's a built-in **rich text editor** component that is very helpful to let your users format text as we are used to do in common text editors.

If you're looking to enhance the functionality of the **Retool rich text editor**, integrating a **markdown** parser is an excellent way to bridge the gap between plain text and rich text formatting. By converting markdown syntax into HTML, you can easily transform simple text into well-structured content within your Retool applications.

Whether you're dealing with user-generated content or predefined text, leveraging a **markdown parser** allows for a more dynamic and visually appealing presentation. This guide will walk you through the process of adding a markdown parser to Retool's rich text editor, ensuring your content is both interactive and visually consistent.

The component accept and return HTML source.

If your initial text source comes as plain text, there's a good chance that it'll be presented in the editor as a single paragraph, because regular carriage return won't be interpreted.

A quick solution is to parse the text through a markdown parser, giving you an initial HTML representation instead of plain text representation.

In Retool, you just need to include, in the **App settings / Libraries** a **markdown parser library**, such as `marked` and voilà:

![undefined](https://cdn.cmsfly.com/64e6fad6d38a6d002002f842/screenshot-2024-03-22-at-09.59.12-1sl1DI.png)

This is the full URL for the marked library as a reference:

```shell
https://cdnjs.cloudflare.com/ajax/libs/marked/12.0.1/marked.min.js
```



Now, you can specify in the editor content field something like:

```js
marked.parse( table1.selectedRow.text )
```

The plain text source will be converted as HTML source, with paragraphs, break rows and other HTML formatting options, ready to be rendered in the Retool rich text editor.



