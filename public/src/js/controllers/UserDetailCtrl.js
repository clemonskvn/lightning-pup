// public/js/controllers/UserDetailCtrl.js
angular.module('UserDetailCtrl', []).controller('UserDetailController', ['$scope', '$window', 'UserDetail', function($scope, $window, UserDetail) {
    
    $scope.formData = {};
    
    $scope.checkValidity = function(username) {
        return UserDetail.checkValidity(username);
    };
    
    UserDetail.get().then(function(userlist) {
        $scope.users = userlist;
    });
    
    $scope.checkPassword = function() {
        if ($scope.formData.password === $scope.formData.validate_password) {
            $scope.newUserForm.validate_password.$setValidity("mismatchPassword", true);
        } else {
            $scope.newUserForm.validate_password.$setValidity("mismatchPassword", false);
        }
    };
    
    $scope.resetPasswordValidity = function() {
        $scope.newUserForm.password.$setValidity("mismatchPassword", true);
        $scope.newUserForm.password.$setValidity("passwordInvalidLength", true);
        $scope.newUserForm.password.$setValidity("passwordInvalidUpper", true);
        $scope.newUserForm.password.$setValidity("passwordInvalidLower", true);
        $scope.newUserForm.password.$setValidity("passwordInvalidNumeric", true);
        $scope.newUserForm.password.$setValidity("passwordInvalidNonalpha", true);
    };
    
    $scope.phoneTypeOptions = [{
        id: 1,
        label: 'MOBILE'
    },{
        id: 2,
        label: 'WORK'
    },{
        id: 3,
        label: 'HOME'
    },{
        id: 4,
        label: 'FAX'
    },{
        id: 5,
        label: 'PAGER'
    },{
        id: 6,
        label: 'OTHER'
    }];
    $scope.formData.phone_type = $scope.phoneTypeOptions[0];
    
    $scope.submit = function(data) {
        UserDetail.create(data).then(function(msg) {
            console.log("test");
            $scope.message = msg;
            //$window.location.href='/profile';
        });
    };
}]);