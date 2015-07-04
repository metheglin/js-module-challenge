import CustomerFormView from "./CustomerFormView";
import CustomerListView from "./CustomerListView";

$(function(){
  var customerForm = new CustomerFormView( $("#form") );
  var customerList = new CustomerListView( $("#list") );
});
