---
title: Create a PRESENTA Module plugin
date: 2021-03-07 07:00:00 +0100
subtitle: 7th March, 2021
style: blue
cover: cover.gif
categories: Tutorials
tags: [tutorial, presenta, plugin, module]
---

In this post I'm going to share some aspects that might be useful when developing a custom PRESENTA Lib **Module** plugin.

A **Module** in PRESENTA Lib acts at scene level, thus, its purpose is to enhance the scene, no matter the blocks the scene might contain.

It's an important distinction that helps you to choose between the different plugin type **PRESENTA Lib** can understand.

More info about this distinction can be found [here](https://lib.presenta.cc/plugins/development.html).

## Random Bubbles

The Module I've created has a clear goal:

> Generate random bubbles in a scene.

![](/assets/posts/create-a-presenta-module-tutorial/cover.gif)

You can see the full [source code here](https://github.com/presenta-software/unsorted-plugins/blob/master/modules/randomBubbles.js), and a [sample in Playground](https://play.presenta.cc/peek/BuoBSaSo2zbCn) you can play with, but I want to outline some important aspects that belongs to a **PRESENTA Lib** Module, thus, I'm using a simplified version of it.

A **Module** (the same apply to **Block** and **Controller** plugin type) is a javascript function with some specific arguments you can exploit.

Here the bare-bones version of the mentioned Module that help me to explain some aspects:

```js
function randomBubbles(sceneElement, modConfig, sceneConfig){
  if(!modConfig) return
  
  const parser = new DOMParser()
  
  const str = `<svg style="width:100%;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  </svg>`
  
  const frag = parser.parseFromString(str, 'text/html').body.childNodes[0]
  
  const wrapper = sceneElement.querySelector('.frontContainer')
  wrapper.append(frag)
}

Presenta.addModule('randomBubbles', randomBubbles)
```

Let's dissect the above code:

### The arguments

This Module exploits `sceneElement`, the DOM element of the scene, and `modConfig`, the javascript object provided by the user that contains possible options.



### Allowing to disable the module

The return statement in **line 2** is meant to allow the user to disable the Module on a specific scene, in the following way:

```js
{
  // modules activated and configured at presentation level
  modules:{
    randomBubbles:true
  },
  scenes:[
    // this scene will run randomBubbles
    {
      blocks:[...]
    },
		
    // this scene won't run randomBubbles
    {
      modules:{
        randomBubbles: false
      },
      blocks:[...]
    }
	]
}
```



### Create an SVG

Since we want to create graphic elements, it's better to append an SVG that will host the circles:

```js
const str = `<svg style="width:100%;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">

</svg>`
```

This way we can exploit the `viewBox` of the SVG to position the circles in a relative area size, without worrying about the real scene size.

So, our circles need to have coordinates within the 100 x 100. The SVG will be resized according to the scene size.



### Put in the right wrapper

`sceneElement` is the wrapper that contains all the blocks. In order to avoid stack order issues and other conflicts, it's better to relying to a specific wrapper that can be reached with:

```js
const wrapper = sceneElement.querySelector('.frontContainer')
```

`.frontContainer` is a specific wrapper meant for custom elements from modules.

We are going to append out stuff within that wrapper.



### Register the Module properly

In order to make a plugin visible to PRESENTA Lib, we need to register with the proper method:

```js
Presenta.addModule('randomBubbles', randomBubbles)
```

Since it's a Module, we're using `addModule` with a unique namespace.

That's all. Check the [full source code](https://github.com/presenta-software/unsorted-plugins/blob/master/modules/randomBubbles.js) of the Module as well as play with it in [this Playground sample](https://play.presenta.cc/peek/BuoBSaSo2zbCn).

