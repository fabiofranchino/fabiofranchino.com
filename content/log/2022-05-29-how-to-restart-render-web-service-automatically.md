---
title: How to restart Render web service automatically
date: 2022-05-29 13:59:00 +0100
---



If you have a web service hosted on Render.com and previously you were on Heroku.com, you should be aware that the former won't restart the service each day as Heroku is used to do.

Depending on each situation, to me restarting sometime the service is a good practice to keep the process healthy.

Thankfully, Render.com provides an API for each service, thus, restarting it programmatically is just an API call away.

Here my solution: I use a Netlify scheduled lambda function that calls the Render.com API to restart my service.

This is the code of the Netlify scheduled function that runs every day and restart my Render.com service:

```js
const axios = require('axios')
const { schedule } = require('@netlify/functions')

const handler = async (event, context) => {
    const res = await axios(`https://api.render.com/v1/services/${process.env.RENDER_SERVICE_ID}/deploys`, {
        method: 'post',    
        headers:{
            'Accept': ' application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + process.env.RENDER_SERVICE_TOKEN
        },
        data: {}
    })
    const src = res.data
  
    return {
      statusCode: 200,
      body: JSON.stringify(src)
    }
    
}

exports.handler = schedule("@daily", handler)
```

