---
title: Fetch icons as SVG in bulk from a Figma document using API and Nodejs
date: 2021-10-03 09:31:00 +0100
---



If you're managing the icons of a project in Figma as components and want to export them all in bulk as SVG files, here the script to do that.

[Check this post](/log/how-to-fetch-a-figma-document-using-their-api-in-nodejs) about how to configure properly the document fetch first.

Then, assuming you have all the icons defined as components in Figma, we need to collect all their IDs:

```js
const ids = Object.keys(file.components).toString()
```

If you have other components in your Figma document, you have to add further logic in order to get only the relevant components for your export, filtering out what you want to exclude.

Now the main script using an async function:

```js
;(async () => {

    const res = await axios(`https://api.figma.com/v1/images/${docId}/?ids=${ids}&format=svg`, options)
    
    // this is the list of the SVG URL
    const urls = res.data.images
	
    // prepare and wait for all the SVG sources fetch:
    const allSrc = await Promise.all(urls.map(d => axios(d)))
    
		allSrc.forEach((d, i) => {
        console.log(d.data) // each SVG source
    })
})()
```

That's all folks!