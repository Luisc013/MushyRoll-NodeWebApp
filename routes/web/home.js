var express = require("express");

var router = express.Router();

router.get('/', function(req,res) {
    // console.log("Starting page/Home Page")
    res.render("home/index");
})

router.get('/shows', function(req,res) {
    // console.log("Shows Page")
    res.render("home/shows");
})

router.get('/manga', function(req,res) {
    // console.log("Manga Page")
    res.render("home/manga");
})

router.get('/login', function(req,res) {
    // console.log("Shows Page")
    res.render("home/login");
})

module.exports = router;