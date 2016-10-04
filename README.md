This repository contains a SASS based [Redmine](http://www.redmine.org) theme forked from the official one (public/stylesheets/application.css).

It supports Redmine v3.3.

This work is licensed under [CC by-nc-na](https://creativecommons.org/licenses/by-nc-sa/4.0/) license.

# Changes from the original

First steps:

* applications.css was converted to SASS using sass-convert
* and splitted according to sections

Ongoing changes :

* improve readability for a 150 dpi screen (more spaces, larger font size)
* convert icons to FontAwesome
* replace inline values by variables

# Redmine Links

* [Redmine Theme List](http://www.redmine.org/projects/redmine/wiki/Theme_List)
* [HowTo create a custom Redmine theme](http://www.redmine.org/projects/redmine/wiki/howto_create_a_custom_redmine_theme)

# How to install

Steps to install this theme :

* create a new directory in *public/theme*
* ...

# How to generate the stylesheet from scratch

It requires a standard web development stack (NodeJS, Bower).

First install NPM packages:

    npm install

and Bower packages:

    bower install

Run the shell script *init.sh* to copy images and fonts.

then run Gulp to generate the stylesheet:

    gulp
