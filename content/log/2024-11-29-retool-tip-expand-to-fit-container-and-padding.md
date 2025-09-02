---
title: "Retool tip expand to fit container and padding"
date: 2024-11-29 07:04:00 +0100
subtitle: 29th November, 2024
description: ""
categories: Logs
tags: [log]
layout: "layouts/blog.njk"
permalink: "/{{ page.filePathStem }}/"
---

Retool added the option "expand content to fit" to containers.

It's neat since it allows creating a fully fluid layout that adapts nicely to any window size.

However, there’s a downside to this.

The option forces you into two constraints:

- Having a single component in the container
- Not having margin or padding

While we can manage having a single component, getting rid of padding might be an issue.

### Update: there's a way

We found a way to use the "expand content to fit" option in a container while preserving paddings and margins for its child. The trick is to add an additional container and:

- Set its layout to Stack.
- Set the width and height of the child component to Fill.

The effect is not visible in edit mode:

![](/assets/blog/retool-tip-expand-to-fit-container-and-padding/03.png)

but once in view mode, it works perfectly:

![](/assets/blog/retool-tip-expand-to-fit-container-and-padding/04.png)

This is why we didn't come up with this solution in the first instance, as it was not evident in edit mode.

Still, the CSS technique below remains relevant for more advanced layout operations.

### Let's work around this with a bit of CSS

You know, Retool is pretty much fully hackable.

You can add CSS to change some defaults.

In this case, we want to add padding to a container that doesn’t allow a padding setting—this happens when the "expand content to fit" option is enabled.

![](/assets/blog/retool-tip-expand-to-fit-container-and-padding/01.png)

Let’s suppose the container we want to fix is named `container1`.

To have fully functional padding on a container with the "expand-content-to-fit" option enabled, here’s the CSS you need to add in the CSS settings panel:

```css
[data-testid="RetoolGrid:container1"]{
  padding: 0 20px!important;
}
```

![](/assets/blog/retool-tip-expand-to-fit-container-and-padding/02.png)

Keep in mind that the component name need to be preserved, or just keep updated the CSS selector with the component name.

Here you can see the effect, with yellow highlighting the padding.

Happy hacking!
