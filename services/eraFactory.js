angular.module('centennial')
.factory('eraFactory', [
  '$resource',
  eraFactory
])
// .factory('SearchFactory', [
//   '$resource',
//   SearchFactory
// ])

function eraFactory($resource) {
  // return $resource('/api/eras', null, {
  //   update: {method: 'PUT'}
  // })

  var decade = 0
   function setDecade(linkDecade){
     console.log('ran set')
     // console.log(linkDecade)
     decade = linkDecade

     console.log('decade: ' + decade)
    return decade
  }

  function getDecade() {
    return decade
  }

  function addDec() {
    decade += 1
    console.log('added to ' + decade)
    return decade
  }

  function minusDec() {
    decade -= 1
    console.log('minused to ' + decade)
    return decade
  }
  return {setDecade: setDecade,
          getDecade: getDecade,
          decade: decade,
          addDec: addDec,
          minusDec: minusDec
  }
}
