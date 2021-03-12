var o1 = { a: 10 };
var obj = Object.assign(o1);
obj.a++
console.log("Value of 'a' in the Merged object after increment  ")
console.log(obj.a);
console.log("value of 'a' in the Original Object after increment ")
console.log(o1.a);
