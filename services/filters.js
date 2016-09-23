angular.module('ishaEvents' )
   .filter('dateFormater', function () {
        return function (input) {
            return new Date(input);
        };
    })