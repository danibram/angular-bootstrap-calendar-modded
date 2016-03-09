angular
  .module('mwl.calendar.docs')
  .controller('CustomTemplatesCtrl1', function($scope, moment, calendarConfig, alert) {

    var vm = this;
    var initData = {
      now: moment().toDate(),
      userNameLenght: 2,
      roomNameLenght: 2,
      dayStart: 6,
      dayEnd: 23,
      showMaid: true
    };

    var calendarMonth = [{
      data: 'Thu Mar 10 2015 00:00:00 GMT+0100 (CET)',
      free: 12,
      booked: 1
    }, {
      data: 'Thu Mar 11 2015 00:00:00 GMT+0100 (CET)',
      free: 1,
      booked: 12
    }, {
      data: 'Thu Mar 12 2015 00:00:00 GMT+0100 (CET)',
      free: 6,
      booked: 6
    }];

    vm.calendario = [{
      id: 1,
      number: '1',
      type: 'Doppia',
      size: 4,
      isclean: true,
      booking: [{
        in: moment().startOf('day').subtract(2, 'days').toDate(),
        out: moment().endOf('day').add(1, 'days').toDate(),
        surname: 'Heisenberg',
        name: 'Werner Karl',
        state: 'in',
        b_id: '13213213ewq'
      }]
    }, {
      id: 2,
      number: '2',
      type: 'Doppia',
      size: 4,
      isclean: true,
      booking: [{
        in: moment().startOf('day').subtract(2, 'days').toDate(),
        out: moment().endOf('day').add(1, 'days').toDate(),
        surname: 'Heisenberg',
        name: 'Werner Karl',
        state: 'booked',
        b_id: '13213213ewq'
      }]
    }, {
      id: 10,
      number: '10',
      type: 'Doppia',
      size: 4,
      isclean: true,
      booking: [{
        in: moment().startOf('day').subtract(2, 'days').toDate(),
        out: moment().endOf('day').add(1, 'days').toDate(),
        surname: 'Planck',
        name: 'Max',
        state: 'out',
        b_id: '341221342'
      }]
    }, {
      id: 11,
      number: '21',
      type: 'Suite',
      size: 5,
      isclean: false,
      booking: [{
        in: moment().startOf('day').subtract(2, 'days').toDate(),
        out: moment().endOf('day').add(1, 'days').toDate(),
        surname: 'Bohr',
        name: 'Niels',
        state: 'close',
        b_id: '341221342'
      }]
    }];

    moment.locale('it', {
      week: {
        dow: 1 // Monday is the first day of the week
      }
    });
    moment.locale('it');

    //Calendar  Config
    calendarConfig.category = {
      showCategories: true,
      templateList: 'category.typeDesc + ":" + category.size',
      templateHeaderList: 'Typologia',
      categoryHeaderList: 'Stanze',
      userNameLenght: 2,
      roomNameLenght: 2,
      showMaid: true
    };
    calendarConfig.allDateFormats.moment.date.hour = 'H';
    calendarConfig.dateFormatter = 'moment';

    vm.viewDate = initData.now;

    vm.isCellOpen = false;
    vm.calendarView = 'month';
    vm.dayViewStart = ('00' + initData.dayStart).substring(2) + ':00';
    vm.dayViewEnd = ('00' + initData.dayEnd).substring(2) + ':00';
    vm.customData = {
      calendarMonth: calendarMonth
    };

    vm.eventClicked = function(event) {};

    vm.viewChangeClicked = function(date, nextView) {
      if (nextView == 'day') {
        vm.calendarView = 'dayhorizontal'
      }
      return true;
    };

    //Date Selector
    //New booking button

  });
