---
title: Create a React reusable components library using Microbundle
date: 2021-12-17 07:00:00 +0100
subtitle: 17th December, 2021
style: blue
cover: ../../react.png
categories: Tutorials
tags: [tutorial, colors, extract, nodejs, thief]
---

In this exploration I'm showing how to turn a regular React app into a reusable React components library with Microbundle.

Microbundle is a zero-config tool based on Rollup to build a bundle without messing with the Rollup config.

## Create the library app

Let's create the app that will contains all your components using CRA:

```shell
npx create-react-app mylib
```

And add some components in the `components` folder, such as:

```jsx
// src/components/sub/A.js

export const A = () => {
    return (
        <h1>A</h1>
    )
}
```

```jsx
// src/components/sub/B.js

export const B = () => {
    return (
        <h1>B</h1>
    )
}
```

and

```jsx
// src/components/MainComp.js

import { A } from './sub/A'
import { B } from './sub/B'

export const MainComp = () => {

    return (
        <>
            <h1>MainComp</h1>
            <A />
            <B />
        </>
    )
}
```

Tha above components can be tested in the App.js:

```jsx
import { MainComp } from './components/MainComp'

function App() {
  return (
    <div>
      <MainComp />
    </div>
  );
}

export default App
```

## Install and configure Microbundle

Install it the usual way:

```shell
npm i -D microbundle
```

and configure the `package.json` file adding the module type we want to use:

```json
"main": "./dist/lib.umd.js",
"module": "./dist/lib.module.js",
```

The file where we define the exported components:

```json
"source": "src/lib.package.js"
```

And the script to build the library:

```json
"scripts": {
  ...
	"build:lib": "microbundle --jsx React.createElement --jsxFragment React.Fragment --jsxImportSource react"
}
```

The above config options are required in order to make the library compatible with jsx syntax.

Finally, let's define the exported components in `lib.package.js`:

```js
export { MainComp } from './components/MainComp.js'
export { A } from './components/sub/A.js'
export { B } from './components/sub/B.js'
```

Run the build command and move to the App where you want to include the library:

```shell
npm run build:lib
```

## Include the library into a React App

Suppose we have a React app created with CRA. To install the library locally without publish it to NPM registry, just use this command:

```shell
npm i file:../mylib
```

where `mylib` is the folder name of the above library that sits alongside the React app.

Now, let's import our reusable components in `App.js`:

```jsx
import { MainComp, A, B } from 'mylib'

function App() {
  return (
    <div className="App">
      
      <div style={{border:'1px solid red'}}>
        <MainComp />
      </div>
      
      <div style={{border:'1px solid blue'}}>
        <A />
      </div>
      
      <div style={{border:'1px solid green'}}>
        <B />
      </div>
      
    </div>
  );
}

export default App;
```

Here the rendered page:

![](/assets/blog/create-react-reusable-components-library-with-microbundle/react-cra-microbundle-example.png)

That's all!