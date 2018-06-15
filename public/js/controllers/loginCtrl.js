angular.module('centennial')
.controller('loginCtrl', [
  '$scope',
  '$location',
  '$http',
  '$state',
  '$timeout',
  'loginService',
  loginFn
])


  function loginFn($scope, $location, $http, $state, $timeout, loginService) {

    console.log(loginService.isLoggedIn)

    console.log('linked at login2')

    this.emailLogin = ''
    this.passwordLogin = ''

    this.validateUser = function(password, email) {
      console.log('validating')
      if (password == 'iaapa100pw' && email == 'pwilliam@iaapa.org') {
        console.log('valid login')
        // loginService.isLoggedIn = true
        // console.log(loginService.isLoggedIn)
        loginService.logIn()
        var loginForm = document.getElementById("loginForm");
        loginForm.reset();
        $timeout(function(){
          loginService.isLoggedIn = false
          console.log('logged out')
        }, 1800000)
        $location.path("/history")
      }
      else {

        this.errorMessage = 'invalid login'
      }
    }

    this.test = function() {
      console.log('test')

    }
  }
