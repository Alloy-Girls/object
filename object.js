'use strict';

class Shape {


  constructor(name, length) {
    this._name = name;
    this._length = length;
  }

  getName() {
    return this._name;
  }

  getLength() {
    return this._length;
  }

  setName(name) {
    this._name = name;
  }

  setLength(length) {
    this._length = length;
  }


}


var shape = new Shape('三角形', 2);  //实例
console.log(shape.getName());

console.log(shape.getLength());

