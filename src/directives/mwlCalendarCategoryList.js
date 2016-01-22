'use strict';

var angular = require('angular');

angular
  .module('mwl.calendar')
  .controller('MwlCalendarCategoryListCtrl', function($scope, calendarConfig) {
    var vm = this;

    vm.categories = calendarConfig.categories;
    $scope.$watchGroup([
      'vm.categories'
    ], function() {
      vm.categories = calendarConfig.categories;
    });

    $scope.$on('calendar.refreshView', function() {
      vm.categories = calendarConfig.categories;
    });

  })
  .directive('mwlCalendarCategoryList', function(calendarConfig) {

    return {
      restrict: 'E',
      templateUrl: calendarConfig.templates.calendarCategoryList,
      controller: 'MwlCalendarCategoryListCtrl as vm',
      scope: {
        categories: '=',
        onTimespanClick: '='
      },
      bindToController: true
    };

  });
