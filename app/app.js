(function(){

  "use strict";

  angular.module('walkingApp', ['ngRoute', 'ui.materialize'])
        .config(function($routeProvider){
          $routeProvider
            .when('/', {
              templateUrl: 'partials/home.html',
              controller: 'PersosWD'
            })
            .otherwise({redirectTo: '/'});
        });

}());
