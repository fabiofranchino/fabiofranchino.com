---
title: How to remove hashing in Vite built file names
date: 2022-12-15 12:29:00 +0100
---



If you’re using Vite and want to remove the hash from the filenames during the build process, you can achieve this by configuring the `rollupOptions` in your `vite.config.js`. By specifying custom `entryFileNames`, `chunkFileNames`, and `assetFileNames`, you can ensure that the output files maintain consistent names like `index.js` and `index.css` without hashes. 

This is particularly useful when your deployment process or other tools depend on static filenames that remain the same across builds. Removing hashes simplifies integration with systems that expect predictable file paths, making it easier to manage cache and updates. This setup is common when transitioning from hashed to non-hashed builds or when managing legacy systems with specific filename requirements.

Now, here how to remove hashing in Vite built file names.

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