
let userBtn = document.querySelectorAll("button");
let startBtn = document.getElementById("startBtn");

let choice = ["rock", "paper", "scissors"];

let result = document.getElementById("res");

startBtn.addEventListener("click", function () {
    // console.log(startBtn);
    let i = 0;
    let j = 0;

    console.log("value of i: " + i);
    console.log("value of j: " + j);

    userBtn[0].addEventListener("click", function () {

        // console.log(userBtn[0].innerHTML);
        let randomNumber = Math.floor(Math.random() * 3);
        console.log(choice[randomNumber]);

        let image = "images/" + choice[randomNumber] + ".png";
        let setImage = document.querySelector("img");
        setImage.setAttribute("src", image);

        if (randomNumber == 0) {
            res.innerHTML = "🎇 Draw! 🎇";
            res.style.color = "white";
            console.log("TIE !");
        }
        else if (randomNumber == 1) {
            console.log("DEFEAT !");
            res.innerHTML = "😓 Defeat! 😓";
            res.style.color = "red";
            j++;
        }
        else {
            console.log("VICTORY !");
            res.innerHTML = "🎆🎇 Victory! 🎇🎆";
            res.style.color = "greenyellow";
            i++;
        }

        console.log("value of i: " + i);
        console.log("value of j: " + j);
    });

    userBtn[1].addEventListener("click", function () {

        // console.log(userBtn[1].innerHTML);
        let randomNumber = Math.floor(Math.random() * 3);
        console.log(choice[randomNumber]);

        let image = "images/" + choice[randomNumber] + ".png";
        let setImage = document.querySelector("img");
        setImage.setAttribute("src", image);

        if (randomNumber == 0) {
            res.innerHTML = "🎆🎇 Victory! 🎇🎆";
            res.style.color = "greenyellow";
            console.log("VICTORY !");
            i++;
        }
        else if (randomNumber == 1) {
            res.innerHTML = "🎇 Draw! 🎇";
            res.style.color = "white";
            console.log("TIE !");
        }
        else {
            res.innerHTML = "😓 Defeat! 😓";
            res.style.color = "red";
            console.log("DEFEAT !");
            j++;
        }

        console.log("value of i: " + i);
        console.log("value of j: " + j);

    });

    userBtn[2].addEventListener("click", function () {

        // console.log(userBtn[2].innerHTML);
        let randomNumber = Math.floor(Math.random() * 3);
        console.log(choice[randomNumber]);

        let image = "images/" + choice[randomNumber] + ".png";
        let setImage = document.querySelector("img");
        setImage.setAttribute("src", image);

        if (randomNumber == 0) {
            res.innerHTML = "😓 Defeat! 😓";
            res.style.color = "red";
            console.log("DEFEAT !");
            j++;
        }
        else if (randomNumber == 1) {
            res.innerHTML = "🎆🎇 Victory! 🎇🎆";
            res.style.color = "greenyellow";
            console.log("VICTORY !");
            i++;
        }
        else {
            res.innerHTML = "🎇 Draw! 🎇";
            res.style.color = "white";
            console.log("TIE !");
        }

        console.log("value of i: " + i);
        console.log("value of j: " + j);

    });


});
