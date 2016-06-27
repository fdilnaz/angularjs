(function(){
	"use strict";
	angular
		.module("ngClassifieds")
		.controller("classifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast){
      //$http.get('data/classifieds.json').then(function(classifieds){
        classifiedsFactory.getClassifieds().then(function(classifieds){
        $scope.classifieds = classifieds.data;
      
      });

        var contact = {
          name: "Fahmida",
          phone: "555 555 555",
          email: "fdilnaz@gmail.com"
        }

        $scope.openSidebar = function(){
          $mdSidenav('left').open();
        }

         $scope.closeSidebar = function(){
          $mdSidenav('left').close();
        }

        $scope.saveClassified = function(classified){
          if(classified){
          classified.contact = contact;
          $scope.classifieds.push(classified);
          $scope.classified = {};
          $scope.closeSidebar();
          showToast("Classified saved!");
          }
        }
		    $scope.editClassified = function(classified){
          $scope.editing = true;
          $scope.openSidebar();
          $scope.classified = classified;
        }

        $scope.saveEdit = function(){
          $scope.editing = false;
          $scope.classified = {};
          $scope.closeSidebar();
          showToast("Edit saved!");
        }

        function showToast(message){
          $mdToast.show(
            $mdToast.simple()
            .content(message)
            .position('top, right')
            .hideDelay(3000)
            ); 
        }
		});

})();

