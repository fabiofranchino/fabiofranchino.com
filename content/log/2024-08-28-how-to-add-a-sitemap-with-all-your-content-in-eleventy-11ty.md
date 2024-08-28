---
title: How to add a Sitemap with all your content in Eleventy 11ty
date: 2024-08-28 05:48:00 +0100
---



To add a sitemap with all your content in Eleventy (11ty), you can follow these steps:

1. **Create a `sitemap.md` file** in your project. This file will be used to generate the sitemap.
2. **Add the following front matter and shortcode to the `sitemap.md` file:**

```markdown
---
permalink: /sitemap.xml
layout: null
eleventyExcludeFromCollections: true
---

{% sitemap collections.all %}
```

### More details on the above template:

- **`permalink: /sitemap.xml`**: This sets the output path for the sitemap, so it will be accessible at `https://yourwebsite.com/sitemap.xml`.
- **`layout: null`**: No layout is applied to the sitemap file, ensuring it outputs only the raw XML.
- **`eleventyExcludeFromCollections: true`**: This prevents the sitemap file from being included in any Eleventy collections.
- **`{% sitemap collections.all %}`**: This shortcode generates the sitemap based on all content in your Eleventy collections.

By adding this file, Eleventy will automatically generate a sitemap for all your content, which is essential for SEO and helping search engines index your site.