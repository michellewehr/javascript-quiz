//view high scores anchor element on document
let viewHighScoresEl = document.querySelector(".view-high-scores");
//set current question to index 0 of questions array
let currentQuestion = 0;
// get start button
const startBtnEl = document.querySelector(".start-quiz");
// get quetion container to append children to
const questionContainerEl = document.querySelector(".question-container");
//question div
const questionDivEl = document.createElement("div");
questionDivEl.className = "question";
//append question div El to question-container
questionContainerEl.appendChild(questionDivEl);
//question text
const questionTextEl = document.createElement("h3");
questionTextEl.className = "question-text";
// answer-options
const answerAEl = document.createElement("button");
answerAEl.className = "answer-option";
answerAEl.id = "answerA";
answerAEl.type = "submit";
const answerBEl = document.createElement("button");
answerBEl.className = "answer-option";
answerBEl.id = "answerB";
answerBEl.type = "submit";
const answerCEl = document.createElement("button");
answerCEl.className = "answer-option";
answerCEl.id = "answerC";
answerCEl.type = "submit";
const answerDEl = document.createElement("button");
answerDEl.className = "answer-option";
answerDEl.id = "answerD";
answerDEl.type = "submit";
//append questiontext to question div
questionDivEl.appendChild(questionTextEl);
//append answers to question div
questionDivEl.appendChild(answerAEl);
questionDivEl.appendChild(answerBEl);
questionDivEl.appendChild(answerCEl);
questionDivEl.appendChild(answerDEl);
// check answer element that comes up when click wrong/ correct answer
var checkAnswerTextEl = document.createElement("h4");
//append checkAnswerTextEl to questionContainer El 
questionDivEl.appendChild(checkAnswerTextEl);
//create end of quiz form
const endOfQuizEl = document.querySelector(".end-quiz");
//create text content for end of quiz form
const formHeadingEl = document.createElement("h3");
formHeadingEl.textContent = "All done!";
const formPEl = document.createElement("p");
const formLabelEl =document.createElement("label");
formLabelEl.for = "initial-input";
formLabelEl.textContent = "Enter Initials: "
const formInputEl = document.createElement("input");
formInputEl.id = "initial-input"
formInputEl.className = "initial-input";
const formBtnEl = document.createElement("button");
formBtnEl.className = "initial-btn";
formBtnEl.type = "submit";
formBtnEl.textContent = "Submit";
endOfQuizEl.appendChild(formHeadingEl);
endOfQuizEl.appendChild(formPEl);
endOfQuizEl.appendChild(formLabelEl);
endOfQuizEl.appendChild(formInputEl);
endOfQuizEl.appendChild(formBtnEl);
//create leaderboard
const leaderBoardEl = document.querySelector(".leaderboard");
//create elements for leaderboard
const leaderBoardHeaderEl = document.createElement("h3");
leaderBoardHeaderEl.textContent = "High Scores";
const leaderBoardOLEl = document.createElement("ol");
const leaderBoardGoBackBtnEl = document.createElement("button");
leaderBoardGoBackBtnEl.className = "go-back";
leaderBoardGoBackBtnEl.textContent = "Go Back";
const leaderBoardResetBtnEl = document.createElement("button");
leaderBoardResetBtnEl.className = "clear";
leaderBoardResetBtnEl.type = "reset";
leaderBoardResetBtnEl.textContent = "Clear high scores";
leaderBoardEl.appendChild(leaderBoardHeaderEl);
leaderBoardEl.appendChild(leaderBoardOLEl);
leaderBoardEl.appendChild(leaderBoardGoBackBtnEl);
leaderBoardEl.appendChild(leaderBoardResetBtnEl);
//create array to hold high scores
let highScoreArr = [];
// create var interval variable to add the set/clear interval methods for countdown timer
var timer;

// Questions Array
const questions = [
   {
        question: "What is an array in JavaScript?",
        answerA: "A data structure used to represent a list of items",
        answerB: "A variable",
        answerC: "A value type",
        answerD: "A type of operator",
        correctAnswer: "A data structure used to represent a list of items"
    },
   {
        question: "When should you use the 'console.log()' method?",
        answerA: "To display an interactive list of properties of the specified JavaScript object",
        answerB: "To output a message to the browser console. It can be useful to use frequently to ensure your code is running correctly",
        answerC: "To alert a user",
        answerD: "To prompt a user's input",
        correctAnswer: "To output a message to the browser console. It can be useful to use frequently to ensure your code is running correctly"
    },
    {
        question: "What does the method 'console.dir()' do in JavaScript?",
        answerA: "Shows the localStorage key, value pairs",
        answerB: "Displays sessionStorage key, value pairs",
        answerC: "Outputs a specified message to the browser console",
        answerD: "Displays an interactive list of properties of the specified JavaScript object",
        correctAnswer: "Displays an interactive list of properties of the specified JavaScript object"
    },
   {
        question: "What is a function in JavaScript?",
        answerA: "A data structure used to represent a list of items",
        answerB: "Set of statments that perform a task or calculates a value",
        answerC: "A datatype that returns either true or false",
        answerD: "Any text inside double or single quotes",
        correctAnswer: "set of statments that perform a task or calculates a value"
    },
    {
        question: "Which of the following is an example of camel notation?",
        answerA: "camelCase",
        answerB: "CamelCase",
        answerC: "camel-case",
        answerD: "camel_CASE",
        correctAnswer: "camelCase"
    },
   {
        question: "In JavaScript, what does '===' mean?",
        answerA: "Loose equality operator, it ensures that both values on either sides of the operator are of the same value. It is not concerned with the type.",
        answerB: "'===' is not used in JavaScript.",
        answerC: "Logical AND operator, checks that both values on either side of the operator are true.",
        answerD: "Strict equality operator, it ensures that BOTH values on either sides of the operator are the same type & the same value.",
        correctAnswer: "Strict equality operator, it ensures that BOTH values on either sides of the operator are the same type & the same value."
    },
    {
        question: "When would you use a for loop in JavaScript?",
        answerA: "To run a sequence of instructions WHILE a condition is true",
        answerB: "To run a sequence of instructions that will continuously run",
        answerC: "To repeat an action a number of times",
        answerD: "To call a function ONE time",
        correctAnswer: "To repeat an action a number of times"
    },
    {
        question: "What does the 'unshift()' method do in JavaScript?",
        answerA: "Adds to the middle of an array",
        answerB: "Adds to the beginning of an array",
        answerC: "Adds to the end of an array",
        answerD: "Iterates over an array",
        correctAnswer: "Adds to the beginning of an array"
    },
    {
        question: "Which of the following methods remove the last element in an array?",
        answerA: "splice()",
        answerB: "pop()",
        answerC: "join()",
        answerD: "concat()",
        correctAnswer: "pop()"
    },
    {
        question: "What does the 'reduce()' method do?",
        answerA: "Reduces all items in an array to a single value",
        answerB: "Maps each item in an array to something else",
        answerC: "Returns an array",
        answerD: "Joins two arrays",
        correctAnswer: "Reduces all items in an array to a single value"
    }
]

// set time to 100seconds, 10 seconds per question so that if you get them all wrong its a 0
let time = 100;
//show time on intro page 
let timeEl = document.querySelector(".time-value");
timeEl.innerHTML = time;

//count down function
function countDownTimer() {
    //show time on page
    timeEl.innerHTML = time;
    time--; 
    // when time hits 0, clear interval, stop quiz, and get initials
    if (time < 0) {
        clearInterval(timer);
        time = 0;
        questionContainerEl.classList.add("hidden");
        endOfQuizEl.classList.remove("hidden");
        formPEl.textContent = "Your final score is: " + time;
    }
}

//when press start button- start quiz function (remove quiz intro section and show quiz)
function startQuiz() {
    // set interval for countdown in start quiz function so it doesn't run until button clicked
    timer = setInterval(countDownTimer, 1000);
    // remove intro page 
    document.querySelector(".quiz-intro").classList.add("hidden");
    // show questions 
    showCurrentQuestion();
}

//show questions function
function showCurrentQuestion() {
    questionContainerEl.classList.remove("hidden");
    questionTextEl.textContent = questions[currentQuestion].question;
    answerAEl.textContent = questions[currentQuestion].answerA;
    answerBEl.textContent = questions[currentQuestion].answerB;
    answerCEl.textContent = questions[currentQuestion].answerC;
    answerDEl.textContent = questions[currentQuestion].answerD;
}

// when select an answer, check the answer if it is correct, if incorrect subtract 10seconds from timer
function checkAnswer(answer) {
    let currentQuestionData = questions[currentQuestion];
    let correctAnswerEl = questions[currentQuestion].correctAnswer;
    // get click target to see which button was clicked to check if correct
    let target = event.target;
    // turn node list of answer option Element into an array to be able to run set timeout for each new question to show Correct/incorrect
    var answerOptionArr = Array.apply(null, answerOptionEl);
    answerOptionArr.forEach(element => {
        if(element === target) {
            if (target.textContent === correctAnswerEl) {
                checkAnswerTextEl.textContent = "Correct!";
                setTimeout(function() {
                    checkAnswerTextEl.textContent = "";
                }, 3000);
            } else {
                time -= 10;
                timeEl.textContent = time + 1;
                checkAnswerTextEl.textContent = "Incorrect!";
                setTimeout(function() {
                    checkAnswerTextEl.textContent = "";
                }, 3000);
            }
        }
    });
    // if no more questions in array or time is 0 then stop quiz, if not proceed
    if (currentQuestion < questions.length -1 && time >= 0){
        showCurrentQuestion(currentQuestion++);
    } else {
        questionContainerEl.classList.add("hidden");
        endOfQuizEl.classList.remove("hidden");
        formPEl.textContent = "Your final score is: " + time;
        clearInterval(timer);
        }
}

//get initials, save initials with associated time in highScore array
function getInitials() {
    //prevent the browswer from refreshing
    event.preventDefault();
    //get initials
    let initials = formInputEl.value;
    //validate input
    if (!initials) {
        alert("You need to enter your initials to save your score!");
        return;
    }
    //high score object
    let highScoreObj =
    {
        initials: initials,
        score: time
    };
    // get highScoreArray from localStorage to stop overwriting each refresh
    highScoreArr = localStorage.getItem('highScores');
    // if nothing in highScoreArr/ 1st go-around, initialize empty array and  push object; if not-- turn the localStorage item back into array and push item, run saveHighScore function to save it so next go-around it is there
    if (!highScoreArr) {
        highScoreArr = [];
        highScoreArr.push(highScoreObj);
        saveHighScore();
    } else {
        highScoreArr = JSON.parse(highScoreArr);
        highScoreArr.push(highScoreObj);
        saveHighScore();
    }
    loadHighScores();
}
//save in local storage
function saveHighScore() {
    localStorage.setItem('highScores', JSON.stringify(highScoreArr));
}
//show high scores
function loadHighScores() {
    clearInterval(timer);
    //get saved highscores
    var highScores = localStorage.getItem("highScores");
    // if no highScores show empty 
    if (!highScores) {
        document.querySelector(".quiz-intro").classList.add("hidden");
        questionContainerEl.classList.add("hidden");
        endOfQuizEl.classList.add("hidden");
        leaderBoardEl.classList.remove("hidden");
        leaderBoardOLEl.classList.remove("hidden");
    }
    // turn highscores into an array
    highScores = JSON.parse(highScores);
    highScores = highScores
        .sort((a, b) => a.score - b.score)
        .reverse()
    //if there are no high scores, return out of function
    if (!highScores) {
        return false;
    }
    //for each item in high scores array add as list element, show the list, hide the rest of the quiz elements
    for(let i = 0; i < highScores.length; i++) {
        let savedInitials = highScores[i].initials;
        let savedScore = highScores[i].score;
        let leaderBoardListItemEl = document.createElement("li");
        leaderBoardOLEl.appendChild(leaderBoardListItemEl);
        leaderBoardListItemEl.innerHTML = savedInitials + " - " + savedScore;
    }
    document.querySelector(".quiz-intro").classList.add("hidden");
    questionContainerEl.classList.add("hidden");
    endOfQuizEl.classList.add("hidden");
    leaderBoardEl.classList.remove("hidden");
    leaderBoardOLEl.classList.remove("hidden");
    // make sure can't click viewHighScoresEl twice
    viewHighScoresEl.style.pointerEvents = "none";
    }

// when clear high score button is pressed clear highscores
function clearHighScores() {
    localStorage.clear();
    leaderBoardOLEl.className = "hidden";
}

//view high scores link click
viewHighScoresEl.addEventListener("click", loadHighScores);
//leader board go back button 
leaderBoardGoBackBtnEl.addEventListener("click", reload => reload = location.reload());
// lead board clear high scores button 
leaderBoardResetBtnEl.addEventListener("click", clearHighScores);
//when submit end of quiz form 
formBtnEl.addEventListener("click", getInitials);
//query selector all for question-answer-options to run function checkAnswer()
var answerOptionEl = document.querySelectorAll(".answer-option");
for(let option of answerOptionEl) {
    option.addEventListener("click", checkAnswer);
}
//when press button
startBtnEl.addEventListener("click", startQuiz);