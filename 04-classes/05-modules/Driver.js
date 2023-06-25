"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = require("./customer");
//let's create an Instance
let myCustomer = new customer_1.Customer('Martin', 'Dixon');
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
