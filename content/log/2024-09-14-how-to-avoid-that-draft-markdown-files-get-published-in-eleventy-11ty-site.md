---
title: How to avoid that draft markdown files get published in eleventy 11ty site
date: 2024-09-14 14:48:00 +0100
---





To prevent draft Markdown files from being published on an Eleventy (11ty) site, you can easily control this by adding a specific setting in the frontmatter of your Markdown files.

Simply include this in the frontmatter of the draft files:

```markdown
permalink: false
```

Simple as that!