---
title: Emulate the API behavior with Promises
date: 2020-07-07 07:00:00 +0100
cover: cover.png
categories: Tutorials
tags: [tutorial, promise, api, es6]
---

Nowadays is quite common to fetch data from within the client using some API surfaces (whether is an application server or a little lambda function as well).

The following snippet is generally what we need in our web app when dealing with REST API calls:

```js
const url = 'https://jsonplaceholder.typicode.com/todos/1'
const response = await fetch(url)
const json = await response.json()
console.log(json)
```

## Frontend, backend and in between

The technical benefits of such architecture are many: separation of concerns, better modularity, less interwoven dependencies, etc.

Among the others, one of my favorite is the possibility to start developing one side without waiting for the other.

It's perfectly fine starting to develop the frontend code without even know the technology stack of the backend.

The only contract we have to agree is the API layer (usually HTTP async requests) and its end points (the verbs list the frontend needs).

## Use custom promises

While it's totally possible to replace the API responses with some static data, what I'd like to outline here is the possibility to emulate the tipical behavior of an HTTP request in terms of waiting time and unpredictability of the response in order to show possible side effects of the frontend interface in specific edge cases.

Let's make an example. When you request some async data there's the chance that the interface need to handle some feedback and empty states to let the user know what's going on. Even if your backend is going to be lightly fast you have to deal with state transition of the UI, maybe applying some delay

Here some example of what happen

## Get a response

## Get an error

## Get something wrong

## Test with the real API

