var startBtnEl = document.querySelector(".start-quiz");
var questionContainerEl = document.querySelector(".question-container");
//question div
var questionDivEl = document.createElement("div");
questionDivEl.className = "question";
//append question div El to question-container
questionContainerEl.appendChild(questionDivEl);
//question text
var questionTextEl = document.createElement("h2");
questionTextEl.className = "question-text";
// answer-options
var answerAEl = document.createElement("button");
answerAEl.className = "answer-option";
answerAEl.id = "answerA";
var answerBEl = document.createElement("button");
answerBEl.className = "answer-option";
answerBEl.id = "answerB";
var answerCEl = document.createElement("button");
answerCEl.className = "answer-option";
answerCEl.id = "answerC";
var answerDEl = document.createElement("button");
answerDEl.className = "answer-option";
answerDEl.id = "answerD";
//add questiontext to question div
questionDivEl.appendChild(questionTextEl);
//append answers to question div
questionDivEl.appendChild(answerAEl);
questionDivEl.appendChild(answerBEl);
questionDivEl.appendChild(answerCEl);
questionDivEl.appendChild(answerDEl);


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
        question: "What is your age?",
        answerA: "28",
        answerB: "Lana",
        answerC: "Mila",
        answerD: "Ava",
        correctAnswer: "28"
    },
    questionThree = {
        question: "What is your gender?",
        answerA: "Michelle",
        answerB: "Lana",
        answerC: "female",
        answerD: "Ava",
        correctAnswer: "female"
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