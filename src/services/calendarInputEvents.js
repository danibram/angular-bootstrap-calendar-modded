'use strict';

var angular = require('angular');

angular
  .module('e.calendar')
  .factory('calendarInputEvents', function(moment) {
    function calendarioToEvents(calendario) {
      var events = [];

      calendario.map(function(room) {
        if (room.booking && room.booking.length > 0) {
          room.booking.map(function(e) {
            events.push({
              title: (e.state === 'close') ? '' : e.name + ' ' + e.surname,
              type: e.state,
              startsAt: moment(new Date(e.in)).toDate(),
              endsAt: moment(new Date(e.out)).toDate(),
              category: room.id,
              b_id: e.b_id,
              isClean: room.isclean,
              tooltip: function(event) {
                var text = '<strong>' + event.title + '</strong><br/>';
                text += 'In: ' + moment(new Date(event.startsAt)).format('DD/MM/YYYY') + '<br/>';
                text += 'Out: ' + moment(new Date(event.endsAt)).format('DD/MM/YYYY') + '<br/>';
                text += 'State: ' + event.type + '<br/>';
                text += 'Booking Id: ' + event.b_id + '<br/>';
                text += 'Clean: ' + event.isClean;
                return text;
              }
            });
          });
        }
      });
      return events;
    }

    function calendarioToCategories(calendario) {

      return calendario.map(function(room) {
        delete room.booking;
        switch (room.type) {
          case 'Singola':
            room.typeDesc = 'S';
            break;
          case 'Doppia':
            room.typeDesc = 'D';
            break;
          case 'Tripla':
            room.typeDesc = 'T';
            break;
          case 'Suite':
            room.typeDesc = 'SS';
            break;
          default:
        }
        return room;
      });
    }

    return {
      calendarioToCategories: calendarioToCategories,
      calendarioToEvents: calendarioToEvents
    };

  });
