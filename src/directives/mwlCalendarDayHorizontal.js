'use strict';

var angular = require('angular');

angular
  .module('mwl.calendar')
  .controller('MwlCalendarDayHorizontalCtrl', function($scope, $sce, moment, calendarHelper, calendarConfig) {

    var vm = this;

    vm.showTimes = calendarConfig.showTimesOnWeekView;
    vm.category = calendarConfig.category;
    vm.categories = vm.categories || [];

    vm.$sce = $sce;

    var dayViewStart = moment(vm.dayViewStart || '00:00', 'HH:mm');
    var dayViewEnd = moment(vm.dayViewEnd || '23:00', 'HH:mm');
    vm.dayViewSplit = parseInt(vm.dayViewSplit);
    vm.hours = [];
    var dayCounter = moment(vm.viewDate)
      .clone()
      .hours(dayViewStart.hours())
      .minutes(dayViewStart.minutes())
      .seconds(dayViewStart.seconds());

    for (var i = 0; i <= dayViewEnd.diff(dayViewStart, 'hours'); i++) {
      vm.hours.push({
        label: calendarHelper.formatDate(dayCounter, calendarConfig.dateFormats.hour),
        date: dayCounter.clone()
      });
      dayCounter.add(1, 'hour');
    }

    $scope.$on('calendar.refreshView', function() {
      vm.dayViewSplit = vm.dayViewSplit || 30;
      vm.dayViewHeight = calendarHelper.getDayViewHeight(
        vm.dayViewStart,
        vm.dayViewEnd,
        vm.dayViewSplit
      );

      if (vm.category.showCategories) {
        vm.dayViewHeight = vm.categories.length * 30 + 2;
        vm.view = calendarHelper.getDayViewWithCategories(
          vm.events,
          vm.categories,
          vm.viewDate,
          vm.dayViewStart,
          vm.dayViewEnd
        );
      } else {
        vm.view = calendarHelper.getDayView(
          vm.events,
          vm.viewDate,
          vm.dayViewStart,
          vm.dayViewEnd,
          vm.dayViewSplit
        );
      }
    });

    vm.eventDragComplete = function(event, minuteChunksMoved) {
      var minutesDiff = minuteChunksMoved * vm.dayViewSplit;
      var newStart = moment(event.startsAt).add(minutesDiff, 'minutes');
      var newEnd = moment(event.endsAt).add(minutesDiff, 'minutes');
      delete event.tempStartsAt;

      vm.onEventTimesChanged({
        calendarEvent: event,
        calendarNewEventStart: newStart.toDate(),
        calendarNewEventEnd: event.endsAt ? newEnd.toDate() : null
      });
    };

    vm.eventDragged = function(event, minuteChunksMoved) {
      var minutesDiff = minuteChunksMoved * vm.dayViewSplit;
      event.tempStartsAt = moment(event.startsAt).add(minutesDiff, 'minutes').toDate();
    };

    vm.eventResizeComplete = function(event, edge, minuteChunksMoved) {
      var minutesDiff = minuteChunksMoved * vm.dayViewSplit;
      var start = moment(event.startsAt);
      var end = moment(event.endsAt);
      if (edge === 'start') {
        start.add(minutesDiff, 'minutes');
      } else {
        end.add(minutesDiff, 'minutes');
      }
      delete event.tempStartsAt;

      vm.onEventTimesChanged({
        calendarEvent: event,
        calendarNewEventStart: start.toDate(),
        calendarNewEventEnd: end.toDate()
      });
    };

    vm.eventResized = function(event, edge, minuteChunksMoved) {
      var minutesDiff = minuteChunksMoved * vm.dayViewSplit;
      if (edge === 'start') {
        event.tempStartsAt = moment(event.startsAt).add(minutesDiff, 'minutes').toDate();
      }
    };

  })
  .directive('mwlCalendarDayHorizontal', function(calendarConfig) {

    return {
      templateUrl: calendarConfig.templates.calendarDayHorizontalView,
      restrict: 'E',
      require: '^mwlCalendar',
      scope: {
        events: '=',
        categories: '=?',
        viewDate: '=',
        onEventClick: '=',
        onEventTimesChanged: '=',
        onTimespanClick: '=',
        dayViewStart: '=',
        dayViewEnd: '=',
        dayViewSplit: '='
      },
      controller: 'MwlCalendarDayHorizontalCtrl as vm',
      bindToController: true
    };

  });
