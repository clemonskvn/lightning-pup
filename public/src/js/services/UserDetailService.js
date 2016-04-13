// public/js/services/UserDetailService.js
angular.module('UserDetailService', []).factory('UserDetail', ['$http', function($http) {
    return {
        get : function() {
            return $http.get('/api/user');
        },
        
        create : function(userData) {
            return $http.post('/api/user', userData);
        },
        
        delete : function(id) {
            return $http.delete('/api/user/' + id);
        },
        
        checkValidity : function(username) {
            return $http.get('/api/user/' + username);
        }
    };
}]);