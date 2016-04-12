// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		// help page
		.when('/help', {
			templateUrl: 'views/help.html',
			controller: 'HelpController'
		})
    
        .when('/profile', {
            templateUrl: 'views/userdetails.html',
            controller: 'UserDetailController'
        })
        
        .when('/test', {
            templateUrl: 'views/test.html',
            controller: 'TestController'
        });
	$locationProvider.html5Mode(true);
}]);
