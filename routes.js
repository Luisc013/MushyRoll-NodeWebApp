var express = require("express");

var router = express.Router();

router.get('/', function(req,res) {
    // console.log("Starting page/Home Page")
    res.render("index");
})

module.exports = router;