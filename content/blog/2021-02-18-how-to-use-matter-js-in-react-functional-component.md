---
title: How to use Matter.js in a React functional component
date: 2021-02-18 07:00:00 +0100
subtitle: 18th February, 2021
style: blue
cover: cover.gif
categories: Tutorials
tags: [tutorial, react, matter, component]
---

This time I've wanted to integrate [Matter.js](https://brm.io/matter-js/) in a React app.

The basic Matter.js boilerplace code comes from this [codepen](https://codepen.io/abusedmedia/pen/abBwWYL) that I did to wrap my head with the library.

It's a simple example that **inits** and **runs** the physic simulation engine with a basic mouse interaction to add particles on press:

![](/assets/blog/how-to-use-matter-js-in-react-functional-component/cover.gif)

In a React functional component we need to deal with its stateless aspect while Matter.js is a statefull engine. We don't want to exploit the React nature to update the DOM on each update. For that reason, `useRef` instead `useState` is used to add statefulness to the component.

First off, we keep in memory both the DOM wrapper and the Matter Engine in a `ref`

```jsx
import { useEffect, useRef } from 'react'
import { Engine } from 'matter-js'

function Comp(props){
  const scene = useRef()
  const engine = useRef(Engine.create())
  
  return (
     <div ref={scene} style={{ width: '100%', height: '100%' }} />
  )
}

export default Comp
```

Then, we use the `useEffect` hook to initialize the engine with all the required properties. The `engine` variable is kept outside the hook because we need it in another handler (more below).

```jsx
useEffect(() => {
  // mount
  const cw = document.body.clientWidth
  const ch = document.body.clientHeight

  const render = Render.create({
    element: scene.current,
    engine: engine.current,
    options: {
      width: cw,
      height: ch,
      wireframes: false,
      background: 'transparent'
    }
  })
	
  // boundaries
  World.add(engine.current.world, [
    Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
    Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
    Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
    Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true })
  ])
	
  // run the engine
  Engine.run(engine.current)
  Render.run(render)

  // unmount
  return () => {
    // destroy Matter
    Render.stop(render)
    World.clear(engine.current.world)
    Engine.clear(engine.current)
    render.canvas.remove()
    render.canvas = null
    render.context = null
    render.textures = {}
  }
}, [])
```

We change the template a bit to add the interactivity attributes:

```jsx
return (
  <div
    onMouseDown={handleDown}
  	onMouseUp={handleUp}
  	onMouseMove={handleAddCircle}
  >
    <div ref={scene} style={{ width: '100%', height: '100%' }} />
  </div>
)
```

and here the actual handlers:

```jsx
const isPressed = useRef(false)

const handleDown = () => {
  isPressed.current = true
}

const handleUp = () => {
  isPressed.current = false
}

const handleAddCircle = e => {
  if (isPressed.current) {
    const ball = Bodies.circle(
      e.clientX,
      e.clientY,
      10 + Math.random() * 30,
      {
        mass: 10,
        restitution: 0.9,
        friction: 0.005,
        render: {
          fillStyle: '#0000ff'
        }
      })
    World.add(engine.current.world, [ball])
  }
}
```

Now the full component at your disposal for a straight copy/paste:

```jsx
import { useEffect, useRef } from 'react'
import { Engine, Render, Bodies, World } from 'matter-js'

function Comp (props) {
  const scene = useRef()
  const isPressed = useRef(false)
  const engine = useRef(Engine.create())

  useEffect(() => {
    const cw = document.body.clientWidth
    const ch = document.body.clientHeight

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: 'transparent'
      }
    })

    World.add(engine.current.world, [
      Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
      Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true })
    ])

    Engine.run(engine.current)
    Render.run(render)

    return () => {
      Render.stop(render)
      World.clear(engine.current.world)
      Engine.clear(engine.current)
      render.canvas.remove()
      render.canvas = null
      render.context = null
      render.textures = {}
    }
  }, [])

  const handleDown = () => {
    isPressed.current = true
  }

  const handleUp = () => {
    isPressed.current = false
  }

  const handleAddCircle = e => {
    if (isPressed.current) {
      const ball = Bodies.circle(
        e.clientX,
        e.clientY,
        10 + Math.random() * 30,
        {
          mass: 10,
          restitution: 0.9,
          friction: 0.005,
          render: {
            fillStyle: '#0000ff'
          }
        })
      World.add(engine.current.world, [ball])
    }
  }

  return (
    <div
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      onMouseMove={handleAddCircle}
    >
      <div ref={scene} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

export default Comp
```

Happy simulation!