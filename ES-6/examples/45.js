'use strict'
class PrinterClass {
    doPrint() {
        console.log("doPrint() from Parent called…")
    }
}
class StringPrinter extends PrinterClass {
    doPrint() {
        super.doPrint()
        console.log("doPrint() is printing a string…")
    }
}
var obj = new StringPrinter()
obj.doPrint()
