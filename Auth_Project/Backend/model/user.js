const mongoose = require('mongoose')
const userschema = new mongoose.Schema({
       username:String,
       password:String,
       email:String
});
  module.exports = mongoose.model("user" ,userschema);

    
   