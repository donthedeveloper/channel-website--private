'use strict';

var express = require("express");
var path = require("path");
var app = express();

app.use("/static", express.static(path.join(__dirname, "public")));

app.set("view engine", "jade");
app.set("views", path.join(__dirname, "/views"));

app.get("/twitch/channel-website/src/app/", function(request, response) {
  response.render("index");
});

app.listen(3000, function() {
  console.log("The website is running on port 3000.");
});