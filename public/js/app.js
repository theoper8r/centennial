/* global angular */
if (typeof window === 'undefined') {
    global.window = {}
}

angular.module('centennial', [
  'ngResource',
  'ui.router'
])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  Router
])
.run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
}])


function Router($stateProvider, $urlRouterProvider, $locationProvider, $window) {

  // $urlRouterProvider.otherwise('About')
  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });
  // $locationProvider.html5Mode(true)

  $locationProvider.hashPrefix('')

  $stateProvider
  .state('Home', {
    url: '/',
    templateUrl: 'assets/js/views/home.html'
  })
  .state('About', {
    url: '/about',
    templateUrl: 'assets/js/views/about.html'
  })
  .state('Timeline0', {
    url: '/timeline0',
    templateUrl: 'assets/js/views/timeline/1900.html',
    controller: 'eraIndex',
    controllerAs: 'vm'
  })
  .state('Timeline1', {
    url: '/timeline1',
    templateUrl: 'assets/js/views/timeline/1910.html',
    controller: 'eraIndex',
    controllerAs: 'vm'
  })
  .state('Timeline2', {
    url: '/timeline2',
    templateUrl: 'assets/js/views/timeline/1920.html',
    controller: 'eraIndex',
    controllerAs: 'vm'
  })
  .state('Timeline3', {
    url: '/timeline3',
    templateUrl: 'assets/js/views/timeline/1930.html',
    controller: 'eraIndex',
    controllerAs: 'vm'
  })
  .state('Timeline4', {
    url: '/timeline4',
    templateUrl: 'assets/js/views/timeline/1940.html',
    controller: 'eraIndex',
    controllerAs: 'vm'
  })
  .state('Timeline5', {
    url: '/timeline5',
    templateUrl: 'assets/js/views/timeline/1950.html',
    controller: 'eraIndex',
    controllerAs: 'vm'
  })
  .state('Timeline6', {
    url: '/timeline6',
    templateUrl: 'assets/js/views/timeline/1960.html',
    controller: 'eraIndex',
    controllerAs: 'vm'
  })
  .state('Timeline7', {
    url: '/timeline7',
    templateUrl: 'assets/js/views/timeline/1970.html',
    controller: 'eraIndex',
    controllerAs: 'vm'
  })
  .state('Timeline8', {
    url: '/timeline8',
    templateUrl: 'assets/js/views/timeline/1980.html',
    controller: 'eraIndex',
    controllerAs: 'vm'
  })
  .state('Timeline9', {
    url: '/timeline9',
    templateUrl: 'assets/js/views/timeline/1990.html',
    controller: 'eraIndex',
    controllerAs: 'vm'
  })
  .state('Timeline10', {
    url: '/timeline10',
    templateUrl: 'assets/js/views/timeline/2000.html',
    controller: 'eraIndex',
    controllerAs: 'vm'
  })
  .state('Timeline11', {
    url: '/timeline11',
    templateUrl: 'assets/js/views/timeline/2010.html',
    controller: 'eraIndex',
    controllerAs: 'vm'
  })
  .state('Leaders', {
    url: '/leaders',
    templateUrl: 'assets/js/views/leaders.html',
    controller: 'ScrollCtrl',
    controllerAs: 'vm'
  })
  .state('Stories', {
    url: '/stories',
    templateUrl: 'assets/js/views/stories.html',
    controller: 'storiesCtrl',
    controllerAs: 'vm'
  })
  .state('History', {
    url: '/history',
    templateUrl: 'assets/js/views/history.html'
  })
  .state('newHome', {
    url: '/newhome',
    templateUrl: 'assets/js/views/newHome.html'
  })
  .state('Events', {
    url: '/events',
    templateUrl: 'assets/js/views/events.html'
  })

  // $urlRouterProvider.otherwise('/')
  $locationProvider.html5Mode(true)
}
