
angular.module('centennial')
.controller('homeCtrl', [
  '$scope',
  '$location',
  '$http',
  '$state',
  'loginService',
  homeFn
])


  function homeFn( $location, $http, $state, loginService ) {

    console.log('linked')


    // this.uncheck = function () {
    //   console.log('unchecking')
    //   document.getElementById('mob-toggle').checked = false
    //   console.log('unchecked')
    // }
  }
