//for my dashboard/homepage
const express = require('express')
const router = express.Router()

// @description - Login/landing page\
// @route GET/
router.get('/', (req, res) => {
    res.send('Dashboard')
})

// @description - Dashboard
// @route GET /dashboard
router.get('/dashboard', (req, res) => {
    res.send('Login')
})

module.exports = router