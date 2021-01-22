---
title: React Class Component vs Functional Component
date: 2021-01-22 14:13:00 +0100
---

React.js Class Component vs Functional Component

Here a bare-bones hello-world React component in two flavours, Class and Function, both with state management, interaction, mount/unmount hooks and DOM reference as well in comparison:

## Class Component

```jsx
import React from 'react'

class Comp extends React.Component {
  constructor (props) {
    super(props)
    this.ref = React.createRef()
    this.state = { counter: 0 }
    this.handleClickMe = this.handleClickMe.bind(this)
  }

  componentDidMount () {
    console.log('mounted')
  }

  componentWillUnmount () {
    console.log('unmounted')
  }

  handleClickMe () {
    this.setState((state, props) => ({
      counter: state.counter + 1
    }))
  }

  render () {
    return (
      <div>
        <p ref={this.ref}>Class Component {this.state.counter}</p>
        <button onClick={this.handleClickMe}>Click Me</button>
      </div>
    )
  }
}

export default Comp
```

## Functional Component

```jsx
import { useState, useEffect, useRef } from 'react'

function Comp (props) {
  const [counter, setCounter] = useState(0)
  const ref = useRef()

  const handleClickMe = () => {
    setCounter((counter) => counter+1)
  }

  useEffect(() => {
    console.log('mounted')

    return () => {
      console.log('unmounted')
    }
  }, [])

  return (
    <div className='frame'>
      <p ref={ref}>Functional Component {counter}</p>
      <button onClick={handleClickMe}>Click Me</button>
    </div>
  )
}

export default Comp
```

