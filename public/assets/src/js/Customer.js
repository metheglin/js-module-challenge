import EventObserver from "./EventObserver";

export default class Customer extends EventObserver {

  constructor( obj ) {
    super();
    this.name = obj.name;
  }

  static add( name ) {
    var customer = new Customer({ name: name });

    Customer.list.push( customer );
    this.trigger( "add", [customer] );
  }
}

Customer.list = [];
