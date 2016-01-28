angular
  .module('mwl.calendar.docs')
  .controller('CustomTemplatesCtrl1', function($scope, moment, calendarConfig, alert) {

    var vm = this;

    calendarConfig.templates.calendarMonthCell = 'customMonthCell.html';

    calendarConfig.showCategories = true;
    calendarConfig.categories = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    vm.events = [{
        title: 'An event',
        type: 'warning',
        startsAt: moment().startOf('day').subtract(10, 'days').toDate(),
        endsAt: moment().startOf('day').add(3, 'hours').toDate(),
        draggable: true,
        resizable: true,
        category: 0
    }, {
        title: 'An event',
        type: 'warning',
        startsAt: moment().startOf('day').subtract(10, 'days').toDate(),
        endsAt: moment().startOf('day').add(3, 'hours').toDate(),
        draggable: true,
        resizable: true,
        category: 3
    }];

    vm.calendarView = 'dayhorizontal';
    vm.viewDate = moment().toDate();

    vm.eventTimesChanged = function(event) {
      alert.show('Dragged and dropped', event);
    };

    $scope.$on('$destroy', function() {
      calendarConfig.templates.calendarMonthCell = 'mwl/calendarMonthCell.html';
      calendarConfig.templates.calendarWeekView = 'mwl/calendarWeekView.html';
      calendarConfig.templates.calendarDayView = 'mwl/calendarWeekView.html';
    });

    vm.toggle = function($event, field, event) {
      $event.preventDefault();
      $event.stopPropagation();
      event[field] = !event[field];
    };

  });
