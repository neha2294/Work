var myApp = angular.module('myApp', ['ngRoute']);
	myApp.config(function($routeProvider) {
		$routeProvider
		.when("/addBook", {
			templateUrl : "addnewbook.html",
		})
		.when("/addAuthor", {
			templateUrl : "addnewauthor.html",
		})
		.when("/editAuthor/:authName",{
			templateUrl : "editAuthor.html",
			controller: "myCtrl1"
		})
		.when("/editBook/:bookName",{
			templateUrl : "bookpage.html",
			controller: "myCtrl2"
		})
		.when("/", {
			templateUrl : "table.html",
			controller:"myCtrl"
		})

	});		
    
	myApp.controller('myCtrl', function ($scope, $http){
		
        $http.get("http://172.27.12.104:3000/book/list").then(function(response) {
		  $scope.emp = response.data;
        });
	});
		
		
	myApp.controller('myCtrl1',function($scope,$http,$routeParams){

	$scope.editAuthorData = true;
	$scope.editBtn = true;
	$scope.updateBtn = false;

	function getAuthorData(author) {
		
		var authorName={"name":author};
		var req = {
				method: 'POST',
				url: 'http://172.27.12.104:3000/author/byname',
				data: authorName,
				success: function(data){
				console.log(data);
				} 
			};
			
			return $http(req).then(function(response){
			return response.data;
			}); 
		}
		
		getAuthorData($routeParams.authName).then(function(result){
			$scope.e = result;
		});
		
		$scope.edit = function() {
			$scope.editBtn = false;
			$scope.updateBtn = true;
			$scope.editAuthorData = false;
		};
		
		$scope.update = function(authorData) {
			$http.put('http://172.27.12.104:3000/author/update',authorData).then(function(response){
			console.log(response.data);
			});
		};
	});		
	
	myApp.controller('myCtrl2',function($scope,$http,$routeParams){

	$scope.editBookData = true;
	$scope.editBtn = true;
	$scope.updateBtn = false;

	function getBookData(isbn) {
		console.log(isbn);
		var isbn={"isbn":isbn};
		var req = {
				method: 'POST',
				url: 'http://172.27.12.104:3000/book/byisbn',
				data: isbn,
				success: function(data){
				console.log(data);
				} 
			};
			
			return $http(req).then(function(response){
			return response.data;
			}); 
		}
		
		getBookData($routeParams.bookName).then(function(result){
			$scope.book = result;
			console.log(result);
		});
		
		$scope.edit = function() {
			$scope.editBtn = false;
			$scope.updateBtn = true;
			$scope.editBookData = false;
		};
		
		$scope.update = function(bookData) {
			console.log(bookData);
			$http.put('http://172.27.12.104:3000/book/update',bookData).then(function(response){
			console.log(response.data);
			});
		};
		
		
		$scope.availableOn=[];
		$scope.toggleSelection = function toggleSelection(avOn) {
			var idx = $scope.availableOn.indexOf(avOn);

			// is currently selected
			if (idx > -1) {
			  $scope.availableOn.splice(idx, 1);
			}

			// is newly selected
			else {
			  $scope.availableOn.push(avOn);
			}
		  };
		$scope.deleteData=function(isbn){
			var config={
			data:{"isbn":isbn}, 
			headers: {
					'Content-type': 'application/json;charset=utf-8'
				}};
			console.log(isbn);
			$http.delete('http://172.27.12.104:3000/book/remove',config).then(function(response){
				alert(response.data.message);
			});

		}
	});		