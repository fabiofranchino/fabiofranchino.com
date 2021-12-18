---
title: How to use ChartJs in VueJs component using a ES6 bundler
date: 2021-12-18 12:13:00 +0100
---



Here a basic Vue.js component that renders a Chart.js

```vue
<template>
  <canvas ref="cnv"></canvas>
</template>


<script>
import Chart from 'chart.js/auto'

export default {
  mounted(){
    
    const config = {
      type: 'line',
      data: {
        labels: ['A', 'B', 'C'],
        datasets: [{
          label: 'Chart',
          data: [10, 20, 30]
        }]
      }
    }

    new Chart(this.$refs.cnv, config)
  }
}
</script>
```

