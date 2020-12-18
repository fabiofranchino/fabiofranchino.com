---
title: Vue.js with CLI and ICP Electron
date: 2020-12-18 07:42:00 +0100
---

If you want to use the `ipc` message of Electron from within a Vue.js project, here the way learned from [this](https://stackoverflow.com/questions/56498761/electron-ipcrenderer-from-vue-js-single-file-component) [threads](https://github.com/electron/electron/issues/9920):

```html
<script>
const { ipcRenderer } = window.require('electron')

export default {
  methods:{
    send(){
      ipcRenderer.invoke('perform-action', {a:true})
    }
  }
}
</script>
```

