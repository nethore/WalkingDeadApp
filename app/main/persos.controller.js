/**
 * First Controller
 */
(function() {

    "use strict";

    angular.module('walkingApp').controller('PersosWD', PersosWD);
    /**
     * Include a Factory: Best Practise
     * Factory Resolving by Routing.
     * Cela signifie que la Factory est chargé avant que la page se charge
     */
    function PersosWD($scope, $http, $log, users, UserFcty){

       // On récupère le fichier JSON et on l'injecte dans $scope.users

       $scope.users = users;

        // $scope.users = $rootScope.newUser;
        // $scope.$on('addUser', function(event, data){
          // $scope.users.push(shareUser.get());
        // });



         $scope.age = function(dateBirth) {
           return moment().diff(moment(dateBirth, 'DD-MM-YYYY'), 'years');
         };

         $scope.supprUser = function(idUser) {
           Materialize.toast($scope.users[idUser].pseudo + " s'est fait défoncer sa gueule !", 4000);
           UserFcty.remove(idUser).then(function() {
              $scope.users.splice(idUser, 1);
            });
         };

     }

}());
