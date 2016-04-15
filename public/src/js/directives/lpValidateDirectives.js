// public/js/directives/lpValidateDirectives.js
angular.module('lpValidateDirectives', [])
    .directive('lpValidateUsername', function() {
        var username_regex = /^[a-z][a-z0-9_.\']*$/i;
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl) {
                ctrl.$validators.lpValidateUsername = function(modelValue, viewValue) {
                    if(username_regex.test(viewValue)) {
                        ctrl.$setValidity("usernameInvalidFormat", true);
                        return true;
                    }
                    ctrl.$setValidity("usernameExists", true);
                    ctrl.$setValidity("usernameInvalidFormat", false);
                    return false;
                };
            }
        };
    })

    .directive('lpValidatePassword', function() {
        var uppercase_regex = /[A-Z]/,
            lowercase_regex = /[a-z]/,
            numeric_regex = /\d/,
            nonalpha_regex = /\W/;
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl) {
                ctrl.$validators.lpValidatePassword = function(modelValue, viewValue) {
                    if(viewValue === undefined) {
                        scope.resetPasswordValidity();
                        ctrl.$setValidity("passwordInvalidLength", false);
                        return false;
                    } else if(viewValue.length < 8) {
                        scope.resetPasswordValidity();
                        ctrl.$setValidity("passwordInvalidLength", false);
                        return false;
                    } else if(!uppercase_regex.test(viewValue)) {
                        scope.resetPasswordValidity();
                        ctrl.$setValidity("passwordInvalidUpper", false);
                        return false;
                    } else if(!lowercase_regex.test(viewValue)) {
                        scope.resetPasswordValidity();
                        ctrl.$setValidity("passwordInvalidLower", false);
                        return false;
                    } else if(!numeric_regex.test(viewValue)) {
                        scope.resetPasswordValidity();
                        ctrl.$setValidity("passwordInvalidNumeric", false);
                        return false;
                    } else if(!nonalpha_regex.test(viewValue)) {
                        scope.resetPasswordValidity();
                        ctrl.$setValidity("passwordInvalidNonalpha", false);
                        return false;
                    }
                    scope.resetPasswordValidity();
                    return true;
                };
            }
        };
    })

    .directive('lpValidateUniqueUsername', ['$q', 'UserDetail', function($q, UserDetail) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl) {
                ctrl.$asyncValidators.username = function (modelValue, viewValue) {
                    return $q(function (resolve, reject) {
                        UserDetail.checkValidity(viewValue).then(function(data) {
                            if(data.data === null) {
                                ctrl.$setValidity("usernameExists", true);
                                resolve();
                            }
                            else {
                                ctrl.$setValidity("usernameExists", false);
                                reject(data.data.errorMessage);
                            }
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
                        ctrl.$setValidity("emailInvalidFormat", true);
                        return true;
                    }
                    ctrl.$setValidity("emailInvalidFormat", false);
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
                        ctrl.$setValidity("nameInvalidFormat", true);
                        return true;
                    }
                    ctrl.$setValidity("nameInvalidFormat", false);
                    return false;
                };
            }
        };
    })

    .directive('lpValidatePhone', function() {
        var phone_regex = /\d{10}/;    
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl) {
                ctrl.$validators.lpValidateName = function(modelValue, viewValue) {
                    var testStr = viewValue.replace(/\-/g, '');
                    testStr = testStr.replace(/\(/g, '');
                    testStr = testStr.replace(/\)/g, '');
                    testStr = testStr.replace(/\+/g, '');
                    testStr = testStr.replace(/\s/g, '');
                    if(phone_regex.test(testStr)) {
                        ctrl.$setValidity("phoneInvalidFormat", true);
                        return true;
                    }
                    ctrl.$setValidity("phoneInvalidFormat", false);
                    return false;
                };
            }
        };
    })
;