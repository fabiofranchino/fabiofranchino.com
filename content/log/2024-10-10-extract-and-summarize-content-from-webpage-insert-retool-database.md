---
title: "Extract and summarize content from webpage insert Retool database"
date: 2024-10-10 07:04:00 +0100
subtitle: 10th October, 2024
description: ""
categories: Logs
tags: [log]
layout: "layouts/blog.njk"
permalink: "/{{ page.filePathStem }}/"
---



In our [previous post](/blog/how-to-scrape-html-page-with-workflows-retool-cheerio/), we set up a web scraping workflow using Retool and the Cheerio library to effortlessly fetch webpage content. Now, let's take it a step further and extract valuable information from that content, which we can store in a database for future use.

Webpages can vary significantly in structure, making it challenging to get consistent data across different sites. To demonstrate how to tackle this, let’s assume you have a list of company URLs, and you want to extract useful data like their **industry** or **capability** from their webpages.

In this post, we’ll focus on processing a single URL. Expanding this workflow for batch processing multiple URLs will be covered in a future tutorial.



### Using Retool's AI Actions for data enrichment

This is a typical job for a Large Language Model (LLM) today. Luckily, Retool has pre-configured OpenAI queries called **AI Actions**, perfect for this kind of task.

In this example, we’ll use Retool’s AI Actions to summarize a webpage and extract the company’s industry, a common data enrichment use case.



### Step 1: Enhancing the scraping workflow

We’ll begin by enhancing the workflow from the previous tutorial to include AI Actions.

![Workflow Image Placeholder](/assets/blog/extract-and-summarize-content-from-webpage-insert-retool-database/01.png)

The addition to the workflow is the **AI Action block**, responsible for summarizing the content scraped from the webpage. Here’s the prompt we used in the AI Action block:

```shell
Return the industry of the company, extracted from this { { code1.data.body } }. Return only the industry text.
```

As you can see, we’re asking the AI to return the specific industry, which we can then store in a database.



### Step 2: Adding a database resource to store the results

After extracting the industry data, the next step is to save it in your company database. For this, we’ll use a database resource in Retool that handles the insert or update of the record.

**Example Query:**

![Database Resource Image Placeholder](/assets/blog/extract-and-summarize-content-from-webpage-insert-retool-database/02.png)

Make sure to reference the company’s ID in your query to update the correct record for the given URL.

![Database ID](/assets/blog/extract-and-summarize-content-from-webpage-insert-retool-database/03.png)



### Step 3: Testing the workflow

Once everything is set up, the final step is to test your workflow.



![Testing Image Placeholder](/assets/blog/extract-and-summarize-content-from-webpage-insert-retool-database/04.png)

After a successful test, you can configure Retool to schedule this process to run automatically at a specific time, ensuring your database remains updated with the latest company data.





---

With AI Actions, data enrichment tasks like extracting a company’s industry from its website become much simpler. By integrating these actions into Retool workflows, you can automate the process of gathering and storing valuable insights directly into your database.

In our next post, we’ll explore how to scale this process to handle lists of URLs for bulk processing.