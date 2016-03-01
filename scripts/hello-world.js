angular.module('todoListApp') //here we use Angular's module method again. The first parameter is going to be the name of our application. This time we won't include the second parameter as an empty array. This is because we don't want Angular to create a new module, we want it to look for the already existing to do list app. Remember, this module was created in our app.js file. And this is also the reason that app.js needs to be loaded first in our index.html file
.directive('helloWorld', function() { //use the directive method to attach a new directive to the module. The first parameter is the name of the directive. 2nd parameter is a callback function. And this callback function returns an object.
	return {
		template: "This is hello world directive", //we'll make a simple directive by providing the template key. Inside the template key, we could put HTML that says This is the hello world directive.
		restrict: "E" //Restrict allows you to restrict how the directive is used. For instance we can restrict the directive to only be used as an element only.
	};
});