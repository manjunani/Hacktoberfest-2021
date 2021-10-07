const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = timeLeft.textContent;

//Removing the mole class and adding it to a random position
function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole');
    })

    let randomPosition = square[Math.floor(Math.random() * 16)]
    randomPosition.classList.add('mole');


    //assigning the id of the randomPosition to hitPostion for later use
    hitPosition = randomPosition.id;
}

//Finding the match and displaying the score
square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition) {
            result = result + 1;
            score.textContent = result;
        }
    })
})

function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 600)
}

moveMole();

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
    }
}
let timerId = setInterval(countDown, 1000);