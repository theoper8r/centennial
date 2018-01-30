const mongoose = require('mongoose')

const MLAB_URL = 'mongodb://awandres:12Mexmex@ds113825.mlab.com:13825/centennial'

if (process.env.NODE_ENV == "production") {
  mongoose.connect(MLAB_URL)
} else {
  mongoose.connect('mongodb://localhost/centennial'), {
  useMongoClient: true
}
}
module.exports = mongoose
