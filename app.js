var express = require("express");
var path = require("path");

var app = express();

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));

// serve static files 
app.use(express.static(path.join(__dirname, "public")));

//set view engine
app.set("view engine", "ejs");

// routes
app.use("/", require("./routes/web"));
app.use("/api", require("./routes/api"));

app.listen(app.get("port"), function() {
    console.log("Server started at port " + app.get("port"));
})

