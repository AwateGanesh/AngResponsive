var app = angular.module("myApp");

myapp.controller("appCtrl", function ($scope,$rootScope,$location,menuService) {
$scope.menuItems = menuService.getMenuItems()
$scope.toggleMenu = function(){
     $scope.firstLoad = false;
     $scope.isExpanded = !$scope.isExpanded;
}


 $scope.loadPage = function(itemId){
         $location.path('/'+itemId);
          console.log($location.path);
          console.log($location.path.templateUrl);
 }

 $scope.getClass = function(itemId){
                           $rootScope.firstLoad = false;
                           $scope.CurrentPath = '/'+itemId;
                           return ($location.path() == $scope.CurrentPath ? 'selected' : '');}

});