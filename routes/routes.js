const express = require('express')
const router = express.Router()
//const feedController = require("../controllers/feed")

router.get("/feed", (req,res) => {
    console.log('feed router is workin!')
    res.render('feed', {
        pageTitle: "Dashboard"
    })
})

module.exports = router