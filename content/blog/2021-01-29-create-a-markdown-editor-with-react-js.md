---
title: Create a Markdown Editor with React.js
date: 2021-01-29 07:00:00 +0100
subtitle: 29th January, 2021
style: blue
cover: ../../react.png
categories: Tutorials
tags: [tutorial, react, markdown, editor]
---

Here my take to create a bare-bones markdown editor with real-time preview to make practice with React.js.

![](/assets/blog/create-a-markdown-editor-with-react-js/markdown-editor.gif)

There are three components in this example:

- the main **Wrapper**
- the **Editor**
- the **Render**

The **Wrapper** is responsible to keep the markdown source in a state variable `md`, in order to let the children components use it as a bridge for our purpose.

```jsx
import Editor from './Editor'
import Render from './Render'
import { useState } from 'react'

function Wrapper (props) {
  const [md, setMd] = useState('## A bare-bones Markdown converter')

  const onChange = src => {
    setMd(src)
  }

  return (
    <div>
      <Editor src={md} handleChange={onChange} />
      <Render src={md} />
    </div>
  )
}
export default Wrapper
```

The **Wrapper** also listens for any source changes from the **Editor** component, updating the `md` variable.

The **Editor** textarea looks something like:

```jsx
function Editor (props) {
  const handleChange = e => {
    props.handleChange(e.target.value)
  }
  return (
      <textarea defaultValue={props.src} onChange={handleChange} />
  )
}
export default Editor
```

The **Editor** uses an [controlled](https://reactjs.org/docs/forms.html#controlled-components) `textarea` element that accepts an initial value and dispatches any change back to the **Wrapper**.

The **Render** component is responsible to render from **markdown** to **HTML** the source:

```jsx
import marked from 'marked'

function Render (props) {
  let html = ''
  if (props.src) {
    html = marked(props.src)
  }

  return (
      <div dangerouslySetInnerHTML={{ __html: html }} />
  )
}
export default Render
```

In this example I used the library `marked` to convert the markdown source.

Every time the variable `md` changes, it does trigger a re-render in the Render component, generating a new HTML code.

Injecting HTML into the DOM in React.js needs to be very explicit: you have to use the attribute `dangerouslySetInnerHTML` with the object `{__html: value}` as value to make it to work.

That's all! As I said, very bare-bones.