/**
 * angular-bootstrap-calendar - A pure AngularJS bootstrap themed responsive calendar that can display events and has views for year, month, week and day
 * @version v0.18.2
 * @link https://github.com/mattlewis92/angular-bootstrap-calendar
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), (function webpackLoadOptionalExternalModule() { try { return require("interact.js"); } catch(e) {} }()), require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["angular", "interact", "moment"], factory);
	else if(typeof exports === 'object')
		exports["angularBootstrapCalendarModuleName"] = factory(require("angular"), (function webpackLoadOptionalExternalModule() { try { return require("interact.js"); } catch(e) {} }()), require("moment"));
	else
		root["angularBootstrapCalendarModuleName"] = factory(root["angular"], root["interact"], root["moment"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_56__, __WEBPACK_EXTERNAL_MODULE_58__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(11);

	var angular = __webpack_require__(15);

	function requireAll(r) {
	  r.keys().forEach(r);
	}

	var templates = {};

	if (true) {

	  var templatesContext = __webpack_require__(16);

	  templatesContext.keys().forEach(function(templateName) {
	    var templateNameWithoutPrefix = templateName.replace('./', '');
	    var cacheTemplateName = 'mwl/' + templateNameWithoutPrefix;
	    var configTemplateName = templateNameWithoutPrefix.replace('.html', '');
	    templates[configTemplateName] = {
	      cacheTemplateName: cacheTemplateName,
	      template: templatesContext(templateName)
	    };
	  });

	}

	module.exports = angular
	  .module('mwl.calendar', [])
	  .config(["calendarConfig", function(calendarConfig) {
	    angular.forEach(templates, function(template, templateName) {
	      if (!calendarConfig.templates[templateName]) {
	        calendarConfig.templates[templateName] = template.cacheTemplateName;
	      }
	    });
	  }])
	  .run(["$templateCache", function($templateCache) {

	    angular.forEach(templates, function(template) {
	      if (!$templateCache.get(template.cacheTemplateName)) {
	        $templateCache.put(template.cacheTemplateName, template.template);
	      }
	    });

	  }]).name;

	requireAll(__webpack_require__(28));
	requireAll(__webpack_require__(44));
	requireAll(__webpack_require__(50));


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./calendar.html": 17,
		"./calendarCategoryList.html": 18,
		"./calendarDayHorizontalView.html": 19,
		"./calendarDayView.html": 20,
		"./calendarHourList.html": 21,
		"./calendarMonthCell.html": 22,
		"./calendarMonthCellEvents.html": 23,
		"./calendarMonthView.html": 24,
		"./calendarSlideBox.html": 25,
		"./calendarWeekView.html": 26,
		"./calendarYearView.html": 27
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 16;


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cal-context\" ng-switch=\"vm.view\">\n\n  <div class=\"alert alert-danger\" ng-switch-default>The value passed to the view attribute of the calendar is not set</div>\n\n  <div class=\"alert alert-danger\" ng-hide=\"vm.viewDate\">The value passed to view-date attribute of the calendar is not set</div>\n\n  <mwl-calendar-year\n    events=\"vm.events\"\n    view-date=\"vm.viewDate\"\n    on-event-click=\"vm.onEventClick\"\n    on-room-click=\"vm.onRoomClick\"\n    on-event-times-changed=\"vm.onEventTimesChanged\"\n    on-edit-event-click=\"vm.onEditEventClick\"\n    on-delete-event-click=\"vm.onDeleteEventClick\"\n    on-timespan-click=\"vm.onTimespanClick\"\n    edit-event-html=\"vm.editEventHtml\"\n    delete-event-html=\"vm.deleteEventHtml\"\n    cell-is-open=\"vm.cellIsOpen\"\n    cell-modifier=\"vm.cellModifier\"\n    ng-switch-when=\"year\"\n  ></mwl-calendar-year>\n\n  <mwl-calendar-month\n    events=\"vm.events\"\n    custom-data=\"vm.customData\"\n    view-date=\"vm.viewDate\"\n    on-event-click=\"vm.onEventClick\"\n    on-room-click=\"vm.onRoomClick\"\n    on-event-times-changed=\"vm.onEventTimesChanged\"\n    on-edit-event-click=\"vm.onEditEventClick\"\n    on-delete-event-click=\"vm.onDeleteEventClick\"\n    on-timespan-click=\"vm.onTimespanClick\"\n    edit-event-html=\"vm.editEventHtml\"\n    delete-event-html=\"vm.deleteEventHtml\"\n    cell-is-open=\"vm.cellIsOpen\"\n    cell-modifier=\"vm.cellModifier\"\n    ng-switch-when=\"month\"\n    ></mwl-calendar-month>\n\n  <mwl-calendar-week\n    events=\"vm.events\"\n    categories=\"vm.categories\"\n    view-date=\"vm.viewDate\"\n    on-event-click=\"vm.onEventClick\"\n    on-room-click=\"vm.onRoomClick\"\n    on-event-times-changed=\"vm.onEventTimesChanged\"\n    day-view-start=\"vm.dayViewStart\"\n    day-view-end=\"vm.dayViewEnd\"\n    day-view-split=\"vm.dayViewSplit\"\n    on-timespan-click=\"vm.onTimespanClick\"\n    ng-switch-when=\"week\"\n    ></mwl-calendar-week>\n\n  <mwl-calendar-day\n    events=\"vm.events\"\n    view-date=\"vm.viewDate\"\n    on-event-click=\"vm.onEventClick\"\n    on-room-click=\"vm.onRoomClick\"\n    on-event-times-changed=\"vm.onEventTimesChanged\"\n    on-timespan-click=\"vm.onTimespanClick\"\n    day-view-start=\"vm.dayViewStart\"\n    day-view-end=\"vm.dayViewEnd\"\n    day-view-split=\"vm.dayViewSplit\"\n    ng-switch-when=\"day\"\n    ></mwl-calendar-day>\n\n  <mwl-calendar-day-horizontal\n    events=\"vm.events\"\n    categories=\"vm.categories\"\n    view-date=\"vm.viewDate\"\n    on-event-click=\"vm.onEventClick\"\n    on-room-click=\"vm.onRoomClick\"\n    on-event-times-changed=\"vm.onEventTimesChanged\"\n    on-timespan-click=\"vm.onTimespanClick\"\n    day-view-start=\"vm.dayViewStart\"\n    day-view-end=\"vm.dayViewEnd\"\n    day-view-split=\"vm.dayViewSplit\"\n    ng-switch-when=\"dayhorizontal\"\n    ></mwl-calendar-day-horizontal>\n</div>\n";

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\" ng-repeat=\"category in vm.categories track by $index\">\n  <div class=\"span1 col-xs-1 text-center\"><strong ng-bind=\"$eval(vm.category.templateList)\"></strong></div>\n  <div class=\"span1 col-xs-1 text-center\"><strong ng-bind=\"category.number\"></strong></div>\n  <div class=\"col-xs-10\">\n    <div\n      class=\"cal-week-7\"\n      style=\"display: inline-block;text-align:center;height:30px;\"\n      ng-repeat=\"day in vm.days track by $index\"\n      ng-click=\"vm.onRoomClick(day.date, category)\"\n      uib-tooltip-html=\"vm.showTooltip(category) | calendarTrustAsHtml\"\n      tooltip-placement=\"bottom\"\n      tooltip-append-to-body=\"true\">\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"cal-week-box\" ng-class=\"{'cal-day-box': (vm.showTimes||vm.category.showCategories)}\">\n  <div class=\"row row-header table-mwl\">\n    <div class=\"col-xs-1 header-title general-row no-border no-padding\" ng-if=\"vm.category.templateHeaderList\">{{vm.category.templateHeaderList}}</div>\n    <div class=\"col-xs-1 header-title general-row no-border no-padding\" ng-if=\"vm.category.categoryHeaderList\">{{vm.category.categoryHeaderList}}</div>\n    <div class=\"col-xs-10 header-title general-row no-border no-padding\">\n      <div\n        ng-class=\"{'today-row': vm.checkToday(hour)}\"\n        class=\"cal-hour-{{vm.hours.length}}\"\n        style=\"display: inline-block;text-align:center;\"\n        ng-repeat=\"hour in vm.hours track by $index\"\n        mwl-element-dimensions=\"vm.dayColumnDimensions\">\n\n        <span ng-bind=\"hour.label\"></span>\n\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"row table-mwl\">\n    <div class=\"col-xs-2  no-padding\"></div>\n    <div class=\"col-xs-10 no-padding\">\n      <div\n        style=\"position:relative;\"\n        ng-repeat=\"event in vm.view track by event.$id\"\n        ng-style=\"{\n          top: event.top + 'px',\n          position: 'inherit'\n        }\">\n        <div\n          ng-class=\"'grid-hour-' + vm.hours.length + '-' + event.hourSpan +  ' grid-hour-left-' + vm.hours.length + '-' + event.dayOffset + ' day-highlight dh-event-' + event.type + ' ' + event.cssClass\"\n          ng-style=\"{\n            top: '0px',\n            position: 'absolute',\n            width: '',\n            left: ''\n          }\"\n          data-event-class\n          uib-tooltip-html=\"event.tooltip(event) | calendarTrustAsHtml\"\n          tooltip-placement=\"bottom\"\n          tooltip-append-to-body=\"true\">\n          <strong ng-bind=\"(event.tempStartsAt || event.startsAt) | calendarDate:'time':true\" ng-show=\"vm.showTimes\"></strong>\n          <a\n            href=\"javascript:;\"\n            ng-click=\"vm.onEventClick({calendarEvent: event})\"\n            class=\"event-item\"\n            ng-bind-html=\"vm.$sce.trustAsHtml(event.title)\">\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row table-mwl\" ng-repeat=\"category in vm.categories track by $index\" ng-class=\"{first:$first, last:$last}\">\n    <div class=\"col-xs-1 text-center general-row no-padding\"><strong ng-bind=\"$eval(vm.category.templateList)\"></strong></div>\n    <div class=\"col-xs-1 text-center general-row no-padding\"><strong ng-bind=\"vm.parseNumber(category.number)\"></strong></div>\n    <div class=\"col-xs-10 general-row no-padding\">\n      <div class=\"line\"></div>\n      <div ng-repeat=\"hour in vm.hours track by $index\" class=\"category-event cal-hour-{{vm.hours.length}}\" ng-class=\"{first:$first, last:$last,'today-row': vm.checkToday(hour)}\">\n        <div\n          class=\"cell-room\"\n          ng-click=\"vm.onRClick(hour, category)\"\n          uib-tooltip-html=\"vm.showTooltip(category) | calendarTrustAsHtml\"\n          tooltip-placement=\"bottom\"\n          tooltip-append-to-body=\"true\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cal-day-box\">\n  <div class=\"row-fluid clearfix cal-row-head\">\n    <div class=\"span1 col-xs-1 cal-cell\" ng-bind=\"vm.calendarConfig.i18nStrings.timeLabel\"></div>\n    <div class=\"span11 col-xs-11 cal-cell\" ng-bind=\"vm.calendarConfig.i18nStrings.eventsLabel\"></div>\n  </div>\n\n  <div class=\"cal-day-panel clearfix\" ng-style=\"{height: vm.dayViewHeight + 'px'}\">\n\n    <mwl-calendar-hour-list\n      day-view-start=\"vm.dayViewStart\"\n      day-view-end=\"vm.dayViewEnd\"\n      day-view-split=\"vm.dayViewSplit\"\n      on-timespan-click=\"vm.onTimespanClick\"\n      view-date=\"vm.viewDate\">\n    </mwl-calendar-hour-list>\n\n    <div\n      class=\"pull-left day-event day-highlight\"\n      ng-repeat=\"event in vm.view track by event.$id\"\n      ng-class=\"'dh-event-' + event.type + ' ' + event.cssClass\"\n      ng-style=\"{top: event.top + 'px', left: event.left + 60 + 'px', height: event.height + 'px'}\"\n      mwl-draggable=\"event.draggable === true\"\n      axis=\"'xy'\"\n      snap-grid=\"{y: 30, x: 50}\"\n      on-drag=\"vm.eventDragged(event, y)\"\n      on-drag-end=\"vm.eventDragComplete(event, y)\"\n      mwl-resizable=\"event.resizable === true && event.endsAt\"\n      resize-edges=\"{top: true, bottom: true}\"\n      on-resize=\"vm.eventResized(event, edge, y)\"\n      on-resize-end=\"vm.eventResizeComplete(event, edge, y)\">\n\n      <span class=\"cal-hours\">\n        <span ng-show=\"event.top == 0\"><span ng-bind=\"(event.tempStartsAt || event.startsAt) | calendarDate:'day':true\"></span>, </span>\n        <span ng-bind=\"(event.tempStartsAt || event.startsAt) | calendarDate:'time':true\"></span>\n      </span>\n      <a href=\"javascript:;\" class=\"event-item\" ng-click=\"vm.onEventClick({calendarEvent: event})\">\n        <span ng-bind-html=\"vm.$sce.trustAsHtml(event.title) | calendarTruncateEventTitle:20:event.height\"></span>\n      </a>\n\n    </div>\n\n  </div>\n\n</div>\n";

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cal-day-panel-hour\">\n\n  <div class=\"cal-day-hour\" ng-repeat=\"hour in vm.hours track by $index\">\n\n    <div\n      class=\"row-fluid cal-day-hour-part\"\n      ng-click=\"vm.onTimespanClick({calendarDate: hour.date.toDate()})\">\n      <div class=\"span1 col-xs-1\"><strong ng-bind=\"hour.label\"></strong></div>\n      <div class=\"span11 col-xs-11\"></div>\n    </div>\n\n    <div\n      class=\"row-fluid cal-day-hour-part\"\n      ng-click=\"vm.onTimespanClick({calendarDate: hour.date.clone().add(vm.dayViewSplit, 'minutes').toDate()})\">\n      <div class=\"span1 col-xs-1\"></div>\n      <div class=\"span11 col-xs-11\"></div>\n    </div>\n\n    <div\n      class=\"row-fluid cal-day-hour-part\"\n      ng-show=\"vm.dayViewSplit < 30\"\n      ng-click=\"vm.onTimespanClick({calendarDate: hour.date.clone().add(vm.dayViewSplit * 2, 'minutes').toDate()})\">\n      <div class=\"span1 col-xs-1\"></div>\n      <div class=\"span11 col-xs-11\"></div>\n    </div>\n\n    <div\n      class=\"row-fluid cal-day-hour-part\"\n      ng-show=\"vm.dayViewSplit < 30\"\n      ng-click=\"vm.onTimespanClick({calendarDate: hour.date.clone().add(vm.dayViewSplit * 3, 'minutes').toDate()})\">\n      <div class=\"span1 col-xs-1\"></div>\n      <div class=\"span11 col-xs-11\"></div>\n    </div>\n\n    <div\n      class=\"row-fluid cal-day-hour-part\"\n      ng-show=\"vm.dayViewSplit < 15\"\n      ng-click=\"vm.onTimespanClick({calendarDate: hour.date.clone().add(vm.dayViewSplit * 4, 'minutes').toDate()})\">\n      <div class=\"span1 col-xs-1\"></div>\n      <div class=\"span11 col-xs-11\"></div>\n    </div>\n\n    <div\n      class=\"row-fluid cal-day-hour-part\"\n      ng-show=\"vm.dayViewSplit < 15\"\n      ng-click=\"vm.onTimespanClick({calendarDate: hour.date.clone().add(vm.dayViewSplit * 5, 'minutes').toDate()})\">\n      <div class=\"span1 col-xs-1\"></div>\n      <div class=\"span11 col-xs-11\"></div>\n    </div>\n\n  </div>\n\n</div>\n";

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cal-month-day\">\n\n    <span class=\"pull-right\" data-cal-date ng-bind=\"day.label\"></span>\n\n    <small class=\"day-content\" ng-repeat=\"d in vm.calendarCtrl.customData.calendarMonth\" >\n        <div ng-show=\"d.data|mIsSameDayMonth: day.date\">\n            <div class=\"bubble white\">\n                <div class=\"text\">\n                    {{d.free}}\n                </div>\n            </div>\n            <div class=\"bubble black\">\n                <div class=\"text\">\n                    {{d.booked}}\n                </div>\n            </div>\n        </div>\n    </small>\n\n    <div id=\"cal-week-box\" ng-if=\"$first && rowHovered\">\n        {{ vm.calendarConfig.i18nStrings.weekNumber.replace('{week}', day.date.week()) }}\n    </div>\n</div>\n";

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "<div class=\"events-list\" ng-show=\"day.events.length > 0\">\n  <a\n    ng-repeat=\"event in day.events | orderBy:'startsAt' track by event.$id\"\n    href=\"javascript:;\"\n    ng-click=\"vm.onEventClick({calendarEvent: event})\"\n    class=\"pull-left event\"\n    ng-class=\"'event-' + event.type + ' ' + event.cssClass\"\n    ng-mouseenter=\"vm.highlightEvent(event, true)\"\n    ng-mouseleave=\"vm.highlightEvent(event, false)\"\n    tooltip-append-to-body=\"true\"\n    uib-tooltip-html=\"((event.startsAt | calendarDate:'time':true) + (vm.calendarConfig.displayEventEndTimes && event.endsAt ? ' - ' + (event.endsAt | calendarDate:'time':true) : '') + ' - ' + event.title) | calendarTrustAsHtml\"\n    mwl-draggable=\"event.draggable === true\"\n    drop-data=\"{event: event, draggedFromDate: day.date.toDate()}\">\n  </a>\n</div>\n";

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cal-row-fluid cal-row-head\">\n\n  <div class=\"cal-cell1\" ng-repeat=\"day in vm.weekDays track by $index\" ng-bind=\"day\"></div>\n\n</div>\n<div class=\"cal-month-box\">\n\n  <div\n    ng-repeat=\"rowOffset in vm.monthOffsets track by rowOffset\"\n    ng-mouseenter=\"rowHovered = true\"\n    ng-mouseleave=\"rowHovered = false\">\n    <div class=\"cal-row-fluid cal-before-eventlist table-mwl\" ng-class=\"{first:$first, last:$last}\">\n      <div\n        ng-repeat=\"day in vm.view | calendarLimitTo:7:rowOffset track by $index\"\n        ng-init=\"dayIndex = vm.view.indexOf(day)\"\n        class=\"cal-cell1 cal-cell general-row {{ day.highlightClass }}\"\n        ng-click=\"vm.dayClicked(day, false, $event)\"\n        ng-class=\"{pointer: true}\">\n        <ng-include src=\"vm.calendarConfig.templates.calendarMonthCell\"></ng-include>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n";

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cal-slide-box\" uib-collapse=\"vm.isCollapsed\" mwl-collapse-fallback=\"vm.isCollapsed\">\n  <div class=\"cal-slide-content cal-event-list\">\n    <ul class=\"unstyled list-unstyled\">\n\n      <li\n        ng-repeat=\"event in vm.events | orderBy:'startsAt' track by event.$id\"\n        ng-class=\"event.cssClass\"\n        mwl-draggable=\"event.draggable === true\"\n        drop-data=\"{event: event}\">\n        <span class=\"pull-left event\" ng-class=\"'event-' + event.type\"></span>\n        &nbsp;\n        <a\n          href=\"javascript:;\"\n          class=\"event-item\"\n          ng-click=\"vm.onEventClick({calendarEvent: event})\">\n          <span ng-bind-html=\"vm.$sce.trustAsHtml(event.title)\"></span>\n          (<span ng-bind=\"event.startsAt | calendarDate:(isMonthView ? 'time' : 'datetime'):true\"></span><span ng-if=\"vm.calendarConfig.displayEventEndTimes && event.endsAt\"> - <span ng-bind=\"event.endsAt | calendarDate:(isMonthView ? 'time' : 'datetime'):true\"></span></span>)\n        </a>\n\n        <a\n          href=\"javascript:;\"\n          class=\"event-item-edit\"\n          ng-if=\"vm.editEventHtml && event.editable !== false\"\n          ng-bind-html=\"vm.$sce.trustAsHtml(vm.editEventHtml)\"\n          ng-click=\"vm.onEditEventClick({calendarEvent: event})\">\n        </a>\n\n        <a\n          href=\"javascript:;\"\n          class=\"event-item-delete\"\n          ng-if=\"vm.deleteEventHtml && event.deletable !== false\"\n          ng-bind-html=\"vm.$sce.trustAsHtml(vm.deleteEventHtml)\"\n          ng-click=\"vm.onDeleteEventClick({calendarEvent: event})\">\n        </a>\n      </li>\n\n    </ul>\n  </div>\n</div>\n";

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"cal-week-box\" ng-class=\"{'cal-day-box': (vm.showTimes||vm.category.showCategories)}\">\n  <div class=\"row row-header table-mwl\">\n    <div class=\"col-xs-1 header-title general-row no-border no-padding\" ng-if=\"vm.category.templateHeaderList\">{{vm.category.templateHeaderList}}</div>\n    <div class=\"col-xs-1 header-title general-row no-border no-padding\" ng-if=\"vm.category.categoryHeaderList\">{{vm.category.categoryHeaderList}}</div>\n    <div class=\"col-xs-10 header-title general-row no-border no-padding\">\n      <div class=\"cal-row-fluid cal-row-head\">\n        <div\n          class=\"cal-week-7 pointer\"\n          ng-repeat=\"day in vm.view.days track by $index\"\n          style=\"display: inline-block;text-align:center;\"\n          ng-class=\"{\n            'cal-day-weekend': day.isWeekend,\n            'cal-day-past': day.isPast,\n            'today-row': day.isToday,\n            'cal-day-future': day.isFuture}\"\n          mwl-element-dimensions=\"vm.dayColumnDimensions\"\n          ng-click=\"vm.calendarCtrl.dateClicked(day.date)\">\n\n          <span ng-bind=\"day.weekDayLabel\"></span>\n          <small>\n            <span\n              data-cal-date\n              ng-bind=\"day.dayLabel\">\n            </span>\n          </small>\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row table-mwl\">\n    <div class=\"col-xs-2 no-padding\"></div>\n    <div class=\"col-xs-10 no-padding\">\n      <div\n      style=\"position:relative;\"\n        ng-repeat=\"event in vm.view.events track by event.$id\">\n        <div\n          ng-class=\"'grid-week-7-' + event.daySpan +  ' grid-week-left-7-' + event.dayOffset + ' day-highlight dh-event-' + event.type + ' ' + event.cssClass\"\n          ng-style=\"{\n            top: (vm.showTimes||vm.category.showCategories) ? ((event.top + 2) + 'px') : 'auto',\n            position: (vm.showTimes||vm.category.showCategories) ? 'absolute' : 'inherit',\n            width: '',\n            left: ''\n          }\"\n          data-event-class\n          uib-tooltip-html=\"event.tooltip(event) | calendarTrustAsHtml\"\n          tooltip-placement=\"bottom\"\n          tooltip-append-to-body=\"true\"\n          ng-click=\"vm.onEventClick(event)\">\n          <strong ng-bind=\"(event.tempStartsAt || event.startsAt) | calendarDate:'time':true\" ng-show=\"vm.showTimes\"></strong>\n          <a\n            href=\"javascript:;\"\n            class=\"event-item\"\n            ng-bind-html=\"vm.$sce.trustAsHtml(event.title)\">\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row table-mwl\" ng-repeat=\"category in vm.categories track by $index\" ng-class=\"{first:$first, last:$last}\">\n    <div class=\"span1 col-xs-1 text-center general-row no-padding\"><strong ng-bind=\"$eval(vm.category.templateList)\"></strong></div>\n    <div class=\"span1 col-xs-1 text-center general-row no-padding\"><strong ng-bind=\"vm.parseNumber(category.number)\"></strong></div>\n    <div class=\"col-xs-10 general-row no-padding\" >\n      <div class=\"line\"></div>\n      <div ng-repeat=\"day in vm.view.days track by $index\" class=\"cal-week-7 category-event\" ng-class=\"{first:$first, last:$last, 'today-row': day.isToday}\">\n        <div\n          class=\"cell-room\"\n          ng-click=\"vm.onRoomClick(day.date, category)\"\n          uib-tooltip-html=\"vm.showTooltip(category) | calendarTrustAsHtml\"\n          tooltip-placement=\"bottom\"\n          tooltip-append-to-body=\"true\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cal-year-box\">\n  <div ng-repeat=\"rowOffset in [0, 4, 8] track by rowOffset\">\n    <div class=\"row cal-before-eventlist\">\n      <div\n        class=\"span3 col-md-3 col-xs-6 cal-cell {{ day.cssClass }}\"\n        ng-repeat=\"month in vm.view | calendarLimitTo:4:rowOffset track by $index\"\n        ng-init=\"monthIndex = vm.view.indexOf(month)\"\n        ng-click=\"vm.monthClicked(month, false, $event)\"\n        ng-class=\"{pointer: month.events.length > 0, 'cal-day-today': month.isToday}\"\n        mwl-droppable\n        on-drop=\"vm.handleEventDrop(dropData.event, month.date)\">\n\n        <span\n          class=\"pull-right\"\n          data-cal-date\n          ng-click=\"vm.calendarCtrl.dateClicked(month.date)\"\n          ng-bind=\"month.label\">\n        </span>\n\n        <small\n          class=\"cal-events-num badge badge-important pull-left\"\n          ng-show=\"month.badgeTotal > 0\"\n          ng-bind=\"month.badgeTotal\">\n        </small>\n\n        <div\n          class=\"cal-day-tick\"\n          ng-show=\"monthIndex === vm.openMonthIndex && vm.view[vm.openMonthIndex].events.length > 0\">\n          <i class=\"glyphicon glyphicon-chevron-up\"></i>\n          <i class=\"fa fa-chevron-up\"></i>\n        </div>\n\n      </div>\n    </div>\n\n    <mwl-calendar-slide-box\n      is-open=\"vm.openRowIndex === $index && vm.view[vm.openMonthIndex].events.length > 0\"\n      events=\"vm.view[vm.openMonthIndex].events\"\n      on-event-click=\"vm.onEventClick\"\n      edit-event-html=\"vm.editEventHtml\"\n      on-edit-event-click=\"vm.onEditEventClick\"\n      delete-event-html=\"vm.deleteEventHtml\"\n      on-delete-event-click=\"vm.onDeleteEventClick\">\n    </mwl-calendar-slide-box>\n\n  </div>\n\n</div>\n";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./mwlCalendar.js": 29,
		"./mwlCalendarCategoryList.js": 30,
		"./mwlCalendarDay.js": 31,
		"./mwlCalendarDayHorizontal.js": 32,
		"./mwlCalendarHourList.js": 33,
		"./mwlCalendarMonth.js": 34,
		"./mwlCalendarSlideBox.js": 35,
		"./mwlCalendarWeek.js": 36,
		"./mwlCalendarYear.js": 37,
		"./mwlCollapseFallback.js": 38,
		"./mwlDateModifier.js": 39,
		"./mwlDraggable.js": 40,
		"./mwlDroppable.js": 41,
		"./mwlElementDimensions.js": 42,
		"./mwlResizable.js": 43
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 28;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(15);

	angular
	  .module('mwl.calendar')
	  .controller('MwlCalendarCtrl', ["$scope", "$log", "$timeout", "$attrs", "$locale", "calendarInputEvents", "moment", "calendarTitle", function($scope, $log, $timeout, $attrs, $locale, calendarInputEvents, moment, calendarTitle) {

	    var vm = this;

	    vm.customData = vm.customData || {};
	    vm.changeView = function(view, newDay) {
	      vm.view = view;
	      vm.viewDate = newDay;
	    };

	    vm.dateClicked = function(date) {

	      var rawDate = moment(date).toDate();

	      var nextView = {
	        year: 'month',
	        month: 'day',
	        week: 'day'
	      };

	      if (vm.onViewChangeClick({calendarDate: rawDate, calendarNextView: nextView[vm.view]}) !== false) {
	        vm.changeView(nextView[vm.view], rawDate);
	      }

	    };

	    var previousDate = moment(vm.viewDate);
	    var previousView = vm.view;

	    function eventIsValid(event) {
	      if (!event.startsAt) {
	        $log.warn('Bootstrap calendar: ', 'Event is missing the startsAt field', event);
	      }

	      if (!angular.isDate(event.startsAt)) {
	        $log.warn('Bootstrap calendar: ', 'Event startsAt should be a javascript date object', event);
	      }

	      if (angular.isDefined(event.endsAt)) {
	        if (!angular.isDate(event.endsAt)) {
	          $log.warn('Bootstrap calendar: ', 'Event endsAt should be a javascript date object', event);
	        }
	        if (moment(event.startsAt).isAfter(moment(event.endsAt))) {
	          $log.warn('Bootstrap calendar: ', 'Event cannot start after it finishes', event);
	        }
	      }

	      return true;
	    }

	    vm.events = calendarInputEvents.calendarioToEvents(vm.calendario);
	    vm.categories = calendarInputEvents.calendarioToCategories(vm.calendario);

	    function refreshCalendar() {

	      if (calendarTitle[vm.view] && angular.isDefined($attrs.viewTitle)) {
	        vm.viewTitle = calendarTitle[vm.view](vm.viewDate);
	      }

	      vm.events = vm.events.filter(eventIsValid).map(function(event, index) {
	        Object.defineProperty(event, '$id', {enumerable: false, configurable: true, value: index});
	        return event;
	      });

	      //if on-timespan-click="calendarDay = calendarDate" is set then don't update the view as nothing needs to change
	      var currentDate = moment(vm.viewDate);
	      var shouldUpdate = true;
	      if (
	        previousDate.clone().startOf(vm.view).isSame(currentDate.clone().startOf(vm.view)) &&
	        !previousDate.isSame(currentDate) &&
	        vm.view === previousView
	      ) {
	        shouldUpdate = false;
	      }
	      previousDate = currentDate;
	      previousView = vm.view;

	      if (shouldUpdate) {
	        // a $timeout is required as $broadcast is synchronous so if a new events array is set the calendar won't update
	        $timeout(function() {
	          $scope.$broadcast('calendar.refreshView');
	        });
	      }
	    }

	    var eventsWatched = false;
	    $scope.$watch('vm.calendario', function(cal) {
	      vm.events = calendarInputEvents.calendarioToEvents(cal);
	      vm.categories = calendarInputEvents.calendarioToCategories(cal);
	    });
	    //Refresh the calendar when any of these variables change.
	    $scope.$watchGroup([
	      'vm.viewDate',
	      'vm.view',
	      'vm.cellIsOpen',
	      function() {
	        return moment.locale() + $locale.id; //Auto update the calendar when the locale changes
	      }
	    ], function() {
	      if (!eventsWatched) {
	        eventsWatched = true;
	        //need to deep watch events hence why it isn't included in the watch group
	        $scope.$watch('vm.events', refreshCalendar, true); //this will call refreshCalendar when the watcher starts (i.e. now)
	        $scope.$watch('vm.categories', refreshCalendar, true); //this will call refreshCalendar when the watcher starts (i.e. now)
	      } else {
	        refreshCalendar();
	      }
	    });

	  }])
	  .directive('mwlCalendar', ["calendarConfig", function(calendarConfig) {

	    return {
	      templateUrl: calendarConfig.templates.calendar,
	      restrict: 'E',
	      scope: {
	        calendario: '=',
	        view: '=',
	        viewTitle: '=?',
	        viewDate: '=',
	        editEventHtml: '=?',
	        deleteEventHtml: '=?',
	        cellIsOpen: '=?',
	        onEventClick: '=',
	        onRoomClick: '=',
	        onEventTimesChanged: '&',
	        onEditEventClick: '&',
	        onDeleteEventClick: '&',
	        onTimespanClick: '&',
	        onViewChangeClick: '&',
	        cellModifier: '&',
	        dayViewStart: '@',
	        dayViewEnd: '@',
	        dayViewSplit: '@',
	        customData: '=?'
	      },
	      controller: 'MwlCalendarCtrl as vm',
	      bindToController: true
	    };

	  }]);


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(15);

	angular
	  .module('mwl.calendar')
	  .controller('MwlCalendarCategoryListCtrl', ["calendarConfig", function(calendarConfig) {
	    var vm = this;
	    vm.category = calendarConfig.category;

	    vm.showTooltip = function(category) {
	        var text = 'Type: ' + category.type + '<br/>';
	        text += 'Size: ' + category.size + '<br/>';
	        text += 'Clean: ' + category.isclean;
	        return text;
	    };
	  }])
	  .directive('mwlCalendarCategoryList', ["calendarConfig", function(calendarConfig) {

	    return {
	      restrict: 'E',
	      templateUrl: calendarConfig.templates.calendarCategoryList,
	      controller: 'MwlCalendarCategoryListCtrl as vm',
	      scope: {
	        categories: '=',
	        onRoomClick: '=',
	        days: '=',
	        week: '=?'
	      },
	      bindToController: true
	    };

	  }]);


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(15);

	angular
	  .module('mwl.calendar')
	  .controller('MwlCalendarDayCtrl', ["$scope", "$sce", "moment", "calendarHelper", "calendarConfig", function($scope, $sce, moment, calendarHelper, calendarConfig) {

	    var vm = this;

	    vm.calendarConfig = calendarConfig;
	    vm.$sce = $sce;

	    $scope.$on('calendar.refreshView', function() {
	      vm.dayViewSplit = vm.dayViewSplit || 30;
	      vm.dayViewHeight = calendarHelper.getDayViewHeight(
	        vm.dayViewStart,
	        vm.dayViewEnd,
	        vm.dayViewSplit
	      );

	      vm.view = calendarHelper.getDayView(
	        vm.events,
	        vm.viewDate,
	        vm.dayViewStart,
	        vm.dayViewEnd,
	        vm.dayViewSplit
	      );

	    });

	    vm.eventDragComplete = function(event, minuteChunksMoved) {
	      var minutesDiff = minuteChunksMoved * vm.dayViewSplit;
	      var newStart = moment(event.startsAt).add(minutesDiff, 'minutes');
	      var newEnd = moment(event.endsAt).add(minutesDiff, 'minutes');
	      delete event.tempStartsAt;

	      vm.onEventTimesChanged({
	        calendarEvent: event,
	        calendarNewEventStart: newStart.toDate(),
	        calendarNewEventEnd: event.endsAt ? newEnd.toDate() : null
	      });
	    };

	    vm.eventDragged = function(event, minuteChunksMoved) {
	      var minutesDiff = minuteChunksMoved * vm.dayViewSplit;
	      event.tempStartsAt = moment(event.startsAt).add(minutesDiff, 'minutes').toDate();
	    };

	    vm.eventResizeComplete = function(event, edge, minuteChunksMoved) {
	      var minutesDiff = minuteChunksMoved * vm.dayViewSplit;
	      var start = moment(event.startsAt);
	      var end = moment(event.endsAt);
	      if (edge === 'start') {
	        start.add(minutesDiff, 'minutes');
	      } else {
	        end.add(minutesDiff, 'minutes');
	      }
	      delete event.tempStartsAt;

	      vm.onEventTimesChanged({
	        calendarEvent: event,
	        calendarNewEventStart: start.toDate(),
	        calendarNewEventEnd: end.toDate()
	      });
	    };

	    vm.eventResized = function(event, edge, minuteChunksMoved) {
	      var minutesDiff = minuteChunksMoved * vm.dayViewSplit;
	      if (edge === 'start') {
	        event.tempStartsAt = moment(event.startsAt).add(minutesDiff, 'minutes').toDate();
	      }
	    };

	  }])
	  .directive('mwlCalendarDay', ["calendarConfig", function(calendarConfig) {

	    return {
	      templateUrl: calendarConfig.templates.calendarDayView,
	      restrict: 'E',
	      require: '^mwlCalendar',
	      scope: {
	        events: '=',
	        viewDate: '=',
	        onEventClick: '=',
	        onEventTimesChanged: '=',
	        onTimespanClick: '=',
	        dayViewStart: '=',
	        dayViewEnd: '=',
	        dayViewSplit: '='
	      },
	      controller: 'MwlCalendarDayCtrl as vm',
	      bindToController: true
	    };

	  }]);


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(15);

	angular
	  .module('mwl.calendar')
	  .controller('MwlCalendarDayHorizontalCtrl', ["$scope", "$sce", "moment", "calendarHelper", "calendarConfig", function($scope, $sce, moment, calendarHelper, calendarConfig) {

	    var vm = this;

	    vm.showTimes = calendarConfig.showTimesOnWeekView;
	    vm.category = calendarConfig.category;
	    vm.categories = vm.categories || [];
	    vm.parseNumber = calendarHelper.parseNumber;

	    vm.$sce = $sce;

	    var dayViewStart = moment(vm.dayViewStart || '00:00', 'HH:mm');
	    var dayViewEnd = moment(vm.dayViewEnd || '23:59', 'HH:mm');
	    vm.dayViewSplit = parseInt(vm.dayViewSplit);
	    vm.hours = [];
	    var dayCounter = moment(vm.viewDate)
	      .clone()
	      .hours(dayViewStart.hours())
	      .minutes(dayViewStart.minutes())
	      .seconds(dayViewStart.seconds());

	    for (var i = 0; i <= dayViewEnd.diff(dayViewStart, 'hours'); i++) {
	      vm.hours.push({
	        label: calendarHelper.formatDate(dayCounter, calendarConfig.dateFormats.hour),
	        date: dayCounter.clone()
	      });
	      dayCounter.add(1, 'hour');
	    }

	    $scope.$on('calendar.refreshView', function() {
	      vm.dayViewSplit = vm.dayViewSplit || 30;
	      vm.dayViewHeight = calendarHelper.getDayViewHeight(
	        vm.dayViewStart,
	        vm.dayViewEnd,
	        vm.dayViewSplit
	      );

	      if (vm.category.showCategories) {
	        vm.dayViewHeight = vm.categories.length * 30 + 2;
	        vm.view = calendarHelper.getDayViewWithCategories(
	          vm.events,
	          vm.categories,
	          vm.viewDate,
	          vm.dayViewStart,
	          vm.dayViewEnd
	        );
	      } else {
	        vm.view = calendarHelper.getDayView(
	          vm.events,
	          vm.viewDate,
	          vm.dayViewStart,
	          vm.dayViewEnd,
	          vm.dayViewSplit
	        );
	      }
	    });

	    vm.checkToday = function(h) {
	      return h.date.hour() === moment().hour() && moment().startOf('day').isSame(moment(vm.viewDate).startOf('day'));
	    };

	    vm.onRClick = function(hour, category) {
	      vm.onRoomClick(moment(vm.viewDate).hours(hour.label), category);
	    };

	    vm.showTooltip = function(category) {
	        var text = 'Type: ' + category.type + '<br/>';
	        text += 'Size: ' + category.size + '<br/>';
	        text += 'Clean: ' + category.isclean;
	        return text;
	    };
	  }])
	  .directive('mwlCalendarDayHorizontal', ["calendarConfig", function(calendarConfig) {

	    return {
	      templateUrl: calendarConfig.templates.calendarDayHorizontalView,
	      restrict: 'E',
	      require: '^mwlCalendar',
	      scope: {
	        events: '=',
	        categories: '=?',
	        viewDate: '=',
	        onEventClick: '=',
	        onRoomClick: '=',
	        onEventTimesChanged: '=',
	        onTimespanClick: '=',
	        dayViewStart: '=',
	        dayViewEnd: '=',
	        dayViewSplit: '='
	      },
	      controller: 'MwlCalendarDayHorizontalCtrl as vm',
	      bindToController: true
	    };

	  }]);


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(15);

	angular
	  .module('mwl.calendar')
	  .controller('MwlCalendarHourListCtrl', ["$scope", "moment", "calendarConfig", "calendarHelper", function($scope, moment, calendarConfig, calendarHelper) {
	    var vm = this;
	    var dayViewStart, dayViewEnd;

	    function updateDays() {
	      dayViewStart = moment(vm.dayViewStart || '00:00', 'HH:mm');
	      dayViewEnd = moment(vm.dayViewEnd || '23:00', 'HH:mm');
	      vm.dayViewSplit = parseInt(vm.dayViewSplit);
	      vm.hours = [];
	      var dayCounter = moment(vm.viewDate)
	        .clone()
	        .hours(dayViewStart.hours())
	        .minutes(dayViewStart.minutes())
	        .seconds(dayViewStart.seconds());
	      for (var i = 0; i <= dayViewEnd.diff(dayViewStart, 'hours'); i++) {
	        vm.hours.push({
	          label: calendarHelper.formatDate(dayCounter, calendarConfig.dateFormats.hour),
	          date: dayCounter.clone()
	        });
	        dayCounter.add(1, 'hour');
	      }
	    }

	    var originalLocale = moment.locale();

	    $scope.$on('calendar.refreshView', function() {

	      if (originalLocale !== moment.locale()) {
	        originalLocale = moment.locale();
	        updateDays();
	      }

	    });

	    $scope.$watchGroup([
	      'vm.dayViewStart',
	      'vm.dayViewEnd',
	      'vm.dayViewSplit',
	      'vm.viewDate'
	    ], function() {
	      updateDays();
	    });

	  }])
	  .directive('mwlCalendarHourList', ["calendarConfig", function(calendarConfig) {

	    return {
	      restrict: 'E',
	      templateUrl: calendarConfig.templates.calendarHourList,
	      controller: 'MwlCalendarHourListCtrl as vm',
	      scope: {
	        viewDate: '=',
	        dayViewStart: '=',
	        dayViewEnd: '=',
	        dayViewSplit: '=',
	        onTimespanClick: '='
	      },
	      bindToController: true
	    };

	  }]);


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(15);

	angular
	  .module('mwl.calendar')
	  .controller('MwlCalendarMonthCtrl', ["$scope", "moment", "calendarHelper", "calendarConfig", function($scope, moment, calendarHelper, calendarConfig) {

	    var vm = this;

	    vm.calendarConfig = calendarConfig;
	    vm.openRowIndex = null;

	    $scope.$on('calendar.refreshView', function() {

	      vm.weekDays = calendarHelper.getWeekDayNames();

	      vm.view = calendarHelper.getMonthView(vm.events, vm.viewDate, vm.cellModifier);
	      var rows = Math.floor(vm.view.length / 7);
	      vm.monthOffsets = [];
	      for (var i = 0; i < rows; i++) {
	        vm.monthOffsets.push(i * 7);
	      }

	      //Auto open the calendar to the current day if set
	      if (vm.cellIsOpen && vm.openRowIndex === null) {
	        vm.openDayIndex = null;
	        vm.view.forEach(function(day) {
	          if (day.inMonth && moment(vm.viewDate).startOf('day').isSame(day.date)) {
	            vm.dayClicked(day, true);
	          }
	        });
	      }

	    });

	    vm.dayClicked = function(day, dayClickedFirstRun, $event) {

	      if (!dayClickedFirstRun) {
	        vm.onTimespanClick({
	          calendarDate: day.date.toDate(),
	          $event: $event
	        });
	        if ($event && $event.defaultPrevented) {
	          return;
	        }
	      }

	      vm.openRowIndex = null;
	      var dayIndex = vm.view.indexOf(day);
	      if (dayIndex === vm.openDayIndex) { //the day has been clicked and is already open
	        vm.openDayIndex = null; //close the open day
	        vm.cellIsOpen = false;
	      } else {
	        vm.openDayIndex = dayIndex;
	        vm.openRowIndex = Math.floor(dayIndex / 7);
	        vm.cellIsOpen = true;
	      }

	    };

	    vm.highlightEvent = function(event, shouldAddClass) {

	      vm.view.forEach(function(day) {
	        delete day.highlightClass;
	        if (shouldAddClass) {
	          var dayContainsEvent = day.events.indexOf(event) > -1;
	          if (dayContainsEvent) {
	            day.highlightClass = 'day-highlight dh-event-' + event.type;
	          }
	        }
	      });

	    };

	    vm.handleEventDrop = function(event, newDayDate, draggedFromDate) {

	      var newStart = moment(event.startsAt)
	        .date(moment(newDayDate).date())
	        .month(moment(newDayDate).month());

	      var newEnd = calendarHelper.adjustEndDateFromStartDiff(event.startsAt, newStart, event.endsAt);

	      vm.onEventTimesChanged({
	        calendarEvent: event,
	        calendarDate: newDayDate,
	        calendarNewEventStart: newStart.toDate(),
	        calendarNewEventEnd: newEnd ? newEnd.toDate() : null,
	        calendarDraggedFromDate: draggedFromDate
	      });
	    };

	  }])
	  .directive('mwlCalendarMonth', ["calendarConfig", function(calendarConfig) {

	    return {
	      templateUrl: calendarConfig.templates.calendarMonthView,
	      restrict: 'E',
	      require: '^mwlCalendar',
	      scope: {
	        events: '=',
	        viewDate: '=',
	        onEventClick: '=',
	        onEditEventClick: '=',
	        onDeleteEventClick: '=',
	        onEventTimesChanged: '=',
	        editEventHtml: '=',
	        deleteEventHtml: '=',
	        cellIsOpen: '=',
	        onTimespanClick: '=',
	        cellModifier: '='
	      },
	      controller: 'MwlCalendarMonthCtrl as vm',
	      link: function(scope, element, attrs, calendarCtrl) {
	        scope.vm.calendarCtrl = calendarCtrl;
	      },
	      bindToController: true
	    };

	  }]);


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(15);

	angular
	  .module('mwl.calendar')
	  .controller('MwlCalendarSlideBoxCtrl', ["$sce", "$scope", "$timeout", "calendarConfig", function($sce, $scope, $timeout, calendarConfig) {

	    var vm = this;
	    vm.$sce = $sce;
	    vm.calendarConfig = calendarConfig;

	    vm.isCollapsed = true;
	    $scope.$watch('vm.isOpen', function(isOpen) {
	      //events must be populated first to set the element height before animation will work
	      $timeout(function() {
	        vm.isCollapsed = !isOpen;
	      });
	    });

	  }])
	  .directive('mwlCalendarSlideBox', ["calendarConfig", function(calendarConfig) {

	    return {
	      restrict: 'E',
	      templateUrl: calendarConfig.templates.calendarSlideBox,
	      replace: true,
	      controller: 'MwlCalendarSlideBoxCtrl as vm',
	      require: ['^?mwlCalendarMonth', '^?mwlCalendarYear'],
	      link: function(scope, elm, attrs, ctrls) {
	        scope.isMonthView = !!ctrls[0];
	        scope.isYearView = !!ctrls[1];
	      },
	      scope: {
	        isOpen: '=',
	        events: '=',
	        onEventClick: '=',
	        editEventHtml: '=',
	        onEditEventClick: '=',
	        deleteEventHtml: '=',
	        onDeleteEventClick: '='
	      },
	      bindToController: true
	    };

	  }]);


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(15);

	angular
	  .module('mwl.calendar')
	  .controller('MwlCalendarWeekCtrl', ["$scope", "$sce", "calendarHelper", "calendarConfig", function($scope, $sce, calendarHelper, calendarConfig) {

	    var vm = this;

	    vm.showTimes = calendarConfig.showTimesOnWeekView;
	    vm.category = calendarConfig.category;
	    vm.categories = vm.categories;
	    vm.parseNumber = calendarHelper.parseNumber;

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

	  }])
	  .directive('mwlCalendarWeek', ["calendarConfig", function(calendarConfig) {

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

	  }]);


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(15);

	angular
	  .module('mwl.calendar')
	  .controller('MwlCalendarYearCtrl', ["$scope", "moment", "calendarHelper", function($scope, moment, calendarHelper) {

	    var vm = this;
	    vm.openMonthIndex = null;

	    $scope.$on('calendar.refreshView', function() {
	      vm.view = calendarHelper.getYearView(vm.events, vm.viewDate, vm.cellModifier);

	      //Auto open the calendar to the current day if set
	      if (vm.cellIsOpen && vm.openMonthIndex === null) {
	        vm.openMonthIndex = null;
	        vm.view.forEach(function(month) {
	          if (moment(vm.viewDate).startOf('month').isSame(month.date)) {
	            vm.monthClicked(month, true);
	          }
	        });
	      }

	    });

	    vm.monthClicked = function(month, monthClickedFirstRun, $event) {

	      if (!monthClickedFirstRun) {
	        vm.onTimespanClick({
	          calendarDate: month.date.toDate(),
	          $event: $event
	        });
	        if ($event && $event.defaultPrevented) {
	          return;
	        }
	      }

	      vm.openRowIndex = null;
	      var monthIndex = vm.view.indexOf(month);
	      if (monthIndex === vm.openMonthIndex) { //the month has been clicked and is already open
	        vm.openMonthIndex = null; //close the open month
	        vm.cellIsOpen = false;
	      } else {
	        vm.openMonthIndex = monthIndex;
	        vm.openRowIndex = Math.floor(monthIndex / 4);
	        vm.cellIsOpen = true;
	      }

	    };

	    vm.handleEventDrop = function(event, newMonthDate) {
	      var newStart = moment(event.startsAt).month(moment(newMonthDate).month());
	      var newEnd = calendarHelper.adjustEndDateFromStartDiff(event.startsAt, newStart, event.endsAt);

	      vm.onEventTimesChanged({
	        calendarEvent: event,
	        calendarDate: newMonthDate,
	        calendarNewEventStart: newStart.toDate(),
	        calendarNewEventEnd: newEnd ? newEnd.toDate() : null
	      });
	    };

	  }])
	  .directive('mwlCalendarYear', ["calendarConfig", function(calendarConfig) {

	    return {
	      templateUrl: calendarConfig.templates.calendarYearView,
	      restrict: 'E',
	      require: '^mwlCalendar',
	      scope: {
	        events: '=',
	        viewDate: '=',
	        onEventClick: '=',
	        onEventTimesChanged: '=',
	        onEditEventClick: '=',
	        onDeleteEventClick: '=',
	        editEventHtml: '=',
	        deleteEventHtml: '=',
	        cellIsOpen: '=',
	        onTimespanClick: '=',
	        cellModifier: '='
	      },
	      controller: 'MwlCalendarYearCtrl as vm',
	      link: function(scope, element, attrs, calendarCtrl) {
	        scope.vm.calendarCtrl = calendarCtrl;
	      },
	      bindToController: true
	    };

	  }]);


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(15);

	angular
	  .module('mwl.calendar')
	  .controller('MwlCollapseFallbackCtrl', ["$scope", "$attrs", "$element", function($scope, $attrs, $element) {

	    $scope.$watch($attrs.mwlCollapseFallback, function(shouldCollapse) {
	      if (shouldCollapse) {
	        $element.addClass('ng-hide');
	      } else {
	        $element.removeClass('ng-hide');
	      }
	    });

	  }])
	  .directive('mwlCollapseFallback', ["$injector", function($injector) {

	    if ($injector.has('uibCollapseDirective')) {
	      return {};
	    }

	    return {
	      restrict: 'A',
	      controller: 'MwlCollapseFallbackCtrl'
	    };

	  }]);


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(15);

	angular
	  .module('mwl.calendar')
	  .controller('MwlDateModifierCtrl', ["$element", "$attrs", "$scope", "moment", function($element, $attrs, $scope, moment) {

	    var vm = this;

	    function onClick() {
	      if (angular.isDefined($attrs.setToToday)) {
	        vm.date = new Date();
	      } else if (angular.isDefined($attrs.increment)) {
	        var inc = (vm.increment === 'dayhorizontal') ? 'day' : vm.increment;
	        vm.date = moment(vm.date).add(1, inc).toDate();
	      } else if (angular.isDefined($attrs.decrement)) {
	        var dec = (vm.decrement === 'dayhorizontal') ? 'day' : vm.decrement;
	        vm.date = moment(vm.date).subtract(1, dec).toDate();
	      }
	      $scope.$apply();
	    }

	    $element.bind('click', onClick);

	    $scope.$on('$destroy', function() {
	      $element.unbind('click', onClick);
	    });

	  }])
	  .directive('mwlDateModifier', function() {

	    return {
	      restrict: 'A',
	      controller: 'MwlDateModifierCtrl as vm',
	      scope: {
	        date: '=',
	        increment: '=',
	        decrement: '='
	      },
	      bindToController: true
	    };

	  });


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(15);

	angular
	  .module('mwl.calendar')
	  .controller('MwlDraggableCtrl', ["$element", "$scope", "$window", "$parse", "$attrs", "$timeout", "interact", function($element, $scope, $window, $parse, $attrs, $timeout, interact) {

	    if (!interact) {
	      return;
	    }

	    var snap, snapGridDimensions;
	    if ($attrs.snapGrid) {
	      snapGridDimensions = $parse($attrs.snapGrid)($scope);
	      snap = {
	        targets: [
	          interact.createSnapGrid(snapGridDimensions)
	        ]
	      };
	    }

	    function translateElement(elm, transformValue) {
	      return elm
	        .css('-ms-transform', transformValue)
	        .css('-webkit-transform', transformValue)
	        .css('transform', transformValue);
	    }

	    function canDrag() {
	      return $parse($attrs.mwlDraggable)($scope);
	    }

	    function getUnitsMoved(x, y, gridDimensions) {

	      var result = {x: x, y: y};

	      if (gridDimensions && gridDimensions.x) {
	        result.x /= gridDimensions.x;
	      }

	      if (gridDimensions && gridDimensions.y) {
	        result.y /= gridDimensions.y;
	      }

	      return result;

	    }

	    interact($element[0]).draggable({
	      snap: snap,
	      onstart: function(event) {
	        if (canDrag()) {
	          angular.element(event.target).addClass('dragging-active');
	          event.target.dropData = $parse($attrs.dropData)($scope);
	          event.target.style.pointerEvents = 'none';
	          if ($attrs.onDragStart) {
	            $parse($attrs.onDragStart)($scope);
	            $scope.$apply();
	          }
	        }
	      },
	      onmove: function(event) {

	        if (canDrag()) {
	          var elm = angular.element(event.target);
	          var x = (parseFloat(elm.attr('data-x')) || 0) + (event.dx || 0);
	          var y = (parseFloat(elm.attr('data-y')) || 0) + (event.dy || 0);

	          switch ($parse($attrs.axis)($scope)) {
	            case 'x':
	              y = 0;
	              break;

	            case 'y':
	              x = 0;
	              break;

	            default:
	          }

	          if ($window.getComputedStyle(elm[0]).position === 'static') {
	            elm.css('position', 'relative');
	          }

	          translateElement(elm, 'translate(' + x + 'px, ' + y + 'px)')
	            .css('z-index', 1000)
	            .attr('data-x', x)
	            .attr('data-y', y);

	          if ($attrs.onDrag) {
	            $parse($attrs.onDrag)($scope, getUnitsMoved(x, y, snapGridDimensions));
	            $scope.$apply();
	          }
	        }

	      },
	      onend: function(event) {

	        if (canDrag()) {
	          var elm = angular.element(event.target);
	          var x = elm.attr('data-x');
	          var y = elm.attr('data-y');

	          event.target.style.pointerEvents = 'auto';
	          if ($attrs.onDragEnd) {
	            $parse($attrs.onDragEnd)($scope, getUnitsMoved(x, y, snapGridDimensions));
	            $scope.$apply();
	          }

	          $timeout(function() {
	            translateElement(elm, '')
	              .css('z-index', 'auto')
	              .removeAttr('data-x')
	              .removeAttr('data-y')
	              .removeClass('dragging-active');
	          });
	        }

	      }
	    });

	    $scope.$on('$destroy', function() {
	      interact($element[0]).unset();
	    });

	  }])
	  .directive('mwlDraggable', function() {

	    return {
	      restrict: 'A',
	      controller: 'MwlDraggableCtrl'
	    };

	  });


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(15);

	angular
	  .module('mwl.calendar')
	  .controller('MwlDroppableCtrl', ["$element", "$scope", "$parse", "$attrs", "interact", function($element, $scope, $parse, $attrs, interact) {

	    if (!interact) {
	      return;
	    }

	    interact($element[0]).dropzone({
	      ondragenter: function(event) {
	        angular.element(event.target).addClass('drop-active');
	      },
	      ondragleave: function(event) {
	        angular.element(event.target).removeClass('drop-active');
	      },
	      ondropdeactivate: function(event) {
	        angular.element(event.target).removeClass('drop-active');
	      },
	      ondrop: function(event) {
	        if (event.relatedTarget.dropData) {
	          $parse($attrs.onDrop)($scope, {dropData: event.relatedTarget.dropData});
	          $scope.$apply();
	        }
	      }
	    });

	    $scope.$on('$destroy', function() {
	      interact($element[0]).unset();
	    });

	  }])
	  .directive('mwlDroppable', function() {

	    return {
	      restrict: 'A',
	      controller: 'MwlDroppableCtrl'
	    };

	  });


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(15);

	angular
	  .module('mwl.calendar')
	  .controller('MwlElementDimensionsCtrl', ["$element", "$scope", "$parse", "$attrs", function($element, $scope, $parse, $attrs) {
	    $parse($attrs.mwlElementDimensions).assign($scope, {
	      width: $element[0].offsetWidth,
	      height: $element[0].offsetHeight
	    });

	  }])
	  .directive('mwlElementDimensions', function() {

	    return {
	      restrict: 'A',
	      controller: 'MwlElementDimensionsCtrl'
	    };

	  });


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(15);

	angular
	  .module('mwl.calendar')
	  .controller('MwlResizableCtrl', ["$element", "$scope", "$parse", "$attrs", "$timeout", "interact", function($element, $scope, $parse, $attrs, $timeout, interact) {

	    if (!interact) {
	      return;
	    }

	    var snap, snapGridDimensions;
	    if ($attrs.snapGrid) {
	      snapGridDimensions = $parse($attrs.snapGrid)($scope);
	      snap = {
	        targets: [
	          interact.createSnapGrid(snapGridDimensions)
	        ]
	      };
	    }

	    var originalDimensions = {};
	    var originalDimensionsStyle = {};
	    var resizeEdge;

	    function canResize() {
	      return $parse($attrs.mwlResizable)($scope);
	    }

	    function getUnitsResized(edge, elm, gridDimensions) {
	      var unitsResized = {};
	      unitsResized.edge = edge;
	      if (edge === 'start') {
	        unitsResized.x = elm.data('x');
	        unitsResized.y = elm.data('y');
	      } else if (edge === 'end') {
	        unitsResized.x = parseFloat(elm.css('width').replace('px', '')) - originalDimensions.width;
	        unitsResized.y = parseFloat(elm.css('height').replace('px', '')) - originalDimensions.height;
	      }
	      if (gridDimensions && gridDimensions.x) {
	        unitsResized.x = Math.round(unitsResized.x / gridDimensions.x);
	      }
	      if (gridDimensions && gridDimensions.y) {
	        unitsResized.y = Math.round(unitsResized.y / gridDimensions.y);
	      }
	      return unitsResized;
	    }

	    interact($element[0]).resizable({
	      edges: $parse($attrs.resizeEdges)($scope),
	      snap: snap,
	      onstart: function(event) {

	        if (canResize()) {
	          resizeEdge = 'end';
	          var elm = angular.element(event.target);
	          originalDimensions.height = elm[0].offsetHeight;
	          originalDimensions.width = elm[0].offsetWidth;
	          originalDimensionsStyle.height = elm.css('height');
	          originalDimensionsStyle.width = elm.css('width');
	        }

	      },
	      onmove: function(event) {

	        if (canResize()) {
	          var elm = angular.element(event.target);
	          var x = parseFloat(elm.data('x') || 0);
	          var y = parseFloat(elm.data('y') || 0);

	          elm.css({
	            width: event.rect.width + 'px',
	            height: event.rect.height + 'px'
	          });

	          // translate when resizing from top or left edges
	          x += event.deltaRect.left;
	          y += event.deltaRect.top;

	          elm.css('transform', 'translate(' + x + 'px,' + y + 'px)');

	          elm.data('x', x);
	          elm.data('y', y);

	          if (event.deltaRect.left !== 0 || event.deltaRect.top !== 0) {
	            resizeEdge = 'start';
	          }

	          if ($attrs.onResize) {
	            $parse($attrs.onResize)($scope, getUnitsResized(resizeEdge, elm, snapGridDimensions));
	            $scope.$apply();
	          }

	        }

	      },
	      onend: function(event) {

	        if (canResize()) {

	          var elm = angular.element(event.target);
	          var unitsResized = getUnitsResized(resizeEdge, elm, snapGridDimensions);

	          $timeout(function() {
	            elm
	              .data('x', null)
	              .data('y', null)
	              .css({
	                transform: '',
	                width: originalDimensionsStyle.width,
	                height: originalDimensionsStyle.height
	              });
	          });

	          if ($attrs.onResizeEnd) {
	            $parse($attrs.onResizeEnd)($scope, unitsResized);
	            $scope.$apply();
	          }
	        }

	      }
	    });

	    $scope.$on('$destroy', function() {
	      interact($element[0]).unset();
	    });

	  }])
	  .directive('mwlResizable', function() {

	    return {
	      restrict: 'A',
	      controller: 'MwlResizableCtrl'
	    };

	  });


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./calendarDate.js": 45,
		"./calendarLimitTo.js": 46,
		"./calendarTruncateEventTitle.js": 47,
		"./calendarTrustAsHtml.js": 48,
		"./dateUtils.js": 49
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 44;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(15);

	angular
	  .module('mwl.calendar')
	  .filter('calendarDate', ["calendarHelper", "calendarConfig", function(calendarHelper, calendarConfig) {

	    function calendarDate(date, format, getFromConfig) {

	      if (getFromConfig === true) {
	        format = calendarConfig.dateFormats[format];
	      }

	      return calendarHelper.formatDate(date, format);

	    }

	    // This is stateful because the locale can change as well
	    // as calendarConfig.dateFormats which would change the value outside of this filter
	    calendarDate.$stateful = true;

	    return calendarDate;

	  }]);


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(15);

	angular
	  .module('mwl.calendar')
	  .filter('calendarLimitTo', ["limitToFilter", function(limitToFilter) {

	    if (angular.version.minor >= 4) { //1.4+ supports the begin attribute
	      return limitToFilter;
	    }

	    //Copied from the angular source. Only 1.4 has the begin functionality.
	    return function(input, limit, begin) {
	      if (Math.abs(Number(limit)) === Infinity) {
	        limit = Number(limit);
	      } else {
	        limit = parseInt(limit);
	      }
	      if (isNaN(limit)) {
	        return input;
	      }

	      if (angular.isNumber(input)) {
	        input = input.toString();
	      }
	      if (!angular.isArray(input) && !angular.isString(input)) {
	        return input;
	      }

	      begin = (!begin || isNaN(begin)) ? 0 : parseInt(begin);
	      begin = (begin < 0 && begin >= -input.length) ? input.length + begin : begin;

	      if (limit >= 0) {
	        return input.slice(begin, begin + limit);
	      } else if (begin === 0) {
	        return input.slice(limit, input.length);
	      } else {
	        return input.slice(Math.max(0, begin + limit), begin);
	      }
	    };

	  }]);


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(15);

	angular
	  .module('mwl.calendar')
	  .filter('calendarTruncateEventTitle', function() {

	    return function(string, length, boxHeight) {
	      if (!string) {
	        return '';
	      }

	      //Only truncate if if actually needs truncating
	      if (string.length >= length && string.length / 20 > boxHeight / 30) {
	        return string.substr(0, length) + '...';
	      } else {
	        return string;
	      }
	    };

	  });


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(15);

	angular
	  .module('mwl.calendar')
	  .filter('calendarTrustAsHtml', ["$sce", function($sce) {

	    return function(text) {
	      return $sce.trustAsHtml(text);
	    };

	  }]);


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(15);

	angular
	  .module('mwl.calendar')
	    .filter('mFormat', ["moment", function(moment) {
	        function formatDate(date, format) {
	            return moment(new Date(date)).format(format);
	        }
	        formatDate.$stateful = true;
	        return formatDate;
	    }])
	    .filter('mIsSameDayMonth', ["moment", function(moment) {

	        function mIsSame(date, date2) {
	            date = moment(new Date(date)).format('DD/MM');
	            date2 = moment(new Date(date2)).format('DD/MM');
	            return (date === date2);
	        }
	        mIsSame.$stateful = true;
	        return mIsSame;
	    }]);


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./calendarConfig.js": 51,
		"./calendarHelper.js": 52,
		"./calendarInputEvents.js": 53,
		"./calendarTitle.js": 54,
		"./interact.js": 55,
		"./moment.js": 57
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 50;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(15);

	angular
	  .module('mwl.calendar')
	  .constant('calendarConfig', {
	    allDateFormats: {
	      angular: {
	        date: {
	          hour: 'ha',
	          day: 'd MMM',
	          month: 'MMMM',
	          weekDay: 'EEEE',
	          time: 'HH:mm',
	          datetime: 'MMM d, h:mm a'
	        },
	        title: {
	          day: 'EEEE d MMMM, yyyy',
	          week: 'Week {week} of {year}',
	          month: 'MMMM yyyy',
	          year: 'yyyy'
	        }
	      },
	      moment: {
	        date: {
	          hour: 'ha',
	          day: 'D MMM',
	          month: 'MMMM',
	          weekDay: 'dddd',
	          time: 'HH:mm',
	          datetime: 'MMM D, h:mm a'
	        },
	        title: {
	          day: 'dddd D MMMM, YYYY',
	          week: 'Week {week} of {year}',
	          month: 'MMMM YYYY',
	          year: 'YYYY'
	        }
	      }
	    },
	    get dateFormats() {
	      return this.allDateFormats[this.dateFormatter].date;
	    },
	    get titleFormats() {
	      return this.allDateFormats[this.dateFormatter].title;
	    },
	    dateFormatter: 'angular',
	    displayEventEndTimes: false,
	    showTimesOnWeekView: false,
	    displayAllMonthEvents: false,
	    i18nStrings: {
	      eventsLabel: 'Events',
	      timeLabel: 'Time',
	      weekNumber: 'Week {week}'
	    },
	    templates: {},
	    category: {
	      showCategories: false
	    },
	    categories: []
	  });


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(15);

	angular
	  .module('mwl.calendar')
	  .factory('calendarHelper', ["dateFilter", "moment", "calendarConfig", "calendarInputEvents", function(dateFilter, moment, calendarConfig, calendarInputEvents) {

	    function formatDate(date, format) {
	      if (calendarConfig.dateFormatter === 'angular') {
	        return dateFilter(moment(date).toDate(), format);
	      } else if (calendarConfig.dateFormatter === 'moment') {
	        return moment(date).format(format);
	      }
	    }

	    function adjustEndDateFromStartDiff(oldStart, newStart, oldEnd) {
	      if (!oldEnd) {
	        return oldEnd;
	      }
	      var diffInSeconds = moment(newStart).diff(moment(oldStart));
	      return moment(oldEnd).add(diffInSeconds);
	    }

	    function getRecurringEventPeriod(eventPeriod, recursOn, containerPeriodStart) {

	      var eventStart = moment(eventPeriod.start);
	      var eventEnd = moment(eventPeriod.end);
	      var periodStart = moment(containerPeriodStart);

	      if (angular.isDefined(recursOn)) {

	        switch (recursOn) {
	          case 'year':
	            eventStart.set({
	              year: periodStart.year()
	            });
	            break;

	          case 'month':
	            eventStart.set({
	              year: periodStart.year(),
	              month: periodStart.month()
	            });
	            break;

	          default:
	            throw new Error('Invalid value (' + recursOn + ') given for recurs on. Can only be year or month.');
	        }

	        eventEnd = adjustEndDateFromStartDiff(eventPeriod.start, eventStart, eventEnd);

	      }

	      return {start: eventStart, end: eventEnd};

	    }

	    function eventIsInPeriod(event, periodStart, periodEnd) {

	      periodStart = moment(periodStart);
	      periodEnd = moment(periodEnd);

	      var eventPeriod = getRecurringEventPeriod({start: event.startsAt, end: event.endsAt || event.startsAt}, event.recursOn, periodStart);
	      var eventStart = eventPeriod.start;
	      var eventEnd = eventPeriod.end;

	      return (eventStart.isAfter(periodStart) && eventStart.isBefore(periodEnd)) ||
	        (eventEnd.isAfter(periodStart) && eventEnd.isBefore(periodEnd)) ||
	        (eventStart.isBefore(periodStart) && eventEnd.isAfter(periodEnd)) ||
	        eventStart.isSame(periodStart) ||
	        eventEnd.isSame(periodEnd);

	    }

	    function filterEventsInPeriod(events, startPeriod, endPeriod) {
	      return events.filter(function(event) {
	        return eventIsInPeriod(event, startPeriod, endPeriod);
	      });
	    }

	    function getEventsInPeriod(calendarDate, period, allEvents) {
	      var startPeriod = moment(calendarDate).startOf(period);
	      var endPeriod = moment(calendarDate).endOf(period);
	      return filterEventsInPeriod(allEvents, startPeriod, endPeriod);
	    }

	    function getBadgeTotal(events) {
	      return events.filter(function(event) {
	        return event.incrementsBadgeTotal !== false;
	      }).length;
	    }

	    function getWeekDayNames() {
	      var weekdays = [];
	      var count = 0;
	      while (count < 7) {
	        weekdays.push(formatDate(moment().weekday(count++), calendarConfig.dateFormats.weekDay));
	      }
	      return weekdays;
	    }

	    function getYearView(events, viewDate, cellModifier) {

	      var view = [];
	      var eventsInPeriod = getEventsInPeriod(viewDate, 'year', events);
	      var month = moment(viewDate).startOf('year');
	      var count = 0;
	      while (count < 12) {
	        var startPeriod = month.clone();
	        var endPeriod = startPeriod.clone().endOf('month');
	        var periodEvents = filterEventsInPeriod(eventsInPeriod, startPeriod, endPeriod);
	        var cell = {
	          label: formatDate(startPeriod, calendarConfig.dateFormats.month),
	          isToday: startPeriod.isSame(moment().startOf('month')),
	          events: periodEvents,
	          date: startPeriod,
	          badgeTotal: getBadgeTotal(periodEvents)
	        };

	        cellModifier({calendarCell: cell});
	        view.push(cell);
	        month.add(1, 'month');
	        count++;
	      }

	      return view;

	    }

	    function getMonthView(events, viewDate, cellModifier) {

	      var startOfMonth = moment(viewDate).startOf('month');
	      var day = startOfMonth.clone().startOf('week');
	      var endOfMonthView = moment(viewDate).endOf('month').endOf('week');
	      var eventsInPeriod;
	      if (calendarConfig.displayAllMonthEvents) {
	        eventsInPeriod = filterEventsInPeriod(events, day, endOfMonthView);
	      } else {
	        eventsInPeriod = filterEventsInPeriod(events, startOfMonth, startOfMonth.clone().endOf('month'));
	      }
	      var view = [];
	      var today = moment().startOf('day');

	      while (day.isBefore(endOfMonthView)) {

	        var inMonth = day.month() === moment(viewDate).month();
	        var monthEvents = [];
	        if (inMonth || calendarConfig.displayAllMonthEvents) {
	          monthEvents = filterEventsInPeriod(eventsInPeriod, day, day.clone().endOf('day'));
	        }

	        var cell = {
	          label: day.date(),
	          date: day.clone(),
	          inMonth: inMonth,
	          isPast: today.isAfter(day),
	          isToday: today.isSame(day),
	          isFuture: today.isBefore(day),
	          isWeekend: [0, 6].indexOf(day.day()) > -1,
	          events: monthEvents,
	          badgeTotal: getBadgeTotal(monthEvents)
	        };

	        cellModifier({calendarCell: cell});

	        view.push(cell);

	        day.add(1, 'day');
	      }

	      return view;

	    }

	    function getWeekView(events, viewDate) {

	      var startOfWeek = moment(viewDate).startOf('week');
	      var endOfWeek = moment(viewDate).endOf('week');
	      var dayCounter = startOfWeek.clone();
	      var days = [];
	      var today = moment().startOf('day');
	      while (days.length < 7) {
	        days.push({
	          weekDayLabel: formatDate(dayCounter, calendarConfig.dateFormats.weekDay),
	          date: dayCounter.clone(),
	          dayLabel: formatDate(dayCounter, calendarConfig.dateFormats.day),
	          isPast: dayCounter.isBefore(today),
	          isToday: dayCounter.isSame(today),
	          isFuture: dayCounter.isAfter(today),
	          isWeekend: [0, 6].indexOf(dayCounter.day()) > -1
	        });
	        dayCounter.add(1, 'day');
	      }

	      var eventsSorted = filterEventsInPeriod(events, startOfWeek, endOfWeek).map(function(event) {

	        var weekViewStart = moment(startOfWeek).startOf('day');
	        var weekViewEnd = moment(endOfWeek).startOf('day');

	        var eventPeriod = getRecurringEventPeriod({
	          start: moment(event.startsAt).startOf('day'),
	          end: moment(event.endsAt || event.startsAt).startOf('day')
	        }, event.recursOn, weekViewStart);

	        var eventStart = eventPeriod.start;
	        var eventEnd = eventPeriod.end;

	        var offset, span;
	        if (eventStart.isBefore(weekViewStart) || eventStart.isSame(weekViewStart)) {
	          offset = 0;
	        } else {
	          offset = eventStart.diff(weekViewStart, 'days');
	        }

	        if (eventEnd.isAfter(weekViewEnd)) {
	          eventEnd = weekViewEnd;
	        }

	        if (eventStart.isBefore(weekViewStart)) {
	          eventStart = weekViewStart;
	        }

	        span = moment(eventEnd).diff(eventStart, 'days') + 1;

	        event.daySpan = span;
	        event.dayOffset = offset;

	        return event;
	      });

	      return {days: days, events: eventsSorted};

	    }

	    function getDayView(events, viewDate, dayViewStart, dayViewEnd, dayViewSplit) {

	      var dayStartHour = moment(dayViewStart || '00:00', 'HH:mm').hours();
	      var dayEndHour = moment(dayViewEnd || '23:00', 'HH:mm').hours();
	      var hourHeight = (60 / dayViewSplit) * 30;
	      var calendarStart = moment(viewDate).startOf('day').add(dayStartHour, 'hours');
	      var calendarEnd = moment(viewDate).startOf('day').add(dayEndHour, 'hours');
	      var calendarHeight = (dayEndHour - dayStartHour + 1) * hourHeight;
	      var hourHeightMultiplier = hourHeight / 60;
	      var buckets = [];
	      var eventsInPeriod = filterEventsInPeriod(
	        events,
	        moment(viewDate).startOf('day').toDate(),
	        moment(viewDate).endOf('day').toDate()
	      );

	      return eventsInPeriod.map(function(event) {
	        if (moment(event.startsAt).isBefore(calendarStart)) {
	          event.top = 0;
	        } else {
	          event.top = (moment(event.startsAt).startOf('minute').diff(calendarStart.startOf('minute'), 'minutes') * hourHeightMultiplier) - 2;
	        }

	        if (moment(event.endsAt || event.startsAt).isAfter(calendarEnd)) {
	          event.height = calendarHeight - event.top;
	        } else {
	          var diffStart = event.startsAt;
	          if (moment(event.startsAt).isBefore(calendarStart)) {
	            diffStart = calendarStart.toDate();
	          }
	          if (!event.endsAt) {
	            event.height = 30;
	          } else {
	            event.height = moment(event.endsAt || event.startsAt).diff(diffStart, 'minutes') * hourHeightMultiplier;
	          }
	        }

	        if (event.top - event.height > calendarHeight) {
	          event.height = 0;
	        }

	        event.left = 0;

	        return event;
	      }).filter(function(event) {
	        return event.height > 0;
	      }).map(function(event) {

	        var cannotFitInABucket = true;
	        buckets.forEach(function(bucket, bucketIndex) {
	          var canFitInThisBucket = true;

	          bucket.forEach(function(bucketItem) {
	            if (eventIsInPeriod(event, bucketItem.startsAt, bucketItem.endsAt || bucketItem.startsAt) ||
	              eventIsInPeriod(bucketItem, event.startsAt, event.endsAt || event.startsAt)) {
	              canFitInThisBucket = false;
	            }
	          });

	          if (canFitInThisBucket && cannotFitInABucket) {
	            cannotFitInABucket = false;
	            event.left = bucketIndex * 150;
	            buckets[bucketIndex].push(event);
	          }

	        });

	        if (cannotFitInABucket) {
	          event.left = buckets.length * 150;
	          buckets.push([event]);
	        }

	        return event;

	      });

	    }

	    function getWeekViewWithTimes(events, viewDate, dayViewStart, dayViewEnd, dayViewSplit) {
	      var weekView = getWeekView(events, viewDate);
	      var newEvents = [];
	      weekView.days.forEach(function(day) {
	        var dayEvents = weekView.events.filter(function(event) {
	          return moment(event.startsAt).startOf('day').isSame(moment(day.date).startOf('day'));
	        });
	        var newDayEvents = getDayView(
	          dayEvents,
	          day.date,
	          dayViewStart,
	          dayViewEnd,
	          dayViewSplit
	        );
	        newEvents = newEvents.concat(newDayEvents);
	      });
	      weekView.events = newEvents;
	      return weekView;
	    }

	    function getDayViewWithCategories(events, categories, viewDate, dayViewStart, dayViewEnd) {

	      var dayStartHour = moment(dayViewStart || '00:00', 'HH:mm').hours();
	      var dayEndHour = moment(dayViewEnd || '23:00', 'HH:mm').hours();
	      var calendarStart = moment(viewDate).startOf('day').add(dayStartHour, 'hours');
	      var calendarEnd = moment(viewDate).startOf('day').add(dayEndHour + 1, 'hours');
	      var roomHeight = 50;
	      var buckets = [];

	      events = calendarInputEvents.processEvents(events, moment(viewDate).startOf('day'), moment(viewDate).endOf('day'), true);

	      events = filterEventsInPeriod(
	        events,
	        moment(viewDate).startOf('day').toDate(),
	        moment(viewDate).endOf('day').toDate()
	      );

	      return events.map(function(event) {
	        var evStart, evEnd;
	        var counter = -1;

	        for (var i = 0; i < categories.length; i++) {
	          counter += 1;
	          if (parseInt(categories[i].number) === parseInt(event.category)) {
	            break;
	          }
	        }

	        event.top = (counter * roomHeight);

	        event.height = 30;

	        if (moment(event.startsAt).isBefore(calendarStart) || moment(event.startsAt).isSame(calendarStart)) {
	          evStart = calendarStart;
	          event.dayOffset = 0;
	        } else {
	          evStart = event.startsAt;
	          event.dayOffset = (moment(event.startsAt).startOf('hour').diff(calendarStart.startOf('hour'), 'hours'));
	        }

	        if (moment(event.endsAt).isAfter(calendarEnd) || moment(event.endsAt).isBefore(calendarEnd)) {
	          evEnd = moment(calendarEnd).startOf('hour').diff(moment(evStart).endOf('hour'), 'hours') + 1;
	        } else {
	          evEnd = moment(event.endsAt).startOf('hour').diff(moment(evStart).endOf('hour'), 'hours') + 1;
	        }
	        event.hourSpan = evEnd;

	        if ((moment(event.startsAt).isBefore(calendarStart) && moment(event.endsAt).isBefore(calendarStart)) ||
	             (moment(event.startsAt).isAfter(calendarEnd) && moment(event.endsAt).isBefore(calendarEnd))) {
	          event.hourSpan = 0;
	        }
	        return event;
	      }).filter(function(event) {
	        return event.hourSpan > 0;
	      }).map(function(event) {

	        var cannotFitInABucket = true;
	        buckets.forEach(function(bucket, bucketIndex) {

	          var canFitInThisBucket = true;

	          bucket.forEach(function(bucketItem) {
	            if (eventIsInPeriod(event, bucketItem.startsAt, bucketItem.endsAt || bucketItem.startsAt) ||
	              eventIsInPeriod(bucketItem, event.startsAt, event.endsAt || event.startsAt)) {
	              canFitInThisBucket = false;
	            }
	          });

	          if (canFitInThisBucket && cannotFitInABucket) {
	            cannotFitInABucket = false;
	            buckets[bucketIndex].push(event);
	          }
	        });

	        if (cannotFitInABucket) {
	          event.left = buckets.length * 150;
	          buckets.push([event]);
	        }

	        return event;

	      });
	    }

	    function getWeekViewWithCategories(events, categories, viewDate) {
	      var startOfWeek = moment(viewDate).startOf('week');
	      var endOfWeek = moment(viewDate).endOf('week');
	      var dayCounter = startOfWeek.clone();
	      var days = [];
	      var today = moment().startOf('day');
	      while (days.length < 7) {
	        days.push({
	          weekDayLabel: formatDate(dayCounter, calendarConfig.dateFormats.weekDay),
	          date: dayCounter.clone(),
	          dayLabel: formatDate(dayCounter, calendarConfig.dateFormats.day),
	          isPast: dayCounter.isBefore(today),
	          isToday: dayCounter.isSame(today),
	          isFuture: dayCounter.isAfter(today),
	          isWeekend: [0, 6].indexOf(dayCounter.day()) > -1
	        });
	        dayCounter.add(1, 'day');
	      }

	      events = calendarInputEvents.processEvents(events, startOfWeek, endOfWeek);
	      events = filterEventsInPeriod(events, startOfWeek, endOfWeek);

	      var eventsSorted = events.map(function(event) {

	        var weekViewStart = moment(startOfWeek).startOf('day');
	        var weekViewEnd = moment(endOfWeek).startOf('day');

	        var eventPeriod = getRecurringEventPeriod({
	          start: moment(event.startsAt).startOf('day'),
	          end: moment(event.endsAt || event.startsAt).startOf('day')
	        }, event.recursOn, weekViewStart);

	        var eventStart = eventPeriod.start;
	        var eventEnd = eventPeriod.end;

	        var counter = -1;

	        for (var i = 0; i < categories.length; i++) {
	          counter += 1;
	          if (parseInt(categories[i].number) === parseInt(event.category)) {
	            break;
	          }
	        }

	        event.top = (counter * 50) - 2;

	        var offset, span;
	        if (eventStart.isBefore(weekViewStart) || eventStart.isSame(weekViewStart)) {
	          offset = 0;
	        } else {
	          offset = eventStart.diff(weekViewStart, 'days');
	        }

	        if (eventEnd.isAfter(weekViewEnd)) {
	          eventEnd = weekViewEnd;
	        }

	        if (eventStart.isBefore(weekViewStart)) {
	          eventStart = weekViewStart;
	        }

	        span = moment(eventEnd).diff(eventStart, 'days') + 1;

	        event.daySpan = span;
	        event.dayOffset = offset;

	        return event;
	      });

	      return {days: days, events: eventsSorted};
	    }

	    function getDayViewHeight(dayViewStart, dayViewEnd, dayViewSplit) {
	      var dayViewStartM = moment(dayViewStart || '00:00', 'HH:mm');
	      var dayViewEndM = moment(dayViewEnd || '23:00', 'HH:mm');
	      var hourHeight = (60 / dayViewSplit) * 30;
	      return ((dayViewEndM.diff(dayViewStartM, 'hours') + 1) * hourHeight) + 2;
	    }

	    function parseNumber(number) {
	      var ln = parseInt(calendarConfig.category.roomNameLenght);
	      var finalName = '';

	      for (var f = 0; f < ln; f++) {
	        finalName += '0';
	      }
	      return (finalName + number.toString()).slice(-ln);
	    }

	    return {
	      getWeekDayNames: getWeekDayNames,
	      getYearView: getYearView,
	      getMonthView: getMonthView,
	      getWeekView: getWeekView,
	      getDayView: getDayView,
	      getDayViewWithCategories: getDayViewWithCategories,
	      getWeekViewWithTimes: getWeekViewWithTimes,
	      getWeekViewWithCategories: getWeekViewWithCategories,
	      getDayViewHeight: getDayViewHeight,
	      adjustEndDateFromStartDiff: adjustEndDateFromStartDiff,
	      formatDate: formatDate,
	      eventIsInPeriod: eventIsInPeriod, //expose for testing only
	      parseNumber: parseNumber
	    };

	  }]);


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(15);

	angular
	  .module('mwl.calendar')
	  .factory('calendarInputEvents', ["moment", "calendarConfig", function(moment, calendarConfig) {
	    function truncate(str, number) {
	      if (str.length > number) {
	        return str.substring(0, number) + '...';
	      }
	      return str;
	    }

	    function randomId() {
	      return Math.floor(Math.random() * 1000000000);
	    }

	    function newEl(eventsList, title, type, startE, endE, category, bid, clean, state, user, tooltip) {
	      var el = {
	        $id: randomId(),
	        title: (type === 'cleaner') ? title : truncate(title, calendarConfig.category.userNameLenght),
	        type: type,
	        startsAt: startE,
	        endsAt: endE,
	        category: category,
	        b_id: bid,
	        isClean: clean,
	        state: state,
	        user: user
	      };

	      if (tooltip) {
	        el.tooltip = function(event) {
	          var text = '<strong>' + event.user + '</strong><br/>';
	          text += 'In: ' + moment(new Date(event.startsAt)).format('DD/MM/YYYY') + '<br/>';
	          text += 'Out: ' + moment(new Date(event.endsAt)).format('DD/MM/YYYY') + '<br/>';
	          text += 'State: ' + event.state + '<br/>';
	          text += 'Booking Id: ' + event.b_id + '<br/>';
	          text += 'Clean: ' + event.isClean;
	          return text;
	        };
	      }
	      eventsList.push(el);
	    }

	    function processEvents(events, start, end, day) {
	      var newEvents = [];

	      events.map(function(e) {
	        var eventStart = moment(new Date(e.startsAt));
	        var eventFinish = moment(new Date(e.endsAt));

	        var category = e.category;
	        var bid = e.b_id;
	        var clean = e.isClean;
	        var state = e.state;
	        var user = e.title;

	        newEl(newEvents, '', 'ghost', eventStart.toDate(), eventFinish.toDate(), category, bid, clean, state, user, function(event) {
	          var text = '<strong>' + event.title + '</strong><br/>';
	          text += 'In: ' + moment(new Date(event.startsAt)).format('DD/MM/YYYY') + '<br/>';
	          text += 'Out: ' + moment(new Date(event.endsAt)).format('DD/MM/YYYY') + '<br/>';
	          text += 'State: ' + event.type + '<br/>';
	          text += 'Booking Id: ' + event.b_id + '<br/>';
	          text += 'Clean: ' + event.isClean;
	          return text;
	        });

	        switch (e.type) {
	          case 'booked':
	            newEl(newEvents, e.title, 'booked', eventStart, eventFinish, category, bid, clean, state, user);
	            break;
	          case 'in':
	            if (moment(eventFinish).diff(moment(eventStart), 'days') > 0) {
	              newEl(newEvents, '', 'close', moment(eventStart).add(1, 'hours'), eventFinish, category, bid, clean, state, user);
	            }

	            if (day &&
	              calendarConfig.category.showMaid &&
	              moment(eventStart).diff(moment(), 'minutes') <= 60 &&
	              moment(eventStart).diff(moment(), 'minutes') >= 0) {

	              newEl(newEvents,
	                '<i class="eut-cleaner font-48"></i>',
	                'cleaner',
	                moment(),
	                moment().add(1, 'hours'),
	                category, bid, clean, state, user);
	            }

	            if (day &&
	              calendarConfig.category.showMaid &&
	              eventStart.isBetween(moment().hour(moment().hour()).minute(0), moment().hour(moment().hour()).minute(0).add(1, 'hours'), 'minutes')) {
	              newEl(newEvents, e.title, 'fast', eventStart, moment(eventStart).add(1, 'hours'), category, bid, clean, state, user);
	            } else {
	              newEl(newEvents, e.title, 'in', eventStart, moment(eventStart).add(1, 'hours'), category, bid, clean, state, user);
	            }
	            break;
	          case 'out':
	            if (moment(eventFinish).diff(moment(eventStart), 'days') > 0) {
	              newEl(newEvents, '', 'close', eventStart, moment(eventFinish).subtract(1, 'hours'), category, bid, clean, state, user);
	            }
	            newEl(newEvents, e.title, 'out', moment(eventFinish).subtract(1, 'hours'), eventFinish, category, bid, clean, state, user);
	            break;
	          case 'close':
	            var title = '';
	            if (moment(eventFinish).isBefore(end) && moment(eventStart).isBefore(start)) {
	              title = e.title;
	            }
	            newEl(newEvents, title, 'close', eventStart, eventFinish, category, bid, clean, state, user);
	            break;
	          default:
	            break;
	        }
	        return;
	      });
	      return newEvents;
	    }

	    function calendarioToEvents(calendario) {
	      var events = [];

	      calendario.map(function(room) {
	        if (room.booking && room.booking.length > 0) {
	          room.booking.map(function(e) {

	            events.push({
	              title: e.name + ' ' + e.surname,
	              type: e.state,
	              state: e.state,
	              startsAt: moment(new Date(e.in)).toDate(),
	              endsAt: moment(new Date(e.out)).toDate(),
	              category: room.number,
	              b_id: e.b_id,
	              isClean: room.isclean,
	              tooltip: function(event) {
	                var text = '<strong>' + event.title + '</strong><br/>';
	                text += 'In: ' + moment(new Date(event.startsAt)).format('DD/MM/YYYY') + '<br/>';
	                text += 'Out: ' + moment(new Date(event.endsAt)).format('DD/MM/YYYY') + '<br/>';
	                text += 'State: ' + event.type + '<br/>';
	                text += 'Booking Id: ' + event.b_id + '<br/>';
	                text += 'Clean: ' + event.isClean;
	                return text;
	              }
	            });
	          });
	        }
	      });
	      return events;
	    }

	    function calendarioToCategories(calendario) {
	      var rooms = [];

	      calendario.map(function(room) {
	        var nR = {};

	        switch (room.type) {
	          default:
	            break;
	          case 'Singola':
	            room.typeDesc = 'S';
	            break;
	          case 'Doppia':
	            room.typeDesc = 'D';
	            break;
	          case 'Tripla':
	            room.typeDesc = 'T';
	            break;
	          case 'Suite':
	            room.typeDesc = 'SS';
	            break;
	        }

	        Object.keys(room).map(function(k) {
	          if (k !== 'booking') {
	            nR[k] = room[k];
	          }
	        });

	        rooms.push(nR);
	      });

	      return rooms;
	    }

	    return {
	      processEvents: processEvents,
	      calendarioToCategories: calendarioToCategories,
	      calendarioToEvents: calendarioToEvents
	    };

	  }]);


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(15);

	angular
	  .module('mwl.calendar')
	  .factory('calendarTitle', ["moment", "calendarConfig", "calendarHelper", function(moment, calendarConfig, calendarHelper) {

	    function day(viewDate) {
	      return calendarHelper.formatDate(viewDate, calendarConfig.titleFormats.day);
	    }

	    function week(viewDate) {
	      var weekTitleLabel = calendarConfig.titleFormats.week;
	      return weekTitleLabel.replace('{week}', moment(viewDate).isoWeek()).replace('{year}', moment(viewDate).format('YYYY'));
	    }

	    function month(viewDate) {
	      return calendarHelper.formatDate(viewDate, calendarConfig.titleFormats.month);
	    }

	    function year(viewDate) {
	      return calendarHelper.formatDate(viewDate, calendarConfig.titleFormats.year);
	    }

	    return {
	      day: day,
	      week: week,
	      month: month,
	      year: year
	    };

	  }]);


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(15);
	var interact;
	try {
	  interact = __webpack_require__(56);
	} catch (e) {
	  /* istanbul ignore next */
	  interact = null;
	}

	angular
	  .module('mwl.calendar')
	  .constant('interact', interact);


/***/ },
/* 56 */
/***/ function(module, exports) {

	if(typeof __WEBPACK_EXTERNAL_MODULE_56__ === 'undefined') {var e = new Error("Cannot find module \"undefined\""); e.code = 'MODULE_NOT_FOUND'; throw e;}
	module.exports = __WEBPACK_EXTERNAL_MODULE_56__;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(15);
	var moment = __webpack_require__(58);

	angular
	  .module('mwl.calendar')
	  .constant('moment', moment);


/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_58__;

/***/ }
/******/ ])
});
;