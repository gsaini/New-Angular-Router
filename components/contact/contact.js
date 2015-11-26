angular.module('app.contact', ['ngNewRouter'])
  .controller('ContactController', ['$routeParams', ContactController]);

function ContactController ($routeParams) {
  this.id = $routeParams.id;
}