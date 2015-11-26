angular.module('app.about', ['ngNewRouter'])
  .controller('AboutController', ['$routeParams', AboutController]);

function AboutController ($routeParams) {
  this.id = $routeParams.id;
}