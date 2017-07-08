var mainApp = angular.module('myResponsiveApp', []);

 mainApp.service('CalcService', function(){
            this.square = function(a) {
               return a*a
            }
         });

