const formData = require('./seeds.json')
const Form = require('./schema.js')

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
        console.log(newForm)
      })
      .catch((err) => {
        console.log(err)
      })

  })
  .then(() => {
    process.exit()
  })
  .catch((err) => {
    console.log(err)
  })
})
.catch((err) => {
  console.log(err)
})
