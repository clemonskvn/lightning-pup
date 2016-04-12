// public/js/controllers/UserDetailCtrl.js
angular.module('UserDetailCtrl', []).controller('UserDetailController', ['$scope', '$window', 'UserDetail', function($scope, $window, UserDetail) {
    
    var validateForm = function() {
        var nameregex = /^[A-Za-z][A-Za-z ,.'-]*$/;
        if (!nameregex.test($scope.formData.first_name) || !nameregex.text($scope.formData.last_name)) {
            alert("Name must be alphabetical with the exception of spaces and special characters(,.'-).");
            return false;
        }
        var miregex = /[A-Za-z]$/;
        if (!miregex.test($scope.formData.middle_initial)) {
            alert("Middle initial must only be a single alphabetical character.");
            return false;
        }
        var emailregex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
        if (!emailregex.test($scope.formData.email)) {
            alert("Email is not valid.");
            return false;
        }
        var phoneregex = /\d{3}-\d{3}-\d{4}/;
        if (!phoneregex.test($scope.formData.phone)) {
            alert("Phone must follow the syntax '000-000-0000'");
            return false;
        }
        return true;
    };
    
    $scope.formData = {};
    
    UserDetail.get().then(function(userlist) {
        $scope.users = userlist;
    });
    
    $scope.submit = function(data) {
        if(validateForm()) {
            UserDetail.create(data).then(function(msg) {
                $scope.message = msg;
                //$window.location.href='/profile';
            });
        }
        
    };
}]);