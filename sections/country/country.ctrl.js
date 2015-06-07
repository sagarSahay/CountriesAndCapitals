/**
 * Created by s.sahay on 27/05/2015.
 */
angular.module('app').controller('country.ctrl', function (CountriesFactory, $location) {
    var vm = this;
    vm.country = CountriesFactory.country;

    vm.capitalPopulation = 0;
    CountriesFactory.searchForCapitalPopulation(vm.country.countryCode, vm.country.countryName, vm.country.capital)
        .then(function (response) {
            vm.capitalPopulation = response;
        });

    vm.neighbours = [];
    CountriesFactory.getNeighbours(vm.country.geonameId)
        .then(function (response) {
            console.log(response);
            vm.neighbours = response.slice(0, 3);
        });

    vm.goHome = function () {
        $location.path('/');
    };
    vm.goList = function () {
        $location.path('/list');
    };
    vm.changeCountry = function (countryArg) {
        CountriesFactory.getIndividualCountry(countryArg.countryCode)
            .then(function (response) {
                CountriesFactory.country = response.data.geonames[0];
                $location.path('/' + CountriesFactory.country.countryCode + '/capital');
            });
    };
});
