angular.module('CardsAgainstAssembly')
  .directive('wdiCard', wdiCard);
//first 'wdiCard' is a string for the file you're currently in - it's naming it
//in HTML, it's referred to by the string name
//the second wdiCard matches the controller
//the second wdiCard matches the function
//first wdiCard names the controller
//second wdiCard names the function - name of the function
  //spinecase - dash in the middle (dash-delimited) (ka-bob case)
  //camelCase in JavaScript, ka-bob case in HTML

function wdiCard(){
  var directive = {
    scope: {
      // @ means it's expecting a string
      question: '@'
    },
    restrict: 'E',
    templateUrl: 'templates/card.html',
  };
  return directive;
};

//restrict: 'EACM' - Generally, only use EA - Element and Attribute
//lean towards controller than link
//controller and link are both places to put JavaScript for logic
//putting everything in link is allowed, putting everything in controller is allowed
//link or controller = behavior of directive
//controller - code is interpreted BEFORE we know DOM is laid out on the page
//link - code is interpreted AFTER we know DOM is laid out on the page
//directives - better than ng-view; they can have behavior: make an AJAX call, etc.
