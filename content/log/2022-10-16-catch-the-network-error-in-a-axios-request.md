---
title: Catch the network error in a Axios request
date: 2022-10-16 08:14:00 +0100
---



Here the ES6way, in async function, to catch an network error when using Axios:

```js
import axios from 'axios'

let res = null

try{
  res = await axios(dataUrl)
	// do something the the response
}catch(e){
  console.log('err', e)
}

// do something after the fetch 
```

