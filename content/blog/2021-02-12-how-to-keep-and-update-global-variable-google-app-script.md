---
title: How to keep and update a global variable in Google App Script
date: 2021-02-12 07:00:00 +0100
subtitle: 12th February, 2021
style: blue
cover: ../../gscript.png
categories: Tutorials
tags: [tutorial, gscript, google, app]
---

In a Google App Script, if you want to keep a value across many function executions, there's a service fo that: **PropertiesService**.

The **PropertiesService** allows to set key/value pairs that will be persistent over time.

There are three type of PropertiesService: 

- document
- script 
- user

The difference is in the permission the service allows according to the context.

## Increment a counter

In my exploration, I want to have a counter that increments each time the function get called.

```js
var scriptPrp = PropertiesService.getScriptProperties()
scriptPrp.setProperty('counter', 0)

function myFunc(){
  Logger.log('go!')
}
```

Now, run just one time the script in order to set the variable, it's like an init, then, modify the code this way:

```js
var scriptPrp = PropertiesService.getScriptProperties()
// scriptPrp.setProperty('counter', 0)
// comment the above line otherwise it's be reset each time

function myFunc(){
  var counter = scriptPrp.getProperty('counter')
  counter++
  scriptPrp.setProperty('counter', counter)
}
```

As you can see, the `counter` variable is red and updated on each function call.

## Let's use the counter to name folders

Suppose you want to create a Drive folder on each function run, giving a incremental name, here the script based on the previous exploration:

```js
var scriptPrp = PropertiesService.getScriptProperties()

function myFunc(){
  
  var counter = scriptPrp.getProperty('counter')
  counter++
  scriptPrp.setProperty('counter', counter)
  
  var folderName = 'myFolder' + counter
  var newfolder = DriveApp.createFolder(folderName)
}
```

Now, on each run a folder il created named such as: `myFolder1`, `myFolder2` and so forth.

