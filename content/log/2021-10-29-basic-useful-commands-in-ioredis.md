---
title: Basic useful commands in ioRedis
date: 2021-10-29 07:01:00 +0100
---



I'm learning Redis using ioRedis javascript driver. Here the list of useful command I've learned.

The connection. I'm using [Upstash](https://upstash.com/) distribuited database service, here the connection:

```js
const Redis = require('ioredis')
const redis = new Redis(process.env.REDIS_DB_CONNECTION_URL)
```

where `REDIS_DB_CONNECTION_URL` is the connection string provided by Upstash.

To disconnect it:

```js
redis.disconnect()
```

To set a new, or update an existing record by key `item:a`:

```js
redis.set('item:a', 'Some content')
```

To set/update with an expiring time, that means it'll be deleted automatically:

```js
redis.set('item:a', 'Some content', 'EX', 60) // 60 seconds
```

To get a record:

```js
const item = await redis.get('item:a')
// "Some content"
```

To delete a record:

```js
redis.del('item:a')
```

To increment a value of an existing or new record by key:

```js
redis.incr('count:a')
```

To increment by a specific value:

```js
redis.incrby('count:a', 10)
```

To get a list of records using a wildcard operator:

```js
const list = await redis.keys('item:*')
```

So far, so good.