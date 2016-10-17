This repository contains a SASS based [Redmine](http://www.redmine.org) theme forked from the vanilla default Redmine theme (public/stylesheets/application.css).

It supports Redmine v3.3.

This work is licensed under [CC by-nc-na](https://creativecommons.org/licenses/by-nc-sa/4.0/) license.

![Overview](https://github.com/FabriceSalvaire/redmine-improved-theme/raw/master/screenshots/redmine-overview.png)
![Wiki](https://github.com/FabriceSalvaire/redmine-improved-theme/raw/master/screenshots/redmine-wiki.png)

# Changes from the original

First steps:

* applications.css was converted to SASS using sass-convert
* and splitted according to sections

Ongoing changes :

* improve readability on a 150 dpi screen (more spaces, larger font size)
* convert icons to FontAwesome
* replace inline values by variables

# Design Rules

* update first the most used parts of the Redmine interface
* flat design and contrasted colours (look at material design)
* use custom settings to help user to customise the stylesheet
* only support modern browser
* use the power of SASS
* use jquery to patch the DOM (patched erb would break Redmine for other themes)

# Difficulties

* Redmine HTML code is prior to Bootstrap era and its semantic is not well defined. We can patch the DOM when it is mandatory, but it is a last resort.

# Redmine Links

* [Redmine Theme List](http://www.redmine.org/projects/redmine/wiki/Theme_List)
* [HowTo create a custom Redmine theme](http://www.redmine.org/projects/redmine/wiki/howto_create_a_custom_redmine_theme)

# How to install

Steps to install this theme :

* clone the repository or unzip the archive in the *public/theme* directory of your Redmine instance,
* check file permissions
* the directory name defines the theme name
* select this theme in Administration / Settings / Display / Theme

# How to generate the stylesheet from scratch

It requires a standard web development stack (NodeJS, Bower).

First install NPM packages:

    npm install

and Bower packages:

    bower install

Run the shell script *init.sh* to copy images and fonts.

then run Gulp to generate the stylesheet:

    gulp
