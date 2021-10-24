---
title: Fetch and download a PDF file with Axios and Javascript
date: 2021-10-23 16:20:00 +0100
---



Here the tip to download a binary file, such as a PDF, ZIP or image file with axios:

```js
// within an async function
const res = await axios({
  responseType: 'blob',
  url: URL_TO_BINARY_FILE
})

// res.data will contains the binary data of the file
```

Now, if you want to force the download to the user browser, here the very popular trick:

```js
const url = window.URL.createObjectURL(new Blob([res.data]))
const link = document.createElement('a')
link.href = url
link.setAttribute('download', 'myFile.pdf')
document.body.appendChild(link)
link.click()
```

