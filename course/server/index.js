var express = require("express");
var app = express();
var port = 4000;
app.use(express.static(__dirname + "/public"));
app.listen(port, function() {
  console.log("Node app is running on port", app.get("port")); //adding a print to know the server started
});

// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => res.send("Hello World!"));

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
