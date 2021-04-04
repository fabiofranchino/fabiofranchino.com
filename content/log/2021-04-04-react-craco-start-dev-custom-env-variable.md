---
title: React CRACO start dev custom env variable
date: 2021-04-04 04:58:00 +0100
---



If you need to start a development session with CRACO or CRA, so you can have some business logic based on it, here the tip found [here](https://github.com/gsoft-inc/craco/issues/116):

```shell
"scripts":
	"start": "craco start",
	"mock": "REACT_APP_MOCK=true craco start"
	...
```

Then, the `process.env.REACT_APP_MOCK` will be available in your code.

