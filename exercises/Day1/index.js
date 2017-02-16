let http = require("http");

let server = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/html");
    res.end("<h1>Hello</h1>");
});

server.listen(1234, "localhost", function(){
    console.log("Server started listening on port " + 1234);
});

