const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));


let currentQuestion = {};
let acceptingAnwers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


let questions = [
    {
        question: 'Kolik má lenochod Lenny prstů na tlapě?',
        choice1: '2',
        choice2: '3',
        choice3: '10',
        choice4: 'Nemá prsty :(',
        answer: 1,
    },
    {
        question:
            "Co je nejoblíbenější Frantovo jídlo od Marti ?",
        choice1: "Krupice",
        choice2: "Carbonary",
        choice3: "Cokoliv co mu přinese",
        choice4: "Nechutná mu od Martinky",
        answer: 3,
    },
    {
        question: "Je Franta lenoška ?",
        choice1: "Ano",
        choice2: "Ne",
        choice3: "Jak kdy",
        choice4: "Je produktivní bestie",
        answer: 1,
    },
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

function getNewQuestion() {
    //Pokud uz nejsou dostupne dalsi otazky prejdi do end.html
    if(availableQuestions.length == 0  || questionCounter > MAX_QUESTIONS) {
        return window.location.assign("/end.html");
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(function(choice) {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });
    availableQuestions.splice(questionIndex, 1);
    acceptingAnwers = true;
};

choices.forEach(function(choice) {
    choice.addEventListener("click", function(e) {
        if(!acceptingAnwers) {
            return;
        }

        acceptingAnwers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        console.log(selectedAnswer);
        getNewQuestion();
    });
});

startGame();