'use strict';

var angular = require('angular');

angular
  .module('mwl.calendar')
  .controller('MwlCalendarCategoryListCtrl', function(calendarConfig) {
    var vm = this;
    vm.category = calendarConfig.category;
  })
  .directive('mwlCalendarCategoryList', function(calendarConfig) {

    return {
      restrict: 'E',
      templateUrl: calendarConfig.templates.calendarCategoryList,
      controller: 'MwlCalendarCategoryListCtrl as vm',
      scope: {
        categories: '=?',
        onTimespanClick: '='
      },
      bindToController: true
    };

  });
