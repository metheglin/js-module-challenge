var EventObserver = require('./EventObserver').EventObserver;

var Customer = function( obj ) {
  this.name = obj.name;
};

$.extend(Customer.prototype, EventObserver.prototype);
$.extend(Customer, EventObserver.prototype);

Customer.list = [];

Customer.add = function( name ) {
  var customer = new Customer({ name: name });

  Customer.list.push( customer );
  this.trigger( "add", [customer] );
};

module.exports.Customer = Customer;