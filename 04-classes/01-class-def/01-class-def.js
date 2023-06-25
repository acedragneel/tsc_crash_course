var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
//let's create an Instance
var myCustomer = new Customer('Martin', 'Dixon');
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
