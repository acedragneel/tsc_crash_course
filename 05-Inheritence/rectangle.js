"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const shape_1 = require("./shape");
class Rectangle extends shape_1.Shape {
    constructor(theX, theY, _width, _length) {
        super(theX, theY);
        this._width = _width;
        this._length = _length;
    }
    get getWidth() {
        return this._width;
    }
    set setWidth(value) {
        this._width = value;
    }
    get getLength() {
        return this._length;
    }
    set setLength(value) {
        this._length = value;
    }
    getInfo() {
        return super.getInfo() + ` width = ${this._width} length = ${this._length}`;
    }
}
exports.Rectangle = Rectangle;
