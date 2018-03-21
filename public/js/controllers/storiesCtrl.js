angular.module('centennial')
.controller('storiesCtrl', [
  '$scope',
  '$location',
  '$http',
  '$state',
  'loginService',
  storiesFn
])

  function storiesFn($anchorScroll, $location, $http, $state, loginService) {

    // console.log(loginService.logInCheck)
    loginService.logInCheck()

    console.log('at stories')

    var data = {
      name: this.name,
      email: this.email,
      company: this.company,
      title: this.title,
      location: this.location,
      story: this.story
    }

    this.onSubmit = function() {
      console.log('form reset')
      var form = document.getElementById("form");
      form.reset();
    }

    this.saveForm = function() {
      var data = {
        name: this.name,
        email: this.email,
        company: this.company,
        title: this.title,
        location: this.location,
        story: this.story
      }
      console.log('form saving')
      console.log(data)
      // var form = document.getElementById("form");
      // form.reset();
  return(
    $http({
      method: 'POST',
      url: '/api/submit',
      body: data

    }).then((response) => {console.log(response)})
    .catch((err) => {console.log(err)})
  )
}

  }
