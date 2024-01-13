---
title: Use multiple values from js array into a SQL in Retool
date: 2024-01-13 05:52:00 +0100
---



If you're a Retool user, here the tip to make a SQL query that uses in the WHERE clause one or multiple values that come from a multi-select component:

```sql
SELECT
  *
from
  "Table"
WHERE
  category = ANY ({{ multiselect.value }})
```

