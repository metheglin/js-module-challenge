(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _EventObserver = require("./EventObserver");

var _EventObserver2 = _interopRequireDefault(_EventObserver);

var Customer = (function () {
  function Customer(obj) {
    _classCallCheck(this, Customer);

    this.name = obj.name;
  }

  _createClass(Customer, null, [{
    key: "add",
    value: function add(name) {
      var customer = new Customer({ name: name });

      Customer.list.push(customer);
      this.trigger("add", [customer]);
    }
  }]);

  return Customer;
})();

exports["default"] = Customer;

Customer.list = [];
$.extend(Customer.prototype, _EventObserver2["default"].prototype);
$.extend(Customer, _EventObserver2["default"].prototype);
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
exports["default"] = EventObserver;

function EventObserver() {}

;

EventObserver.prototype.on = function (name, listener, context) {
  if (this.listeners == null) {
    this.listeners = {};
  }
  if (this.listeners[name] == null) {
    this.listeners[name] = [];
  }
  this.listeners[name].push([listener, context]);
  return this;
};

EventObserver.prototype.off = function (name, listener) {
  var i, j, len, listeners, ref;
  if (!this.listeners[name]) {
    return this;
  }
  ref = this.listeners[name];
  for (i = j = 0, len = ref.length; j < len; i = ++j) {
    listeners = ref[i];
    if (listeners[0] === listener) {
      this.listeners[name].splice(i, 1);
    }
  }
  return this;
};

EventObserver.prototype.trigger = function (name, args) {
  var j, len, list, listeners, ref;
  list = (ref = this.listeners) != null ? ref[name] : void 0;
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
};
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
