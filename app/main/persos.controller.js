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
    function PersosWD($scope, $http, $log, users, dataService){

       // On récupère le fichier JSON et on l'injecte dans $scope.users
       $scope.dataService = dataService;

       $scope.users = users;

       $scope.users.push($scope.dataService.user);

        // $scope.users = $rootScope.newUser;
        // $scope.$on('addUser', function(event, data){
          // $scope.users.push(shareUser.get());
        // });



         $scope.age = function(dateBirth) {
           return moment().diff(moment(dateBirth, 'DD-MM-YYYY'), 'years');
         };

         $scope.supprUser = function(idUser) {
           Materialize.toast($scope.users[idUser].pseudo + " s'est fait défoncer sa gueule !", 4000);
           $scope.users.splice(idUser, 1);
         };

     }

}());
