---
title: How to make a Meme-like text style in HTML and CSS
date: 2022-12-10 07:00:00 +0100
subtitle: 10th December, 2022
style: blue
cover: cover.png
categories: Tutorials
tags: [tutorial, meme, css, html, style]
---



We all love meme. They all use the same text style: 

>  white text with an heavy black border.

There's a reason: to ease text readability on top of any kind of backgrounds.

There are two fundamental ways to create such style in HTML and CSS. The ability to add a border (or stroke) around the text wasn't planned in the early days of CSS. 

## Using Text Shadow

The `text-shadow` is a CSS property that adds a shadow to text. Here the definition:

> The **`text-shadow`** CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its [`decorations`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration). Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.

It is not really a border or stroke property, nevertheless, we can use it to emulate a border by using the following trick where each line is a segment for each side and the blur is disabled:

```css
text-shadow:4px 4px 0 #000,
            -4px -4px 0 #000,
            4px -4px 0 #000,
            -4px 4px 0 #000,
            0px 4px 0 #000,
            4px 0px 0 #000,
            0px -4px 0 #000,
            -4px 0px 0 #000;
```

![](/assets/blog/how-to-make-a-meme-like-text-style-in-html-and-css/text-shadow.png)

It's good enough but there are a couple of issues:

- Configuration is a bit annoying since you have to change many values at ones
- Some rendering artefacts are present depending of the text glyph and font

While the first issue can be solved using CSS variables:

```css
body{
	--color: #000;
  --amountPos: 7px;
  --amountNeg: -7px;
}

text-shadow:var(--amountPos) var(--amountPos) 0 var(--color),
            var(--amountNeg) var(--amountNeg) 0 var(--color),
            var(--amountPos) var(--amountNeg) 0 var(--color),
            var(--amountNeg) var(--amountPos) 0 var(--color),
            0px var(--amountPos) 0 var(--color),
            var(--amountPos) 0px 0 var(--color),
            0px var(--amountNeg) 0 var(--color),
            var(--amountNeg) 0px 0 var(--color);
```

The second one is not solvable.

Here an example on CodePen: https://codepen.io/abusedmedia/pen/zYaboYY



## Using Text Stroke

Nowadays we can use a modern property that is specifically meant to style the stroke of an HTML text using CSS. Indeed, the property is `text-stroke`:

> The **`-webkit-text-stroke`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property specifies the [width](https://developer.mozilla.org/en-US/docs/Web/CSS/length) and [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) of strokes for text characters. This is a shorthand property for the longhand properties [`-webkit-text-stroke-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-stroke-width) and [`-webkit-text-stroke-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-stroke-color).

It is still behind the `-webkit` prefix but it's pretty compatible across modern browsers:

```css
-webkit-text-stroke: 5px black;
-webkit-text-fill-color: white;
```

![](/assets/blog/how-to-make-a-meme-like-text-style-in-html-and-css/text-border-low.png)

As you can see, it's pretty straightforward and no trick involved here. You define the size and color of the stroke.

While it's easy to configure and it hasn't any rendering artefact, there's still a big issue if we want to create a meme-like style with it:

![](/assets/blog/how-to-make-a-meme-like-text-style-in-html-and-css/text-border-wrong.png)

By using a big border size value, the stroke is drawn within the text shape producing the above result, which is not what we want.

A solution is to add an additional text element in the markup:

```html
<div class="meme-text">
  <h1>Hello Meme!</h1>
  <h1>Hello Meme!</h1>
</div>
```

And handle the style accordingly:

```css
.meme-text{
  position:relative;
}
.meme-text h1{
  position:absolute;
  font-size: 100px;
  font-family: impact;
}
.meme-text h1:first-child{
  -webkit-text-stroke: 15px black;
  -webkit-text-fill-color: white;
}
.meme-text h1:last-child{
  color:white;
}
```

![](/assets/blog/how-to-make-a-meme-like-text-style-in-html-and-css/text-border.png)

Of course the above solution is a no-go in some situations where you cannot customise the markup (such as text that comes from CMS).

Here the CodePen example: https://codepen.io/abusedmedia/pen/NWzJRmM

## The trade-off

Both solutions are not perfect.

The  **Text Shadow** one is more compatible and it doesn't affect the markup but the downside are possible artefacts.

The **Text Stroke** solution instead, is perfectly rendered but with the cost of creating a specific markup for it.

In [PRESENTA](https://www.presenta.cc/) we opted for the first one for now to allow easier configuration.