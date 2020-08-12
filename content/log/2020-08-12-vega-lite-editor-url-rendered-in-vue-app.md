---
title: Vega-Lite editor URL rendered in Vue app
date: 2020-08-12 05:15:00 +0100
---



Here the solution to use a regular Vega-Lite editor URL in a Vue app.

Consider this URL that contains all the information of the chart:

```js
var url = 'https://vega.github.io/editor/#/url/vega-lite/N4IgJAzgxgFgpgWwIYgFwhgF0wBwqgegIDc4BzJAOjIEtMYBXAI0poHsDp5kTykBaADZ04JACyUAVhDYA7EABoQAEzjQATjRyZ289AEEABBBoIcguIaZJ1h2DcyGA7nRiHETOMtXLDypJhUiioBKKigxEiCDGpoANqgYSD6wUxoAEwAHAC+ColoIABCqWgArKW5+egAwiWoYgDMlSBJACJ1AJwAjM1JAKJ1mT15LQUAYnWlTSNJAOJ1XR29BQASgwDsy+gAkpPp2QC6uSDI6gDWBdbqwXCyUGzKNLJkaKAAHq8gAGY0cILKBRQSkwAE8cHACrI2AgnlFgkg3jQIJ9BEhPIJ9M8LGgAAzZY4gz4-P4A9BpYFgiHoACODCQsh0gR0pBA+OyQA'
```

In the Vue app, using the modules `lz-string` and `vega-embed`, we can process the URL and render the chart into the app:

```js
let frag = url.replace('https://vega.github.io/editor/#/url/vega-lite/', '')
let spec = LZString.decompressFromEncodedURIComponent(frag)
let specJson = JSON.parse(spec)
await Embed(this.$refs.viz, specJson)
```

Where `this.$refs.viz` is the wrapper in the Vue template to use for the Vega chart.