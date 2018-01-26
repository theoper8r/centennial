angular
.module('centennial')
.controller('eraIndex', [
  'eraFactory',
  '$http',
  indexController
])

function indexController(eraFactory, $http) {
  console.log('at index')
  this.eras = eraFactory.query()
  console.log(eraFactory.query())
  console.log(this.eras)
  this.eraNum = 0
  // this.currentEra = eraFactory.get({decade: this.eraNum}).then((response) => {this.currentEra = response})
  // this.currentEra2 = eraFactory.query({decade: this.eraNum}).then((response) => {this.currentEra2 = response})
  console.log(this.currentEra)
  console.log(this.currentEra2)

  this.currEra = $http({
    method: 'GET',
    url: '/eras/' + this.eraNum
  }).then((response) => {this.currEra = response; console.log('h era' + response)})

  console.log(this.currEra)

  }
