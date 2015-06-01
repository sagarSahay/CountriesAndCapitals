/**
 * Created by Sagar on 30/04/2015.
 */
angular.module('app').factory('CountriesFactory', function ($http) {
    var result = null;
    return {
        'getAll': function () {
            var url = ' http://api.geonames.org/countryInfoJSON?username=sagar1986';
            var request = {
                callback: "JSON_CALLBACK"
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
                maxRows: 2,
                name: name,
                countryCode: countryCode,
                q: q

            };
            return $http({
                method: 'JSONP',
                url: url,
                params: request

            }).success(function (response) {
                result = response;
            }).error(function (error) {
                result = error;
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

            }).success(function (response) {
                result = response;
            }).error(function (error) {
                result = error;
            });
        }

    }
})