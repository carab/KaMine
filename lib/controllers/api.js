'use strict';

var request = require('request'), 
    zlib = require('zlib'),
    extend = require('util')._extend;

/**
 * Build the fully qualified URL and returns it
 * @return {String} Fully qualified URL
 */
function buildRoot(query) {
  var url = '';

  if (query.scheme.length) {
    url += query.scheme + '://';
  }

  if (query.host.length) {
    url += query.host;
  }

  if (url.substr(-1) === '/') {
    url = url.substr(0, url.length - 1);
  }

  if (query.port.length) {
    url += ':' + query.port;
  }

  delete query.scheme;
  delete query.host;
  delete query.port;

  return url;
}

function buildParams(req) {
  var headers = {},
      params = {};

  for (var key in req.headers) {
    if (req.headers.hasOwnProperty(key)) {
      headers[key] = req.get(key);
    }
  }

  headers.host = req.host;

  params = {
    method: req.method,
    url: buildRoot(req.query) + '/' + req.params, 
    //headers: headers,
    qs: req.query,
    json: req.body,
    strictSSL: false
  };

  return params;
}

/**
 * Send the request to the API
 */
exports.index = function(req, res) {
  var params = buildParams(req);

  request(params, function (error, response, body) {
    if (error === null) {
      // copy response headers
      /*/for (var key in response.headers) {
        if (response.headers.hasOwnProperty(key)) {
          res.setHeader(key, response.headers[key]);
        }
      }/**/
      res.send(response.statusCode, body);
    } else {
      res.send(400, 'error');
    }
  });
};