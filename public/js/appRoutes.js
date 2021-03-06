angular.module('appRoutes', [])
  .config([
    '$routeProvider',
    '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/home.html',
          controller: 'MainController'
        })
        .when('/movies', {
          templateUrl: 'views/movie.html',
          controller: 'MovieController'
        });
      $locationProvider.html5Mode(
        {
          enabled: true,
          requireBase: false
        });

  }]
);
