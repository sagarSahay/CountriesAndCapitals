angular.module('app').controller('list.ctrl', function (countries) {
    var vm = this;
    vm.countries=countries;
    console.log(vm.countries);
});