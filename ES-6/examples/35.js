// Creates a new object, myobj, with two properties, a and b. 
var myobj = new Object;
myobj.a = 5;
myobj.b = 12;

// Removes the ‘a’ property 
delete myobj.a;
console.log("a" in myobj) // yields "false"
