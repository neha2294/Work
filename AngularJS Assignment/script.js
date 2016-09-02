var myApp = angular.module('myApp', []);

	
    
	myApp.controller('myCtrl', function ($scope, $http){
		$scope.click = function() {
        $http.get('json/demo.json').success(function(data) {
          $scope.emp = data;
        });
		};
		
		$scope.orderbyme = function(x) {
        $scope.myOrderBy = x;
		};
		
		$scope.IsVisible = false;
            $scope.ShowHide = function () {
				$scope.IsVisible = $scope.IsVisible ? false : true;
            }
		
		$scope.delete = function(index){
			  $scope.emp.splice(index,1);
		  };
		
	
		
		$scope.changeData=function(empl,type){
		//type->0 =>edit and type->1 => add
			if(type===0){
				$scope.e=empl;
			}else if(type===1){
				$scope.emp.push(empl);
			}
		}
	});

	
