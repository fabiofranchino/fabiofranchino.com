---
title: How to add global env bash variables to your mac os x terminal app
date: 2021-11-27 11:49:00 +0100
---



TIL how to add global enviroment variables, those that can be used with the Terminal Shell.

First, open this file:

```shell
open ~/.bash_profile
```

You should have the file open with your default text editor.

Then, add the variable, such as:

```shell
export MY_VAR="Some Content"
```

Save it, close the Terminal window, open another one and type:

```shell
echo $MY_VAR
```

You should see "Some Content" printed out.

I've learned the details [here](https://medium.com/geekculture/path-macos-best-practice-for-path-environment-variables-on-mac-os-35ec4076a486) but I've [discovered](https://scriptingosx.com/2017/04/about-bash_profile-and-bashrc-on-macos/) that on MacOsX the default profile that is loaded on each Terminal window is `~/.bash_profile` and not `~/.bashrc` neither `~/.profile`, therefore, use the first one to have variables persisting in your Terminal shell.

> When Terminal.app opens a new window, it will run `.bash_profile`. Not, as users familiar with other Unix systems would expect, `.bashrc`.

Last, use this command to load immediatly the new variables in the same open window:

```shell
source ~/.bash_profile
```

That's all.