angular.module('ishaEvents')
    .service('getZipcode', function ($http, $q) {
        var defer = $q.defer();
        window.navigator.geolocation.getCurrentPosition(function(pos){
          console.log(pos);
          $http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='
                +pos.coords.latitude+','
                +pos.coords.longitude+
                '&sensor=true')
                .then(function (res) {
                    var zipcode = res.data.results[0].address_components[7].short_name;
                    defer.resolve(zipcode);
                });
        });
        return defer.promise;
    });