var express = require("express");
var path = require("path");

var app = express();

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), function() {
    console.log("Server started at port gi" + app.get("port"));
})