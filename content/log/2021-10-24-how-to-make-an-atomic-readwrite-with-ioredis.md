---
title: How to make an atomic read/write with ioRedis
date: 2021-10-24 08:08:00 +0100
---

If you're using Redis in your system, chances are that you want to benefit of its performance.

When needed to make several operations on Redis, every operation comes with a cost.

Luckily, Redis, and by extension ioRedis, comes with the possibility to performe several operations in an atomic way, that means as it were a single operation.

Suppose you need to performe such as:

```js
redis.incrby('count:a', 1)
redis.incrby('count:b', 2)
redis.del('job:' + id)
```

Here the atomic version:

```js
redis.multi()
    .incrby('count:a', 1)
    .incrby('count:b', 2)
    .del('job:' + id)
    .exec((err, results) => {
      if (err) console.log(err)
    })
```

