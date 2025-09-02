---
title: "Create a QR code generator with Bolt new and Metatools"
date: 2024-11-25 07:04:00 +0100
subtitle: 25th November, 2024
description: ""
categories: Logs
tags: [log]
layout: "layouts/blog.njk"
permalink: "/{{ page.filePathStem }}/"
---



**QR codes**, short for "Quick Response" codes, are a versatile and efficient way to encode data. From marketing campaigns to contactless payments, they enable instantaneous access to information through a simple scan. Their adaptability in various industries—like logistics for tracking, healthcare for patient information, and retail for discount codes—makes them indispensable in today's fast-paced digital world.

**Bolt.New** stands as a groundbreaking tool that converts natural language prompts into fully functional full-stack applications. By streamlining app development, it bridges the gap between conceptual ideas and working code. Whether you're a non-technical innovator or a seasoned developer, Bolt.New accelerates the journey from prototype to production.

The **MetaTools QRCode API** simplifies QR code creation. With just a straightforward API call, you can customize and generate high-quality QR codes in formats like SVG. It’s an excellent resource for developers looking to integrate QR functionality into their projects without dealing with complex libraries.



### Step by step about how to create a working QR-Code generator app

#### Step 1: Craft the Front-End with Bolt.New

To start, let's use **Bolt.New** for the front-end of our QR code generator app.

##### Prompt for Bolt.New:

> Create a small app that presents the user with a textfield and a button. When the button is pressed, an API fetch is triggered to generate a QR code. Additionally, the user can select background and foreground colors. The API responds with an SVG QR code, which is displayed on the right side.

![](/assets/blog/create-a-qr-code-generator-with-bolt-new-and-metatools/02.png)

#### Step 2: Configure MetaTools API

1. **Visit API Documentation**: Head to the [MetaTools QRCode API](https://metatools.eloquentops.com/qrcode).
2. **Register and Obtain an API Key**: Create an account if required and secure the API key for authentication.

![](/assets/blog/create-a-qr-code-generator-with-bolt-new-and-metatools/01.png)

To integrate **MetaTools** into the **Bolt.New** project, just copy the **Prompt snippet** from the API snippet button. Then add in the Bolt.New prompt something like:

> This is the API specs: [PASTE-THE-SNIPPET-HERE]

![](/assets/blog/create-a-qr-code-generator-with-bolt-new-and-metatools/03.png)

That's it! Run the magic button in Bolt.New to create your app. Here the final version up and running:

![](/assets/blog/create-a-qr-code-generator-with-bolt-new-and-metatools/04.png)



We'll also published this app, both as Bolt.New available project and as available app as well.

