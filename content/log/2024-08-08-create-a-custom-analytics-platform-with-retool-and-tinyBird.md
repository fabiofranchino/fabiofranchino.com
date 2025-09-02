---
title: "Create a custom analytics platform with Retool and TinyBird"
date: 2024-08-08 07:04:00 +0100
subtitle: 8th August, 2024
description: ""
categories: Logs
tags: [log]
layout: "layouts/blog.njk"
permalink: "/{{ page.filePathStem }}/"
---



No doubt, analytics tools are fundamental for any product and service.

The market offers a plethora of ready-made solutions, and for many, these tools are really good.

However, we believe that innovation stems from continuous crafting and experimentation. Indeed, in the analytics field, no doubt there is room for opportunity for further innovation.

If you have a product, you likely have data collected and typically seek metrics from it. And setting up a custom analytics platform is not that hard today.

But the question is: why opt for a custom solution rather than using a pre-existing platform? If there exists a perfect solution for your needs, by all means, go for it.

However, if after testing numerous options you find they only address part of your needs, then a custom approach may offer significant benefits.

This doesn't mean starting on a costly journey of internal software development. Current rapid software development platforms enable the establishment of a solution within hours.

Here's a simple recipe to get started.

Imagine you have a digital product and wish to track the **Load Time** metric as a starting point. You can insert a small snippet of code into your product that performs a fetch request to a service for ingesting this information. 

[TinyBird](https://www.tinybird.co/) is an excellent tool for this purpose; it's a ClickHouse database in the cloud with an API layer that can be configured in minutes. Essentially, TinyBird serves both as a data ingestion service and an API layer for integrating the metric into your dashboard.

![undefined](https://cdn.cmsfly.com/64e6fad6d38a6d002002f842/screenshot-2024-03-29-at-19.52.19-uFMYZM.png)

For the frontend, we recommend using [Retool](https://retool.com/), which empowers you to create a frontend dashboard swiftly. All that's required is to link Retool to TinyBird's API, and voilà, your Custom Analytics Platform is set up, ready for further customization with additional metrics or internal data from other tools.

![undefined](https://cdn.cmsfly.com/64e6fad6d38a6d002002f842/screenshot-2024-03-29-at-19.53.49-Mxdu5x.png)

The example above enables us to analyze page load times across various dimensions such as country, path, browser, OS, etc. Data is continuously collected to ensure freshness, providing your product with real-time analytics capabilities.

And this is just the starting point.
