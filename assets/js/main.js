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
        answerB: "4",
        answerC: "5",
        answerD: "6",
        correctAnswer: "28"
    },
    {
        question: "What is your gender?",
        answerA: "male",
        answerB: "non-binary",
        answerC: "female",
        answerD: "goat",
        correctAnswer: "female"
    },
   {
        question: "hi?",
        answerA: "hello",
        answerB: "bye",
        answerC: "tush",
        answerD: "butt",
        correctAnswer: "hello"
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
        question: "What is your middle name?",
        answerA: "Michelle",
        answerB: "Napolitano",
        answerC: "Mila",
        answerD: "Ava",
        correctAnswer: "Napolitano"
    },
    {
        question: "What is your fish?",
        answerA: "fish",
        answerB: "Lana",
        answerC: "Mila",
        answerD: "Ava",
        correctAnswer: "fish"
    },
    {
        question: "What is Lanas name?",
        answerA: "Michelle",
        answerB: "Lana",
        answerC: "Mila",
        answerD: "Ava",
        correctAnswer: "Lana"
    },
    {
        question: "What is Milas name?",
        answerA: "Michelle",
        answerB: "Lana",
        answerC: "Mila",
        answerD: "Ava",
        correctAnswer: "Mila"
    },
    {
        question: "What is Avas name?",
        answerA: "Michelle",
        answerB: "Lana",
        answerC: "Mila",
        answerD: "Ava",
        correctAnswer: "Ava"
    }
]

// set time to 100 to begin quiz with 100 (subtract 10 for each wrong answer)
let time = 100;
// show time on page
let timeEl = document.querySelector(".time-value");
timeEl.innerHTML = time;
//set current question to index 0 of questions array
let currentQuestion = 0;



//when press start button- start quiz function (remove quiz intro section and show quiz)
function startQuiz() {
    document.querySelector(".quiz-intro").classList.add("hidden");
    showCurrentQuestion();
}

function showCurrentQuestion() {
    questionContainerEl.classList.remove("hidden");
    questionTextEl.textContent = questions[currentQuestion].question;
    answerAEl.textContent = questions[currentQuestion].answerA;
    answerBEl.textContent = questions[currentQuestion].answerB;
    answerCEl.textContent = questions[currentQuestion].answerC;
    answerDEl.textContent = questions[currentQuestion].answerD;
}

function checkAnswer() {
    let currentQuestionData = questions[currentQuestion]
    let correctAnswerEl = questions[currentQuestion].correctAnswer;
    let target = event.target;
    if (target.textContent === correctAnswerEl) {
        console.log("Correct!");
    } else {
        console.log("Wrong!");
        time = time - 10;
        timeEl.innerHTML = time;
    }
    if (currentQuestion < questions.length){
    showNextQuestion();
    } else { alert("Game Over!");
            }
}

function showNextQuestion() {
    if (currentQuestion < questions.length){
        showCurrentQuestion(currentQuestion++);
    } else {
        alert("game over!");
    }
}


    


// function checkAnswer(currentQuestion){
//     let targetEl = event.target;
//     console.log(targetEl);
//     questionContainerEl.classList.add("hidden");
//     showQuestions();
// }


document.querySelector(".quiz-content").addEventListener("click", checkAnswer);
startBtnEl.addEventListener("click", startQuiz);