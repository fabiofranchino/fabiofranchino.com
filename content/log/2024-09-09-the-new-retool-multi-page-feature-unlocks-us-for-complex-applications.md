---
title: "The new Retool multi-page feature unlocks us for complex applications"
date: 2024-09-09 07:04:00 +0100
subtitle: 9th September, 2024
description: ""
categories: Logs
tags: [log]
layout: "layouts/blog.njk"
permalink: "/{{ page.filePathStem }}/"
---



Recently, Retool released [a very welcome feature](https://docs.retool.com/apps/guides/multipage) in public beta, addressing a long-standing user request:

> A better way to architect complex applications.

![img](/assets/blog/the-new-retool-multi-page-feature-unlocks-us-for-complex-applications/02.png)

Until now, all Retool applications have been **single-page applications (SPA).**

While it's possible to conditionally show and hide components and run queries per request, optimizing complex applications using such techniques is **not straightforward nor future-proof.**

As apps grew in complexity, this approach inevitably led to **performance bottlenecks** and **increased difficulty in maintenance.**



### Splitting into Multi-Apps

To mitigate these issues, best practices for developing large or complex Retool apps have traditionally involved splitting them into multiple linked apps, similar to how websites work. However, this solution came with several drawbacks:

- The user experience when switching between apps was less than ideal.
- Shared elements required careful design as Modules or Query Libraries to avoid duplication.
- Sharing state across apps was cumbersome, relying on URL parameters or localStorage.

But it's not as good as it appears.

When jumping to another app, it's **bootstrapped as if it were the initial view**. There's usually a very visible latency that makes the user think something isn't working properly.

To make it worse, if the user decides to go back, another app bootstraps, causing more latency for a simple back action.

Furthermore, during a bootstrap, **all the initial queries get executed**, meaning a simple back-and-forth interaction potentially involves running several queries multiple times.

### Welcome native multi-page

With the new release, Retool has introduced a better way to handle app complexity, offering key benefits on these areas:

- **Performance**: Only relevant components and logic are loaded, improving speed and responsiveness.
- **Maintainability**: Modular architecture makes it easier to update and manage large apps.
- **User-experience**: The new structure eliminates the need for clunky workarounds like app switching.

The switch between pages is nearly immediate, and no entire app bootstrapping happens anymore, nor are queries re-run for this reason.

![img](/assets/blog/the-new-retool-multi-page-feature-unlocks-us-for-complex-applications/04.png)

### The import capability is terrific

The Retool team did a fantastic job designing this feature. Their **shift in paradigm** is not only intuitive but easy to adopt. It requires minimal additional effort to learn, which makes the transition seamless. The capability to **convert existing traditional Retool apps** allows a smooth and fast migration.

But aside the migration possibility, there's more to say about the **import functionality**. It is pretty powerful because it allows you to design and implement an app the old way, then integrate it into something larger only when it makes sense. It's like thinking of Retool apps as **super components**, which is pretty powerful.

![img](/assets/blog/the-new-retool-multi-page-feature-unlocks-us-for-complex-applications/01.png)

We believe this is going to change how we think Apps when developing them in Retool.



### Global and page scopes

Retool’s new feature introduces **two scopes**, global and page-specific, for both components and resources (queries, business logic, variables). This design allows persistent elements to exist across pages, while **page-specific logic only runs when necessary.**

The **global scope** acts like a master frame, housing components and resources that remain constant across multiple pages. Everything else is scoped to individual pages, meaning that only active pages are loaded and evaluated, similar to how browser tabs work. This significantly reduces unnecessary processing.

Having these two scopes makes every programmer feel at home. Before this feature, everything in Retool was global, which was fine most of the time. But as the application gets complex and larger, like in any programming environment, the global scope can be problematic, leading to issues and unexpected behaviors.

![img](/assets/blog/the-new-retool-multi-page-feature-unlocks-us-for-complex-applications/02.png)



### It doesn't look big, but it is

This new approach **unlocks the potential for building more complex applications** with unprecedented ease and speed. Retool broadens its scope, allowing developers to tackle more use cases while keeping the benefits of rapid development and quicker time-to-market.

Retool is expanding its use-case portfolio, and for very good reasons!

