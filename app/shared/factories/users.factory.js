/**
 * Contact Controller
 */
(function() {

    "use strict";

    angular.module('walkingApp').factory('UserFcty', UserFcty);

    UserFcty.$inject = ['$rootScope', '$log', '$q', '$http'];
    /**
     * Handler User
     */
    function UserFcty($rootScope, $log, $q, $http) {

        var obj = {
            all: getAll
        };

        return obj;

        /**
         * get All User
         */
        function getAll() {

          // $http.get('datas/persos.json').
          //   success(function(data, status) {
          //     console.log('JSON Gen : ', data);
          //   	return data;
          //   });
          var deferred = $q.defer();
          $http.get('datas/persos.json')
              .success(function(data) {
                  deferred.resolve(data);

                  $log.info('API chargée');
              }).error(deferred.reject);
          return deferred.promise; //return a promise with $q library (not exist in ES5)
        }



    }



}());
