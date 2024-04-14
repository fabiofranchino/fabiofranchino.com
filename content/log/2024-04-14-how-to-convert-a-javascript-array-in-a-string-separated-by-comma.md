---
title: How to convert a javascript array in a string separated by comma
date: 2024-04-14 07:45:00 +0100
---



The title is pretty self explanatory, here the code:

```js
const myArray = ['a', 'b', 'c']

JSON.stringify(myArray).replace(/[\[\]]/mig, '')

// '"a","b","c"'
```

Here an (better) alternative given by ChatGPT:

```js
myArray.map(item => `"${item}"`).join(',');
```

