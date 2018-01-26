const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/centennial')

console.log('db connected')


module.exports = mongoose
