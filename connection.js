// const mongoose = require('mongoose');
// require('dotenv').config();

// const DB = 'mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.gtqtpc3.mongodb.net/mernstack?retryWrites=true&w=majority';
  
// mongoose.connect(DB, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false
//   }).then(() => {
//  console.log("MongoDB Connected...");
// }).catch((err) => console.log('no connection'));

// const mongoose = require('mongoose');
// require('dotenv').config();

// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.gtqtpc3.mongodb.net/chatAppMern?retryWrites=true&w=majority`, ()=> {
//   console.log('connected to mongodb')
// })


// mongodb+srv://<username>:<password>@cluster0.gtqtpc3.mongodb.net/?retryWrites=true&w=majority

const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.gtqtpc3.mongodb.net/chatAppMern?retryWrites=true&w=majority`, {
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process on connection failure
  }
};

module.exports = connectDB;
