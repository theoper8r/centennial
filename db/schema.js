const mongoose = require('./connection.js')



const FormSchema = new mongoose.Schema({
  name:String,
  email:String,
  company: String,
  title:String,
  location:String,
  story: String
})

const UserSchema = new mongoose.Schema({
  password:String,
  email:String

})

const Form = mongoose.model('Form', FormSchema)
const User = mongoose.model('User', UserSchema)

// const Form = mongoose.model('Form', FormSchema)

module.exports = {
  Form,
  User
}
