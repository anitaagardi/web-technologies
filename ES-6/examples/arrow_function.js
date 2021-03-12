class CustomForm {
    input;
    constructor() {
        this.input = document.getElementById("name");

        this.onButtonClickMethod = this.onButtonClickMethod.bind(this);
        document.getElementById("button").addEventListener("click", this.onButtonClickWrong);
        document.getElementById("button").addEventListener("click", this.onButtonClickMethod);
        document.getElementById("button").addEventListener("click", this.onButtonClickArrowMethod);

        document.getElementById("button").addEventListener("click", function () {
            console.log(this);
            console.log(this.input.value);
        });

        document.getElementById("button").addEventListener("click", () => {
            console.log(this);
            console.log(this.input.value);
        });
    }

    onButtonClickWrong() {
        console.log("onButtonClickWrong");
        console.log(this);
        console.log(this.input.value);
    }

    onButtonClickMethod() {
        console.log("onButtonClickMethod");
        console.log(this);
        console.log(this.input.value);
    }

    onButtonClickArrowMethod = () => {
        console.log("onButtonClickArrowMethod");
        console.log(this);
        console.log(this.input.value);
    }
}