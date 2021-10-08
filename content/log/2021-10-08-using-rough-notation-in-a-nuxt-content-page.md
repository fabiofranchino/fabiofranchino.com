---
title: Using Rough-Notation in a nuxt-content page
date: 2021-10-08 17:38:00 +0100
---

 

If you need to instantiate a rough-notation library in a Nuxt page, here the code:

```vue
<template>
    <div>
        <nuxt-content :document="page" />
    </div>
</template>



<script>
import { annotate, annotationGroup } from 'rough-notation'

export default {
	mounted(){
    setTimeout(() => {
      
      const elems = this.$el.querySelectorAll('.rough')
      const rArr = []
      
      const arr = [].slice.call(elems).forEach(e => {
        rArr.push(annotate(e))
      })
      
      const g = annotationGroup(rArr)
      g.show()
      
    }, 100)
  },
}
</script>
```

