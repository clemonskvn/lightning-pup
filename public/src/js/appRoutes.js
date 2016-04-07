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
		});
	$locationProvider.html5Mode(true);
}]);
