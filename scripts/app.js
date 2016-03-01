angular.module("todoListApp", []) //in order to create the application, we'll use Angular's module method. The first parameter is the name of the application. We'll also provide a second parameter, which is an empty array. The second parameter defines your application's dependencies. It may seem odd to provide an empty array. The reason you include the empty array is so that Angular knows to create an app called ToDoListApp.
.controller('mainCtrl', function($scope) { //in order to create a controller in our application, use the controller method in our app.js file. We'll name our controller mainCtrl since our app will only have one controller. BTW, convention in Angular is to use the four letter Ctrl shortcut after the controller name. The second parameter in the controller function is an anonymous callback function. This function takes one parameter, the scope variable. For now, think of scope as being an area of operation for your controller. What I mean is that this controller's functions will only work in the part of the application you've allowed them to.
	$scope.helloWorld = function() { //in order to create a function that can be used to alter the application, we need to attach it to the scope object. Let's create a function called helloWorld. This is an anonymous function, and it will log the string.
		console.log("This is helloWorld controller function in the mainCtrl");
	};
})

.controller('coolCtrl', function ($scope) {
	$scope.whoAmI = function () {
		console.log("Hello there, this is the coolCtrl function");
  };
})

.controller('imASibling', function ($scope) {
	$scope.foobar = 1234;
});