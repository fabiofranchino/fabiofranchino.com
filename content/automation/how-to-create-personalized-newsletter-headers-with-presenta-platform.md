---
date: 2021-11-14
title: How to create personalized newsletter images with PRESENTA
category: automation
cover: comp.jpg
---

<mark>**Personalized newsletters**</mark> are a key aspect in any **Marketing Automation** strategy. 

With [PRESENTA](https://www.presenta.cc) you can <mark>generate thousands</mark> of personalized images automatically, ready to be included as newsletter header for in your campaigns.

![](/assets/automation/how-to-create-personalized-newsletter-headers-with-presenta-platform/comp.jpg)

In this walk-through we're learning how to configure a **Data-Driven Template** to generate thousand of personalized and unique images, one for each of your recipient.

## Design the template

You can choose a pre-built template and customize it further or start from scratch and create your very own template with the visual editor, no code is required:

![](/assets/automation/how-to-create-personalized-newsletter-headers-with-presenta-platform/design.gif)

## Set the dynamic properties

We need to tell the software which are the dynamic properties. 
Set a meaningful and unique name to each object we want to be dynamic. 
It can be text content, image url, shape color or even a QRCode url as well:

![](/assets/automation/how-to-create-personalized-newsletter-headers-with-presenta-platform/set.gif)

## Publish the template

Publish the template and grab the URL to test it with its default parameters:

![](/assets/automation/how-to-create-personalized-newsletter-headers-with-presenta-platform/publish.gif)



## Test the parameters

Now it's time to test the parameters to see how it looks with different content:

![](/assets/automation/how-to-create-personalized-newsletter-headers-with-presenta-platform/test.gif)

You can test right in your browser using [this URL](https://app.presenta.cc/f/render/zGywhb2oJn:3hIW3WhkK):

```html
https://app.presenta.cc/f/render/zGywhb2oJn:3hIW3WhkK
```

and adding this portion [at the end](https://app.presenta.cc/f/render/zGywhb2oJn:3hIW3WhkK?name=SomeName) of it (you can change the **SomeName** value):

```html
?name=Some Name
```

and also [this one](https://app.presenta.cc/f/render/zGywhb2oJn:3hIW3WhkK?name=SomeName&surname=SomeSurname) too:

```html
&surname=Some Surname
```



## Integrate in your Newsletter software

Every Newsletter software allows to add little snippets of HTML code. Usually adding the following HTML code is enough to include the dynamic image:

```html
<img src="<THE-PRESENTA-TEMPLATE-URL-WITH-PARAMS" />
```

### MailChimp integration

![](/assets/automation/how-to-create-personalized-newsletter-headers-with-presenta-platform/mailchimp.jpg)

Here the HTML snippet that include the image with the merged tags of MailChimp (dimensions may change depending of the template):

```html
<div class="mcnTextContent">
  <img class="mcnImage" style="width:100%" 
  src="https://app.presenta.cc/f/render/zGywhb2oJn:3hIW3WhkK
  ?name=*|FNAME|*&surname=*|LNAME|*" />
</div>
```

### MailJet integration

![](/assets/automation/how-to-create-personalized-newsletter-headers-with-presenta-platform/mailjet.jpg)

![](/assets/automation/how-to-create-personalized-newsletter-headers-with-presenta-platform/mailjet2.jpg)

Here the HTML snippet that include the image with the merged tags of MailJet (dimensions may change depending of the template):

```html
<img style="width:600px;height:300px;"  
src="https://app.presenta.cc/f/render/zGywhb2oJn:3hIW3WhkK?name=
[[data:firstname]]&surname=[[data:name]]" />
```

## Conclusion

That's all folks! Hope this little walk-through has been useful for your next **Marketing Automation Campaign** with **Data-Driven images**.