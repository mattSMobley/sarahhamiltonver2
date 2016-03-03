angular.module("app")
.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html'
      })
      .when('/prices', {
        templateUrl: 'views/prices.html'
      });

});
