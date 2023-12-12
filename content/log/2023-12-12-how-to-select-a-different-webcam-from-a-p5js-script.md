---
title: How to select a different webcam from a P5js script
date: 2023-12-12 05:06:00 +0100
---



Here the snippet to identify the webcam ID and set it in the camera init:

```js
navigator.mediaDevices.enumerateDevices().then(function (devices) {
    for(var i = 0; i < devices.length; i ++){
        var device = devices[i];
        if (device.kind === 'videoinput') {
          console.log(device.deviceId) // 425a5c8c198030ce...
        }
    };
});
  
var video

function setup(){
  video = createCapture({
      video:{
        deviceId: '425a5c8c198030ce...'
      }
  })
}
```

