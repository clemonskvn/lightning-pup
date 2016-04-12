// public/js/services/TestService.js
angular.module('TestService', []).factory('Test', ['$http', function($http) {
    return {
        get : function() {
            return $http.get('/api/test');
        },
        
        create : function(data) {
            return $http.post('/api/test', data);
        }
    };
}]);