---
title: Develop a library with Rollup and CSS Module that can be used in a Vite project
date: 2023-02-18 12:16:00 +0100
---

.

While developing a js library with my preferred stack, Rollup and CSS Module, I wanted to use it in a Vue Project for testing purpose.

So I created a Vue project with Vite.

I've installed my library locally using `npm i file:../...` which is very handy because I don't have to publish the library on NPM and I can iterate very fast.

While the library was correctly and automatically imported by Vite, the CSS Module of the library weren't parsed correctly.

Indeed, all the CSS belonging to the library were not post-processed by postCSS at all. They were injected as I written in the first instance.

The solution was that Vite automatically post-process with postCSS **only** css files that contains the suffix `module`, such as `style.module.css` otherwise there are ignored completely.

I got the hint from this [website](https://miyauchi.dev/posts/lib-vite-tailwindcss/) while trying to search this difficult use-case.

So, renaming my css files solved the issue!