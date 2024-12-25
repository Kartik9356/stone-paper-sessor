let stone = document.querySelector(".stone");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let you = document.querySelector(".you");
let computer = document.querySelector(".computer");
let message = document.querySelector(".message");
let opu = document.querySelector(".your_selection")
let opc = document.querySelector(".computers_selection")
let user_score = 0;
let computer_score = 0;

let youclick = () => {
    let x;
    stone.addEventListener("click", () => {
        console.log("stone clicked");
        x = 0;
        computerclick(x);
    })
    paper.addEventListener("click", () => {
        console.log("paper clicked");
        x = 1;
        computerclick(x);
    })
    scissor.addEventListener("click", () => {
        console.log("scissor clicked");
        x = 2;
        computerclick(x);
    })
}

let computerclick = (x) => {
    let rv = Math.floor(Math.random() * 3);

    // Update the selection messages first
    const selections = ["stone", "paper", "scissor"];
    opu.innerText = `You selected ${selections[x]}`;
    opc.innerText = `Computer selected ${selections[rv]}`;

    if (rv === x) {
        console.log("draw")
        message.innerText = "Draw!";
        message.style.backgroundColor = "#1447F1";
    } else if ((rv === 0 && x === 1) || (rv === 1 && x === 2) || (rv === 2 && x === 0)) {
        console.log("x win")
        user_score++;
        message.innerText = "Yea! you won";
        message.style.backgroundColor = "#32A567";
    } else {
        console.log("rv win")
        computer_score++;
        message.innerText = "Sorry, computer won";
        message.style.backgroundColor = "#AA3920";
    }

    you.innerText = user_score;
    computer.innerText = computer_score;
}

youclick();
