---
title: "Use multiple values in Retool query where statement"
date: 2024-10-22 07:04:00 +0100
subtitle: 22nd October, 2024
description: ""
categories: Logs
tags: [log]
layout: "layouts/blog.njk"
permalink: "/{{ page.filePathStem }}/"
---



Here's a quick tip for making SQL queries that involve selecting multiple values from a multi-select component in Retool. 

When working with Retool's SQL query language, you can seamlessly blend SQL and JavaScript using double curly braces (Mustache syntax). 

This allows you to reference JavaScript values or Retool component instances directly in your SQL queries.

If you're trying to filter results based on multiple values from a multi-select component, named `multiselect`, here's how to construct a SQL `WHERE` clause that handles multiple selections:

```sql
SELECT * FROM "Table" WHERE category = ANY ({ { multiselect.value } })
```

This query ensures that the `category` matches any of the selected values from the multi-select component. This approach makes it simple to dynamically filter data based on user selection, improving flexibility in your Retool apps.

I hope this little tip saves you time in your Retool day-to-day development!