'use strict'
class Shape {
    constructor(a) {
        this.Area = a
    }
}
class Circle extends Shape {
    disp() {
        console.log("Area of the circle:  " + this.Area)
    }
}
var obj = new Circle(223);
obj.disp() 
