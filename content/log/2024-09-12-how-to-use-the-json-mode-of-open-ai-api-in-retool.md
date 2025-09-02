---
title: "How to use the JSON mode of Open AI API in Retool"
date: 2024-09-12 07:04:00 +0100
subtitle: 12th September, 2024
description: ""
categories: Logs
tags: [log]
layout: "layouts/blog.njk"
permalink: "/{{ page.filePathStem }}/"
---



Retool provides pre-configured **AI actions** that allow users to easily leverage large language models (LLMs) like OpenAI's. These actions are perfect for tasks like text **generation**, **summarization**, or **labeling**. With minimal setup, you can quickly get started.

While these pre-built actions are convenient for simpler use cases, they often fall short for more advanced scenarios. For instance, if you want to dive deeper into the OpenAI API's powerful features, like using function calling or working directly in JSON mode, Retool's built-in actions can feel limiting.

In this tutorial, I'll show you how to set up the OpenAI API as a custom resource in Retool, unlocking the full potential of OpenAI's API for more tailored tasks. 

Let’s walk through the setup and create a simple dynamic interface using an LLM.



### Setting up the OpenAI API as a Resource in Retool

The first step is to set up the OpenAI API as a REST resource in Retool:

1. Navigate to **Resources** in Retool and click on **Create new resource**.
2. Choose **REST API** as the resource type.
3. For the **Base URL**, use OpenAI's API URL (`https://api.openai.com/v1`).
4. In the **Headers** section, add the OpenAI API key and Content-Type (very important)

![](/assets/blog/how-to-use-the-json-mode-of-open-ai-api-in-retool/01.png)

### 



### Testing the OpenAI API Query in Retool

Next, create a new query using the OpenAI resource you just set up:

1. Go to **Queries** and add a new query. Select the OpenAI resource.
2. Set the **body** type to **Raw** and input the following JSON structure:

![](/assets/blog/how-to-use-the-json-mode-of-open-ai-api-in-retool/02.png)

Here the raw body for copy/paste. Please note the presence of the field `response_format` as well as the mention of `JSON` in the prompt text, which is mandatory:

```js
{
  "model": "gpt-4o-mini",
  "response_format": {"type": "json_object"},
  "messages": [
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "Tell me 3 cities in Italy. Return a JSON array like [{city:'', ...}]"
        }
      ]
    }
  ]
}
```

Run the query, and you should get a JSON response listing cities in Italy. It may look something like this:

![](/assets/blog/how-to-use-the-json-mode-of-open-ai-api-in-retool/03.png)



### Transforming the Response

Now that you have the response, we need to extract the relevant data. Retool offers a **Transform results** feature, which allows you to manipulate the API’s raw response before using it in the app.

To do this:

1. Go to the **Transform results** tab of the query.

2. Paste the following code:

   ```js
   const jsonRaw = data.choices[0].message.content;
   const json = JSON.parse(jsonRaw);
   return json;
   ```

This will parse the response and return a clean JSON object ready to use in your app.

![](/assets/blog/how-to-use-the-json-mode-of-open-ai-api-in-retool/04.png)



### Creating a Simple Interface for City Queries

Let’s build a small interface that allows users to ask for city information based on a geographical area and the number of cities. The LLM will generate a list of cities, which we’ll display in Retool’s **List component**.

#### Step 1: Create a Dynamic Prompt

First, set up a **Transformer** to generate the prompt dynamically. The final prompt will combine predefined text with user-provided input (e.g., area and number of cities):

![](/assets/blog/how-to-use-the-json-mode-of-open-ai-api-in-retool/05.png)

#### Step 2: Display the Results

Since the query result is a JSON array, you can now use a **List component** to display each city. Configure subcomponents (such as text fields or labels) inside the list to show each city’s name and other details, if needed.

![](/assets/blog/how-to-use-the-json-mode-of-open-ai-api-in-retool/06.png)

#### Step 3: Test and Finalize

Once your interface is set up, test it by providing different areas and numbers of cities. Each time, the LLM will return city data, and the interface will display it accordingly.

![](/assets/blog/how-to-use-the-json-mode-of-open-ai-api-in-retool/07.png)

### 

### So far, so good.

<video muted loop autoplay src="/assets/blog/how-to-use-the-json-mode-of-open-ai-api-in-retool/cities.mp4"></video>

In this tutorial, we’ve gone beyond Retool’s pre-configured AI actions and tapped into OpenAI’s full potential by setting up a custom API resource. With this approach, you can handle more complex, custom tasks that aren’t possible with the out-of-the-box actions.

So, whether you’re building a simple tool like the city query interface or a more advanced system leveraging function calling and JSON mode, Retool + OpenAI API offers endless possibilities.