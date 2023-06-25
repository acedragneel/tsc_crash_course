"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./circle");
const rectangle_1 = require("./rectangle");
let myCircle = new circle_1.Circle(10, 5, 20);
let myrectangle = new rectangle_1.Rectangle(4, 6, 9, 8);
let arrShape = [];
arrShape.push(myCircle);
arrShape.push(myrectangle);
for (let tempArr of arrShape) {
    console.log(tempArr.getInfo());
    console.log(tempArr.calculateArea());
    console.log();
}
