---
title: How to allocate more memory in 11ty eleventy website
date: 2024-01-13 05:52:00 +0100
---



If you need to build a quite big website with 11ty eleventy builder, you might face this stack error of memory:

```shell
9:32:41 AM: <--- Last few GCs --->
9:32:41 AM: [3870:0x5de8c10]   130560 ms: Mark-sweep 2020.3 (2089.4) -> 2011.7 (2095.9) MB, 811.6 / 0.0 ms  (average mu = 0.644, current mu = 0.090) allocation failure scavenge might not succeed
9:32:41 AM: [3870:0x5de8c10]   131415 ms: Mark-sweep 2027.6 (2095.9) -> 2019.0 (2103.6) MB, 779.6 / 0.0 ms 
...
```

The solution is to allocate more memory to your node process using the `--max-old-space-size` flag.

So, here the steps if you're using the default command `npx @11ty/eleventy`:

- Install explicitly 11ty eleventy with `npm i @11ty/eleventy -D`
- Change the build command with one of the following:

In a regular repo:

```shell
node --max-old-space-size=4096 ./node_modules/@11ty/eleventy/cmd.js --quiet
```

In a monorepo:

```shell
node --max-old-space-size=4096 ../../node_modules/@11ty/eleventy/cmd.js --quiet
```

So, adapt the path to the 11ty eleventy path and also the memory number `4096` with your preference.

