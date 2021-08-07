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
const questions = [
   {
        question: "What is your name?",
        answerA: "Michelle",
        answerB: "Lana",
        answerC: "Mila",
        answerD: "Ava",
        correctAnswer: "Michelle"
    },
   {
        question: "What is your age?",
        answerA: "28",
        answerB: "Lana",
        answerC: "Mila",
        answerD: "Ava",
        correctAnswer: "28"
    },
    {
        question: "What is your gender?",
        answerA: "Michelle",
        answerB: "Lana",
        answerC: "female",
        answerD: "Ava",
        correctAnswer: "female"
    },
   {
        question: "What is your name?",
        answerA: "Michelle",
        answerB: "Lana",
        answerC: "Mila",
        answerD: "Ava",
        correctAnswer: "Michelle"
    },
    {
        question: "What is your name?",
        answerA: "Michelle",
        answerB: "Lana",
        answerC: "Mila",
        answerD: "Ava",
        correctAnswer: "Michelle"
    },
   {
        question: "What is your name?",
        answerA: "Michelle",
        answerB: "Lana",
        answerC: "Mila",
        answerD: "Ava",
        correctAnswer: "Michelle"
    },
    {
        question: "What is your name?",
        answerA: "Michelle",
        answerB: "Lana",
        answerC: "Mila",
        answerD: "Ava",
        correctAnswer: "Michelle"
    },
    {
        question: "What is your name?",
        answerA: "Michelle",
        answerB: "Lana",
        answerC: "Mila",
        answerD: "Ava",
        correctAnswer: "Michelle"
    },
    {
        question: "What is your name?",
        answerA: "Michelle",
        answerB: "Lana",
        answerC: "Mila",
        answerD: "Ava",
        correctAnswer: "Michelle"
    },
    {
        question: "What is your name?",
        answerA: "Michelle",
        answerB: "Lana",
        answerC: "Mila",
        answerD: "Ava",
        correctAnswer: "Michelle"
    }
]

let currentQuestion = 0;
let time = 100;
let timeEl = document.querySelector(".time-value");
timeEl.innerHTML = time;

function startQuiz() {
    document.querySelector(".quiz-intro").classList.add("hidden");
    showQuestions();
}

function showQuestions() {
        questionContainerEl.classList.remove("hidden");
        questionTextEl.textContent = questions[currentQuestion].question;
        answerAEl.textContent = questions[currentQuestion].answerA;
        answerBEl.textContent = questions[currentQuestion].answerB;
        answerCEl.textContent = questions[currentQuestion].answerC;
        answerDEl.textContent = questions[currentQuestion].answerD;
        let correctAnswerEl = questions[currentQuestion].correctAnswer;
}

function checkAnswer(currentQuestion){
    let targetEl = event.target;
    console.log(targetEl);
    questionContainerEl.classList.add("hidden");
    showQuestions();
}


document.querySelector(".body").addEventListener("click", checkAnswer);
startBtnEl.addEventListener("click", startQuiz);