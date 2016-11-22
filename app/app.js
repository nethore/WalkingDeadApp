(function(){

  "use strict";

  angular.module('walkingApp', ['ui.materialize'])
        .controller('PersosWD', PersosWD)
        .controller('sideNav', sideNav);

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

  function sideNav($scope, $http, $log){

    var currentTime = new Date();
    $scope.currentTime = currentTime;
    $scope.month = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
    $scope.monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    $scope.weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    $scope.weekdaysLetter = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    $scope.disable = [false];
    $scope.today = 'Maintenant';
    $scope.clear = 'Vider';
    $scope.close = 'Fermer';
    var days = 15;

  }

}());
