/**
 * Created by Sagar on 30/04/2015.
 */
angular.module('app.route', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/list', {
            templateUrl: './sections/list/list.tpl.html',
            controller: 'list.ctrl',
            controllerAs: 'ctrl',
            resolve:{
                countries:function(CountriesFactory){
                    return CountriesFactory.getAll().then(function(response){
                        console.log(response);
                        return response.data;
                    })
                }
            }
        }).when('/', {
            templateUrl: './sections/welcome/welcome.tpl.html',
            controller: 'welcome.ctrl',
            controllerAs: 'ctrl'
        }).otherwise('/')
    })