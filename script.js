let currentQuestion = 0;
let currentScore = 0; 
let resultContainer = document.querySelector('#result-container') 
const questionContainer = document.querySelector('#question-container');
const choiceContainer = document.querySelector('#choice-container');
const answerContainer = document.querySelector('#answer-container');


function startQuiz(){
    document.getElementById('btn').style.visibility = "hidden";
    return displayQuestion();
}


var questions = [
    {
        question: "1. What is a software?",
        choices: ["A. Software is documentation and configuration of data", 
        "B. Software is set of programs", 
        "C. Software is set of programs, documentation & configuration of data",
        "D. None of the mentioned"],
        answer: "C. Software is set of programs, documentation & configuration of data"},
    {
        question: "2. Representation of data structure in memory is known as:",
        choices: ["A. Recursive", 
        "B. Abstract data type", 
        "C. Storage structure",
        "D. File structure"],
        answer: "B. Abstract data type"},
    {
        question: "3. How does JavaScript store dates in a date object?",
        choices: ["A. The number of milliseconds since January 1st, 1970",
        "B. The number of days since January 1st, 1900", 
        "C. The number of seconds since Netscape's public stock offering",
        "D. None of the above"],
        answer: "A. The number of milliseconds since January 1st, 1970"},
    {
        question: "4. Which types of image maps can be used with JavaScript?",
        choices: ["A. Server-side image maps", 
        "B. Client-side image maps", 
        "C. Server-side image maps and Client-side image maps",
        "D. None of the above"],
        answer: "B. Client-side image maps"} 
];

function displayQuestion() {
    if (currentQuestion === questions.length) {
        endQuiz();
    } else {
        questionContainer.innerHTML = '';
        choiceContainer.innerHTML = '';
        document.body.style.background = 'transparent';
        let h5Question = document.createElement('h5');
        h5Question.className = 'list-group-item list-group-item-action list-group-item-warning .disabled';
        h5Question.innerHTML = questions[currentQuestion].question;
        questionContainer.appendChild(h5Question);

        for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
            let btnChoices = document.createElement('button');
            btnChoices.innerHTML = '';
            btnChoices.className = 'list-group-item list-group-item-action';
            btnChoices.innerHTML = questions[currentQuestion].choices[i];
            choiceContainer.appendChild(btnChoices);
            btnChoices.onclick = checkAnswer;
        }
    }
}

function checkAnswer() {
    if (this.textContent !== questions[currentQuestion].answer) {
        nextQuestion();
    } else {
        currentScore = currentScore + 1;
        nextQuestion();
    }
}
   
function nextQuestion() {
    ++currentQuestion;
    displayQuestion(); 
}

function endQuiz() {
    questionContainer.innerHTML = '';
    choiceContainer.innerHTML = '';
    document.body.style.background = 'transparent';
    let retakeBtn = document.createElement('button');
    retakeBtn.className = 'btn-block btn btn-dark mt-3';
    retakeBtn.innerHTML = `Retake Quiz`;
    let displayResult = document.createElement('div'); 
    displayResult.className = 'card-body';
    displayResult.innerHTML = `You got ${currentScore} out of ${questions.length} questions correct!`;
    if(currentScore == questions.length) {
        resultContainer.appendChild(displayResult).appendChild(retakeBtn); 
        document.body.style.background = "url('images/giphyRight.gif')";
    } else {
        resultContainer.appendChild(displayResult).appendChild(retakeBtn);   
        document.body.style.background = "url('images/giphyWrong.gif')"; 
    }
    
}

