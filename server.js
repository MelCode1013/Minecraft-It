const express = require('express')
const app = express()
const mongodb = require('mongodb')
const MongoClient = require('mongodb').MongoClient
const dotenv = require('dotenv')
const PORT = 1337

require('dotenv').config()

app.listen('/', PORT => {
    console.log(`Your server on port ${PORT} is running, better go catch it!`)
})