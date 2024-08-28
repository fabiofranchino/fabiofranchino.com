---
title: How to enable the HTML minifier to an eleventy 11ty project
date: 2024-08-26 08:57:00 +0100
---





To enable HTML minification in your Eleventy (11ty) project, follow these steps:

1. **Install the `html-minifier` package**:

```shell
npm install --save-dev html-minifier
```

2. **Modify the `eleventy.config.js` file** to include the minification logic. First, require the `html-minifier` package:

```js
const htmlmin = require("html-minifier");
```

3. **Add a transform to minify HTML files**. The code should look like this:

```js
module.exports = function(eleventyConfig) {
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });
};
```

This code checks if the output path is an HTML file, and if so, it minifies the content using `html-minifier` with the options to use a short doctype, remove comments, and collapse whitespace.

By following these steps, HTML files generated by your 11ty project will be automatically minified when you build the site.