---
title: How to exclude draft markdown post in Eleventy 11ty project
date: 2024-09-01 06:49:00 +0100
---





To exclude draft Markdown posts in an Eleventy (11ty) project, follow these steps:

### Step 1: Modify the Eleventy Configuration

In your `.eleventy.js` file, add this snippet of code:

```js
eleventyConfig.addCollection("all", function(collectionApi) {
  return collectionApi.getAll().filter(function(item) {
    return !item.data.draft || !isProduction;
  });
});
```

- This configuration checks each item's front matter for the `draft` flag.
- If `draft: true` is set and `isProduction` is true (indicating a production environment), the item will be excluded from the "all" collection.
- This is particularly useful for sitemaps or any other part of your site that shouldn't include drafts.

Markdown files with `draft` flag still are not excluded from other collections, the one defined by the `tags` property in frontmatter.



### Step 2: Mark Drafts in Markdown

In your Markdown files, you can mark posts as drafts by adding a `draft` flag in the front matter:

```markdown
---
draft: true
---
```

### Step 3: Handle Collections Automatically Created by Tags

Collections in Eleventy are automatically created based on tags, so you have two options:

**Adapt the Filter Snippet for Each Collection**: You could modify the above filter snippet to apply to each specific collection by adjusting the tag-based collections in your `.eleventy.js` configuration, such as:

```js
eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md");
});
```



**Comment Out Tags in Front Matter**: Alternatively, you can comment out the `tags` field in the front matter of draft posts:

```markdown
---
# tags: posts
draft: true
---
```

This approach ensures that the post is excluded from both the "all" collection and other collections based on tags.