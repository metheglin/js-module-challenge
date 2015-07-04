import Customer from "./Customer";

export default class CustomerListView {
  constructor( $element ) {
    this.$element = $element;
    Customer.on( 'add', this.add.bind(this) );
  }

  add( customer ) {
    var item = $('<li>' + customer.name + '</li>');
    this.$element.append( item );
  }
}
