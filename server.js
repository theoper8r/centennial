const express        = require('express');
const http           = require('http')
const cors           = require('cors')
const app            = express();
const bodyParser     = require('body-parser');
const logger         = require('morgan')
// const methodOverride = require('method-override');
const path = require('path')
// const favicon = require('serve-favicon')
// const logger = require('morgan')
// const cookieParser = require('cookie-parser')
const Era = require('./db/schema.js')

require('./db/connection.js')


app.set('port', process.env.PORT || 27017)
app.use(express.static(__dirname + '/public'));
app.use('/assets', express.static('public'))
// app.use('/node_modules', express.static('node_modules'))
// app.use(logger('dev'))
// app.use(cookieParser())
app.use(bodyParser.json({extended:true}))


app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade')

app.get('/api/eras', (req, res) => {
  Era.find({}).then((eras) => {
    console.log('from server')
    console.log(eras)
    res.json(eras)
  })
})

app.get('/eras/:decade', (req, res) => {
  Era.find({decade: req.params.decade}, null).then((decade) => {
    console.log('json res' + decade)
    res.json(decade)
  })
})

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
})
