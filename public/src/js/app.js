// public/js/app.js
angular.module('sampleApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'HelpCtrl']);

var lock = new Auth0Lock('fxrksgu1aOqhoN0SqGLMZyAG3fFuPMNM', 'kclemons.auth0.com');
