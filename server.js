const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const connectDB = require('./config/db')
const { mainModule } = require('process')

//load config
dotenv.config({ path: './config/config.env'})

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

//Handlebars

app.engine('.hbs', engine({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

//routes

app.use('/', require('./routes/index'))

const PORT = process.env.PORT


app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(PORT, () => {
console.log(`This server is running on port ${PORT} in ${process.env.NODE_ENV}, you better go catch it`)

})