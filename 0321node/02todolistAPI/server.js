var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/todoListRoutes/todoListRoutes'); //importing route
routes(app); //register the route
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);


/*var http = require('http');

http.createServer(function (request, response) {

    response.writeHead(200, {'Content-Type': 'text/plain'});

    response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');*/