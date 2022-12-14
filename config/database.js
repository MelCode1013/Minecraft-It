/*const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_STRING, 
            {
                useNewUrlParser: true,
               // useFindAndModify: false,
                useUnifiedTopology: true,
              })
        console.log(`MongoDB connected: ${conn.connection.host}`)
      } catch (err) {
        console.log(err)
        process.exit(1)
      }
    }

    module.exports = connectDB*/

const { MongoClient, ServerApiVersion } = require('mongodb');



const connectDB = () => {
    try {
    const uri = process.env.DB_STRING;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    console.log('DB connected')
    } catch(err){
    client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
    })
}
}

module.exports = connectDB