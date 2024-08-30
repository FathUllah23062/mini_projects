
let inp = document.querySelector("input");
let op = '';
let num1 = 0;
let num2 = 0;
let ans = 0;
let btns = document.querySelectorAll("button");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        inp.value += btns[i].value;
        if (btns[i].value == "ac") {
            inp.value = "";
        }
    })



}

function addingValues() {
    num1 = inp.value;
    op = '+';
    console.log(op)
    inp.value = "";
}
function subtractingValues() {
    num1 = inp.value;
    op = '-';
    inp.value = "";
}
function multiplingValuse() {
    num1 = inp.value;
    op = '*';
    inp.value = "";
}
function dividingValues() {
    num1 = inp.value;
    op = '/';
    inp.value = "";
}
function equal() {
    num2 = inp.value;

    console.log(num2)
    if (op == '+') {
        ans = parseInt(num1) + parseInt(num2);
        inp.value = ans;
    }
    else if (op == '-') {
        ans = parseInt(num1) - parseInt(num2);
        inp.value = ans;
    }
    else if (op == '*') {
        ans = parseInt(num1) * parseInt(num2);
        inp.value = ans;
    }
    else if (op == '/') {
        ans = parseInt(num1) / parseInt(num2);
        inp.value = ans;
    }
}
