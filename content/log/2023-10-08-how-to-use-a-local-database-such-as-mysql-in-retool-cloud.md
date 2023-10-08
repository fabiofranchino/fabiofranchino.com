---
title: How to use a local database such as MySQL in Retool Cloud
date: 2023-10-08 07:24:00 +0100
---



Here the steps to use a local database as resource in Retool cloud.

This is very handy to test and development. Do not use this method in production or on public applications.

## Expose the database

We use Ngrok to tunnel the local database in order to expose it to remote applications by using this command:

```
ngrok tcp 3306
```

Here [their documentation](https://ngrok.com/docs/using-ngrok-with/mysql/) for further details.

The local MySQL/MariaDB database runs usually on `3306` port. Change the above command if you're using a different port.

Now `ngrok` gives you a new `host` and `port` that you can use into the Retool resource configuration.

Create a new MySql resource and add the new `host` and `port` alongside the database name as well.

![](/assets/log/n852_copypastedesign-2023-10-08-at-11.23.36.png)