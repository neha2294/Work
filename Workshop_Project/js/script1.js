var myApp = angular.module('myApp', ['ngRoute']);
	myApp.config(function($routeProvider) {
		$routeProvider
		.when("/addBook", {
			templateUrl : "pages/addnewbook.html",
			controller: "myCtrl2"
		})
		.when("/addAuthor", {
			templateUrl : "pages/addnewauthor.html",
			controller: "myCtrl1"
		})
		.when("/editAuthor/:authName",{
			templateUrl : "pages/editAuthor.html",
			controller: "myCtrl1"
		})
		.when("/editBook/:bookName",{
			templateUrl : "pages/bookpage.html",
			controller: "myCtrl2"
		})
		.when("/", {
			templateUrl : "pages/table.html",
			controller:"myCtrl"
		})

	});		
	
	myApp.factory('myFactory', function($http){
		var factory = {};
		factory.commonMethod = function(Method,Url,Data){
			return $http({
				method : Method,
				url : Url,
				data : Data,
				headers: { 'Content-type': 'application/json;charset=utf-8'}
			})
		};
			return factory;
		
	});
	
	
	myApp.controller('myCtrl', function($scope,myFactory,$location){
		
		$scope.fetchDetails = function(){
			myFactory.commonMethod('GET','http://172.27.12.104:3000/book/list','').then(function(response) {
			$scope.emp = response.data;
			});
		}
		$scope.fetchDetails();
		
		$scope.getPath = function (){
			return($location.path());
		};
	});
	
	myApp.controller('myCtrl1', function($scope,$routeParams,$http,myFactory){
		
		$scope.editAuthorData = true;
		$scope.editBtn = true;
		$scope.updateBtn = false;
		
		$scope.addNew = function(authorData,avOn){
			console.log(authorData);
			console.log(avOn);
			authorData.skills = avOn;
			myFactory.commonMethod('POST','http://172.27.12.104:3000/author/new',authorData).then(function(response){
				alert("Record Added");
			})
		};
		
		$scope.skills=[];
		$scope.toggleSelection = function toggleSelection(avOn) {
			var idx = $scope.skills.indexOf(avOn);

			// is currently selected
			if (idx > -1) {
			  $scope.skills.splice(idx, 1);
			}

			// is newly selected
			else {
			  $scope.skills.push(avOn);
			}
		  };
		
		/*
		$scope.getAuthorData = function(author){
			var authorName={"name":author};
			myFactory.commonMethod('POST','http://172.27.12.104:3000/author/byname',authorName).then( function(data){
				$scope.e = data;
				console.log(data);
			}); 
		}
		$scope.getAuthorData($routeParams.authName);
		
		/*Function to display data in input field */
		function getAuthorData(author) {
			
			var authorName = {"name":author};
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
			
		/*To switch between update and edit button*/
		$scope.edit = function() {
			$scope.editBtn = false;
			$scope.updateBtn = true;
			$scope.editAuthorData = false;
		};
		
		/*Reset the input fields*/
		$scope.authorDetails = {};
		$scope.reset = function() {
        $scope.newAuthor = angular.copy($scope.authorDetails);
		};
		$scope.reset();
		
		/*To update author data*/	
		$scope.update = function(authorData,avOn){
			authorData.skills=avOn;
			myFactory.commonMethod('PUT','http://172.27.12.104:3000/author/update',authorData).then(function(response){
				alert("Record Added");
			})
		};
		
		/*To delete author data*/	
		$scope.deleteData = function(empid){
			
			data={"empid":empid}; 
			console.log(empid);
			myFactory.commonMethod('DELETE','http://172.27.12.104:3000/author/remove',data).then(function(response){
				alert("Record Deleted");
			});
		};
	});
	
	myApp.controller('myCtrl2', function($scope,$routeParams,$http,myFactory){
		
		$scope.editBookData = true;
		$scope.editBtn = true;
		$scope.updateBtn = false;
		
		$scope.addNew = function(bookData,avOn){
			console.log(bookData);
			console.log(avOn);
			bookData.availableOn = avOn;
			myFactory.commonMethod('POST','http://172.27.12.104:3000/book/new',bookData).then(function(response){
				alert("Record Added");
			})
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
		
		/*Function to display data in input field */
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
		/*To switch between update and edit button*/	
		$scope.edit = function() {
			$scope.editBtn = false;
			$scope.updateBtn = true;
			$scope.editBookData = false;
		};
		
		/*Reset the input fields*/
		$scope.bookDetails = {};
		$scope.reset = function() {
        $scope.newBook = angular.copy($scope.bookDetails);
		};
		$scope.reset();

		/*To update book data*/		
		$scope.update = function(bookData,avOn){
			bookData.availableOn=avOn;
			myFactory.commonMethod('PUT','http://172.27.12.104:3000/book/update',bookData).then(function(response){
				alert("Record Added");
			})
		};
		
		/*To delete the record*/	
		$scope.deleteData=function(isbn){
			data={"isbn":isbn}; 
			console.log(isbn);
			myFactory.commonMethod('DELETE','http://172.27.12.104:3000/book/remove',data).then(function(response){
				alert("Record Deleted");
			});
		};
	});
	