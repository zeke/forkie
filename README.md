# Forkie

Forkie is a browser extension that replaces GitHub's network page with something useful.

## Installation

Forkie was created with [Crossrider](http://crossrider.com/), a platform for authoring and distributing cross-browser extensions. Install it on [Google Chrome](https://chrome.google.com/webstore/detail/forkie/dmmckfhkgndpfephhagieklcfjmknjop) or [other browsers](http://crossrider.com/install/36866-forkie).

## Idea

Github's network graph is not very useful: It's a small window that overflows with data, both horizontally and vertically. You drag it around in the hopes of gleaning some information, but ultimately close the page, discouraged and frustrated.

Forkie aims to ease the pain. When you're viewing a repository's network page on github.com, forkie hits the github API to find metadata about the repo's forks, and displays them in a simple list. The forks are sorted by their fork count, which serves as a proxy for popularity.

## Design

Here's what Forkie looks like:

![http://cl.ly/image/2I012c0Y0t27](http://cl.ly/image/2I012c0Y0t27/content#.png)