angular.module('centennial')
.factory('loginService', function() {
  return {
    logIn: function() {
            localStorage.setItem('isLoggedIn', true)
            console.log('login is ' + localStorage.getItem('isLoggedIn'))
        },
    logOut: function() {
      localStorage.setItem('isLoggedIn', false)
      console.log('login is ' + localStorage.getItem('isLoggedIn'))
    },
    authCheck: function() {
      console.log('login check is ' + localStorage.getItem('isLoggedIn'))
      return localStorage.getItem('isLoggedIn')
    }
    // isLoggedIn: this.isLoggedIn
  }
})
