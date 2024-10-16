// const mongoose = require('mongoose');
import mongoose  from 'mongoose';
const uri = "mongodb+srv://Akku121:Akash123@officalcluster.bgyr4.mongodb.net/skytemp";

// const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri);
    await mongoose.connection.db.admin().command({ ping: 1 });
    // Create collections in the database
    // await mongoose.connection.db.createCollection("dky");
    await mongoose.connection.db.createCollection("sfsfd2");
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);