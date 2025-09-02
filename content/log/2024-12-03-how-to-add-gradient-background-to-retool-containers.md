---
title: "How to add gradient background to Retool containers"
date: 2024-12-03 07:04:00 +0100
subtitle: 3rd December, 2024
description: ""
categories: Logs
tags: [log]
layout: "layouts/blog.njk"
permalink: "/{{ page.filePathStem }}/"
---



Here's a quick tip to set a gradient color for the background of a Retool container:

1. **Detach the Style from the Token**: Before customizing, ensure the style isn't tied to any existing token.
2. **Add the Gradient in the Style Panel**: Use CSS syntax in the background style panel, wrapped in double curly brackets.

![](/assets/blog/how-to-add-gradient-background-to-retool-containers/00.png)

Example for a linear gradient:

```css
{ { "linear-gradient(45deg, red, blue)" } }
```

### Examples of Gradient Styles:

#### Linear Gradient:

![Linear Gradient](/assets/blog/how-to-add-gradient-background-to-retool-containers/01.png)

#### Radial Gradient:

![Radial Gradient](/assets/blog/how-to-add-gradient-background-to-retool-containers/02.png)

#### With Usable Colors:

![Usable Colors](/assets/blog/how-to-add-gradient-background-to-retool-containers/03.png)

Customize to enhance your interface with appealing gradient backgrounds!



