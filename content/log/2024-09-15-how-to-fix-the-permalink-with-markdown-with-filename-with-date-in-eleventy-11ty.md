---
title: How to fix the permalink with markdown with filename with date in eleventy 11ty
date: 2024-09-15 18:45:00 +0100
---



To fix the permalink structure in Eleventy (11ty) to include the date in the filename while using Markdown, you can modify the permalink in the front matter with the following code:

```markdown
permalink: "/{{ page.filePathStem }}/"
```

This ensures that the permalink will follow the folder structure based on the date and filename, as the `filePathStem` variable contains the file's path without the extension, which can include the date if structured properly.

Make sure your file names include the date in the desired format, like `2024-09-15-post-title.md`. Eleventy will then use this pattern to generate the permalink, helping maintain consistency in your URLs without manually specifying each one.

For example, with a file named `2024-09-15-my-post.md`, the permalink would generate as `/my-post/`. This approach ensures Eleventy dynamically handles your URL structure based on your file names.