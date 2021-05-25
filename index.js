
'use strict';
require('dotenv').config(); ////** it should be required  */
const server = require ('./src/server.js'); // 
// Start up DB Server
const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(process.env.MONGODB_URI, options) .then (()=>{//
  server.startup(process.env.PORT);////**startup */here we sure that the server connect to mongo then listen to the server
}).catch ((e)=>{//
  console.log('connection_error', e.message);//
});//