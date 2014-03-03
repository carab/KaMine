'use strict';

var request = require('request'), 
    zlib = require('zlib');

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

/**
 * Get awesome things
 */
exports.index = function(req, res) {
  // copy headers, except host header
  var headers = {};
  for (var key in req.headers) {
    if (req.headers.hasOwnProperty(key)) {
      headers[key] = req.get(key);
    }
  }

  headers.host = req.host;

  var url = buildRoot(req.query) + '/' + req.params;

  request({
    method: 'get',
    url: url, 
    //headers: headers,
    qs: req.query,
    strictSSL: false
  }, function (error, response, body) {
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