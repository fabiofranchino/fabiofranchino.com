---
title: How to add the setting link in a Wordpress Plugin
date: 2022-12-15 12:29:00 +0100
---



Let's suppose the Wordpress Plugin name is `presenta-open-graph` :)

This is the code you need to insert into the `php` file of the Plugin in order to show the `Settings` link in the Plugins installed list:

```php
function presenta_plugin_add_settings_link ( $actions ) {
  $url = esc_url( add_query_arg('page','presenta-open-graph.php',get_admin_url().'admin.php'));
	$link = "<a href='$url'>" . __( 'Settings' ) . '</a>';
	array_push($actions,$link);
  return $actions;
}

add_filter( 'plugin_action_links_' . plugin_basename(__FILE__), 'presenta_plugin_add_settings_link' );
```

Documentation [here](https://developer.wordpress.org/reference/hooks/plugin_action_links_plugin_file/).