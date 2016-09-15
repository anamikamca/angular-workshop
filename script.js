var myApp = angular.module("myModule",[]);
myApp.filter( "age",function ()
{
  return function (age){
	  switch(true){
		case ( age > 29 && age < 45 ):
		   return "Adult";		   
		case ( age < 21 ):
		   return "child";		
	    case ( age > 45 ):
		   return "Old";	
		default	:
			return "Old";			
	  }
  }

});
myApp.controller( "myController",function ($scope)
{
  var employee = {
	  firstName: 'Anamika',
	  lastName : 'Shrivastava',
	  gender :'female',
	  profilepic :'images/pic.jpg'
  };
  $scope.employee = employee;
});
myApp.controller( "secondController",function ($scope)
{
  var employees = [{
	  firstName: 'Anamika',
	  lastName : 'Shrivastava',
	  gender :'female',
	  profilepic :'images/pic.jpg',
	  dislike:0,
	  like:0,
	  dateofbirth: new Date("February 12 1986"),
	  salary: 50000.90,
	  age:30
  },
  {
	  firstName: 'Akash',
	  lastName : 'Shrivastava',
	  gender :'male',
	  profilepic :'images/pic.jpg',
	  dislike:0,
	  like:0,
	  dateofbirth: new Date("August 02 1991"),
	  salary: 60000.90,
	  age:20
  }
  ];
    $scope.employees = employees;
	$scope.rowlimit = 2;
	$scope.sortcolumn = "-salary";
	$scope.reverseSort = false;
	$scope.sortData = function(column){		 
		  $scope.reverseSort=($scope.sortcolumn == column)? !$scope.reverseSort : false; 
		  $scope.sortcolumn = column;
	}
	$scope.getSortClass = function(column){		 
		  if($scope.sortcolumn == column){
			 return $scope.reverseSort ?"arrow-down":"arrow-up"; 
		  }
		  return '';
	}
	
	$scope.likebutton = function(employee){		 
		  employee.like++;  
	}
	$scope.dislikebutton = function(employee){
		  employee.dislike++;  
	}
  var countries = [
	  {
		name :"UK",
			cities:[
				{ name:"ABC1" },
				{ name:"ABC2" },
				{name:"ABC3"}
			]  
	  },
	   {
		name :"USA",
			cities:[
				{name:"XYZ1"},
				{name:"XYZ2"},
				{name:"XYZ3"}
			]  
	  },
	   {
		name :"India",
			cities:[
				{name:"Hello1"},
				{name:"Hello2"},
				{name:"Hello3"}
			]  
	  }
  ];
    $scope.countries = countries;

});

