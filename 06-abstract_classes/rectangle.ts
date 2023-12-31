import { Shape } from "./shape";

export class Rectangle extends Shape{

    constructor(theX : number, theY : number, private _width:number, private _length:number){
        super(theX,theY)
    }

    public get getWidth():number{
        return this._width
    }

    public set setWidth(value :number){
        this._width = value;
    }

    public get getLength():number{
        return this._length
    }

    public set setLength(value :number){
        this._length = value;
    }

    getInfo(): string {
        return super.getInfo() + ` width = ${this._width} length = ${this._length}`
    }

    calculateArea(): number {
        return this._width * this._length;
    }
}