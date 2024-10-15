// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";

// const connectDB = async () =>{
//     try {
//     const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     console.log(`\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`);
    
//     } catch (error) {
//         console.log("MONGODB CONNECTION ERROR:", error);
//         process.exit(1);
//     }
// }

// export default connectDB;


// db.mjs
import mongoose from 'mongoose';

const uri = 'mongodb+srv://akash:Naman123@backendcluster.ttyimwl.mongodb.net/videotube';  // Replace 'mydatabase' with your actual database name

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB successfully');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the process with failure
  }
};

// Event listener for error
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Export the connection function for use in other files
export default connectDB;
