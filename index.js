// Ti Hall - IT222 Summer 2020
// Assignment - Node.js up and running
// setting up a web server application

const data = require('./data');
const http = require("http"); 

http.createServer((req,res) => {
  const path = req.url.toLowerCase();
  switch(path) {

    case '/':
      result = data.getAll().length;
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(`The number of items in this array: ${result}`) ;
      break;

    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('This the About page');
      break;
      
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404 - Not found');
      break;
    }

}).listen(process.env.PORT || 3000);
