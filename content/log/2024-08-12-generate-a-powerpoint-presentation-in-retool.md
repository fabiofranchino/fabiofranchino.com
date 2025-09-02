---
title: "Generate a PowerPoint presentation in Retool"
date: 2024-08-12 07:04:00 +0100
subtitle: 12th August, 2024
description: ""
categories: Logs
tags: [log]
layout: "layouts/blog.njk"
permalink: "/{{ page.filePathStem }}/"
---

One of the advantages of Retool is its ability to integrate external JavaScript libraries and utilize them within the application. In a recent Retool project, we needed to generate a PowerPoint presentation file using the data present in the app, allowing users to download the PPT file simply by clicking a button. Adding such functionality in Retool is relatively straightforward.

## Import the library

We're using the very good and popular Javascript library [PptxGenJS](https://gitbrent.github.io/PptxGenJS/) that allows to define any compatible visual element in a typical PowerPoint presentation file, such as Text, Shape, Image and even Chart as well.

Importing the library in Retool is quite easy if we use a public CDN that hosts the files for us:

![undefined](https://cdn.cmsfly.com/64e6fad6d38a6d002002f842/screenshot-2024-04-27-at-10.32.18-UXcRa4.png)

Here the library urls we used, but check for more updated version by yourself:

https://cdn.jsdelivr.net/gh/gitbrent/pptxgenjs@3.12.0/libs/jszip.min.js https://cdn.jsdelivr.net/gh/gitbrent/pptxgenjs@3.12.0/dist/pptxgen.min.js

# Add the Javascript

The next step is to create a Retool JS Query to add the PptxGenJS code. This is where you need to configure every details about your PowerPoint final file. 

From the [Quick Start](https://gitbrent.github.io/PptxGenJS/docs/quick-start/) you can go deep into its API to properly write the correct code. This is the sample you can find from that guide, just copy and paste and you're already done!

![undefined](https://cdn.cmsfly.com/64e6fad6d38a6d002002f842/screenshot-2024-04-27-at-10.33.13-DQ1fTy.png)

Now, it's just a matter of the typical Retool wiring stuff, call that Query from the Button click and here the PowerPoint Presentation file downloaded into you computer!

![undefined](https://cdn.cmsfly.com/64e6fad6d38a6d002002f842/screenshot-2024-04-27-at-10.33.52--Tl-iW.png)

Now you can start creating your PowerPoint Presentation files in Retool. If you already have one, you can skip this. Otherwise, go through this [link](https://get.retool.com/c2blfe7c4kts) to create a free account. By following to that link **you can have 20% discount** in case you want to upgrade in the future. The basic account is always free, though.