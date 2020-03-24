let currentQuestion = 0;
let currentScore = 0; 
let resultContainer = document.querySelector('#result-container');
const questionContainer = document.querySelector('#question-container');
const choiceContainer = document.querySelector('#choice-container');
const answerContainer = document.querySelector('#answer-container');




function startQuiz(){
    document.getElementById('btn').style.visibility = "hidden";
    countdown(3);
    return displayQuestion();
}


var questions = [
    {
        question: "1. Donald Trump’s is short. Arnold Schwarzenegger’s is long. And Beyonce doesn’t have it. What is it?",
        choices: ["A. Hair", 
        "B. Family name", 
        "C. Beard",
        "D. Leg"],
        answer: "B. Family name"},
    {
        question: "2. What is made out of rubber, often handed out at many schools and colleges, and is used to avoid mistakes?",
        choices: ["A. Balloons", 
        "B. Erasers", 
        "C. Rubber gloves",
        "D. Stain Remover"],
        answer: "B. Erasers"},
    {
        question: "3. If you jump off the roof of a three-story building, where would you land?",
        choices: ["A. Hospital",
        "B. White house", 
        "C. Beach",
        "D. None of the above"],
        answer: "A. Hospital"},
    {
        question: "4. Everyone has one thing starting with “V” and can use it to get what they want. What is it?",
        choices: ["A. Vase", 
        "B. Voice", 
        "C. Visa",
        "D. None of the above"],
        answer: "B. Voice"},
    {
        question: "5. If there are 6 apples and you take away 4, how many do you have?",
        choices: ["A. 4", 
        "B. 2", 
        "C. 6",
        "D. None of the above"],
        answer: "A. 4"},  
    {
        question: "6. How Many Bones Does An Adult Human Have?",
        choices: ["A. 310", 
        "B. 257", 
        "C. 167",
        "D. 206"],
        answer: "D. 206"},
    {
        question: "7. Which Country Does The Sport Football Come From?",
        choices: ["A. Italy", 
        "B. France", 
        "C. England",
        "D. Portugal"],
        answer: "C. England"},
    {
        question: "8. How Many Sides Do Three Triangles And Three Rectangles Have In Total?",
        choices: ["A. 20", 
        "B. 21", 
        "C. 22",
        "D. 23"],
        answer: "B. 21"}

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
            var btnChoices = document.createElement('button');
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
        alert(`Haha, you got the wrong one! The correct answer is ${questions[currentQuestion].answer}`);
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
    clearInterval(timeinterval);
    questionContainer.innerHTML = '';
    choiceContainer.innerHTML = '';
    document.body.style.background = 'transparent';
    let retakeBtn = document.createElement('button');
    let saveBtn = document.createElement('button');
    let inputName = document.createElement('input');
    let displayResult = document.createElement('div'); 
    inputName.setAttribute("placeholder", " Please enter your name here...");
    inputName.className = 'm-3 lg pt-2 pb-2';
    saveBtn.className = 'btn btn-outline-dark mr-3 ml-3 mb-3';
    saveBtn.innerHTML = 'Save Result';
    retakeBtn.className = 'btn btn-outline-dark mr-3 ml-3 mb-3';
    retakeBtn.id = "retakeButton";
    retakeBtn.innerHTML = 'Retake Quiz';
    displayResult.className = 'card-body text-center';
    displayResult.innerHTML = `You got ${currentScore} out of ${questions.length} questions correct!`;
    if(currentScore == questions.length) {
        resultContainer.appendChild(displayResult);
        resultContainer.appendChild(inputName);
        resultContainer.appendChild(saveBtn);
        resultContainer.appendChild(retakeBtn); 
        document.body.style.background = "url('images/giphyRight.gif')";
    } else {
        resultContainer.appendChild(displayResult);
        resultContainer.appendChild(inputName);
        resultContainer.appendChild(saveBtn);
        resultContainer.appendChild(retakeBtn);   
        document.body.style.background = "url('images/giphyWrong.gif')"; 
    }

    saveBtn.addEventListener("click", function(){
       localStorage.setItem(inputName.value,currentScore);
       confirm("Your result has been saved. Thank you for taking my quiz!")
    })

    
}


document.addEventListener('click',function(e){
    if(e.target && e.target.id == 'retakeButton'){
        reloadApp();
     }
 });

function reloadApp(){
    window.location.reload();
}


var timeinterval;
function countdown(minutes) {
    var seconds = 60;
    var mins = minutes;
    function tick() {
        var counter = document.getElementById("time-container");
        var current_minutes = mins-1;
        seconds--;
        counter.innerHTML = `<span>${current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)}</span>`;
        counter.className = 'btn btn-dark';
        if( seconds > 0 ) {
            timeinterval = setTimeout(tick, 1000);
        } else {
            if(mins > 1){
                countdown(mins-1);           
            }
        }
    }
    tick();
}

