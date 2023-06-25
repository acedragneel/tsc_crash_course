import { Shape } from "./shape";
import { Circle } from "./circle";
import { Rectangle } from "./rectangle";

let myCircle = new Circle(10,5,20);
let myrectangle = new Rectangle(4,6,9,8);

let arrShape :Shape[] = [];

arrShape.push(myCircle);
arrShape.push(myrectangle);

for (let tempArr of arrShape){
    console.log(tempArr.getInfo())
    console.log(tempArr.calculateArea())
    console.log()
}


