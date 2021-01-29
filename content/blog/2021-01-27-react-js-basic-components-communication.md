---
title: React.js basic components communication
date: 2021-01-27 07:00:00 +0100
subtitle: 27th January, 2021
style: blue
cover: ../../react.png
categories: Tutorials
tags: [tutorial, react, component, communication]
---

In this little exploration I wanted to test one possible way to make components communicate nicely.

## Problem

I have two component in a **Wrapper** and I want to trigger a change from component **Left** and see the effect in component **Right**.

## Solution

In the **Wrapper** component there's a `state` that is in charge of the communication:

```jsx
import { useState } from 'react'

function Wrapper (props) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Left />
      <Right />
    </div>
  )
}

export default Wrapper
```

Then, the **Left** component expose a button to trigger the change:

```jsx
function Left ({handleOnClick}) {
  return (
    <div>
      <button onClick={handleOnClick}>Click</button>
    </div>
  )
}

export default Left
```

And the **Right** uses the property that will be changed:

```jsx
function Right (props) {
  return (
    <h1>Right {props.count}</h1>
  )
}
export default Right
```

Finally, the wires in the **Wrapper** to make it to work:

```jsx
import { useState } from 'react'

function Wrapper (props) {
  const [count, setCount] = useState(0)

  const onLeftClicked = () => {
    setCount(count => count + 1)
  }

  return (
    <div>
      <Left handleOnClick={onLeftClicked} />
      <Right count={count} />
    </div>
  )
}

export default Wrapper
```

Since `count` is reactive, I can use it as bridge to funnel a communication between the two components. 

The downside of this solution is that it makes coupled the **Wrapper** with the child components. In some situation it can make sense, still figuring out potential issues.