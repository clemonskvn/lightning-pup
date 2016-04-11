// public/js/controllers/HelpCtrl.js
angular.module('UserDetailCtrl', []).controller('UserDetailController', ['$scope', '$http', function($scope, $http) {
    $scope.tagline='Awesome user is awesome!';
    
    $scope.submit = function() {
        $http.post('/api/user', $scope.formData)
            .success(function(data) {
            $scope.formData = {};
            $scope.holder = data;
            console.log(data);
        })
            .error(function(data) {
            console.log('ERROR: ' + data);
        });
    };
}]);