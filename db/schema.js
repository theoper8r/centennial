const mongoose = require('./connection.js')



const FormSchema = new mongoose.Schema({
  name:String,
  email:String,
  company: String,
  title:String,
  location:String,
  story: String
})

// const Form = mongoose.model('Form', FormSchema)

module.exports = mongoose.model('Form', FormSchema)
