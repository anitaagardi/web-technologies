'use strict'
class Root {
    test() {
        console.log("call from parent class")
    }
}
class Child extends Root { }
class Leaf extends Child { }

//indirectly inherits from Root by virtue of inheritance {} 
var obj = new Leaf();
obj.test();
