---
title: Set Vite to compile for subfolder deploy
date: 2023-11-06 13:48:00 +0100
---



If you need to deploy your Vue or React project on a sub-folder, you need to add a little configuration option in your Vite config file:

```js
export default defineConfig({
  base:'./',
});
```

The above config makes relative the app dependencies in the HTML file, thus, it's going to work on server in sub folder.