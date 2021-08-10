// const { Router } = require("express");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("You are in the root!!");
})


module.exports = router;


//I left off working on displaying the home page. I am creating routes and 
//tryiong to make the nav bar appear on every page via handle bars.
//I need to also recreate the nav-bar since I accidentally deleted it.