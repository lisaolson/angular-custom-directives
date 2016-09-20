angular.module('CardsAgainstAssembly')
  .controller('alertController', alertController);

function alertController() {
  var vm = this;
  vm.alerts = [
    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
    { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
  ];

  vm.addAlert = function() {
    console.log('clicked!');
    vm.alerts.push({msg: 'Another alert!'});
  };

  vm.closeAlert = function(index) {
    console.log('closed!');
    vm.alerts.splice(index, 1);
  };
};
