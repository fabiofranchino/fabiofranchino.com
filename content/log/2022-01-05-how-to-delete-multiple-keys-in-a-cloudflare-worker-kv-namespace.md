---
title: How to delete multiple keys in a Cloudflare Worker KV namespace
date: 2022-01-05 11:13:00 +0100
---



The example uses the `prefix` capability to retrieve a list of keys that begin with a given prefix.

Here the snippet in javascript using `axios`:

```js
const baseUrl = 'https://api.cloudflare.com/client/v4/accounts/<account-id>/storage/kv/namespaces/<namespace-id>'

const prefix = 'my-prefix'


const res1 = await axios({
  url: baseUrl + '/keys?limit=1000&&prefix=' + prefix,
  headers: {
    'Content-Type': 'application/json',
    'X-Auth-Email': '<account-email>',
    'X-Auth-Key': '<account-api-key>'
  }
})

const dt = res1.data

if (dt.success && dt.result.length > 0) {
  const paths = dt.result.map(d => d.name)

  const res2 = await axios({
    method: 'delete',
    url: baseUrl + '/bulk',
    data: paths,
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Email': '<account-email>',
      'X-Auth-Key': '<account-api-key>'
    }
  })
```

