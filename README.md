KaMine
======

A Redmine client to better work with Scrum Agile Method.

It was initially a frontend-only web app, but Redmine doesn't really help with cross domain queries, so the app is now packaged with a backend working as a fake proxy. The goal will be to also provide a frontend-only version.

Requirements
------------

### Client-side

TODO: check which browser versions are compatible.

Currently tested:

* Chrome 32

### Server-side

NodeJS

### Redmine

It's currently developed to support *Redmine 2.0*.
There is no abstract layer to handle other versions yet.

Developers
-----------

### Install project

1. Install [NodeJS](http://nodejs.org/download/), [NPM](http://npmjs.org/) and [Ruby](https://www.ruby-lang.org/fr/)
2. Install Compass rubygem : `sudo gem install compass`
2. Install Grunt globally : `sudo npm install -g grunt-cli`
3. Install Bower globally : `sudo npm install -g bower`
4. Install packages : `npm install`
5. Install assets packages `bower install`

### Grunt tasks

1. `grunt` : runs tests and build application into dist folder.
2. `grunt test` : runs tests only.
3. `grunt serve` : runs local web server, add a new tab to your browser and watch for files to auto update the page.

### Yeoman generator

This project uses the [generator-angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack) for Yeoman, so you can use every commands given by this generator.

If you wish to use it :

1. Install Yeoman globally : `npm install -g yo`
2. Install Angular-Fullstack generator : `npm install -g generator-angular-fullstack`

Features
--------

* Project and sprint management.
* Advanced configuration.
* English and French translations.
* Board view.
** Filter on user.
** Simple/detailed display.
** Status change by drag & drop.
** Info icons
* Burndown chart view.
** Chart with ideal and effort remaining time.
** Spent time list.

In progress
-----------

* Allow for multiple configuration profiles.
* Add more filters on board view.
* Show a form to add spent time and comment when status is changed.

To do
-----

* Add auto-refresh when focus on page and on a timer.
* Set background color on stories for each users.
* Add a way to create sprints and stories.
* Manage the product backlog.
* Manage the sprint backlog.
* Add a button to edit story.
* Enhance the API proxy to transfer headers.
* Provide a backend-free solution.
* Provide a node-webkit version for desktop.

## Why is there a backend ?

As I explained, Redmine doesn't really fit with [CORS](http://www.w3.org/TR/cors/), which is needed to requests other domains from web app.

[dontdrinkandroot](https://github.com/dontdrinkandroot/lightmine.js/tree/master#prerequisites) provided a solution for his own client-side app, but it requires to have hand on the administration.

My wish is to provide a solution without the need of the administration access. Therefore, the backend is here to provide a way to proxy the requests sent by the frontend.

It currently only works as this, but my goal is also to provide a frontend-only web app, as it will allows to use the app without any dependency (only *.html main file and that's all).
