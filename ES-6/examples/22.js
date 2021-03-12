var main = function () {
    (function () {
        for (var x = 0; x < 5; x++) {
            console.log(x);
        }
    })();
    console.log("x can not be accessed outside the block scope x value is :" + x);
}
main();
