const formData = require('./seeds.json')
const Form = require('./schema.js').Form
const User = require('./schema.js').User

console.log(Form)

Form.remove({}).then(function(){
  formData.forEach(function(data) {
    Form.create({
      name:data.name,
      email:data.email,
      company: data.company,
      title:data.title,
      location:data.location,
      story: data.story
    })
      .then((newForm) => {
        console.log('adding')
        console.log(newForm)
      })
      .catch((err) => {
        console.log('error')
        console.log(err)
      })

  })
  .then(() => {
    process.exit()
  })
  .catch((err) => {
    console.log('error')
    console.log(err)
  })
})


User.create({
  email: 'pwilliam@iaapa.org',
  password: 'iaapa100pw'
})
