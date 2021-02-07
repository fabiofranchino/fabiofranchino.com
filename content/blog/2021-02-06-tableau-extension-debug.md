---
title: Tableau Extension debug
date: 2021-02-06 07:00:00 +0100
subtitle: 6th February, 2021
style: blue
cover: ../../tableau.png
categories: Tutorials
tags: [tutorial, tableau, extensions, debug]
---

I've started digging a bit into [Tableau Extensions API](https://www.tableau.com/developer/extensions) lately.

I had some troubles into setting up the proper debugging environment.

The [documentation](https://tableau.github.io/extensions-api/docs/trex_debugging.html) says that you can debug a Tableau Extension by using a local socket communication between Tablueau and an instance of Chrome browser. They suggest to download Chromium but I wanted to try using my current Chrome installation.

## How to debug

Briefly, launch Tableau with the command line with:

```shell
open /Applications/Tableau\ Desktop\ 2019.4.app --args --remote-debugging-port=8696
```

then point Chrome to:

```shell
http://localhost:8696/
```
Select the Extension name you're working on and you should be able to inspect the DOM and see the console for your debugging purposes.

## `registerElement` is undefined

The problem is that the DevTool throws an error and the debugging session is therefore blocked:

```js
Uncaught TypeError: document.registerElement is not a function
    at Object.UI.registerCustomElement (inspector.js:2964)
    at inspector.js:2976
    at inspector.js:2978
```

The browser throws an error because `document.registerElement` is missing.

Indeed, it's [deprecated](https://developer.mozilla.org/en-US/docs/Web/API/Document/registerElement) since a long time and possibly removed from recent version of Chrome.

## Downgrade Chrome

I've realized that the only solution would be downgrading Chrome for that specific purpose. 

There is a better way to do that, you can download the Chromium version they suggest in the documentation, such as this [one](https://commondatastorage.googleapis.com/chromium-browser-snapshots/index.html?prefix=Mac/706915/).

Alternatively, you can use the [Chrome Embedded Framework](https://en.wikipedia.org/wiki/Chromium_Embedded_Framework) version. You can find binaries for Mac and Win [here](https://github.com/Adobe-CEP/CEP-Resources).

It's works fine. You can log in the console what's going on in javascript and you can inspecting the DOM with the Element panel.

The only downside is that everytime you `reload` an extension from within Tableau, the connection stops and you need to reload the browser as well.
