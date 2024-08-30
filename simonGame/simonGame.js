
let gameSeq = [];
let userSeq = [];
let start = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ['yellow', 'green', 'purple', 'red'];
document.addEventListener("keypress", function () {
    if (start == false) {
        start = true;
        levelUp();
    }
})
function btnFlash(btn) {
    btn.classList.add("flash-up");
    setTimeout(function () {
        btn.classList.remove("flash-up")
    }, 250)
}
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level : ${level}`;
    let randomIndex = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIndex];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    btnFlash(randomBtn);
}
let allBtn = document.querySelectorAll(".btns");
for (btn of allBtn) {
    btn.addEventListener("click", btnPress)
}
function btnPress() {
    let btn = this;
    btnFlash(btn)
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

function checkAns(idx) {
    if (gameSeq[idx] == userSeq[idx]) {
        if (gameSeq.length == userSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over!<b>Your Score: ${level}</b><br/> press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 250);
        reset()

    }

}

function reset() {
    start = false;
    gameSeq = [];
    userSeq = []
    level = 0;
}
