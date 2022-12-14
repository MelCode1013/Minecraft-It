const express = require('express');
const app = express()
const connectDB = require('./config/database');

//env
require('dotenv').config({path: './config/.env'})

//Database
connectDB()

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//routes
app.get('/', function (req, res) {
    res.render('index', {});
});


app.listen(process.env.PORT, () => {
    console.log('Your server is running, better go catch it!')
})