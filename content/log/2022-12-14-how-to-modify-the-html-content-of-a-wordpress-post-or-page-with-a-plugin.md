---
title: How to modify the HTML content of a Wordpress post or page with a Plugin
date: 2022-12-14 12:19:00 +0100
---



This is the code, that needs to be in a Wordpress Plugin, to modify the HTML content before to send it to the user.

As an example, let's suppose we want to load remote images from the local environment of our Wordpress instance:

```php
function replace_image_base_url($content) {
  
  $content = preg_replace('/src=http:\/\/localhost:8080/u', 'src=https://cdn.yourdomain.com/', $content);
  
  return $content;
}

add_filter('the_content','replace_image_base_url');
```

