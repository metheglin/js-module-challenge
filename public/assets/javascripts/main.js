(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _EventObserver2 = require("./EventObserver");

var _EventObserver3 = _interopRequireDefault(_EventObserver2);

var Customer = (function (_EventObserver) {
  function Customer(obj) {
    _classCallCheck(this, Customer);

    _get(Object.getPrototypeOf(Customer.prototype), "constructor", this).call(this);
    this.name = obj.name;
  }

  _inherits(Customer, _EventObserver);

  _createClass(Customer, null, [{
    key: "add",
    value: function add(name) {
      var customer = new Customer({ name: name });

      Customer.list.push(customer);
      this.trigger("add", [customer]);
    }
  }]);

  return Customer;
})(_EventObserver3["default"]);

exports["default"] = Customer;

Customer.list = [];
module.exports = exports["default"];

},{"./EventObserver":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _Customer = require("./Customer");

var _Customer2 = _interopRequireDefault(_Customer);

var CustomerFormView = (function () {
  function CustomerFormView($element) {
    _classCallCheck(this, CustomerFormView);

    this.$element = $element;
    this.$input = this.$element.find("#input");
    this.$element.submit(this.onsubmit.bind(this));
  }

  _createClass(CustomerFormView, [{
    key: "onsubmit",
    value: function onsubmit(e) {
      e.preventDefault();
      _Customer2["default"].add(this.$input.val());
    }
  }]);

  return CustomerFormView;
})();

exports["default"] = CustomerFormView;
module.exports = exports["default"];

},{"./Customer":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Customer = require('./Customer');

var _Customer2 = _interopRequireDefault(_Customer);

var CustomerListView = (function () {
  function CustomerListView($element) {
    _classCallCheck(this, CustomerListView);

    this.$element = $element;
    _Customer2['default'].on('add', this.add.bind(this));
  }

  _createClass(CustomerListView, [{
    key: 'add',
    value: function add(customer) {
      var item = $('<li>' + customer.name + '</li>');
      this.$element.append(item);
    }
  }]);

  return CustomerListView;
})();

exports['default'] = CustomerListView;
module.exports = exports['default'];

},{"./Customer":1}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventObserver = (function () {
  function EventObserver() {
    _classCallCheck(this, EventObserver);
  }

  _createClass(EventObserver, null, [{
    key: "on",
    value: function on(name, listener, context) {
      if (EventObserver.listeners[name] == null) {
        EventObserver.listeners[name] = [];
      }
      EventObserver.listeners[name].push([listener, context]);
      return this;
    }
  }, {
    key: "off",
    value: function off(name, listener) {
      var i, j, len, listeners, ref;
      if (!EventObserver.listeners[name]) {
        return this;
      }
      ref = EventObserver.listeners[name];
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        listeners = ref[i];
        if (listeners[0] === listener) {
          EventObserver.listeners[name].splice(i, 1);
        }
      }
      return this;
    }
  }, {
    key: "trigger",
    value: function trigger(name, args) {
      var j, len, list, listeners, ref;
      list = (ref = EventObserver.listeners) != null ? ref[name] : void 0;
      if (!list) {
        return this;
      }
      for (j = 0, len = list.length; j < len; j++) {
        listeners = list[j];
        if (listeners[1]) {
          listeners[0].apply(listeners[1], args);
        } else {
          listeners[0].apply(this, args);
        }
      }
      return this;
    }
  }]);

  return EventObserver;
})();

exports["default"] = EventObserver;

EventObserver.listeners = {};
module.exports = exports["default"];

},{}],5:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _CustomerFormView = require("./CustomerFormView");

var _CustomerFormView2 = _interopRequireDefault(_CustomerFormView);

var _CustomerListView = require("./CustomerListView");

var _CustomerListView2 = _interopRequireDefault(_CustomerListView);

$(function () {
  var customerForm = new _CustomerFormView2["default"]($("#form"));
  var customerList = new _CustomerListView2["default"]($("#list"));
});

},{"./CustomerFormView":2,"./CustomerListView":3}]},{},[5]);
