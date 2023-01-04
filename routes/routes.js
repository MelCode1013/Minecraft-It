const { Router } = require('express')
const express = require('express')
const router = express.Router()

Router.get("/feed", (req,res) => {
    console.log('feed router is workin!')
    res.render('feed', {
        pageTitle: "Dashboard"
    })
})

module.exports = router