var myapp = angular.module("myApp");
myapp.service('menuService', function ($rootScope) {
$rootScope.firstLoad = true;
this.getMenuItems = function(){
    menuItems = [
    {
      "itemId":"dashboard",
      "icon":"fa-tachometer",
      "label":"Profile"
    },
	{
      "itemId":"firstPage",
      "icon":"fa-user",
      "label":"Resume"
    },
    {
      "itemId":"secondPage",
      "icon":"fa-graduation-cap",
       "label":"Education"
     },
    {
      "itemId":"thirdpage",
      "icon":"fa-briefcase",
      "label":"Portfolio"
     },
    {
      "itemId":"contactme",
      "icon":"fa-phone",
      "label":"Contact"
     }
  ]

  return menuItems;
  }

 });