---
title: How to find a process by port used
date: 2022-02-05 15:17:00 +0100
---



Here the magic:

```shell
lsof -t:3132
```

It will print the `PID`, then you can kill it with:

```shell
kill `PID`
```

