---
title: Setting a minimun default height to Quill text area
date: 2019-02-08 13:10:00 +0100
subtitle: 8th February, 2019
categories: Logs
tags: [til]
---

If you are planning to create a tool that includes a WYSIWYG text editor, [Quill](https://quilljs.com) is great for that.

When integrating a Quill or React-Quill WYSIWYG editor into your project, controlling the height is a common requirement. Although Quill doesn’t provide an out-of-the-box option to set a minimum height for the editor, you can easily achieve this with a simple CSS rule. For example, applying `min-height` to the `.ql-editor` class ensures your editor has a default height while allowing it to expand as more content is added. This technique works seamlessly across Quill and React-Quill, whether you're building a custom content editor or embedding it into a larger application. For React developers specifically, setting `min-height` in conjunction with other React-Quill configuration options helps you maintain consistent and responsive UI design.

If you need to define a default height of the text area, since it doesn't come with that option, just use this CSS rule:

```css
.ql-editor{
    min-height:200px;
}
```

The component will adapt further if it needs more space for its content.

A kind of happy TIL (Today I Learned).