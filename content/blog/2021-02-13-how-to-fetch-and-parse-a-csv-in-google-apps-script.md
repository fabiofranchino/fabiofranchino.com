---
title: How to fetch and parse a CSV in Google Apps Script
date: 2021-02-13 07:00:00 +0100
subtitle: 13th February, 2021
style: blue
cover: ../../gscript.png
categories: Tutorials
tags: [tutorial, gscript, csv, fetch]
---

Google Apps Script allows to interact, among other things, with Google Drive using javascript code.

One of the main reason doing so is because we may want to use external data source for some purpose.

Let's say, we have a CSV file that we want to read and use to create a list of folders, one for each row in the CSV file. Here the script:

```js
function myFunc(){
  var res = UrlFetchApp.fetch('http://www.example.com/my.csv')
  var csvraw = res.getContentText()
  var csv = Utilities.parseCsv(csvraw)
}
```

The above snippet fetches an external CSV file converting the response into a proper javascript array using an internal utility. 

Assuming the CSV files is something like:

```txt
name, age, color
john, 40, red
tom, 54, yellow
```

The `csv` variable will be an array of array such as:

```js
[
  [name, age, color],
	[john, 40, red],
  [tom, 54, yellow]
]
```

Now, we can iterate over it to create our folders, using the first property, the `name`, as folder name:

```js
function myFunc(){
  // fetch
  var res = UrlFetchApp.fetch('http://www.example.com/my.csv')
  var csvraw = res.getContentText()
  
  // convert
  var csv = Utilities.parseCsv(csvraw)
  
  // let's create a folder container
  var sub = DriveApp.createFolder('temp')
  
  // iterate over the array
  csv.forEach(row => {
    sub.createFolder(row[0])
  })
}
```

Google will ask for two permissions the first time you run the script, for the Drive access and for the external Network request as well.