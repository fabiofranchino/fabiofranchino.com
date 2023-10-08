---
title: Install n8n on Render service
date: 2023-10-08 07:24:00 +0100
---



This is a recap of my successful attempt to install **n8n** on **Render** for future reference.

First thing first, kudos to the author of [this repo](https://github.com/ready4mars/n8n-render) that is 95% of what you need.

Just fork this repo and create a new **Render web service** by pointing to that repo.

You also need to activate a couple of resources in order to have a fully functional n8n in the cloud:

- A PostgreSQL Instance
- A Persistent Disk

Once you have them, configure the `env` in the web service by adding the PostgreSQL credentials and the webhook URL (your app url). Don't forget to add the the Disk `Mount Path` setting the default value `/home/node/.n8n` as specified in the repo README.

That's all, now you should signup to your new n8n cloud application and start automate!

