
/**
 * Filter
 */
(function() {

    "use strict";

    /**
     * 1ere syntaxe
     * Just a filter to render HTML in view
     * @returns
     * */
    angular.module('walkingApp').filter('whatSexe', whatSexe);

    function whatSexe(){
      return function(tableau, sexe){

        var out = [];

        if(sexe == "man") {
          angular.forEach(tableau, function(user){
            if(user.sexe){
              out.push(user);
            }
          });
        } else if (sexe == "woman") {
          angular.forEach(tableau, function(user){
            if(!user.sexe){
              out.push(user);
            }
          });
        } else {
          out = tableau;
        }

        return out;

      };
    }

    angular.module('walkingApp').filter('filterAge', filterAge);

    function filterAge(){
      return function(tableau, ageMin){

        var out = [];

        angular.forEach(tableau, function(user){
          if(moment().diff(moment(user.naissance, 'DD-MM-YYYY'), 'years') >= ageMin){
            out.push(user);
          }
        });

        return out;

      };
    }


}());
