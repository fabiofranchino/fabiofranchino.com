---
title: Using destructuring assignment instead of ternary operator for variable assignment
date: 2021-11-28 05:21:00 +0100
---



I used to write something like this when I wanted to assign a variable from a property object. It's a common pattern that uses the [Ternary Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) of js:

```js
const path = current ? current.path : null
```

That's because in case of `current` undefined, the runtime error is handled.

The same assignment can be done using the [Destructive Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), and it's nicer:

```js
const { path } = current || {}
```

Of course, it works if the object `current` contains the property `path`.

If you want to use a different variable name, you must rely to the first example.