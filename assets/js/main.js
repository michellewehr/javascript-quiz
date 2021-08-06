var startBtnEl = document.querySelector(".start-quiz");
var questionContainerEl = document.querySelector(".question-container");

function startQuiz() {
    document.querySelector(".quiz-intro").classList.add("hidden");
    questionContainerEl.classList.remove("hidden");
}

startBtnEl.addEventListener("click", startQuiz);