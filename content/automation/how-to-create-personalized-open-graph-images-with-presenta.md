---
date: 2021-11-21
title: How to create personalized open graph images with PRESENTA Platform
category: automation
cover: tut1.png
---

**Open Graph images** are those that appear when someone share a website URL on social platforms, such as Twitter, Facebook or Linkedin:

![](/assets/automation/how-to-create-personalized-open-graph-images/card-1.png)

It works thanks to some specific HTML tags that need to be included in the `HEAD` tag, such as:

```html
<meta property="og:image" content="https://mywebsite.net/assets/opengraph/card.jpg"/>
<meta property="og:title" content="Your Title"/>
<meta property="og:description" content="A full description of the page."/>
```

The `https://mywebsite.net/assets/opengraph/card.jpg` image is then loaded in the sharing box to provide a preview of the content to the user.

## The problem: the same image

A typical issue on many websites is that the image is always the same no matter the URL. Some systems (such as Wordpress) allow to customize the image by picking a specific one from the assets library. 

![](/assets/automation/how-to-create-personalized-open-graph-images-with-presenta/card-2.png)

It's a first step that allows to customize the Open Graph image to  a basic level. If you want to use a more **interesting** and **informative** graphic composition, you have to create it manually for each website page:

![](/assets/automation/how-to-create-personalized-open-graph-images-with-presenta/card-3.png)

BTW, the above image is not created manually, they use an **automatic software pipeline!**

## The solution: generate on-the-fly a personalized, data-driven, image

It is possible to solve this problem by using a software pipeline that generates the image **on-the-fly** when it's requested by the social crawlers.

The following example is generated using fresh data from this [URL](https://www.fabiofranchino.com/blog/get-colors-from-images-in-bulk-with-node-js/):

![](/assets/automation/how-to-create-personalized-open-graph-images-with-presenta/card-4.png)

You may note that the image contains relevant text of the article.

## Bring dynamic data-driven images to your website!

Here the step-by-step to integrate a dynamic image generation pipeline into your website using [PRESENTA Platform](https://www.presenta.cc/):

### Choose a template or design your own with the PRESENTA Visual Editor

![](/assets/automation/how-to-create-personalized-open-graph-images-with-presenta/tut1.png)

### Define the dynamic fields

![](/assets/automation/how-to-create-personalized-open-graph-images-with-presenta/tut2.png)

### Fill the fields for testing purpose

![](/assets/automation/how-to-create-personalized-open-graph-images/tut3b.png)

### Test the result

![](/assets/automation/how-to-create-personalized-open-graph-images-with-presenta/tut4b.png)

### Integrate into your website

Grab the URL provided by the interface, complete it with the required parameters and put it into your `HEAD` tag:

```html
<meta property="og:image" content="https://app.presenta.cc/f/url/<TEMPLATE_ID>?title=My Special Recipe"/>
```

### That's all!

Now, everytime a Social Network Crawler asks for the Open Graph image to your website, **PRESENTA API** will reply with a fresh generated image.
