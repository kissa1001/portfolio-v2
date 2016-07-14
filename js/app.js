angular.module('Portfolio', ['ngRoute','ngAnimate'])
.config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            templateUrl : 'templates/home.html',
            controller : 'HomeCtrl'
        }).when('/about', {
            templateUrl : 'templates/about.html',
            controller : 'AboutCtrl'
        }).when('/projects', {
            templateUrl : 'templates/projects.html',
            controller : 'ProjectsCtrl'
        });
    }])
    .controller('HomeCtrl', function($scope) {
        //empty for now
    })
    .controller('AboutCtrl', function($scope) {
        //empty for now
    })
    .controller('ProjectsCtrl', function($scope) {
        //empty for now
    });