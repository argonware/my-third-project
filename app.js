const body = document.querySelector("body");
const gameBoard = document.querySelector(".game-board");
window.addEventListener("DOMContentLoaded", bodyState);


let redTime = false
function bodyState() {
    if (redTime) {
        body.style.background = "red";
    }
    else {
        body.style.background = "blueviolet";
    }
}  

for (let i = 1; i <= 9; i++) {
    const div = document.createElement("div");
    gameBoard.appendChild(div);
    div.classList.add(`box-${i}`);
    div.classList.add(`box`);
    div.dataset.item = i;
}
 const boxes = document.querySelectorAll(".box")
 boxes.forEach(box => box.addEventListener("click", (e) => {
    //  console.log(redTime);
     if (redTime && !(e.currentTarget.classList.contains("cross")) && !(e.currentTarget.classList.contains("cirlce"))) {
         e.currentTarget.classList.add("cross")
         redTime = !redTime;
         bodyState();
         patternRecog();
        }
        else if (!(e.currentTarget.classList.contains("cross")) && !(e.currentTarget.classList.contains("cirlce"))) {
            e.currentTarget.classList.add("cirlce")
            redTime = !redTime;
            bodyState();
            patternRecog();
      }
      else {}
 }));
 let pattern = [];
function patternRecog() {
    let elements = document.querySelectorAll(".box")
    // console.log(elements);
    pattern = [];
    for (let i = 0; i < 9; i++) {
         pattern.push(elements[i].classList[2]);
    }
    console.log(pattern)
    isWinner();
}

function isWinner() {
    if (
        pattern[0] == "cross" && pattern[1] == "cross" && pattern[2] == "cross" ||
        pattern[3] == "cross" && pattern[4] == "cross" && pattern[5] == "cross" ||
        pattern[6] == "cross" && pattern[7] == "cross" && pattern[8] == "cross" ||
        pattern[1] == "cross" && pattern[4] == "cross" && pattern[7] == "cross" ||
        pattern[2] == "cross" && pattern[5] == "cross" && pattern[8] == "cross" ||
        pattern[0] == "cross" && pattern[4] == "cross" && pattern[8] == "cross" ||
        pattern[2] == "cross" && pattern[4] == "cross" && pattern[6] == "cross" ||
        pattern[0] == "cross" && pattern[3] == "cross" && pattern[6] == "cross"
    ) {
    wins("Red")
    }
    else if (
        pattern[0] == "cirlce" && pattern[1] == "cirlce" && pattern[2] == "cirlce" ||
        pattern[3] == "cirlce" && pattern[4] == "cirlce" && pattern[5] == "cirlce" ||
        pattern[6] == "cirlce" && pattern[7] == "cirlce" && pattern[8] == "cirlce" ||
        pattern[1] == "cirlce" && pattern[4] == "cirlce" && pattern[7] == "cirlce" ||
        pattern[2] == "cirlce" && pattern[5] == "cirlce" && pattern[8] == "cirlce" ||
        pattern[0] == "cirlce" && pattern[4] == "cirlce" && pattern[8] == "cirlce" ||
        pattern[2] == "cirlce" && pattern[4] == "cirlce" && pattern[6] == "cirlce" ||
        pattern[0] == "cirlce" && pattern[3] == "cirlce" && pattern[6] == "cirlce"
    ) {
    wins("blue")
    }
}
 function wins(who) {
    const div = document.createElement("div")
    div.innerHTML = `<h1 class="winner-h1 ${who}">${who} wins!</h1>`;
    div.classList.add("wins");
    body.appendChild(div);
 }

 const aboutHeader = document.querySelector(".about-header")
 const aboutHidden = document.querySelector(".about-hidden")
 aboutHeader.addEventListener("click", () => {
    aboutHidden.classList.toggle("about-shown")
 })

