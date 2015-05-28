angular.module('app').controller('list.ctrl', function (countries,$scope,$location,CountriesFactory) {
    var vm = this;
    vm.countries=countries;

    vm.loadCountry=function(country){
        CountriesFactory.country=country;
        $location.path('/'+country.countryCode+'/capital')
    };
});