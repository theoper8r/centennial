angular.module('centennial')
.controller('storiesCtrl', [
  '$scope',
  '$location',
  '$http',
  '$state',
  storiesFn
])

  function storiesFn($anchorScroll, $location, $http, $state) {

    this.onSubmit = function() {
      console.log('form reset')
      var form = document.getElementById("form");
      form.reset();
    }

  }
