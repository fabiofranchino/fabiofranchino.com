---
title: How to remove hashing in Vite built file names
date: 2022-12-15 12:29:00 +0100
---



After [some research](https://github.com/vitejs/vite/issues/378), here the configuration that you need to add in your `vite.config.js` file in order to remove hashing in the built `js` and `css` file:

```js
export default defineConfig({
  ...
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
})
```



So, instead of:

```shell
dist/index-shegty45.js
dist/index-bfjgney5.css
```

You'll get:

```shell
dist/index.js
dist/index.css
```

This is quite handy if your dependencies need the same filename across builds.