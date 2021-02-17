---
title: Tableau Extensiona API adapter attempt
date: 2021-02-17 07:00:00 +0100
subtitle: 17th February, 2021
style: blue
cover: ../../tableau.png
categories: Tutorials
tags: [tutorial, tableau, extensions, api]
---

Creating a Tableau Extensions requires a [specific dev setup](/blog/tableau-extension-debug) because you need to **talk** with Tableau software during development.

For this reason I've' created an adapter in order to develop a Tableau extension without using Tableau for testing.

The reason was to speed up the development leaving the Tableau integration just for, precisely, the integration tests.

Here the first release of this adapter. There are a lot of missing parts but it's already useful for the basic integrations:

```js
const store = {}

const tableau = {
  extensions: {
    initializeAsync () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 200)
      })
    },
    dashboardContent: {
      dashboard: {
        name: 'Mock Dashboard',
        worksheets: []
      }
    },
    settings: {
      getAll () {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({})
          }, 200)
        })
      },
      set (key, value) {
        store[key] = value
      },
      saveAsync () {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(store)
          }, 200)
        })
      }
    }
  }
}

export default tableau
```

I use this adapter in a React app exploiting an `env` parameter to start two different development sessions:

```json
"scripts": {
  "start": "REACT_APP_MOCK=1 craco start",
  "tableau": "craco start",
  ...
},
```

Then, here the adapter selector:

```js
import tableauMock from './tableau.mock.js'

const tableauBridge = process.env.REACT_APP_MOCK ? tableauMock : window.tableau

export default tableauBridge
```

And in the `App.js` file:

```js
import tableau from './libs/tableau.bridge.js'
```

In case I'd add further methods, it'd be better to put it in a proper repository to allow contributions.