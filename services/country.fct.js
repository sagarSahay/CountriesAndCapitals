/**
 * Created by Sagar on 30/04/2015.
 */
angular.module('app').factory('CountriesFactory', function ($http) {
    var result = null;
    return {
        'getAll': function () {
            var url = ' http://api.geonames.org/countryInfoJSON';
            var request = {
                callback: "JSON_CALLBACK",
                username: 'sagar1986'
            };
            return $http({
                method: 'JSONP',
                url: url,
                params: request,
                cache: true
            }).success(function (response) {
                result = response;
            }).error(function (error) {
                result = error;
            });
        },
        "country": {},

        'searchForCapitalPopulation': function (countryCode, name, q) {
            var url = 'http://api.geonames.org/searchJSON'
            var request = {
                callback: "JSON_CALLBACK",
                username: 'sagar1986',
                maxRows: 1,
                q: q

            };
            return $http({
                method: 'JSONP',
                url: url,
                params: request

            }).then(function (response) {
                return response.data.geonames[0].population;
            });

        },

        'getNeighbours': function (geonameId) {
            var url = 'http://api.geonames.org/neighboursJSON';
            var request = {
                callback: "JSON_CALLBACK",
                username: 'sagar1986',
                geonameId: geonameId
            };
            return $http({
                method: 'JSONP',
                url: url,
                params: request

            }).then(function (response) {
                return  response.data.geonames;
            });
        } ,

        'getIndividualCountry' :function(countryCode){
            var url='http://api.geonames.org/countryInfoJSON';
            var request = {
                callback: "JSON_CALLBACK",
                username: 'sagar1986',
                country: countryCode
            };
            return $http({
                method: 'JSONP',
                url: url,
                params: request

            }).then(function (response) {
                return  response;
            });
        }

    }
})