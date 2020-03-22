  
var http = require('http'),
url = require('url');

var list = [];

var server = http.createServer(function (req, res) {
switch (req.method) {
case 'GET':
  if (req.url === '/') {
    var body = list.map(function (item, i) {
      return i + ') ' + item;
    }).join('\n');
    res.setHeader('Content-Length', Buffer.byteLength(body));
    res.setHeader('Content-Type', 'text/plain; charset="utf-8"');
    res.end(body);
  }
  break;
case 'POST':
  var item = '';
  req.setEncoding('utf8');
  req.on('data', function (chunk) {
    item += chunk;
  });

  req.on('end', function () {
    list.push(item);
    res.end('OK\n');
  });
  break;
case 'DELETE':
  var path = url.parse(req.url).pathname,
      id = parseInt(path.slice(1), 10);

  if (isNaN(id)) {
    res.statusCode = 400;
    res.end('Invalid item id.');
  }
  else if (!list[id]) {
    res.statusCode = 404;
    res.end('Item not found.');
  }
  else {
    list.splice(id, 1);
    res.end('OK\n');
  }
  break;

case 'PUT':
  var body = '';
  req.on('data', function (chunk) {
    body += chunk.toString();
  });
  req.on('end', function () {
    var path = url.parse(req.url).pathname,
        id = parseInt(path.slice(1), 10);

    if (isNaN(id)) {
      res.statusCode = 400;
      res.end('Invalid item id.');
    }
    else if (!list[id]) {
      res.statusCode = 404;
      res.end('Item not found.');
    }
    else {
      list[id] = body;
      res.end('OK\n');
    }
  });
  break;
}
});

server.listen(3000);
console.log("Server running on port 3000.");