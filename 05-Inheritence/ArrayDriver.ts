import { Shape } from "./shape";
import { Circle } from "./circle";
import { Rectangle } from "./rectangle";

let myShape = new Shape(5,10);
let myCircle = new Circle(10,5,20);
let myrectangle = new Rectangle(4,6,9,8);

let arrShape :Shape[] = [];

arrShape.push(myShape);
arrShape.push(myCircle);
arrShape.push(myrectangle);

for (let tempArr of arrShape){
    console.log(tempArr.getInfo())
}


