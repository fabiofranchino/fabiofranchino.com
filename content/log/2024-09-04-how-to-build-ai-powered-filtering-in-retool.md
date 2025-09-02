---
title: "How to build AI-powered filtering in Retool"
date: 2024-09-04 07:04:00 +0100
subtitle: 4th September, 2024
description: ""
categories: Logs
tags: [log]
layout: "layouts/blog.njk"
permalink: "/{{ page.filePathStem }}/"
---



> This tutorial was originally written for and published on the [Retool Blog](https://retool.com/blog/ai-filtering-on-table-component-tutorial) on May 23, 2024. We're cross-posting it here now that we have a blog 😊
>
> It was also the inception of another project, [AskYourData](https://askyourdata.cc/), which is a work-in-progress.



When I used the “code interpreter” in ChatGPT for the first time to interact with a CSV, I realized that something significant was happening with this new capability.

The chat flow, featuring questions and statistically backed answers with charts, is a powerful paradigm in data exploration.

It reminds me of the flow found in a data notebook, where snippets of code generate “answers” in the form of tables, charts and logs. The difference lies in the form of the questions; they are expressed in natural language rather than written code.

Data exploration is crucial for businesses. It’s why dashboards and internal tools are so prevalent and critical for companies everywhere.

However, in this context, a chat flow may not be the most effective approach. Imagine a customer support representative trying to find specific customer information by querying a database with multiple questions, similar to a ChatGPT interaction. They need to be able to ask once and receive the correct answer immediately.

Typically, such questions are made by adjusting filter parameters. But what if these parameters could be set directly from a support rep’s question written in natural language?

![img](/assets/blog/how-to-build-ai-powered-filtering-in-retool/027be079b18ab760a4ab1f97d134ebaaf9b351b8-1000x579.gif)

## The a-ha moment

We built this prototype with the following assumption: SQL is the programming language closest to natural language. And GPT-4 is very good at converting natural language into SQL.

What if we could convert a user’s question into the correct SQL used to filter a given dataset? Furthermore, what if we query non-SQL sources by using the “Query JSON with SQL” resource, which employs [AlaSQL](https://docs.retool.com/queries/guides/sql/query-json) to filter datasets using the generated SQL?

## What you need to building an AI-powered filtering

You’ll need a [free Retool account](https://login.retool.com/auth/signup) and an [OpenAI API key](https://platform.openai.com/signup) (with active credits) in order to ask GPT-4 to convert the user text into an SQL string.

We use the [OpenAI API](https://openai.com/blog/openai-api) because we need to set the “response_format” as “json_object.” This is something we can’t control out of the box with [Retool AI actions](https://docs.retool.com/ai/concepts/actions). I hope this is something they will add in the future.

Then, a bit of “glue”—some JavaScript transformers are used to properly package the prompt to send to the GPT-4 endpoint as well as parsing its response for our purpose.

## How to build AI-powered filtering

Here’s a step by step on the implementation details to add and configure a natural language filter for a [Retool Table component](https://retool.com/components/table-new).

## 1. Getting a dataset

First, drag the Retool Table component onto the canvas—then let’s get some data. We're using the “sample_users” table included in [Retool Database](https://docs.retool.com/data-sources/quickstarts/retool-database) to create a simple example that’s easy to grasp, allowing you to extend it further for your specific use case.

![img](/assets/blog/how-to-build-ai-powered-filtering-in-retool/135cedead11e634e9886880cbd832801ec8f0f5c-2240x1214.webp)

## 2. Setting up the prompt

We need to prepare a Retool variable for the prompt part we’ll use in the OpenAI query. This is the “system” role you typically include as the first item in the array of messages for a “chat/completion” call.

Aside from the usual general prompt settings (how the model should act), we already start passing a bit of context (more about it later), a sample data point, and some rules to instruct how we want the payload in the response.

![img](/assets/blog/how-to-build-ai-powered-filtering-in-retool/4b6f6bb006554e824218e872152d43c735011684-2096x1178.webp)

## 3. Querying OpenAI

Now it’s time to configure the OpenAI query. We’re using the [REST API Resource](https://docs.retool.com/queries/guides/api-requests) that gives full flexibility. These are the bits you need to configure properly:

- Endpoint and method type
- Authorization (with the OpenAI API-KEY) and Content-Type in the header
- The JSON Body in Raw format

![img](/assets/blog/how-to-build-ai-powered-filtering-in-retool/401ecdf7e414ad2dd18f352e8d3b44c1c008f066-1950x1240.webp)

If you run the query, you should already see a meaningful response:

![img](/assets/blog/how-to-build-ai-powered-filtering-in-retool/6cb4b06a91aba485d0284a8ea41bbbb672328773-1448x1044.webp)

In order to ease our next integration step, let’s enable the transformation results panel in the OpenAI query, because all we need is the SQL string:

![img](/assets/blog/how-to-build-ai-powered-filtering-in-retool/5b3c6d489517845f26918f990b37e4ae4f930c04-1420x1052.webp)

## 4. Wiring it all up

It’s time for the glue. We have all the pieces, but they don't talk to each other yet. Let’s create a Retool Transformer by adding the following code:

![img](/assets/blog/how-to-build-ai-powered-filtering-in-retool/8da908bb1a1b1e8fe6c7b679492dad1796f44b47-1464x938.webp)



Doing this should be pretty self-explanatory—we basically take the original dataset and filter it using AlaSQL, which is already included in Retool.

Now we can change the table source from the **dataset** to **filtered** and we’re almost done!

Just add a TextInput and trigger the OpenAI query on submit action, and you should see the magic happen:

![img](/assets/blog/how-to-build-ai-powered-filtering-in-retool/e14a87c0297bd7d9d4ade6f6fd5a4eb3c22271cc-1620x902.webp)

The user question is converted into SQL that’s used with AlaSQL to filter the original dataset.

## 5. Adding context to the prompt

Now, in order to make the prompt smarter, we need to add a bit of context to it. Consider that the more well-structured context GPT-4 has, the better the answers are likely to be.

We already gave it a sample data point that’s useful for understanding the data properties and data types.

But we can give it more. Here’s an updated version of the prompt, adding an additional variable, getMeta:

![img](/assets/blog/how-to-build-ai-powered-filtering-in-retool/5659b964c315bab8e9f13f0c3f880ce5cca4dd5e-1624x840.webp)

**getMeta** is a Retool Transformer that returns information about the dataset. In our sample dataset, this information can include:

- The range of the "Signup date" column
- The available values of the “Role” column
- The available values of the “Enabled” column

![img](/assets/blog/how-to-build-ai-powered-filtering-in-retool/d68005e39381b409631874f3d84acc40a7e79b42-1626x1124.webp)





You can see there’s a function used there, **summarizeProperties**, that’s in the [Preload JS](https://docs.retool.com/apps/scripting-events/guides/custom-javascript) section of the app.

It analyzes the dataset and returns a summarization according to the value type. Be sure to specify properties you *don’t* want to summarize— for instance, for things that wouldn’t make sense, such as “name” or “email”—so it doesn't pollute the prompt. (And, of course, consider your dataset and privacy and compliance requirements before handing everything over to OpenAI or any model provider.)

With such additional context, GPT-4 is often better able to answer questions even when the user isn’t perfectly precise in what they’re asking.





## 6. Other filtering options

Outside of simple SELECT queries, you can do something even more interesting with this set up.

You can ask for aggregations and calculations too.

AlaSQL is able to “GROUP BY”, “COUNT”, “SUM”, “AVG”, etc. This means you can get not only a filtered version of the dataset, but also a restructured version of it.

This opens up tons of possibilities. At the same time, it brings more complexity in the Retool context, because now our table is not able to display our new dataset properly:

![img](/assets/blog/how-to-build-ai-powered-filtering-in-retool/a7d8bc1270482d5430ec2f0530295f79547c3535-1770x966.webp)

## Security and limitations

The whole technique revolves around AlaSQL, which runs locally, filtering an already fetched data resource.

For this reason, there are no security issues because the database is not involved at all. Trying to do prompt injection, even instructing AlaSQL to alter the dataset, won’t create any real issues. The worst that can happen is the table won’t render properly.

At the same time, this might also be a limitation. You cannot really “ask” data from your database. For big tables, where you need to paginate or do partial fetches, this technique is not going to work as expected. The bottom line is: it’s just a filter on the already pulled data.

## Opportunities building with AI

We believe that we're just beginning to explore the potential of AI-native user interfaces. There’s a huge opportunity to rethink many of the current paradigms to make them much more efficient, friendly, and fun.