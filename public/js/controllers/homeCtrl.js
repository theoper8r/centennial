
angular.module('centennial')
.controller('homeCtrl', [
  '$scope',
  '$location',
  '$http',
  '$state',
  homeFn
])

console.log('linked')

  function homeFn( $location, $http, $state) {

    console.log('linked')

    // this.uncheck = function () {
    //   console.log('unchecking')
    //   document.getElementById('mob-toggle').checked = false
    //   console.log('unchecked')
    // }
  }
