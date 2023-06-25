"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = require("./shape");
const circle_1 = require("./circle");
const rectangle_1 = require("./rectangle");
let myShape = new shape_1.Shape(5, 10);
console.log(myShape.getInfo());
let myCircle = new circle_1.Circle(10, 5, 20);
console.log(myCircle.getInfo());
let myrectangle = new rectangle_1.Rectangle(4, 6, 9, 8);
console.log(myrectangle.getInfo());
