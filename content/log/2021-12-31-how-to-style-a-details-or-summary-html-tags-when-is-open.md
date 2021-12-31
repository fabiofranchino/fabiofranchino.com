---
title: How to style a Details or Summary HTML tags when is open
date: 2021-12-31 11:37:00 +0100
---



Suppose this HTML markup:

```html
<details>
	<summary>Title</summary>
  <p>
    Content
  </p>
</details>
```

Here the CSS to style the summary when `details` is open by the user:

```css
details[open] summary{
  background:red;
}
```

