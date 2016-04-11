// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', ['$scope', function($scope) {

	$scope.tagline = 'To the moon and back!';
    $scope.user = 'test';
    $scope.pass = '123';
    
    /*$("submit").click(function() {
        $.post("http://localhost:8080/api/user", {user: $scope.user, password: $scope.pass}, function(data) {
            if(data === 'done')
                {
                    alert("login success");
                }
        });
    });*/
    

}]);
