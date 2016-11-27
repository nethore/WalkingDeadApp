/**
 * First Controller
 */
(function() {

    "use strict";

    angular.module('walkingApp').controller('ajoutCtrl', ajoutCtrl);
    /**
     * Include a Factory: Best Practise
     * Factory Resolving by Routing.
     * Cela signifie que la Factory est chargé avant que la page se charge
     */

     ajoutCtrl.$inject = ['$scope', 'dataService'];

    function ajoutCtrl($scope, dataService){

      var vm = this;
      vm.dataService = dataService;

      vm.saisons = {
        's1': false,
        's2': false,
        's3': false,
        's4': false,
        's5': false,
        's6': false,
        's7': false
      };
      vm.sexe = true;

      function ajouterPerso() {

        vm.saisonsArr = [];

        if(vm.saisons.s1 === true) { vm.saisonsArr.push(1); }
        if(vm.saisons.s2 === true) { vm.saisonsArr.push(2); }
        if(vm.saisons.s3 === true) { vm.saisonsArr.push(3); }
        if(vm.saisons.s4 === true) { vm.saisonsArr.push(4); }
        if(vm.saisons.s5 === true) { vm.saisonsArr.push(5); }
        if(vm.saisons.s6 === true) { vm.saisonsArr.push(6); }
        if(vm.saisons.s7 === true) { vm.saisonsArr.push(7); }

        console.log(vm.saisonsArr);

        vm.userAdded = {
          "id": 8,
          "pseudo": vm.pseudo,
          "sexe": vm.sexe,
          "photo": vm.photo,
          "activite": vm.activite,
          "naissance": vm.naissance,
          "coord": {
            "lat": vm.lat,
            "long": vm.long
          },
          "pays": vm.pays,
          "resume": vm.bio,
          "saison": vm.saisonsArr
        };


        vm.dataService.user = vm.userAdded;

        console.log('dataservice ajoutctrl', vm.dataService.user);

        // On reinitialise le formulaire
        vm.pseudo = "";
        vm.sexe = true;
        vm.activite = "";
        vm.photo = "";
        vm.naissance = "";
        vm.pays = "";
        vm.lat = "";
        vm.long = "";
        vm.bio = "";
        vm.saisons = {
          's1': false,
          's2': false,
          's3': false,
          's4': false,
          's5': false,
          's6': false,
          's7': false
        };

      }

     }

}());
