---
title: How to prepend a base URL to any images in a Eleventy 11ty website
date: 2024-10-16 12:55:00 +0100
---





To speed up your website by using a CDN for your images, you can easily integrate it by prepending a base URL to all your image paths. Here's a quick guide on how to configure Eleventy (11ty) to handle that.

### Why Use a CDN for Images?

CDNs (Content Delivery Networks) help reduce load times by distributing your content globally, ensuring that users download assets like images from the server closest to them. This is especially useful for images, as they tend to be larger and load slower without optimization.

### Configuring 11ty for a CDN

To prepend a base URL to image paths in your Eleventy (11ty) markdown pages, you can use Eleventy's built-in transforms or shortcodes. One approach is to handle this during the build process by adding a custom transform to modify the image paths. Here's how you can do it:

### 1. Add a Custom Transform in `.eleventy.js`

You can use Eleventy's `addTransform` method to prepend the base URL to all image paths during the build.

```js
const { JSDOM } = require("jsdom");

module.exports = function (eleventyConfig) {
  // Define your base URL
  const BASE_URL = "https://your-base-url.com";

  // Add a transform to modify image paths
  eleventyConfig.addTransform("prependBaseUrl", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      let dom = new JSDOM(content);
      let document = dom.window.document;

      // Select all images in the document
      let images = document.querySelectorAll("img");

      // Prepend the base URL to the src attribute of each image
      images.forEach(image => {
        let src = image.getAttribute("src");
        if (src.startsWith("/assets/")) {
          image.setAttribute("src", BASE_URL + src);
        }
      });

      return dom.serialize(); // Return the modified content
    }
    return content; // Return the content unchanged if not an HTML file
  });
};
```

### 2. Use in Markdown Files

If your markdown files contain relative paths like `/assets/blog/image.jpg`, the transform will automatically prepend the base URL during the build, resulting in paths like `https://your-base-url.com/assets/blog/image.jpg` in the output HTML.

### 3. Test the Build

Run your Eleventy build:

```shell
npx @11ty/eleventy
```

This will process all your HTML files and prepend the base URL to the image paths based on the logic in the transform.