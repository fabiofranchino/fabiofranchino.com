---
title: How to disable trailing slash in Netlify Redirect
date: 2022-01-09 08:34:00 +0100
---

 

I found the solution [here](https://support.gatsbyjs.com/hc/en-us/articles/360056349113-Remove-trailing-slash-in-Netlify-URLs), which is:

- Check 'Disable asset optimization'
- Disable Pretty URLs
- Enable the remainder of the options

It works!