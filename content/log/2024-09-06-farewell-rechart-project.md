---
title: "Farewell ReChart project"
date: 2024-09-06 07:04:00 +0100
subtitle: 6th September, 2024
description: ""
categories: Logs
tags: [log]
layout: "layouts/blog.njk"
permalink: "/{{ page.filePathStem }}/"
---

 

More than a year ago, we started an experiment with [Retool](https://retool.com/) and its [custom component](https://retool.com/components/custom-component) capability.

We wanted to explore the potential of integrating custom charts within **Retool**, trying to improve its capability both from an **interactivity** and **aesthetic** point of view.

The journey led to a quite **complex project** eventually, and a **tough decision** too.

<video muted autoplay loop src="/assets/blog/farewell-rechart-project/00-main.mp4"></video>

### Cross-filtering

One feature we’ve always been fascinated by in data apps, dashboards, and chart-based applications in general is the cross-filtering functionality.

It offers a seamless way to interact with multiple charts simultaneously, filtering data across them as you manipulate one. This interactivity makes data exploration much more intuitive, efficient and fun as well.

![](/assets/blog/farewell-rechart-project/vizwit.gif) Screenshot of VizWit





### Plotly

Initially, we tried to implement cross-filtering using the native [Plotly](https://plotly.com/) component in Retool.

While it's certainly possible to do that quickly for one chart, it requires a lot of custom wiring and business logic just to handle the cross-communication between multiple charts. Furthermore, adding more charts would require additional custom wiring, increasing the complexity of the app just for that functionality.

We thought it should be much easier to configure such a thing.

(Even so, we're preparing a tutorial on how to do cross-filtering using **Plotly**, so keep following our blog!).

![](/assets/blog/farewell-rechart-project/retool-plotly.gif)



### Let's prototype

We quickly put together a prototype, demonstrating a custom chart component for Retool. The feedback we received from the Retool community was insightful. People were interested, and their comments validated that we were onto something valuable.

![](/assets/blog/farewell-rechart-project/01-first-poc.gif)





### A chart library

This led us to the next step:

> Why not build a more reusable solution? 

We began to toy with the idea of creating a dedicated chart library specifically for Retool. A library that could simplify the process of building interactive, **connected charts**.

<video muted autoplay loop src="/assets/blog/farewell-rechart-project/slashd-preview.mp4"></video>

### A challenging project

As we dove deeper into the project, it became clear that this would be one of the most challenging experiment we’ve ever undertaken. 

From a technical perspective, balancing performance and functionality was tough. On the design side, we constantly juggled how to ensure ease of use while offering robust customization options.

Furthermore, a lack of a proper Retool SDK to interact with the UI from a Custom Component made the whole journey a difficult one.

![](/assets/blog/farewell-rechart-project/decisions.png)

The more we worked on it, the more we realized just how difficult it is to build a chart library for Retool. Every decision had implications, whether it was about performance optimization or user experience. It wasn’t just about writing code, it was about crafting a tool that people would find genuinely useful.

![](/assets/blog/farewell-rechart-project/configurator.gif) 

### A tough decision

After numerous iterations and conversations with both users, peers and early adopters, we ended up with a version of the library that we were quite proud of. It had a lot of capabilities, from interactive features to flexible configurations.

Despite our efforts, it wasn’t enough. 

Some essential features were still missing, and without them, the library didn’t feel complete. We also started to wonder whether the user base for such a niche solution was large enough to sustain ongoing development.

With these realizations, we made the tough decision to pause the project from public use. It was not easy, but sometimes stepping back is the right choice when you’re not confident in a product’s viability.

![](/assets/blog/farewell-rechart-project/end.png)

### A learning journey

Still, we’re **happy** with the journey. 

We **met and talked** with many interesting Retool users.

We learned a ton, especially about building custom components for Retool, and grasping the nitty-gritty technical details when dealing with the interaction between Retool and an external entity.

> The experience gave us **deep insights** into working with custom components in Retool and equipped us with the knowledge to tackle even more complex challenges in the future for our clients.

In retrospect, our experiment with Retool and custom charts wasn’t just about the end product. It was about **pushing boundaries**, learning through challenges, and gaining expertise that will guide our future projects.

![](/assets/blog/farewell-rechart-project/landing.png) 



### Is it over?

While we’ve officially paused the project, we don’t believe it’s the end. 

There’s still so much untapped potential in what we built. The framework we created has many valuable components that could be useful in different contexts.

We’re currently exploring the possibility of extracting parts of the project and repurposing them in other forms. Whether it’s smaller, more focused tools or integrating it into other projects, we’re keen on seeing how these pieces can evolve into something new and impactful. 

The journey might not be over, just changing shape.