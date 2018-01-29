// console.log('linked')
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
  .state('Timeline0', {
    url: '/timeline0',
    templateUrl: 'views/timeline/1900.html',
    controller: 'eraIndex',
    controllerAs: 'vm'
  })
  .state('Timeline1', {
    url: '/timeline1',
    templateUrl: 'views/timeline/1910.html',
    controller: 'eraIndex',
    controllerAs: 'vm'
  })
  .state('Timeline2', {
    url: '/timeline2',
    templateUrl: 'views/timeline/1920.html',
    controller: 'eraIndex',
    controllerAs: 'vm'
  })
  .state('Timeline3', {
    url: '/timeline3',
    templateUrl: 'views/timeline/1930.html',
    controller: 'eraIndex',
    controllerAs: 'vm'
  })
  .state('Timeline4', {
    url: '/timeline4',
    templateUrl: 'views/timeline/1940.html',
    controller: 'eraIndex',
    controllerAs: 'vm'
  })
  .state('Timeline5', {
    url: '/timeline5',
    templateUrl: 'views/timeline/1950.html',
    controller: 'eraIndex',
    controllerAs: 'vm'
  })
  .state('Timeline6', {
    url: '/timeline6',
    templateUrl: 'views/timeline/1960.html',
    controller: 'eraIndex',
    controllerAs: 'vm'
  })
  .state('Timeline7', {
    url: '/timeline7',
    templateUrl: 'views/timeline/1970.html',
    controller: 'eraIndex',
    controllerAs: 'vm'
  })
  .state('Timeline8', {
    url: '/timeline8',
    templateUrl: 'views/timeline/1980.html',
    controller: 'eraIndex',
    controllerAs: 'vm'
  })
  .state('Timeline9', {
    url: '/timeline9',
    templateUrl: 'views/timeline/1990.html',
    controller: 'eraIndex',
    controllerAs: 'vm'
  })
  .state('Timeline10', {
    url: '/timeline10',
    templateUrl: 'views/timeline/2000.html',
    controller: 'eraIndex',
    controllerAs: 'vm'
  })
  .state('Timeline11', {
    url: '/timeline11',
    templateUrl: 'views/timeline/2010.html',
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
  $locationProvider.html5Mode(true)
}
