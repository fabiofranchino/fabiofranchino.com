---
title: How to render in eleventy 11ty njk template a default value if null value
date: 2024-08-31 13:26:00 +0100
---





In Eleventy (11ty) using the Nunjucks (njk) templating engine, you can use the `default` filter to provide a fallback value if a variable is `null`, `undefined`, or an empty string. Here's how you can do it:

```html
<title>{{ title | default(site.title) }}</title>
```

In this example, if `title` is not set or is `null`, it will fall back to using `site.title`. This can be particularly useful when rendering dynamic content where certain data might be missing or optional.

This approach should help streamline handling default values in your templates.



