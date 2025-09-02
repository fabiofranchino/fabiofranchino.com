---
title: "Comparing Retool Appsmith and Superblock"
date: 2024-10-24 07:04:00 +0100
subtitle: 24th October, 2024
description: ""
categories: Logs
tags: [log]
layout: "layouts/blog.njk"
permalink: "/{{ page.filePathStem }}/"
---



### Retool is great, but...

It's no secret that we use **Retool** a lot. In fact, we’ve already written a [dedicated post](/blog/why-retool) about it here.

While Retool brings numerous benefits, its pricing model doesn’t always align with every company’s needs. It seems like their plans are designed for two very specific kinds of users: **mid-large enterprises** and **solo developers or very small teams**. If you fall somewhere in between, as many small-to-mid-sized businesses do, you might struggle to justify the **Business plan**.

For a small company that occasionally uses Retool apps — meaning it's not their core business — the **Business plan** can be prohibitively expensive, potentially a deal-breaker. Meanwhile, the **free/team plan**, which lacks critical features like permission control (who can edit and who can't), simply isn’t a viable option. This is a common pain point we've heard from clients, and it's hard not to agree.

This is why we're starting to explore **alternatives**, particularly for businesses that fall between the solo dev and enterprise categories. To be clear, Retool remains an excellent tool in its class, but it’s important to evaluate the best fit for every use case.

------

### The test: comparing alternatives

We conducted a small test by creating the **same app** on three platforms:

- **Retool**
- **AppSmith**
- **Superblocks**

The goal was to test the most common capabilities of these platforms:

- Connecting to data sources
- Visual UI building
- Writing custom logic in JavaScript
- Easy deployment and sharing

Additionally, we evaluated:

- The ability to define editor and viewer permissions at a **reasonable price**
- The **developer experience**
- The **solidity** of the platform (in terms of organic growth and fundings) and its community (size and liveliness)

The app itself was simple:

- Fetch data from a **REST API**
- Transform the data before use
- Display it in a **table**
- Add a **rich text editor** to visualize details from the selected row

### AppSmith: The best alternative for us

After testing, we concluded that **AppSmith** is our preferred alternative, even though **Superblocks** comes close to Retool in some respects.

![](/assets/blog/comparing-retool-appsmith-and-superblock/01.png)

**AppSmith** might look a bit bare-bones compared to Retool, but it’s more than capable of handling most of the apps we’ve built on Retool. Plus, **Superblocks**’s free plan feels unnecessarily aggressive. Constant reminders that the trial has expired, alongside an onboarding flow that seems focused on data harvesting, were a big turnoff for us.

Another thing that worked in **AppSmith**'s favor is its **custom component** implementation, which feels much closer to Retool’s legacy version. In contrast, **Superblocks** requires a full local development environment for custom components, which seems like overkill for smaller projects.

Lastly, a **bonus point** for AppSmith is that it’s **open source**, so there's always the option for an on-premises setup if needed.

------

While we continue to love and use Retool, it’s important to acknowledge that alternatives like AppSmith can offer a great fit for specific use cases, especially for smaller businesses that need flexibility at a more accessible price point.