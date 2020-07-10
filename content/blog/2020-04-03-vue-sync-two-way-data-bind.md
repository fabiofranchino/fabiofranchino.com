---
title: Vue.js and the sync option for two ways data binding
date: 2020-04-03 07:00:00 +0100
subtitle: 3rd April, 2020
style: blue
cover: cover.png
categories: Tutorials
tags: [tutorial, vue, bind]
draft: true
---

This is more a practical reminder than a true tutorial since the option is already well documented in the [Vue.js reference](https://vuejs.org/v2/guide/components-custom-events.html#sync-Modifier).

To enable the two-ways data binding in Vue.js you have to explicitly update a property using a specific event from child to parent component.

This is a best practice to avoid side effects that are difficult to track down, in particular on large applications.

## The one-way data binding



## The two-ways data binding

