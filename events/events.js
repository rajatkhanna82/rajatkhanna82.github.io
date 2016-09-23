'use strict';

function EventsController (getEvents, getZipcode) {
    var self = this;

    self.events = {};
    getZipcode();
    getEvents.get().then(function (data) {
        console.log(data);
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
    .service('getZipcode', function ($http) {
        return function () {
            window.navigator.geolocation.getCurrentPosition(function(pos){
              console.log(pos);
              return $http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng='+pos.coords.latitude+','+pos.coords.longitude+'&sensor=true').then(function(res){
                console.log(res.data);
              });
            });
        };
    });