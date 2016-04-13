// public/js/directives/lpDirectives.js
angular.module('lpDirectives', [])
    .directive('lp-validate-email', function() {
        var email_regex = /\b[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}\b/i;
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl) {
                ctrl.$parsers.unshift(function(value) {
                    if(value) {
                        return email_regex.test(value);
                    }
                    return true;
                });
            }
        };
    })
    
    .directive('lpValidateName', function() {
        //var name_regex = /^[a-z][a-z ,.'-]*$/i;
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