var CustomerFormView  = require("./CustomerFormView").CustomerFormView;
var CustomerListView  = require("./CustomerListView").CustomerListView;

$(function(){
  var customerForm = new CustomerFormView( $("#form") );
  var customerList = new CustomerListView( $("#list") );
});