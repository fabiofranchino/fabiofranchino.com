---
title: Deploy a React App to Github Pages
date: 2021-01-21 11:10:00 +0100
---



You're wondering how to change the `build` folder name and the local dependencies path in the HTML in order to deploy correctly on Github Pages when using `create-react-app`?

Just add in `package.json` the `homepage` field with the full base remote URL of your App, such as:

```json
"homepage": "https://fabiofranchino.github.io/my-react-repo-app"
```

And push the `gh-pages` branch, or use this dependencies `gh-pages` following this [tutorial](https://www.pluralsight.com/guides/deploying-github-pages-with-create-react-app).

