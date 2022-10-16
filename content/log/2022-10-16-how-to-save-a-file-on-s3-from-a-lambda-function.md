---
title: How to save a file on S3 from a lambda function
date: 2022-10-16 07:42:00 +0100
---



Here the code I use when I need to save on Amazon AWS S3 service from within a lambda function. I generally use Netlify but it should be the same in other platforms as well.

```js
// save.js

const aws = require('aws-sdk')
aws.config.region = 'eu-west-3' // specify your region

module.exports = (buffer, file) => {
  return new Promise((resolve, reject) => {
    const s3 = new aws.S3({
      accessKeyId: process.env.FUNC_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.FUNC_AWS_SECRET_ACCESS_KEY
    })

    // you can change the following setting based on your AWS settings
    const s3Params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: file.url,
      Body: buffer,
      Expires: 60 * 2,
      ContentType: file.ct,
      ACL: 'public-read'
    }

    s3.putObject(s3Params, function (err, data) {
      if (err) reject(err)
      resolve(data)
    })
  })
}

```

Here how to use the above component:

```js
// index.js

const save = require('./save.js')

exports.handler = async (event, context) => {

  await save(JSON.stringify({hello:true}), { url: 'filename.json', ct: 'application/json' })

  return {
    statusCode: 200,
    body: 'OK'
  }
}

```



A note on the environment variable names:

The AWS environment variable need a different name because the AWS default one are reserved in Netlify functions, so instead of `AWS_ACCESS_KEY_ID` you can use `FUNC_AWS_ACCESS_KEY_ID` and so on.