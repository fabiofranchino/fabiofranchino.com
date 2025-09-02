---
title: "Use local database such MySQL Retool cloud"
date: 2024-10-22 07:04:00 +0100
subtitle: 22nd October, 2024
description: ""
categories: Logs
tags: [log]
layout: "layouts/blog.njk"
permalink: "/{{ page.filePathStem }}/"
---



To connect a local MySQL database to Retool Cloud, which can't directly access local resources, you can use **ngrok** to tunnel your local environment and expose your MySQL database to Retool's cloud service.

Here's how you can do it:

### Step-by-step guide

#### 1. Set up ngrok

Download and install [ngrok](https://ngrok.com/), a tool that helps expose local services to the internet via a secure tunnel.

#### 2. Expose your MySQL database

Run the following command to open a tunnel for MySQL (default port 3306):

```bash
ngrok tcp 3306
```

This command creates a public `tcp` URL, which ngrok will display. This URL serves as the "host" for your MySQL database, which you can now use in Retool.

For detailed instructions, refer to the [ngrok documentation on MySQL](https://ngrok.com/docs/using-ngrok-with/mysql/).

#### 3. Configure Retool

- In Retool, go to **Resources** and create a new **MySQL Resource**.
- Use the `host` and `port` provided by ngrok as the database host and port.
- Fill in the database name, username, and password as usual.

![](/assets/blog/use-local-database-such-mysql-retool-cloud/01.png)

#### 4. Testing & development only

This method is perfect for development or testing environments but is **not recommended for production** due to security concerns, as it exposes your local machine to the internet.

------

This approach provides a quick and easy way to connect a local database to Retool Cloud for testing or development purposes.