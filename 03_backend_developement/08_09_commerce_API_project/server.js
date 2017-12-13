const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", function (request, result) {
  result.send("Hello World!");
});

app.get("/parameters", function(request, result) {
  result.json(request.query);
});

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
