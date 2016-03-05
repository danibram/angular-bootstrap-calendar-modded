angular
  .module('mwl.calendar.docs')
  .controller('CustomTemplatesCtrl1', function($scope, moment, calendarConfig, alert) {

    var vm = this;

    calendarConfig.templates.calendarMonthCell = 'customMonthCell.html';

    calendarConfig.category = {
      showCategories: true,
      referenceKey: 'id',
      eventsReferenceKey: 'category',
      templateList: 'category.type + ":" + category.size',
      templateHeaderList: 'Typologia',
      categoryHeaderList: 'Stanze'
    };

    vm.categories = [{
      id: 0,
      number: 1,
      type: 'Doppia',
      size: 4,
      isClean: true
    }, {
      id: 1,
      number: 2,
      type: 'Doppia',
      size: 4,
      isClean: true
    }, {
      id: 2,
      number: 3,
      type: 'Doppia',
      size: 4,
      isClean: true
    }, {
      id: 3,
      number: 4,
      type: 'Doppia',
      size: 4,
      isClean: true
    }];

    vm.events = [{
        title: 'An event',
        type: 'warning',
        startsAt: moment().startOf('day').subtract(10, 'days').toDate(),
        endsAt: moment().startOf('day').add(3, 'hours').toDate(),
        draggable: true,
        resizable: true,
        category: 1
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
