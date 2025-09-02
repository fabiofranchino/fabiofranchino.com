---
title: "Manage Retool Postgres database with external tools"
date: 2024-09-23 07:04:00 +0100
subtitle: 23rd September, 2024
description: ""
categories: Logs
tags: [log]
layout: "layouts/blog.njk"
permalink: "/{{ page.filePathStem }}/"
---



If you're building in Retool and need to store data, whether it's user preferences or session management, **the built-in Postgres database** is a handy solution. It's fully managed and always there, ready to use.

Retool also provides a basic UI to interact with the database. It's great for simple operations like quick data checks or light modifications. But when it comes to more sophisticated workflows, you'll quickly outgrow this interface.

### Why use an external postgres client?

While Retool's internal UI is practical, using an external Postgres client offers more flexibility and power, especially for tasks like complex queries, migrations, or database management.

Thankfully, Retool makes this process easy by providing a connection string to their fully managed Postgres database. This allows you to hook it up to any external Postgres client of your choice.

### Tableplus: the powerhouse client we love

We’re big fans of [Tableplus](https://tableplus.com/), a Mac-native, visual client for Postgres. 

![](/assets/blog/manage-retool-postgres-database-with-external-tools/01.png)

It’s intuitive but also allows for direct SQL queries and low-level database operations. We initially adopted it for migrating databases between different Retool instances, and now, it's indispensable in our workflow. Anytime we need to touch the database, Tableplus is our go-to.

Tables offers such a superior experience that we’ve all but abandoned the Retool UI for database operations. The interface is sleek, but it doesn’t compromise on power. Plus, it’s so intuitive that you don’t need a massive learning curve to get started.

If you need to work with Retool's Postgres database in a more professional way, ditch the basic UI and move to an external client like Tableplus. You won’t regret it!

![](/assets/blog/manage-retool-postgres-database-with-external-tools/02.png)

### Migrate your Retool Postgres database with Tableplus

Migrating databases between Retool instances is a breeze with **TablePlus**, a robust Postgres client.

To get started:

1. **Connect using the Retool database connection string** – Retool makes it easy by providing a connection string. Just plug that into TablePlus and you're connected.
2. **Export the entire database** – In TablePlus, simply export the whole database. This will generate a `.z` file containing everything you need.
3. **Import into another Retool instance** – Open the new Retool instance, use the connection string to connect, and import the `.z` file. That’s it! Your database is now fully migrated to the new instance.

![](/assets/blog/manage-retool-postgres-database-with-external-tools/04.png)

### Import CSV into your Retool Postgres database table

One of the most common tasks is importing CSV data into your Retool Postgres database. Often, clients start with data in a spreadsheet and later import it directly into the database. Here's how to make this process as smooth as possible:

1. **Prepare your CSV** – Name the columns in the CSV exactly as your Postgres table fields. This will save you from mapping columns manually.
2. **Import the CSV into the table** – Use Retool’s import feature to upload the file. If the column names match, the import process is done in seconds. You’re good to go with no extra hassle!

![](/assets/blog/manage-retool-postgres-database-with-external-tools/03.png)

Using **TablePlus** for migrations and leveraging Retool’s CSV import feature are essential tricks to streamline your database management. With these steps, you're just a few clicks away from powerful data management.

If you have a database migration or data import challenge ahead, Let’s connect! 👇
