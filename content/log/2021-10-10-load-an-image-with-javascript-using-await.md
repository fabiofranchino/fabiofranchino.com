---
title: Load an image with Javascript using await
date: 2021-10-10 11:10:00 +0100
---



Here a little script that promisize the Image load, so you can write, within an async function, something like:

```js
const img = await loadImage(url)
```

And with error try-catcher:

```js
try{
  const img = await loadImage(url)
}catch(e){
  console.log(e)
}
```

Here the function:

```js
const loadImage = path => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'Anonymous' // to avoid CORS if used with Canvas
    img.src = path
    img.onload = () => {
      resolve(img)
    }
    img.onerror = e => {
      reject(e)
    }
  })
}
export default loadImage
```

