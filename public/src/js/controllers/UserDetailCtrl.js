// public/js/controllers/UserDetailCtrl.js
angular.module('UserDetailCtrl', []).controller('UserDetailController', ['$scope', '$window', 'UserDetail', function($scope, $window, UserDetail) {
    
    $scope.formData = {};
    
    UserDetail.get().then(function(userlist) {
        $scope.users = userlist;
    });
    
    $scope.submit = function(data) {
        UserDetail.create(data).then(function(msg) {
                $scope.message = msg;
                //$window.location.href='/profile';
        });
    };
}]);