---
title: SWR Stale While Revalidate
date: 2020-07-14 07:19:00 +0100
---



TIL the details of this concept popularized by the HTTP RFC 5861.

The principle is:

- Get the data from cache (stale status)
- Send a request to revalidate the data
- Reconcile the view with the new data

There's a [React component](https://github.com/vercel/swr) and also a [Vue component](https://github.com/Kong/swrv) for that behaviour.