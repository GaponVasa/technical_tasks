var url = require("url");
var fs = require("fs");

function renderHTML(path, response) {
  fs.readFile(path, null, function(error, data) {
    if (error) {
      response.writeHead(404);
      response.write("File not found!");
    } else {
      response.write(data);
    }
    response.end();
  });
}

module.exports = {
  handleRequest: function(request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });

    var path = url.parse(request.url).pathname;
    console.log(path);
    switch (path) {
      case "/":
        renderHTML("./index.html", response);
        break;
      case "/a.html":
        renderHTML("./a.html", response);
        break;
      case "/b.html":
        renderHTML("./b.html", response);
        break;
      case "/c.html":
        renderHTML("./c.html", response);
        break;
      case "/main.js":
        fs.createReadStream("./main.js").pipe(response);
        break;
      case "/a.js":
        fs.createReadStream("./a.js").pipe(response);
        break;
      case "/b.js":
        fs.createReadStream("./b.js").pipe(response);
        break;
      case "/cat.jpg":
        fs.createReadStream("./cat.jpg").pipe(response);
        break;
      default:
        response.writeHead(404);
        response.write("Route not defined");
        response.end();
    }
  }
};
