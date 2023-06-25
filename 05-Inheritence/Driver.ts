import { Shape } from "./shape";
import { Circle } from "./circle";
import { Rectangle } from "./rectangle";

let myShape = new Shape(5,10);
console.log(myShape.getInfo());

let myCircle = new Circle(10,5,20);
console.log(myCircle.getInfo())

let myrectangle = new Rectangle(4,6,9,8);
console.log(myrectangle.getInfo())

