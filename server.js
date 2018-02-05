const express        = require('express');
const http           = require('http')
// const cors           = require('cors')
const app            = express();
const bodyParser     = require('body-parser');
const logger         = require('morgan')
// const angular        = require('angular')
// const methodOverride = require('method-override');
const path = require('path')
// const favicon = require('serve-favicon')
// const logger = require('morgan')
// const cookieParser = require('cookie-parser')
const Form = require('./db/schema.js')

require('./db/connection.js')


app.set('port', process.env.PORT || 27017)
// app.use(express.static(__dirname + '/public'));
app.use('/node_modules', express.static('node_modules'))
app.use('/assets', express.static('public'))
app.use(logger('dev'))
// app.use(cookieParser())
// app.use(bodyParser.json({extended:true}))

app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}))


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade')


app.post('/api/submit', (req, res) => {
  console.log(req.body)
  Form.create({
    name:req.body.name,
    email:req.body.email,
    company: req.body.company,
    title:req.body.title,
    location:req.body.location,
    story: req.body.story
  })
  .then((item) =>{
    console.log(req.body + "saved")
    res.json(item)
  }).catch((err) =>{
    console.log(req.body)
    res.status(200).send("unable to save to database");
  })

})

app.get('/api/submit', (req, res) => {
  console.log(req)
  Form.create({
    name:req.body.name,
    email:req.body.email,
    company: req.body.company,
    title:req.body.title,
    location:req.body.location,
    story: req.body.story
  })
  .then((item) =>{
    console.log(req.body + "saved")
    res.json(item)
  }).catch((err) =>{
    res.status(400).send("unable to save to database");
  })

})

app.get('/eras/:decade', (req, res) => {
  Form.find({decade: req.params.decade}, null).then((decade) => {
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

// module.exports = app
