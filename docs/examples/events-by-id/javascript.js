angular
  .module('mwl.calendar.docs')
  .controller('CustomTemplatesCtrl', function($scope, moment, calendarConfig, alert) {

    var vm = this;

    calendarConfig.templates.calendarMonthCell = 'customMonthCell.html';
    calendarConfig.templates.calendarWeekView = 'mwl/calendarWeekViewById.html';

    vm.events = [{
        title: 'An event',
        type: 'warning',
        startsAt: moment().startOf('day').add(3, 'days').toDate(),
        endsAt: moment().startOf('day').add(3, 'days').toDate(),
        draggable: true,
        resizable: true,
        belongsToId: 2
    }, {
        title: '<i class="glyphicon glyphicon-asterisk"></i> <span class="text-primary">Another event</span>, with a <i>html</i> title',
        type: 'info',
        startsAt: moment().startOf('day').add(2, 'days').toDate(),
        endsAt: moment().startOf('day').add(2, 'days').toDate(),
        draggable: true,
        resizable: true,
        belongsToId: 2
    }, {
        title: 'This is a really long event title that occurs on every year',
        type: 'important',
        startsAt: moment().startOf('day').add(3, 'days').toDate(),
        endsAt: moment().startOf('day').add(3, 'days').toDate(),
        draggable: true,
        resizable: true,
        belongsToId: 1
    }];

    vm.calendarView = 'week';
    vm.viewDate = moment().startOf('month').toDate();
    vm.belongIds = [0,1,2,3,4,5,6,7,8,9,10,11,12];

    vm.eventTimesChanged = function(event) {
      alert.show('Dragged and dropped', event);
    };

    $scope.$on('$destroy', function() {
      calendarConfig.templates.calendarMonthCell = 'mwl/calendarMonthCell.html';
      calendarConfig.templates.calendarWeekView = 'mwl/calendarWeekView.html';
    });

  });
