var currentQuestion = 0;
var questions = [
    {
        question: "Where do you see yourself when you are 70?",
        answers: ["As an older person with a good life and a lovely family.", "I see myself as a person with a life time of hard learned experience.", "When I close my eyes there should not be any regrets."],
        answer: 2
    },
    {
        question: "What’s something that you want to change about yourself?",
        answers: ["Love people less because of their apperances, instead look at who they really are.", "Workout for a feeling of strength, not for bodygoals.", "More self-disciplined."],
        answer: 2
    },
    {
        question: "If you’re stressed out, what helps you wind down?",
        answers: ["Make the most of your sleep.", "Give yourself a treat.", "Meet people that you love. "],
        answer: 2
    }
    ,
    {
        question: "What do you look for most in a spouse?",
        answers: ["Intellectual compatibility", "Common Goals.", "Kindness to Everyone & Everything."],
        answer: 2
    }
];
// generate questions
function generateQuestion(questionNumber){
// gernerate question element
var questionsContainer = document.getElementById("question");
var questionElement = document.createElement("div");
var cardHeader = document.createElement("div");
// generate question
cardHeader.className = "card-header";
cardHeader.textContent = questions[questionNumber].question;
questionElement.appendChild(cardHeader);
questionElement.className = "card";
//generate answers
var answers = document.createElement("div");
answers.className = "card-body";
// attach click event
answers.addEventListener("click", function(e){
    console.log(e.target.getAttribute("data-answer-index"));
})
//gereate btn for each answer
questions[questionNumber].answers.forEach((answer, answerIndex ) => {
    var answerBtn = document.createElement("div");
    answerBtn.className = "btn btn-outline-dark answerBtn btn-block text-nowrap text-left";
    answerBtn.setAttribute("data-answer-index", answerIndex);
    answerBtn.textContent = answer;
    answers.appendChild(answerBtn);
});
questionsContainer.appendChild(questionElement);
questionsContainer.appendChild(answers);
}
    generateQuestion(currentQuestion);