const mongoose = require('./connection.js')



const EraSchema = new mongoose.Schema({
  title:String,
  summary:String,
  decade: Number,
  articles: [{
    year: Number,
    img: String,
    text: String
  }]
})

const Era = mongoose.model('Era', EraSchema)

module.exports = Era
