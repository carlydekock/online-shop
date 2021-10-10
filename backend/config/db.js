require('dotenv').config();

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('MongoDB connection SUCCESS')
  } catch (error){
    console.error('MongoDB connection FAIL');
    process.exit(1); //exit the server on failure to connect to db
  }
}

module.exports = connectDB;