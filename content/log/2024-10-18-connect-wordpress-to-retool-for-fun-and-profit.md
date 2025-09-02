---
title: "Connect WordPress to Retool for fun and profit"
date: 2024-10-18 07:04:00 +0100
subtitle: 18th October, 2024
description: ""
categories: Logs
tags: [log]
layout: "layouts/blog.njk"
permalink: "/{{ page.filePathStem }}/"
---



WordPress is the most popular open-source blogging platform and content management system, powering over 45% of websites on the internet. Retool, on the other hand, is a leading low-code platform designed for internal tool development. 

> Combining the power of **WordPress** with **Retool** opens up exciting possibilities for automating workflows and building custom tools.

In this tutorial, we’ll explore how to **read data from a WordPress installation** and bring it into Retool by fetching posts via the **WordPress REST API**.

### Setting up the WordPress connection in Retool

For this tutorial, we’ll be working with a sample WordPress site available at:

```
https://lightengrade.s1-tastewp.com/
```

It's a temporary WordPress installation provided by TasteWp, a neat service! 

![](/assets/blog/connect-wordpress-to-retool-for-fun-and-profit/01.png)

WordPress provides a REST API that can be accessed using the following schema URL:

```
<base_url>/wp-json/wp/v2
```

so:

```
https://lightengrade.s1-tastewp.com/wp-json/wp/v2
```

To fetch the list of posts, use the `/posts` endpoint. In Retool, we will create a new REST API resource and add this URL to pull in WordPress posts.

To learn more about WordPress API, [here](https://developer.wordpress.org/rest-api/reference/) the full official reference.

In Retool, go to **Resources** and create a new **REST API resource**.

Set the base URL as:

```
https://lightengrade.s1-tastewp.com/wp-json/wp/v2/posts?per_page=100
```

This will fetch the first 100 posts from the WordPress installation. By default, and if you omit that parameter, the number is 25.

Test the connection, and you should see a response like this:

![](/assets/blog/connect-wordpress-to-retool-for-fun-and-profit/02.png)





### Displaying posts in a Retool table

Once you've successfully connected to the WordPress API, you can display the fetched posts in a **Retool table**.

Drag a **Table** component from the sidebar onto your Retool workspace.

Set the data source to the result of the API query. The JSON response from WordPress might be quite verbose with nested fields, so we'll simplify it using the **Transform results** option.

![](/assets/blog/connect-wordpress-to-retool-for-fun-and-profit/03.png)

Add the following transformation to map the relevant fields:

```js
return data.map(d => ({title: d.title.rendered, content: d.content.rendered, excerpt: d.excerpt.rendered}));
```

This will structure the table to only show the post title, content, and excerpt.

![](/assets/blog/connect-wordpress-to-retool-for-fun-and-profit/04.png)





### Adding a Rich Text Editor for selected post content

To make things more interactive, let’s display the full content of a post when a row is selected in the table.

1. Set the table to allow row selection.
2. Add a **Rich Text Editor** component below the table.
3. Bind the **body** of the Rich Text Editor to the selected row from the table, so when a user selects a post, its content will appear in the editor.

![](/assets/blog/connect-wordpress-to-retool-for-fun-and-profit/05.png)

Here the final result:

![](/assets/blog/connect-wordpress-to-retool-for-fun-and-profit/00.gif)



### Next steps: advanced WordPress-Retool integrations

This basic integration is just the beginning. Once you have the WordPress data in Retool, you can apply filters, transform the data, or integrate it with other services. You can also use Retool to interact with the WordPress API for advanced use cases, like **writing data back to WordPress**, a topic we’ll cover in a future tutorial, since it involves more settings due the required authentication.







We hope this sparks new ideas for integrating WordPress with Retool. Stay tuned for more tutorials on such integrations!

