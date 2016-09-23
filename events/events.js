'use strict';

function EventsController (getEvents) {

    var getEvents = getEvents.get();

}

angular.module('ishaEvents', [])
    .controller('EventsController', EventsController)
    .service('getEvents', function ($http) {
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
                data = options || data;
                return $http.post(url, data);
            }
        }
    });