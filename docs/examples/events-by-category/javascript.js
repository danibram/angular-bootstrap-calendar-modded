angular
  .module('mwl.calendar.docs')
  .controller('CustomTemplatesCtrl1', function($scope, moment, calendarConfig, alert) {

    var vm = this;

    $scope.calendarioToEvents = function(calendario) {
            var events = []
            calendario.map(function(room) {
                if (room.booking && room.booking.length > 0) {
                    room.booking.map(function(e) {
                        events.push({
                            title: e.name + ' ' + e.surname,
                            type: e.state,
                            startsAt: moment(new Date(e.in)).toDate(),
                            endsAt: moment(new Date(e.out)).toDate(),
                            category: room.id,
                            b_id: e.b_id,
                            isClean: room.isclean,
                            tooltip: function (event) {
                              var text = '<strong>' + event.title + '</strong><br/>';
                              text += 'In: ' + moment(new Date(event.startsAt)).format('DD/MM/YYYY') + '<br/>';
                              text += 'Out: ' + moment(new Date(event.endsAt)).format('DD/MM/YYYY') + '<br/>';
                              text += 'State: ' + event.type + '<br/>';
                              text += 'Booking Id: ' + event.b_id + '<br/>';
                              text += 'Clean: ' + event.isClean;
                              return text;
                            }
                        })
                    })
                }
            })
            return events
        }

        $scope.calendarioToCategories = function(calendario){
            return calendario.map(function (room) {
                delete room.booking;
                switch (room.type) {
                    case "Singola":
                        room.typeDesc = 'S'
                        break;
                    case "Doppia":
                        room.typeDesc = 'D'
                        break;
                    case "Tripla":
                        room.typeDesc = 'T'
                        break;
                    case "Suite":
                        room.typeDesc = 'SS'
                        break;
                }
                return room
            })
        }

        var initData = {
            now: moment().toDate(),
            userNameLenght: 2,
            roomNameLenght: 2,
            dayStart: 6,
            dayEnd: 23,
            showMaid: true,
        };

        var calendarMonth = [
            {
                'data': 'Thu Mar 10 2015 00:00:00 GMT+0100 (CET)',
                'free': 12,
                'booked': 1
            },
            {
                'data': 'Thu Mar 11 2015 00:00:00 GMT+0100 (CET)',
                'free': 1,
                'booked': 12
            },
            {
                'data': 'Thu Mar 12 2015 00:00:00 GMT+0100 (CET)',
                'free': 6,
                'booked': 6
            }
        ];

        var calendario = [
            {
                "id": 1,
                "number": "1",
                "type": "Doppia",
                "size": 4,
                "isclean": true,
                "booking": [
                    {
                        "in": "Sat Oct 01 2016 00:00:00 GMT+0200 (CEST)",
                        "out": "Wed Oct 05 2016 00:00:00 GMT+0200 (CEST)",
                        "surname": "Heisenberg",
                        "name": "Werner Karl",
                        "state": "booked",
                        "b_id": "13213213ewq"
                    },
                    {
                        "in": "Sat Apr 02 2016 00:00:00 GMT+0200 (CEST)",
                        "out": "Mon Apr 04 2016 00:00:00 GMT+0200 (CEST)",
                        "surname": "Planck",
                        "name": "Max",
                        "state": "in",
                        "b_id": "341221342"
                    },
                    {
                        "in": "Fri Jan 01 2016 00:00:00 GMT+0100 (CET)",
                        "out": "Mon Jan 04 2016 00:00:00 GMT+0100 (CET)",
                        "surname": "Bohr",
                        "name": "Niels",
                        "state": "close",
                        "b_id": "341221342"
                    },
                    {
                        "in": "Fri Jan 01 2016 00:00:00 GMT+0100 (CET)",
                        "out": "Fri Jan 20 2017 00:00:00 GMT+0100 (CET)",
                        "surname": "Bohr",
                        "name": "Niels",
                        "state": "out",
                        "b_id": "341221342"
                    }
                ]
            },
            {
                "id": 2,
                "number": "2",
                "type": "Doppia",
                "size": 4,
                "isclean": true
            },
            {
                "id": 10,
                "number": "10",
                "type": "Doppia",
                "size": 4,
                "isclean": true
            },
            {
                "id": 11,
                "number": "21",
                "type": "Suite",
                "size": 5,
                "isclean": false,
                "booking": []
            }
        ]

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
        vm.events = $scope.calendarioToEvents(calendario);
        vm.categories = $scope.calendarioToCategories(calendario);
        vm.customData = {
            calendarMonth: calendarMonth
        };

        vm.eventClicked = function (event) {
        };

        vm.viewChangeClicked = function(date, nextView) {
            console.log('hey')
            if (nextView == 'day'){
                vm.calendarView = 'dayhorizontal'
            }
            return true;
        };

        $scope.vm = vm;

        //Date Selector
        //New booking button

  });
