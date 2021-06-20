---
title: Open Chrome without CORS on Mac
date: 2021-06-20 18:08:00 +0100
---



Here the quickest way to deal with CORS when developing on localhost:

```shell
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
```

