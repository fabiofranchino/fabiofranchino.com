---
title: How to upload images to S3 with Node.js
date: 2020-07-08 07:00:00 +0100
cover: cover.png
categories: Tutorials
tags: [tutorial, s3, node, upload]
draft: true
---

Here an handy script to upload a folder of images to S3 using Node.js.

First, the dependencies, install the following packages:

AWS and Dotenv with:

```shell
npm install aws-sdk dotenv
```

Then, create a `.env` file putting your AWS credentials, such as:

```shell
AWS_ACCESS_KEY_ID=YOURKEYID
AWS_SECRET_ACCESS_KEY=YOURSECRETKEY
S3_BUCKET_NAME=yourbucketname
S3_REGION=eu-central-1
```

Finally, here the `uploadToS3.js` script with some comments along the lines:

```javascript
require('dotenv').config()

const fs = require('fs')
const aws = require('aws-sdk')

aws.config.region = process.env.S3_REGION
const S3_BUCKET = process.env.S3_BUCKET_NAME

let index = 0
let imgList = []

const upload = () => {
  const pathName = imgList[index]

  const s3 = new aws.S3()

  console.log('uploading', pathName)

  const buffer = fs.readFileSync('dl/' + filename, null)

  const s3Params = {
    Bucket: S3_BUCKET,
    Key: pathName,
    Expires: 60 * 15,
    Body: buffer,
    ContentType: 'image/jpg',
    ACL: 'public-read'
  }

  s3.putObject(s3Params, (err, data) => {
    if (err) throw err
    index++
    if (index >= imgList.length) {
      cb()
    } else {
      upload(cb)
    }
  })
}

module.exports = (cb) => {
  imgList = fs.readdirSync('dl')
  upload(cb)
}

```

The above script can be used with:

```javascript
const uploadImages = require('./uploadToS3.js')

uploadImages(() => {
  console.log('done!')
})

```

