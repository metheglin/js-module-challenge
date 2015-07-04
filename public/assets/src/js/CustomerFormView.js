import Customer from "./Customer";

export default class CustomerFormView {
  constructor( $element ) {
    this.$element = $element;
    this.$input   = this.$element.find( "#input" );
    this.$element.submit( this.onsubmit.bind(this) );
  }

  onsubmit( e ) {
    e.preventDefault();
    Customer.add( this.$input.val() );
  }
}
