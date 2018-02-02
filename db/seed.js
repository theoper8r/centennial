const FormData = require('./seeds.json')
const Form = require('./schema.js')

Form.remove({}).then(function(){
  FormData.forEach(function(Form) {
    Form.create({
      name:Form.name,
      email:Form.email,
      company: Form.company,
      title:Form.title,
      location:Form.location,
      story: Form.story
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
