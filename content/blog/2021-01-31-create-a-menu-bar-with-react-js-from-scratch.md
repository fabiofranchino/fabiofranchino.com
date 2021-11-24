---
title: Create a MenuBar with React.js from scratch
date: 2021-01-31 07:00:00 +0100
subtitle: 31st January, 2021
style: blue
cover: ../../react.png
categories: Tutorials
tags: [tutorial, react, component, menu]
---

I use to make practice on a specific library or framework by creating common components. This time I wanted to make a basic MenuBar in React.js.

![](/assets/blog/create-a-menu-bar-with-react-js-from-scratch/mock.gif)

## The Wrapper

Here the code of the **Wrapper** component:

```jsx
import MenuBar from './MenuBar'
import { useState } from 'react'
import getItems from './items'

function Wrapper (props) {
  const [items, setItems] = useState(getItems())

  const onHandleClick = d => {
    items.forEach(b => (b.active = false))
    d.active = true
    setItems([...items])
  }

  return (
    <div>
      <MenuBar handleClick={onHandleClick} items={items} />
    </div>
  )
}

export default Wrapper
```

As you can see, there's a state variable that is used to both feed the MenuBar and handle all the model changes according to the user interaction. 

It's worth to mention that in the `onHandleClick` function, the `setItems` is **updating the array with a new one** using the spread operator, because React.js hook requires that way. Indeed, updating the single object or the single property of an object is not enough to trigger the reactivity of the library.

The state variable is initialized with a mocked data structure, `items.js` which is a simple array of object such as:

```js
const items = () => {
  return [
    { label: 'Home', active: true },
    { label: 'Products' },
    { label: 'Services' },
    { label: 'About' },
    { label: 'Contact' }
  ]
}

export default items
```

There's also the `onHandleClick` handler that is calleb from within **MenuBar** component.

## The MenuBar

Here the code of MenuBar component:

```jsx
function MenuBar (props) {
  return (
      <ul>
        {props.items.map(d => (
          <li
            onClick={(e) => props.handleClick(d)}
            className={d.active ? 'active' : ''}
            key={d.label}
          >
            {d.label}
          </li>
        ))}
      </ul>
  )
}

export default MenuBar
```

In this component the `onClick` handler calls the parent method passing its own data-point object.

Also, the `className` is handled according to the `active` property of each item.

So, simple and basic, but a good example to understand how to delegate the data model to a parent wrapper.