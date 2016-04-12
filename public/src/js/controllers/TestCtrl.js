// public/js/controllers/TestCtrl.js
angular.module('TestCtrl', []).controller('TestController', ['$scope', 'Test', '$window', function($scope, Test, $window) {
    
    $('#myform').validator();
    
    $scope.formData = {};
    
    Test.get().then(function(testlist) {
        $scope.test = testlist;
    });
    
    $scope.submit = function(data) {
        Test.create(data).then(function(msg) {
            $scope.message = msg;
            $window.location.href='/test';
        });
    };
    
    $scope.tagline='Awesome user is awesome!';
}]);