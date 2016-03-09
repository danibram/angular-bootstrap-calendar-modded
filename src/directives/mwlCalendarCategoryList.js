'use strict';

var angular = require('angular');

angular
  .module('mwl.calendar')
  .controller('MwlCalendarCategoryListCtrl', function(calendarConfig) {
    var vm = this;
    vm.category = calendarConfig.category;

    vm.showTooltip = function(category) {
        var text = 'Type: ' + category.type + '<br/>';
        text += 'Size: ' + category.size + '<br/>';
        text += 'Clean: ' + category.isclean;
        return text;
    };
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
