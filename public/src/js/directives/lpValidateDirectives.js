// public/js/directives/lpValidateDirectives.js
angular.module('lpValidateDirectives', [])
    .directive('lpValidateUsername', function() {
        // username must start with a letter and may only contain letters, numbers, underscores, periods, and single quotes
        var username_regex = /^[a-z][a-z0-9_.\']*$/i;
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl) {
                ctrl.$validators.lpValidateUsername = function(modelValue, viewValue) {
                    if(username_regex.test(viewValue)) {
                        return true;
                    }
                    return false;
                };
            }
        };
    })

    .directive('lpTest', ['$q', 'UserDetail', function($q, UserDetail) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl) {
                ctrl.$asyncValidators.username = function (modelValue, viewValue) {
                    return $q(function (resolve, reject) {
                        UserDetail.checkValidity(viewValue).then(function() {
                            resolve();
                        }, function() {
                            reject();
                        });
                    });
                };
            }
        };
    }])

    .directive('lpValidateEmail', function() {
        var email_regex = /\b[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}\b/i;
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl) {
                ctrl.$validators.lpValidateEmail = function(modelValue, viewValue) {
                    if(email_regex.test(viewValue)) {
                        return true;
                    }
                    return false;
                };
            }
        };
    })
    
    .directive('lpValidateName', function() {
        var name_regex = /^[a-z][a-z\s,.\-\']*$/i;
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl) {
                ctrl.$validators.lpValidateName = function(modelValue, viewValue) {
                    if(name_regex.test(viewValue)) {
                        return true;
                    }
                    return false;
                };
            }
        };
    })
;