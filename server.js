const express = require('express')
const app = express()
const mongodb = require('mongodb')
const MongoClient = require('mongodb').MongoClient
const dotenv = require('dotenv')
const PORT = 1337

require('dotenv').config()


const uri = DB_STRING;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    console.log('DB connected')
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});


app.listen('/', PORT => {
    console.log(`Your server on port ${PORT} is running, better go catch it!`)
})