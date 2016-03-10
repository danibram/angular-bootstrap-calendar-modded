'use strict';

var angular = require('angular');

angular
  .module('mwl.calendar')
  .controller('MwlCalendarWeekCtrl', function($scope, $sce, calendarHelper, calendarConfig) {

    var vm = this;

    vm.showTimes = calendarConfig.showTimesOnWeekView;
    vm.category = calendarConfig.category;
    vm.categories = vm.categories;

    vm.$sce = $sce;

    $scope.$on('calendar.refreshView', function() {
      vm.dayViewSplit = vm.dayViewSplit || 30;
      vm.dayViewHeight = calendarHelper.getDayViewHeight(
        vm.dayViewStart,
        vm.dayViewEnd,
        vm.dayViewSplit
      );
      if (vm.showTimes) {
        vm.view = calendarHelper.getWeekViewWithTimes(
          vm.events,
          vm.categories,
          vm.viewDate,
          vm.dayViewStart,
          vm.dayViewEnd,
          vm.dayViewSplit
        );
      } else if (vm.category.showCategories) {
        vm.dayViewHeight = vm.categories.length * 30 + 2;
        vm.view = calendarHelper.getWeekViewWithCategories(
          vm.events,
          vm.categories,
          vm.viewDate
        );
      } else {
        vm.view = calendarHelper.getWeekView(vm.events, vm.viewDate);
      }
    });

    vm.category = calendarConfig.category;

    vm.showTooltip = function(category) {
        var text = 'Type: ' + category.type + '<br/>';
        text += 'Size: ' + category.size + '<br/>';
        text += 'Clean: ' + category.isclean;
        return text;
    };

  })
  .directive('mwlCalendarWeek', function(calendarConfig) {

    return {
      templateUrl: calendarConfig.templates.calendarWeekView,
      restrict: 'E',
      require: '^mwlCalendar',
      scope: {
        events: '=',
        viewDate: '=',
        onEventClick: '=',
        onRoomClick: '=',
        onEventTimesChanged: '=',
        dayViewStart: '=',
        dayViewEnd: '=',
        dayViewSplit: '=',
        onTimespanClick: '=',
        categories: '=?'
      },
      controller: 'MwlCalendarWeekCtrl as vm',
      link: function(scope, element, attrs, calendarCtrl) {
        scope.vm.calendarCtrl = calendarCtrl;
      },
      bindToController: true
    };

  });
