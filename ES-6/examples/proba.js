var val1 = { name: "Tom" };
var val2 = { name: "Tom" };
console.log(val1 == val2)  // return false 
console.log(val1 === val2)  // return false
console.log(val1.name == val2.name)  // return false 
console.log(val1.name === val2.name)  // return false

var val1 = { name: "Tom" };
var val2 = val1

console.log(val1 == val2) // return true 
console.log(val1 === val2) // return true
