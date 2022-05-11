---
title: How to save to file the content of a shell or bash
date: 2022-05-11 12:35:00 +0100
---



Here a little tip to save a long log in as terminal shell or bash:

```shell
your-command | tee file.txt
```

For example I want to save the list of all keys present in a CloudFlare KV namespace:

```shell
wrangler kv:key list --binding=my-kv | tee out.json
```

