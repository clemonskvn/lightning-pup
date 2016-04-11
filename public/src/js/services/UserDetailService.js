// public/js/services/UserDetail.js
angular.module('UserDetailService', []).factory('UserDetail', ['$http', function($http) {
    return {
        create : function(userData) {
            return $http.post('/api/user', userData);
        }
    };
}]);