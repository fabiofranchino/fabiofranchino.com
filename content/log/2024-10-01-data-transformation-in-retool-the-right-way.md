---
title: "Data transformation in Retool the right way"
date: 2024-10-01 07:04:00 +0100
subtitle: 1st October, 2024
description: ""
categories: Logs
tags: [log]
layout: "layouts/blog.njk"
permalink: "/{{ page.filePathStem }}/"
---



 

[Retool](https://retool.com/) allows for data transformation virtually everywhere, but embedding JavaScript snippets all over the place can quickly turn problematic. Beyond the performance hit, this practice can lead to difficult-to-maintain applications in the long run.

One reason for this is that Retool runs JavaScript in a sandbox. Every time you run a transformation, the payload is cloned, which means that frequent, scattered transformations can degrade performance. It’s far more efficient to prepare your data in one go, rather than making multiple small transformations across your app.



### Consolidating Business Logic

By centralizing your data transformation in one place, you're not only improving performance but also simplifying maintenance. Over time, having a single location for all your business logic makes updates, debugging, and enhancements much easier.

Let’s dive into one of the most common use cases: transforming SQL query results into a JavaScript array.



### Transform SQL Response into a JavaScript Array

Often, SQL responses come back as a map with separate arrays for each field, which isn’t the most convenient format to work with. Luckily, Retool offers a handy function called `formatDataAsArray`. You can find it in the **Transformation Results** tab within the Query panel.

![](/assets/blog/data-transformation-in-retool-the-right-way/01.png)

Here, the `data` variable refers to the query result. You can manipulate this data to fit your needs before returning the transformed version. Plus, you can leverage libraries like `lodash`, `moment`, or even your own custom ones to make your transformations even more powerful.

```js
return formatDataAsArray(data)
```



### Adding Custom Transformations

Once you've converted your SQL response into a JavaScript array, iterating over the objects opens up a range of possibilities. For instance, you may want to add, remove, or modify specific properties in each object.

Here’s an example using JavaScript’s `forEach` method to add a new `short` property to each object. This new property concatenates the first letter of the user’s first and last names:

```js
const res = formatDataAsArray(data)

res.forEach(d => {
  d.short = d.name.split(' ')[0][0] + d.name.split(' ')[1][0]
})

return res
```

This method allows you to manipulate the array in place while maintaining readability and performance.

![](/assets/blog/data-transformation-in-retool-the-right-way/02.png)

### Remapping the Array

Another powerful approach is to remap the array entirely, creating a new array with different property names or additional computed properties. Here’s an example that maps the original array into a new format:

```js
const res = formatDataAsArray(data)

const newarr = res.map(d => {
  return {
    fullname: d.name,
    jobtitle: d.role
  }
})

return newarr
```

By creating a new array on the fly, you can adjust the structure and properties of your data as needed.

![](/assets/blog/data-transformation-in-retool-the-right-way/03.png)

### Conclusion

Data transformation and decoration are essential aspects of developing a Retool app. Properly centralizing and optimizing these transformations is crucial for both performance and long-term maintainability. Keep your transformations efficient, maintainable, and centralized whenever possible.
