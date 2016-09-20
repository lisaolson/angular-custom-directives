angular.module('CardsAgainstAssembly')
  .controller('rateController', rateController);

  function rateController(){
    var vm = this;
    vm.rate = 7;
    vm.max = 10;
    vm.isReadonly = false;

    vm.hoveringOver = function(value) {
    vm.overStar = value;
    vm.percent = 100 * (value / vm.max);
    };
  }
