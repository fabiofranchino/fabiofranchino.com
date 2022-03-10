---
title: Use Rollup to inject bundled javascript into an HTML file
date: 2022-03-10 08:35:00 +0100
---



I wanted to create a Figma plugin and I need a way to bundle all the things into a single file. My bundler of choice is Rollup, thus, I found [this module](https://github.com/bengsfort/rollup-plugin-generate-html-template) that inject the `script` tag into anHTML file.

Problem is that what I need is the injection of the whole raw source instead of the url reference.

I found this [fork](https://github.com/lgirma/rollup-plugin-generate-html-template) that does the job but unfortunately it doesn't work.

Therefore, I fork it and fixed all the issues, thus [here](https://github.com/presenta-software/rollup-plugin-generate-html-template) the working module if you need it.