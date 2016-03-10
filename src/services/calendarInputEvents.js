'use strict';

var angular = require('angular');

angular
  .module('mwl.calendar')
  .factory('calendarInputEvents', function(moment, calendarConfig) {

    function randomId() {
      return Math.floor(Math.random() * 1000000000);
    }

    function processEvents(events, start, end, day) {
      var newEvents = [];
      function newEl(eventsList, title, type, startE, endE, category, bid, clean, state, user, tooltip) {
        var el = {
          $id: randomId(),
          title: title,
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

        if (moment(eventFinish).isAfter(end) && moment(eventStart).isBefore(start)) {
          newEl(newEvents, e.title, 'close', eventStart.toDate(), eventFinish.toDate(), category, bid, clean, state, user);
          return;
        }

        if (e.type === 'booked') {
          newEl(newEvents, e.title, 'booked', eventStart.toDate(), eventFinish.toDate(), category, bid, clean, state, user);
        } else if (e.type === 'in') {

          if (moment(eventFinish).diff(moment(eventStart), 'days') > 0) {
            newEl(newEvents, '', 'close', moment(eventStart).add(1, 'hours').toDate(), eventFinish.toDate(), category, bid, clean, state, user);
          }

          if (day &&
            calendarConfig.category.showMaid && moment(eventStart).diff(moment(), 'minutes') <= 60 && moment(eventStart).diff(moment(), 'minutes') >= 0) {
            newEl(newEvents,
              '<i class="eut-cleaner font-48"></i>',
              'cleaner',
              moment().toDate(),
              moment().add(1, 'hours').toDate(),
              category, bid, clean, state, user);
          }

          if (day &&
            calendarConfig.category.showMaid && moment(eventStart).diff(moment(), 'minutes') <= 0 && moment(eventStart).diff(moment(), 'minutes') >= -30) {
            newEl(newEvents, e.title, 'fast', eventStart.toDate(), moment(eventStart).add(1, 'hours').toDate(), category, bid, clean, state, user);
          } else {
            newEl(newEvents, e.title, 'in', eventStart.toDate(), moment(eventStart).add(1, 'hours').toDate(), category, bid, clean, state, user);
          }

        } else if (e.type === 'out') {
          if (moment(eventFinish).diff(moment(eventStart), 'days') > 0) {
            newEl(newEvents, '', 'close', eventStart.toDate(), moment(eventFinish).subtract(1, 'hours').toDate(), category, bid, clean, state, user);
          }
          newEl(newEvents, e.title, 'out', moment(eventFinish).subtract(1, 'hours').toDate(), eventFinish.toDate(), category, bid, clean, state, user);
        } else if (e.type === 'close') {
          var title = '';
          if (moment(eventFinish).isBefore(end) && moment(eventStart).isBefore(start)) {
            title = e.title;
          }
          newEl(newEvents, title, 'close', eventStart.toDate(), eventFinish.toDate(), category, bid, clean, state, user);
        }
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

      return calendario.map(function(room) {
        delete room.booking;
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
        return room;
      });
    }

    return {
      processEvents: processEvents,
      calendarioToCategories: calendarioToCategories,
      calendarioToEvents: calendarioToEvents
    };

  });
