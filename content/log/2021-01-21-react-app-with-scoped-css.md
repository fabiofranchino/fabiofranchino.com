---
title: React App with scoped CSS
date: 2021-01-21 15:56:00 +0100
---



Today I've learned how to make CSS scoped, meaning, the CSS is automatically transformed in order to avoid collisions with other CSS definitions within the App.

I use `create-react-app` for the scaffolding, thus, here the steps to incorporate the functionality.

Install `@craco/craco` that let to enhance the default React app by means of additional plugins, then install the Craco plugin `craco-plugin-scoped-css`.

Add in the `craco.config.js` the `plugins` field:

```js
module.exports = {
  plugins: [
    {
      plugin: require('craco-plugin-scoped-css')
    }
  ]
}
```

Once you're running the React app with Craco, now you can create a CSS file with the suffix `.scoped`, such as `style.scoped.css` anywhere in the App.

Then, import it in your App or Component to use those scoped styles:

```jsx
import './style.scoped.css'

function Comp(props){
  return(
  	<h1 className='myStyle'>Title</h1>
  )
}

export default Comp
```

Assuming there's a `.myStyle` selector in the CSS file, it will be scoped during compilation, thus only that Component will get styled by it.