const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hypo Text Markup Language",
        c: "Hyperflex Makeup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Styling Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Shit",
        ans: "ans1"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a: "Hello To Transfer Property",
        b: "Hypertext Transfer Protocol",
        c: "Hi The Thing Please",
        d: "Hit The Tranferring Pot",
        ans: "ans2"
    },
    {
        question: "Q4: What is the full form of JS?",
        a: "JavaScript",
        b: "JantaSanksar",
        c: "Janitor Specialist",
        d: "Jack Muffet",
        ans: "ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];

    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
        //return answer;
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((currAnsElem) => currAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    //console.log(checkedAnswer);
    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    }
    deselectAll();
    questionCount++;
    if (questionCount < quizDB.length) {
        loadQuestion();
    }
    else {
        showScore.innerHTML = `
            <h1>Your Score : ${score} / ${quizDB.length}</h1>
            <h2>Thanks for playing :)</h2>
            <button class = "btn" onclick = "location.reload()">PLAY AGAIN!</button>
        `;
        showScore.classList.remove('scoreArea');
    }
});
