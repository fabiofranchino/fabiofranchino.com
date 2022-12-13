---
title: How to inject markup in the head tag as early as possible in Wordpress Plugin
date: 2022-12-13 04:34:00 +0100
---



If you are a Wordpress Plugin developer, you'd already know that to add markup in the `head` of the HTML page you can use the following hook:

```php
add_action('wp_head', 'add_head_markup');
```

Working on a [Wordpress Plugin about open-graph tags](https://wordpress.org/plugins/presenta-open-graph/) I had the need to write those tags as early as possible in the HTML page because other tags, made from other plugins, might override them.

Today I've learned that adding a third parameter, it instructs Wordpress a specific order of injection.

Adding the lowest possible number, `1` you can put the markup at the beginning of the `head` tag:

```php
add_action('wp_head', 'add_head_markup', 1);
```

Of course, if other plugins, or Wordpress itself, use the same number, I don't really know which will be the order of injection, I guess based on alphabetical order of the loaded plugins/functions.

There's no mention of it in the official documentation, though.