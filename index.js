const http = require("http");
const port = process.env.PORT || 3000;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`
    <html>
      <body>
        <h1>Hello World!</h1>
      </body>
    </html>`);
});

server.listen(port);

console.log(`Server running at http://localhost:${port}`);
