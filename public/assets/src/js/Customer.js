import EventObserver from "./EventObserver";

export default class Customer {

  constructor( obj ) {
    this.name = obj.name;
  }

  static add( name ) {
    var customer = new Customer({ name: name });

    Customer.list.push( customer );
    this.trigger( "add", [customer] );
  }
}

Customer.list = [];
$.extend( Customer.prototype, EventObserver.prototype )
$.extend( Customer, EventObserver.prototype )
