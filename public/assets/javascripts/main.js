(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var EventObserver = require("./EventObserver").EventObserver;

var Customer = function Customer(obj) {
  this.name = obj.name;
};

$.extend(Customer.prototype, EventObserver.prototype);
$.extend(Customer, EventObserver.prototype);

Customer.list = [];

Customer.add = function (name) {
  var customer = new Customer({ name: name });

  Customer.list.push(customer);
  this.trigger("add", [customer]);
};

module.exports.Customer = Customer;

},{"./EventObserver":4}],2:[function(require,module,exports){
"use strict";

var Customer = require("./Customer").Customer;

var CustomerFormView = function CustomerFormView($element) {
  this.$element = $element;
  this.$input = this.$element.find("#input");
  this.$element.submit(this.onsubmit.bind(this));
};

CustomerFormView.prototype.onsubmit = function (e) {
  e.preventDefault();
  Customer.add(this.$input.val());
};

module.exports.CustomerFormView = CustomerFormView;

},{"./Customer":1}],3:[function(require,module,exports){
'use strict';

var Customer = require('./Customer').Customer;

var CustomerListView = function CustomerListView($element) {
  this.$element = $element;
  Customer.on('add', this.add.bind(this));
};

CustomerListView.prototype.add = function (customer) {
  console.log(customer);
  var item = $('<li>' + customer.name + '</li>');
  this.$element.append(item);
};

module.exports.CustomerListView = CustomerListView;

},{"./Customer":1}],4:[function(require,module,exports){
"use strict";

var EventObserver;

EventObserver = function () {};

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

module.exports.EventObserver = EventObserver;

},{}],5:[function(require,module,exports){
"use strict";

var CustomerFormView = require("./CustomerFormView").CustomerFormView;
var CustomerListView = require("./CustomerListView").CustomerListView;

$(function () {
  var customerForm = new CustomerFormView($("#form"));
  var customerList = new CustomerListView($("#list"));
});

},{"./CustomerFormView":2,"./CustomerListView":3}]},{},[5]);
