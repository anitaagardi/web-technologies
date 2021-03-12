"use strict"
function* rainbow() {
    // the asterisk marks this as a generator 
    yield 'red';
    yield 'orange';
    yield 'yellow';
    yield 'green';
    yield 'blue';
    yield 'indigo';
    yield 'violet';
}
for (let color of rainbow()) {
    console.log(color);
} 
