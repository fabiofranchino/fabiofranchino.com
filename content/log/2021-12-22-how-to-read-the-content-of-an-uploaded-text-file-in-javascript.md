---
title: How to read the content of an uploaded text file in javascript
date: 2021-12-22 18:38:00 +0100
---



Let's suppose you have a file input button:

```html
<input id="upload" type="file"accept="text/*" />
```

And here the handler to listen for change:

```js
document.querySelector('#upload').addEventListener('input', function() {
  // do something
})
```

Then, we grab the uploaded file reference and read its content using `FileReader` class:

```js
document.querySelector('#upload').addEventListener('input', function() {
  const file = this.files[0]
  
  let fr = new FileReader()
  
  fr.readAsText(file)
  
  fr.onload = () => {
    console.log(fr.result)
  }
  
  fr.onerror = () => {
    console.log(fr.error)
  }
})
```

That's it!