angular.module('centennial')
.controller('historyCtrl', [
  '$scope',
  '$location',
  '$http',
  '$state',
  'loginService',
  storiesFn
])

  function storiesFn($anchorScroll, $location, $http, $state, loginService) {

    var counter = 1

    this.authUser = JSON.parse(localStorage.getItem('isLoggedIn'))
    console.log(this.authUser)

    // this.falseTest = function() {
    //   console.log('false testing')
    //   return false
    // }

    this.logout = function() {
      console.log('logging out from history ctrl')
      loginService.logOut()
      $location.path('/login')
    }

    console.log('at history')

  }
