
let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");


btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;
    let del_btn = document.createElement("button");
    del_btn.innerText = "X";
    del_btn.style.backgroundColor = "red";
    del_btn.style.color = "white";
    del_btn.style.marginLeft = "30px";
    del_btn.style.marginTop = "10px";
    del_btn.style.cursor = "pointer";

    if (inp.value != "") {
        ul.append(item);
        item.insertAdjacentElement("beforeend", del_btn);
        inp.value = "";
    }

})
ul.addEventListener("click", function (event) {

    if (event.target.nodeName == "BUTTON") {

        let listItem = event.target.parentElement;
        listItem.remove();
    }
})