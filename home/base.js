const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  switch (req.url) {
    case "/":
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello World\n');
      break;
    case "/html":
      res.setHeader('Content-Type', 'text/html');
      res.end('<h1>Here is the html code</h1>');
      break;
    case "/json":
      res.setHeader('Content-Type', 'application/json');
      res.end('{"Name":"JSON"}');
      break;
    default:
      res.statusCode = 404;
      res.end('Default page\n');
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
