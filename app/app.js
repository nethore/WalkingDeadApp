(function(){

  "use strict";

  angular.module('walkingApp', ['ngRoute', 'ui.materialize'])
        // .run(function($rootScope, UserFcty) {
        //   $rootScope.users = users;
        // })
        .config(function($routeProvider){
          $routeProvider
            .when('/', {
              templateUrl: 'partials/home.html',
              controller: 'PersosWD',
              reloadOnSearch: false,
              resolve: { // resolve Factory before display view and send by injection in controller
                    users: function(UserFcty) {
                        return UserFcty.all();
                    }
              }
            })
            .when('/ajout', {
                templateUrl: 'partials/ajout.html',
                controller: 'ajoutCtrl',
                reloadOnSearch: false,
                parent: 'PersosWD',
                controllerAs: 'ajout'
            })
            .otherwise({redirectTo: '/'});
        });

}());
