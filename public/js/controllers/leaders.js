angular.module('centennial')
.controller('ScrollCtrl', [
  '$scope',
  '$location',
  '$anchorScroll',
  anchorScroll
])

  function anchorScroll($anchorScroll, $location) {

    console.log('at leaders')

    this.leaders = []
    this.gotoAnchor = function(x) {
      console.log('scrolling')
      var newHash = 'anchor' + x;
      if ($location.hash() !== newHash) {
        // set the $location.hash to `newHash` and
        // $anchorScroll will automatically scroll to it
        $location.hash('anchor' + x);
      } else {
        // call $anchorScroll() explicitly,
        // since $location.hash hasn't changed
        $anchorScroll();
      }
    };

    this.gotoAnchorPage = function(x) {
      console.log('scrolling page')
      $location.path('/leaders');

              $timeout(function() {
                 $anchorScroll(1);
              }, 500);
    };


  }
