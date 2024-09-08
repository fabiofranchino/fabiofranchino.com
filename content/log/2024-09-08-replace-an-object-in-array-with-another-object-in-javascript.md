---
title: Replace an object in array with another object in javascript
date: 2024-09-08 13:51:00 +0100
---





To replace an object in an array with another object in JavaScript, you typically need to know the index of the object you want to replace. Here's how you can do it:

### Method 1: Using `indexOf`

First, find the index of the object you want to replace:

```js
const index = list.indexOf(myObject);
```

Then, replace the object at that index:

```js
list[index] = newObject;
```

This method works well when you know the reference to the object you're replacing.

### Method 2: Using `splice`

Another way to replace the object is to use the `splice` method:

```js
list.splice(index, 1, newObject);
```

This will remove the object at the specified `index` and insert the `newObject` in its place.

### Conclusion

There are other ways to do this, but I recommend sticking with either the `indexOf` or `splice` methods for simplicity and clarity.