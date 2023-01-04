const express = require('express');
const app = express()
const loginRoute = require('./routes/loginRoute.js')
const connectDB = require('./config/database');

//env
require('dotenv').config({ path: './config/.env' })

//Database
connectDB()

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


//routes
app.get('/', function (req, res) {
    res.render('index', {
        pageTitle: "Minecraft IT"
    });
});
app.get('/upload', function (req, res) {
    res.render('post', {
        pageTitle: "Minecraft IT"
    });
});



app.use(loginRoute)

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' })
})

app.listen(process.env.PORT, () => {
    console.log('Your server is running, better go catch it!')
})