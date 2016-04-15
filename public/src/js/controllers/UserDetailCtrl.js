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
    
    $scope.stateOptions = [{
        id: 1,
        label: 'TX'
    },{
        id: 2,
        label: 'AL'
    },{
        id: 3,
        label: 'AK'
    },{
        id: 4,
        label: 'AZ'
    },{
        id: 5,
        label: 'AR'
    },{
        id: 6,
        label: 'CA'
    },{
        id: 7,
        label: 'CO'
    },{
        id: 8,
        label: 'CT'
    },{
        id: 9,
        label: 'DE'
    },{
        id: 10,
        label: 'DC'
    },{
        id: 11,
        label: 'FL'
    },{
        id: 12,
        label: 'GA'
    },{
        id: 13,
        label: 'HI'
    },{
        id: 14,
        label: 'ID'
    },{
        id: 15,
        label: 'IL'
    },{
        id: 16,
        label: 'IN'
    },{
        id: 17,
        label: 'IA'
    },{
        id: 18,
        label: 'KS'
    },{
        id: 19,
        label: 'LA'
    },{
        id: 20,
        label: 'ME'
    },{
        id: 21,
        label: 'MD'
    },{
        id: 22,
        label: 'MA'
    },{
        id: 23,
        label: 'MI'
    },{
        id: 24,
        label: 'MN'
    },{
        id: 25,
        label: 'MS'
    },{
        id: 26,
        label: 'MO'
    },{
        id: 27,
        label: 'MT'
    },{
        id: 28,
        label: 'NE'
    },{
        id: 29,
        label: 'NV'
    },{
        id: 30,
        label: 'NH'
    },{
        id: 31,
        label: 'NJ'
    },{
        id: 32,
        label: 'NM'
    },{
        id: 33,
        label: 'NY'
    },{
        id: 34,
        label: 'NC'
    },{
        id: 35,
        label: 'ND'
    },{
        id: 36,
        label: 'OH'
    },{
        id: 37,
        label: 'OK'
    },{
        id: 38,
        label: 'OR'
    },{
        id: 39,
        label: 'PA'
    },{
        id: 40,
        label: 'PR'
    },{
        id: 41,
        label: 'RI'
    },{
        id: 42,
        label: 'SC'
    },{
        id: 43,
        label: 'SD'
    },{
        id: 44,
        label: 'TN'
    },{
        id: 45,
        label: 'UT'
    },{
        id: 46,
        label: 'VT'
    },{
        id: 47,
        label: 'VA'
    },{
        id: 48,
        label: 'WA'
    },{
        id: 49,
        label: 'WV'
    },{
        id: 50,
        label: 'WI'
    },{
        id: 51,
        label: 'WY'
    }];
    $scope.formData.state = $scope.stateOptions[0];
    
    $scope.submit = function(data) {
        UserDetail.create(data).then(function(msg) {
            console.log("test");
            $scope.message = msg;
            //$window.location.href='/profile';
        });
    };
}]);