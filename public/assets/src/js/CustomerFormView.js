var Customer = require('./Customer').Customer;

var CustomerFormView = function( $element ) {
  this.$element = $element;
  this.$input   = this.$element.find( "#input" );
  this.$element.submit( this.onsubmit.bind(this) );
};

CustomerFormView.prototype.onsubmit = function(e) {
  e.preventDefault();
  Customer.add( this.$input.val() );
}

module.exports.CustomerFormView = CustomerFormView;