---
title: How to read the content-type of the response using axios library
date: 2022-10-16 08:14:00 +0100
---



Here the way to read the Content-Type of the network response using Axios js library:

```js
import axios from 'axios'

axios(someUrl).then(res => {
  const {data, headers} = res
  const ext = headers['content-type']
  
  // it's a text file
  if(ext.indexOf('text/')>=0){
    // do something
  }
})
```

Or if you are in async function:

```js
import axios from 'axios'

const res = await axios(someUrl)
const {data, headers} = res
const ext = headers['content-type']
  
// it's a text file
if(ext.indexOf('text/')>=0){
  // do something
}
```



I use it to decide what to do after the fetch, since it can be both a CSV file or a JSON one.