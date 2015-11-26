angular.module('myApp', ['ngNewRouter', 'app.home', 'app.about', 'app.contact'])
	.config(function($locationProvider) {
		// use the HTML5 History API
        $locationProvider.html5Mode(true);
	})
    .controller('AppController', ['$router', AppController]);

AppController.$routeConfig = [
  { path: '/', component: 'home' },
  { path: 'about', component: 'about' },
  { path: 'contact', component: 'contact' },
  
];

function AppController ($router) {

}


