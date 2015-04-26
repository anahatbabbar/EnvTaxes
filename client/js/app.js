angular.module('myapp', ['ngRoute', 'myControllers']).
    config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/', {
                templateUrl: '../client/view/dashboard.html',
                controller: 'dashboardCtrl'
                }).
            when('/fad', {
                templateUrl: '../client/view/baseTableView.html',
                controller: 'fadCtrl'
                }).
            otherwise({
               redirectTo: '/' 
                });
    }]);