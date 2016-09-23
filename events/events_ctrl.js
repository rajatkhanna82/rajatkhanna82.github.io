'use strict';

function EventsController (getEvents, getZipcode) {
    var self = this;

    self.events = events; // Mock events data till the getEvents api is not working.
    self.search = {};
    getZipcode.then(function(zipcode){
        self.search.evtZip = zipcode;
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
   });