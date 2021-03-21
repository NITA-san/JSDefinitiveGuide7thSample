var http = require("http");
var fs = require('fs');
var url = require('url');

var server = http.createServer(function (req, res) {
//    var requrl = "public" + req.url;
    var requrl = "public" + url.parse(req.url).pathname;
    console.log(url.parse(req.url));

    if (fs.existsSync(requrl)) {
      fs.readFile(requrl, (err, data) => {
        if (!err) {
          res.writeHead(200, {"Content-Type": "text/html"});
          res.end(data);
        }
      });
    }
  });


var port = process.env.PORT || 3000;
server.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});

