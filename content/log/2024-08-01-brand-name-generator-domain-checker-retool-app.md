---
title: "Brand name generator and domain checker. A Retool app"
date: 2024-08-01 07:04:00 +0100
subtitle: 1st August, 2024
description: "This is a Retool app that generates a list of brand names from a contextual text that you can provide."
categories: Logs
tags: [log]
layout: "layouts/blog.njk"
permalink: "/{{ page.filePathStem }}/"
---



![undefined](https://cdn.cmsfly.com/64e6fad6d38a6d002002f842/brand-name-generator-and-domain-checker-iSSfYY.gif)

This is a **Retool** app that generates a list of brand names from a contextual text that you can provide within the app.

Then, it is able to check if the domains related to the generated names are available or not. For this check, it uses the WhoIsXMLAPI service and you need to get the API key from them.

Now, let's install and use it!

## Create the Retool account.

If you already have one, you can skip this. Otherwise, go through this [link](https://get.retool.com/c2blfe7c4kts) to create a free account. By following to that link **you can have 20% discount** in case you want to upgrade in the future. The basic account is always free, though.

## Get the WhoIsXMLAPI API key

The domain availability check is performed with the WhoIsXMLAPI service, which is free for 500 requests in the trial account. You can create a free account from [here](https://www.whoisxmlapi.com/).

## Install the Retool app

First, [download the source](https://eloquentops.github.io/retool-apps/Brand-Name-Generator-and-Domain-Checker.json) (right-click to download as file) of the Retool app.

It's a JSON file you can then import in your Retool account.

![undefined](https://cdn.cmsfly.com/64e6fad6d38a6d002002f842/aaa-LfMt0X.png)

Add the **WhoIsXMLAPI API key** in the Retool dedicated textfield and start playing with it:

![undefined](https://cdn.cmsfly.com/64e6fad6d38a6d002002f842/screenshot-2024-02-06-at-21.52.08-qWnCNT.png)

#### 
