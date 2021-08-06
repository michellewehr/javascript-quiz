var startBtnEl = document.querySelector(".start-quiz");
var questionContainerEl = document.querySelector(".question-container");
var questionTextEl = document.querySelector(".question-text");
var answerAEl = document.querySelector("#answerA");
var answerBEl = document.querySelector("#answerB");
var answerCEl = document.querySelector("#answerC");
var answerDEl = document.querySelector("#answerD");

// Questions Array
questions = [
    questionOne = {
        question: "What is your name?",
        answerA: "Michelle",
        answerB: "Lana",
        answerC: "Mila",
        answerD: "Ava",
        correctAnswer: "Michelle"
    },
    questionTwo = {
        question: "What is your name?",
        answerA: "Michelle",
        answerB: "Lana",
        answerC: "Mila",
        answerD: "Ava",
        correctAnswer: "Michelle"
    },
    questionThree = {
        question: "What is your name?",
        answerA: "Michelle",
        answerB: "Lana",
        answerC: "Mila",
        answerD: "Ava",
        correctAnswer: "Michelle"
    },
    questionFour = {
        question: "What is your name?",
        answerA: "Michelle",
        answerB: "Lana",
        answerC: "Mila",
        answerD: "Ava",
        correctAnswer: "Michelle"
    },
    questionFive = {
        question: "What is your name?",
        answerA: "Michelle",
        answerB: "Lana",
        answerC: "Mila",
        answerD: "Ava",
        correctAnswer: "Michelle"
    },
    questionSix = {
        question: "What is your name?",
        answerA: "Michelle",
        answerB: "Lana",
        answerC: "Mila",
        answerD: "Ava",
        correctAnswer: "Michelle"
    },
    questionSeven = {
        question: "What is your name?",
        answerA: "Michelle",
        answerB: "Lana",
        answerC: "Mila",
        answerD: "Ava",
        correctAnswer: "Michelle"
    },
    questionEight = {
        question: "What is your name?",
        answerA: "Michelle",
        answerB: "Lana",
        answerC: "Mila",
        answerD: "Ava",
        correctAnswer: "Michelle"
    },
    questionNine = {
        question: "What is your name?",
        answerA: "Michelle",
        answerB: "Lana",
        answerC: "Mila",
        answerD: "Ava",
        correctAnswer: "Michelle"
    },
    questionTen = {
        question: "What is your name?",
        answerA: "Michelle",
        answerB: "Lana",
        answerC: "Mila",
        answerD: "Ava",
        correctAnswer: "Michelle"
    }
]
function startQuiz() {
    document.querySelector(".quiz-intro").classList.add("hidden");
    showQuestions();
}

function showQuestions() {
    for(let i = 0; i < questions.length; i++) {
        console.log(questions[i])
        questionTextEl.textContent = questions[i].question;
        answerAEl.textContent = questions[i].answerA;
        answerBEl.textContent = questions[i].answerB;
        answerCEl.textContent = questions[i].answerC;
        answerDEl.textContent = questions[i].answerD;
        questionContainerEl.classList.remove("hidden");
    }
}

startBtnEl.addEventListener("click", startQuiz);