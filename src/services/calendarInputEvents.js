'use strict';

var angular = require('angular');

angular
  .module('mwl.calendar')
  .factory('calendarInputEvents', function(moment, calendarConfig) {
    function truncate(str, number) {
      if (str.length > number) {
        return str.substring(0, number) + '...';
      }
      return str;
    }

    function randomId() {
      return Math.floor(Math.random() * 1000000000);
    }

    function newEl(eventsList, title, type, startE, endE, category, bid, clean, state, user, tooltip) {
      var el = {
        $id: randomId(),
        title: (type === 'cleaner') ? title : truncate(title, calendarConfig.category.userNameLenght),
        type: type,
        startsAt: startE,
        endsAt: endE,
        category: category,
        b_id: bid,
        isClean: clean,
        state: state,
        user: user
      };

      if (tooltip) {
        el.tooltip = function(event) {
          var text = '<strong>' + event.user + '</strong><br/>';
          text += 'In: ' + moment(new Date(event.startsAt)).format('DD/MM/YYYY') + '<br/>';
          text += 'Out: ' + moment(new Date(event.endsAt)).format('DD/MM/YYYY') + '<br/>';
          text += 'State: ' + event.state + '<br/>';
          text += 'Booking Id: ' + event.b_id + '<br/>';
          text += 'Clean: ' + event.isClean;
          return text;
        };
      }
      eventsList.push(el);
    }

    function processEvents(events, start, end, day) {
      var newEvents = [];

      events.map(function(e) {
        var eventStart = moment(new Date(e.startsAt));
        var eventFinish = moment(new Date(e.endsAt));

        var category = e.category;
        var bid = e.b_id;
        var clean = e.isClean;
        var state = e.state;
        var user = e.title;

        newEl(newEvents, '', 'ghost', eventStart.toDate(), eventFinish.toDate(), category, bid, clean, state, user, function(event) {
          var text = '<strong>' + event.title + '</strong><br/>';
          text += 'In: ' + moment(new Date(event.startsAt)).format('DD/MM/YYYY') + '<br/>';
          text += 'Out: ' + moment(new Date(event.endsAt)).format('DD/MM/YYYY') + '<br/>';
          text += 'State: ' + event.type + '<br/>';
          text += 'Booking Id: ' + event.b_id + '<br/>';
          text += 'Clean: ' + event.isClean;
          return text;
        });

        switch (e.type) {
          case 'booked':
            newEl(newEvents, e.title, 'booked', eventStart, eventFinish, category, bid, clean, state, user);
            break;
          case 'in':
            if (moment(eventFinish).diff(moment(eventStart), 'days') > 0) {
              newEl(newEvents, '', 'close', moment(eventStart).add(1, 'hours'), eventFinish, category, bid, clean, state, user);
            }

            if (day &&
              calendarConfig.category.showMaid &&
              moment(eventStart).diff(moment(), 'minutes') <= 60 &&
              moment(eventStart).diff(moment(), 'minutes') >= 0) {

              newEl(newEvents,
                '<i class="eut-cleaner font-48"></i>',
                'cleaner',
                moment(),
                moment().add(1, 'hours'),
                category, bid, clean, state, user);
            }

            if (day &&
              calendarConfig.category.showMaid &&
              eventStart.isBetween(moment().hour(moment().hour()).minute(0), moment().hour(moment().hour()).minute(0).add(1, 'hours'), 'minutes')) {
              newEl(newEvents, e.title, 'fast', eventStart, moment(eventStart).add(1, 'hours'), category, bid, clean, state, user);
            } else {
              newEl(newEvents, e.title, 'in', eventStart, moment(eventStart).add(1, 'hours'), category, bid, clean, state, user);
            }
            break;
          case 'out':
            if (moment(eventFinish).diff(moment(eventStart), 'days') > 0) {
              newEl(newEvents, '', 'close', eventStart, moment(eventFinish).subtract(1, 'hours'), category, bid, clean, state, user);
            }
            newEl(newEvents, e.title, 'out', moment(eventFinish).subtract(1, 'hours'), eventFinish, category, bid, clean, state, user);
            break;
          case 'close':
            var title = '';
            if (moment(eventFinish).isBefore(end) && moment(eventStart).isBefore(start)) {
              title = e.title;
            }
            newEl(newEvents, title, 'close', eventStart, eventFinish, category, bid, clean, state, user);
            break;
          default:
            break;
        }
        return;
      });
      return newEvents;
    }

    function calendarioToEvents(calendario) {
      var events = [];

      calendario.map(function(room) {
        if (room.booking && room.booking.length > 0) {
          room.booking.map(function(e) {

            events.push({
              title: e.name + ' ' + e.surname,
              type: e.state,
              state: e.state,
              startsAt: moment(new Date(e.in)).toDate(),
              endsAt: moment(new Date(e.out)).toDate(),
              category: room.number,
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
      var rooms = [];

      calendario.map(function(room) {
        var nR = {};

        switch (room.type) {
          default:
            break;
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
        }

        Object.keys(room).map(function(k) {
          if (k !== 'booking') {
            nR[k] = room[k];
          }
        });

        rooms.push(nR);
      });

      return rooms;
    }

    return {
      processEvents: processEvents,
      calendarioToCategories: calendarioToCategories,
      calendarioToEvents: calendarioToEvents
    };

  });
