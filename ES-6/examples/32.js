"use strict"
var det = { name: "Tom", ID: "E1001" };
var copy = Object.assign({}, det);
console.log(copy);
for (let val in copy) {
    console.log(copy[val])
}
