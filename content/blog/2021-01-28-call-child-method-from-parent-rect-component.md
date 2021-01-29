---
title: Call child method from parent React.js component
date: 2021-01-28 07:00:00 +0100
subtitle: 28th January, 2021
style: blue
cover: ../../react.png
categories: Tutorials
tags: [tutorial, react, component, parent]
---

In this sample I wanted to figure out how to call from within a parent component a child component' method in a **React.js** app.

I wanted to explore both the Class and Functional version as well.

## The parent wrapper

Here the parent code:

```jsx
import CChild from './CChild'
import FChild from './FChild'

function Mock (props) {
  const fref = useRef()
  const cref = useRef()

  const handleClick = e => {
    fref.current.setFromOutside('HELLO from Parent')
    cref.current.setFromOutside('HELLO from Parent')
  }
  return (
    <div>
      <button onClick={handleClick}>Show Me!</button>
      <FChild ref={fref} />
      <CChild ref={cref} />
    </div>
  )
}
```

There are two children components and a button to trigger the call.

The method `setFromOutside` belongs to the children definition.

## The children components

Here the code of the Class version:

```jsx
import React from 'react'

class Child extends React.Component {
  constructor (props) {
    super(props)
    this.state = { message: 'Waiting' }
  }

  setFromOutside (msg) {
    this.setState({ message: msg })
  }

  render () {
    return (
      <h1>{this.state.message}</h1>
    )
  }
}
export default Child
```

The Class version is pretty straighforward, the method `setFromOutside` is public, thus, it's visible from the parent by means of the child reference.

Here the Functional version:

```jsx
import { useState, forwardRef, useImperativeHandle } from 'react'

function Child (props, ref) {
  const [message, setMessage] = useState('Waiting')

  useImperativeHandle(ref, () => ({
    setFromOutside (msg) {
      setMessage(msg)
    }
  }), [])

  return (
    <h1>{message}</h1>
  )
}

export default forwardRef(Child)
```

Well, in this implementation there are some notable things to say:

- The public method needs to be included in the `useImperativeHandle` hook. 
- Also, you have to export the component with `forwardRef` HOC function.
- By exporting the component with `forwardRef`, the Function now has two arguments, `props` and `ref`, where the latter needs to be used in `useImperativeHandle` hook.

Ouch, that's not really "natural" to me, but still.

