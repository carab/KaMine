KaMine
======

A Redmine client to better work with Scrum Agile Method.

WiP, still not functionnal.

Requirements
------------

### Client-side

TODO: check which browser versions are compatible.

### Server-side

The targetted Redmine must allow [CORS](http://www.w3.org/TR/cors/).

Thanks to [dontdrinkandroot](https://github.com/dontdrinkandroot/lightmine.js/tree/master#prerequisites) for solutions :

#### Redmine < 2.0

If you are running redmine on an Apache Webserver with the [Passenger Mod](https://www.phusionpassenger.com/) you can change the Vhost in the following way:

* Enable mod_rewrite
* Enable mod_headers
* Add the following code to the Vhost:

```
RewriteEngine On                  
RewriteCond %{REQUEST_METHOD} OPTIONS 
RewriteRule ^(.*)$ $1 [R=200,L]

Header always set Access-Control-Allow-Origin "*"                   
Header always set Access-Control-Allow-Methods "POST, GET, OPTIONS, DELETE, PUT"
Header always set Access-Control-Allow-Headers "origin, content-type, accept, authorization, x-requested-with, x-redmine-api-key"
```

If this doesn't work, try the solution suggested [here](http://stackoverflow.com/questions/12194371/how-to-add-response-header-in-vhost-or-passeneger-ruby).

#### Redmine >= 2.0

There is a plugin available [here](http://www.redmine.org/plugins/redmine_cors) ([GitHub](https://github.com/mavimo/redmine_cors)) that provides the headers as needed.

Developpers
-----------

### Install project

1. Install [NodeJS](http://nodejs.org/download/) and [NPM](http://npmjs.org/)
2. Install Grunt locally : `npm install -g grunt-cli`
3. Install Bower locally : `npm install -g bower`
4. Install packages : `npm install`
5. Install assets packages `bower install`

If you wish to use the Yeoman Angular generator :

1. Install Yeoman locally : `npm install -g yo`
2. Install Angular Yeoman generator : `npm install -g generator-angular`


### Grunt tasks

1. `grunt` : runs tests and build application into dist folder.
2. `grunt test` : runs tests only.
3. `grunt serve` : runs local web server, add a new tab to your browser and watch for files to auto update the page.

TODO
----

* Finish sync between URL and selected project/sprint
* Multiple profiles for configuration
* Add spent time and comment when the story status changes
* Do burndown chart
* Allows to create sprints and stories
* Change assignee
* Better Board view
