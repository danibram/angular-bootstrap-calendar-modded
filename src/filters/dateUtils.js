'use strict';

var angular = require('angular');

angular
  .module('mwl.calendar')
    .filter('mFormat', function(moment) {
        function formatDate(date, format) {
            return moment(new Date(date)).format(format);
        }
        formatDate.$stateful = true;
        return formatDate;
    })
    .filter('mIsSameDayMonth', function(moment) {

        function mIsSame(date, date2) {
            date = moment(new Date(date)).format('DD/MM');
            date2 = moment(new Date(date2)).format('DD/MM');
            return (date === date2);
        }
        mIsSame.$stateful = true;
        return mIsSame;
    });
