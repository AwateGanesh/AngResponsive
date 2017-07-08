var myapp = angular.module("myApp",["ngRoute"]);
myapp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/dashboard.html"
    }).when("/firstPage", {
        templateUrl : "views/firstPage.html",
        controller : "appCtrl"
    }).when("/secondPage", {
        templateUrl : "views/secondPage.html",
        controller : "appCtrl"
    }).when("/contactme", {
            templateUrl : "views/contactme.html",
            controller : "appCtrl"
        }).
     otherwise({
         redirectTo: '/'
       });

});
