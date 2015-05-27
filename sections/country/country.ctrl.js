/**
 * Created by s.sahay on 27/05/2015.
 */
angular.module('app').controller('country.ctrl', function (CountriesFactory) {
    var vm = this;
    vm.country=CountriesFactory.country;
});
