/**
 * First Controller
 */
(function() {

    "use strict";

    angular.module('walkingApp').controller('sideNav', sideNav);

    /**
     * Include a Factory: Best Practise
     * Factory Resolving by Routing.
     * Cela signifie que la Factory est chargé avant que la page se charge
     */

     /**
      * SIDENAV => CREER UNE DIRECTIVE
      * Voir lien openclassroom
      */





     function sideNav($scope, $http, $log){

       var currentTime = new Date();
       $scope.currentTime = currentTime;
       $scope.month = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
       $scope.monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
       $scope.weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
       $scope.weekdaysLetter = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
       $scope.disable = [false];
       $scope.today = 'Today';
       $scope.clear = 'Vider';
       $scope.close = 'Fermer';
       var days = 15;

       $scope.ajouterPerso = function() {

         console.log($scope.pseudo);
         $scope.pseudo = "Blabla";
         console.log($scope.pseudo);

         console.log($scope.activite);

         $scope.sexe = true;
         $scope.activite = "";
         $scope.photo = "";
         $scope.naissance = "";
         $scope.pays = "";
         $scope.lat = "";
         $scope.long = "";
         $scope.bio = "";
         $scope.saisons = {
           's1': false,
           's2': false,
           's3': false,
           's4': false,
           's5': false,
           's6': false,
           's7': false
         };
       };



     }

}());
