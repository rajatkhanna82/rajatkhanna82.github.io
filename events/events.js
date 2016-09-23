'use strict';

function EventsController (getEvents, getZipcode) {
    var self = this;

    self.events = {};
    self.zipcode = ''
    getZipcode.then(function(zipcode){
        self.zipcode = zipcode;
    });
    getEvents.get().then(function (data) {
        console.log(data);
    })
    .catch(function (res) {
        console.log("error :", res);
    });

}

angular.module('ishaEvents' )
    .controller('EventsController', EventsController)
    .factory('getEvents', function ($http) {
        var url = 'https://www.innerengineering.com/ieo/ieoApiRequest.php',
        data = {
            apitype : 'EVENTL',
            apiver : '1.2',
        //  evtState: state,
        //  evtStDt=:startDate
            vId: 'CTNE'
        };
        return {
            get: function (options) {
                // data = options || data;
                    return  $http({
                        method: 'post',
                        url: url,
                        data: data,
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                             'Access-Control-Allow-Origin': '*'
                        }
                    });
            }
        };
    })
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