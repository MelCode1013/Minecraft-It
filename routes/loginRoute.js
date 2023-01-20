const express = require('express')
const router = express.Router()
const {registerView, loginView } = require('../controllers/loginController');
router.get('/register', registerView);
router.get('/login', loginView);

router.get("/login", (req,res) => {
    console.log('router is workin!')
    
})

module.exports = router