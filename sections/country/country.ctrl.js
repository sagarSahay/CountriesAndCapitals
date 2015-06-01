/**
 * Created by s.sahay on 27/05/2015.
 */
angular.module('app').controller('country.ctrl', function (CountriesFactory,$location,$scope) {
    var vm = this;
    vm.country=CountriesFactory.country;

    vm.capitalPopulation= CountriesFactory.searchForCapitalPopulation(vm.country.countryCode,vm.country.countryName,vm.country.capital)
        .then(function(response){
            //console.log(response);
            return response.data.geonames[0].population;
        });

    vm.neighbours=CountriesFactory.getNeighbours(vm.country.geonameId)
        .then(function(response){
            console.log(response.data);
            return response.data;
        });

    vm.goHome=function(){
        $location.path('/');
    };
    vm.goList=function(){
        $location.path('/list');
    };
});
