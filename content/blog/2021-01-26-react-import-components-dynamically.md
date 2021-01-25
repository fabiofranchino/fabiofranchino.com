---
title: How to import components dynamically in React.js
date: 2021-01-26 07:00:00 +0100
subtitle: 26th January, 2021
style: blue
categories: Tutorials
tags: [tutorial, react, dynamic, component]
---

If you need to import a bunch of React.js components in a dynamic way, here the tip.

Let's assume you have a folder with a list of React.js components you want to include automatically at build time.

I'm also assuming you're using CRA scaffolding, or a Webpack based tooling.

Here the javascript that loads and creates an array of ready-to-use React.js components:

```js
// look in a specific folder .js files
const requireComponent = require.context(
  '../myDynComps',
  false,
  /.js$/
)

const list = []

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)
  
  const componentName = fileName
    .replace(/^\.\//, '')
    .replace(/\.\w+$/, '')
    .replace(/js/, '')

  const CompTag = componentConfig.default
  
  list.push({
    label: componentName,
    comp: <CompTag />
  })
})

export default list
```

Now you can list the available components and render the selected one:

```jsx
import { useState } from 'react'

import list from './utils/loadComponents.js'

function App () {
  const [comp, setComp] = useState(list.length - 1)
    
  const handleChange = (e) => {
    const index = e.target.value
    setComp(index)
  }

  return (
    <div className='app'>

      {list[comp].comp}

      <select value={comp} onChange={handleChange}>
        {
          list.map((d, i) => (
            <option key={d.label} value={i}>{d.label}</option>
          ))
        }
      </select>
    </div>
  )
}

export default App
```

