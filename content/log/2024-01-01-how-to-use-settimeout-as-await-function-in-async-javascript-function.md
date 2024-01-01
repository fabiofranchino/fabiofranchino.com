---
title: How to use setTimeout as await function in async javascript function
date: 2024-01-01 09:26:00 +0100
---

 

To effectively use `setTimeout` as an awaitable promise in JavaScript, create a new Promise object that resolves after a specified delay, achieved by placing the `setTimeout` function inside the promise's executor function. This approach allows you to use `await` with the promise, causing the asynchronous operation to pause execution for the specified time before continuing, thus simulating a sleep function in a more readable and manageable way compared to traditional callback-based implementations.

Here the code:

```js
const wait = t => new Promise((resolve, reject) => setTimeout(resolve, t))

const myFunc = async () => {
  const wait2sec = await wait(2000)
}
```

