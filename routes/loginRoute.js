const express = require('express')
const router = express.Router()

router.get("/login", (req,res) => {
    console.log('router is workin!')
    res.render('login', {
        pageTitle: "Log in"
    })
})

module.exports = router