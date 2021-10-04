---
title: Netlify Functions and a better base URL for them
date: 2021-10-04 03:22:00 +0100
---



This is my setup for Netlify Functions using a redirect wildcard to get a nicer URL:

```toml
[build]
  publish = "dist"
  functions = "src/functions"

[[redirects]]
  from = "/f/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

So, instead of calling:

- www.example.com/.netlify/functions/hello

it's a much better:

-  www.example.com/f/hello

