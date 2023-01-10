const express = require('express')
const router = express.Router()
//const feedController = require("../controllers/feed")

router.get("/feed", (req,res) => {
    console.log('feed router is workin!')
    res.render('feed', {
        pageTitle: "Dashboard"
    })
})

router.post("/feed", (req,res) => {
    console.log('feed router is workin!')
    res.render('feed', {
        pageTitle: "Dashboard"
    })
})

router.get("/post", (req,res) => {
    console.log('post item router is workin!')
    res.render('post', {
        pageTitle: "Add your build"
    })
})


module.exports = router