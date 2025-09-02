---
title: "Introducing Prompt2API our free tool to generate and publish synthetic mock data API"
date: 2024-10-04 07:04:00 +0100
subtitle: 4th October, 2024
description: ""
categories: Logs
tags: [log]
layout: "layouts/blog.njk"
permalink: "/{{ page.filePathStem }}/"
---



When using [Retool](https://retool.com/), it’s all about making the connection between data and interfaces fast. Dragging components onto the canvas? Lightning fast. But getting well-formatted data to work with? Not so much.

Retool has historically offered a tool to generate fake data for prototyping, which itself is a Retool app. Convenient, but there’s now an even better way to create mock data with more flexibility.

<video src="https://prompt2api.eloquentops.com//demo.mp4" autoplay loop muted></video>



### Prompt2Api: Simplifying Mock Data Generation

At EloquentOps, we’ve been using ChatGPT extensively to generate mock data for our projects. But the manual copy-paste routine between tools quickly became tedious. That's why we built [Prompt2Api](https://prompt2api.eloquentops.com/).

It’s a lightweight online tool that allows you to describe the API response you need and generate a live, sharable API URL in just one click.

![](/assets/blog/introducing-prompt2api-our-free-tool-to-generate-and-publish-syntetic-mock-data-api/02.png)

Here’s how it works:

- **Step 1:** Describe your desired API response in natural language.

- **Step 2:** The tool generates the mock data based on your prompt.

- **Step 3:** Copy the auto-generated URL and use it as a data source in your Retool app or any tool that supports REST APIs.

![](/assets/blog/introducing-prompt2api-our-free-tool-to-generate-and-publish-syntetic-mock-data-api/03.png)

No more jumping between ChatGPT and Retool, it’s all in one smooth workflow.

![](/assets/blog/introducing-prompt2api-our-free-tool-to-generate-and-publish-syntetic-mock-data-api/04.png)

### Integration with Retool

The workflow couldn’t be simpler. Just copy the URL from Prompt2Api, paste it into your Retool app REST resource, and you're off to the races.

1. Copy the URL from Prompt2Api.
2. Paste it into your Retool app as a REST API resource.
3. Done! You’re ready to use that mock data for your components.

This setup enables you to prototype quickly, with real-time updates to your mock data as needed.

![](/assets/blog/introducing-prompt2api-our-free-tool-to-generate-and-publish-syntetic-mock-data-api/05.png)

### Data Privacy and Customization

To use the tool, you’ll need your own **OpenAI API key**, which is stored locally on your device, ensuring privacy and control.

![](/assets/blog/introducing-prompt2api-our-free-tool-to-generate-and-publish-syntetic-mock-data-api/01.png)

### Open Source

Prompt2Api is [open source](https://github.com/eloquentops/prompt2api), which means you can dive into the code, install it locally, or even contribute to its development. Our aim is to make prototyping as flexible and privacy-conscious as possible without compromising speed.

This tool is our take on speeding up prototyping without compromising on flexibility or privacy. Give it a try, and let us know what you think!

You can use it right now [here](https://prompt2api.eloquentops.com/).

