---
title: Power Find with Shell on Mac
date: 2021-02-11 13:42:00 +0100
---



I had to find some files on the whole file system on my Mac.

Here what I've learned.

To find based on name:

```shell
cd /
find . -iname "*myfile*"
```

The above command finds from the root any file that contains `myfile` in the filename.

To find based on dates:

```shell
cd /
find . -type f -newermt "2021-02-04 08:00:00" ! -newermt "2021-02-04 14:00:00"
```

The above command finds files based on a date and time range.

Furthermore, find files modified the last (ten) minutes:

```shell
cd /
find . -type f -mmin -10
```

I usually had to prepend `sudo` to find in any folders on my computer.

## Bonus command

I've also learned this neat command to list files touched by processes:

```shell
lsof
```

