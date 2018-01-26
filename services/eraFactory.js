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
  return $resource('/api/eras', null, {
    update: {method: 'PUT'}
  })
}
