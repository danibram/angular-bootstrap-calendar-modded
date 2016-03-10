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

    vm.onRClick = function(hour, category) {
      vm.onRoomClick(moment(vm.viewDate).hours(hour.label), category);
    };

    vm.showTooltip = function(category) {
        var text = 'Type: ' + category.type + '<br/>';
        text += 'Size: ' + category.size + '<br/>';
        text += 'Clean: ' + category.isclean;
        return text;
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
        onRoomClick: '=',
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
