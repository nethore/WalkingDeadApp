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
    function PersosWD($scope, $http, $log){

       // On récupère le fichier JSON et on l'injecte dans $scope.users
       $http.get("datas/persos.json").
         success(function(data, status) {
           $log.log('JSON Gen : ', data);
         	$scope.users = data;
         });

         $scope.age = function(dateBirth) {
           return moment().diff(moment(dateBirth, 'DD-MM-YYYY'), 'years');
         };

         $scope.supprUser = function(idUser) {
           Materialize.toast($scope.users[idUser].pseudo + " s'est fait défoncer sa gueule !", 4000);
           $scope.users.splice(idUser, 1);
         };

     }

}());
