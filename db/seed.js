const eraData = require('./seeds.json')
const Era = require('./schema.js')

Era.remove({}).then(function(){
  eraData.forEach(function(era) {
    Era.create({
      title:era.title,
      summary:era.summary,
      decade: era.decade,
      articles: era.articles
    })
      .then((newEra) => {
        console.log(newEra)
      })
      .catch((err) => {
        console.log(err)
      })

  })
  .then(() => {
    process.exit()
  })
})
