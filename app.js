console.log('linked')
/* global angular */
angular.module('centennial', [
  'ui.router',
  'ngResource'
])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  Router
])


function Router($stateProvider, $urlRouterProvider, $locationProvider) {

  // $urlRouterProvider.otherwise('About')
  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });
  // $locationProvider.html5Mode(true)

  $stateProvider
  .state('Home', {
    url: '/',
    templateUrl: 'views/home.html'
  })
  .state('About', {
    url: '/about',
    templateUrl: 'views/about.html'
  })
  .state('Timeline', {
    url: '/timeline',
    templateUrl: 'views/timeline.html',
    controller: 'eraIndex',
    controllerAs: 'vm'
  })
  .state('Leaders', {
    url: '/leaders',
    templateUrl: 'views/leaders.html'
  })
  .state('Stories', {
    url: '/stories',
    templateUrl: 'views/stories.html'
  })
  .state('History', {
    url: '/history',
    templateUrl: 'views/history.html'
  })
  .state('newHome', {
    url: '/newhome',
    templateUrl: 'views/newHome.html'
  })
  .state('Events', {
    url: '/events',
    templateUrl: 'views/events.html'
  })
  
  $urlRouterProvider.otherwise('/')
  // $locationProvider.html5Mode(true)
}
