var Customer = require('./Customer').Customer;

var CustomerListView = function( $element ) {
  this.$element = $element;
  Customer.on( 'add', this.add.bind(this) );
}

CustomerListView.prototype.add = function( customer ) {
  console.log( customer )
  var item = $('<li>' + customer.name + '</li>');
  this.$element.append( item );
};

module.exports.CustomerListView = CustomerListView;