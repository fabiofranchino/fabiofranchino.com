---
title: How to use setTimeout as await function in async javascript function
date: 2024-01-01 09:26:00 +0100
---

 

In JavaScript, it is common to use the native setTimeout function to wait before executing other functions.

With ES6, we can exploit the async/await syntax, which is very handy and compact, like this:

```js
await wait(2000)
doSomethingElseAfter2Sec()
```

### Why Use setTimeout with async/await?

In JavaScript, the combination of `async/await` with `setTimeout` is especially useful when you need to delay asynchronous operations for readable purpose. By wrapping `setTimeout` in a Promise, you can use `await` to pause execution within an `async` function. This technique is often used to simulate delays, i.e. throttle API calls, or create polling intervals. Unlike traditional callback approaches, using `await setTimeout` ensures your code keeps clean and maintainable. Whether you're working with React, Node.js, or other frameworks, this pattern provides a more intuitive and synchronous-looking code flow, even while handling asynchronous logic. Here's how to implement this pattern effectively and explore use cases in real-world applications.



### How to use setTimeout with await in async function?

To use `setTimeout` as an awaitable promise in JavaScript, you need to create a new Promise object that resolves after a specified delay, achieved by placing the `setTimeout` function inside the promise's executor function. This approach allows you to use `await` with the promise, causing the asynchronous operation to pause execution for the specified time before continuing, thus simulating a sleep function in a more readable and manageable way compared to traditional callback-based implementations.

Here the code:

```js
const wait = t => new Promise((resolve, reject) => setTimeout(resolve, t))

const myFunc = async () => {
  const wait2sec = await wait(2000)
}
```

