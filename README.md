This repository contains a SASS based [Redmine](http://www.redmine.org) theme forked from the vanilla default Redmine theme (public/stylesheets/application.css).

It supports Redmine v3.3.

This work is licensed under [CC by-nc-na](https://creativecommons.org/licenses/by-nc-sa/4.0/) license.

# Screenshots (can be older than head)

![Overview](https://github.com/FabriceSalvaire/redmine-improved-theme/raw/master/screenshots/redmine-project-overview.png)
![Roadmap](https://github.com/FabriceSalvaire/redmine-improved-theme/raw/master/screenshots/redmine-project-roadmap.png)
![Issues](https://github.com/FabriceSalvaire/redmine-improved-theme/raw/master/screenshots/redmine-project-issues.png)
![Issue](https://github.com/FabriceSalvaire/redmine-improved-theme/raw/master/screenshots/redmine-project-issue.png)
![Wiki](https://github.com/FabriceSalvaire/redmine-improved-theme/raw/master/screenshots/redmine-project-wiki.png)

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

# What cannot be done

* style issue status : *status-1* *status-2* ... classes are related to the Redmine instance setup, Redmine should implement a way to inject CSS from Administration, workaround is to patch at SASS or CSS level.

# Redmine Links

* [Redmine Theme List](http://www.redmine.org/projects/redmine/wiki/Theme_List)
* [HowTo create a custom Redmine theme](http://www.redmine.org/projects/redmine/wiki/howto_create_a_custom_redmine_theme)

# How to install

Steps to install this theme :

* clone the repository or unzip the archive in the *public/theme* directory of your Redmine instance,
* copy *images* directory : *cp -r ../../images/ .*
* check file permissions
* theme's name is defined by the directory name
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

Look at src/sass/redmine/_settings.scss to customize this theme.
