---
title: "Ask PDF with Chat AI in Retool"
date: 2024-08-11 07:04:00 +0100
subtitle: 11th August, 2024
description: ""
categories: Logs
tags: [log]
layout: "layouts/blog.njk"
permalink: "/{{ page.filePathStem }}/"
---

This application allows you to interact with any PDF through natural language queries.

It serves as a flexible starting point that you can further customize to meet your needs.

Within this app, you're able to upload as many PDFs as you wish. Before these PDFs are added to the vector database, they go through a conversion process to ensure compatibility.

Here are the steps to follow when using the app:

1. Upload a PDF.
2. Convert the document.
3. Add the converted PDF to the repository.
4. Engage in natural language conversations with the content.

Additionally, you have the option to clear the repository if needed.

Please ensure to create a "Retool Vector" of the type "Document" in the Resources section and update all associated references in the queries accordingly.

![undefined](https://cdn.cmsfly.com/64e6fad6d38a6d002002f842/screenshot-2024-04-09-at-13.14.39-033fbM.png)

## Create the Retool account.

If you already have one, you can skip this. Otherwise, go through this [link](https://get.retool.com/c2blfe7c4kts) to create a free account. By following to that link **you can have 20% discount** in case you want to upgrade in the future. The basic account is always free, though.

## Install the Retool app

First, [download the source](https://eloquentops.github.io/retool-apps/ChatWithPDF.json) (right-click to download as file) of the Retool app.

It's a JSON file you can then import in your Retool account.:

![undefined](https://cdn.cmsfly.com/64e6fad6d38a6d002002f842/aaa-LfMt0X.png)