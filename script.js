function startQuiz(){
    document.getElementById('btn').style.visibility = "hidden";
    return displayQuestion();
}

var pos = 0, test, test_status, question, option, options, opA, opB, opC, opD, score = 0;

var questions = [
    [
        "1. Where do you see yourself when you are 70?",
        " as an older person with a good life and a lovely family", 
        " as a person with a life time of hard learned experience", 
        " when I close my eyes there should not be any regrets",
        " all of the above",
        "D"],
    [
        "2. What’s something that you want to change about yourself?",
        " love people less because of their apperances, instead look at who they really are", 
        " workout for a feeling of strength, not for bodygoals", 
        " more self-disciplined",
        " all of the above",
        "D"],
    [
        "3. If you’re stressed out, what helps you wind down?",
        " make the most of the sleep",
        " give yourself a treat", 
        " meet people that you love",
        " all of the above",
        "D"],
    [
        "4. What do you look for most in a spouse?",
        " compatibility", 
        " common goals", 
        " kindness",
        " all of the above",
        "D"]
];

function $(arg){
    return document.getElementById(arg);
}

function displayQuestion(){
    test = $("test");
    if (pos >= questions.length){
        test.innerHTML = "<h6 class='card-body text-center'>You got " + score + " out of " + questions.length + " questions correct!<h6>";
        $("test_status").innerHTML = "Test Completed";
        $("test_status").innerHTML = "<button id='btn' class='alert alert-info btn-sm' type='button' onclick='startQuiz()'>Retake Quiz</button>";
        pos = 0;
        score = 0;
        return false;
    }

    $("test_status").innerHTML = "Question " + (pos + 1) + " out of " + questions.length;
    question = questions[pos][0];
    opA = questions[pos][1];
    opB = questions[pos][2];
    opC = questions[pos][3];
    opD = questions[pos][4];
    test.innerHTML = "<h3 class='card-body'>" + question + "</h3>";
    test.innerHTML += "<input class='ml-4' type='radio' name='options' value='A'>" + opA + "<br>";
    test.innerHTML += "<input class='ml-4' type='radio' name='options' value='B'>" + opB + "<br>";
    test.innerHTML += "<input class='ml-4' type='radio' name='options' value='C'>" + opC + "<br>";
    test.innerHTML += "<input class='ml-4' type='radio' name='options' value='D'>" + opD + "<br><br>";
    test.innerHTML += "<button class='alert alert-info ml-4 btn-sm' onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer(){
    options = document.getElementsByName("options");
    for (var i = 0; i < options.length; i++){
        if (options[i].checked){
            option = options[i].value;
        }
    }

    if (option == questions[pos][5]){
        score++;
    }
    pos++;
    displayQuestion();
}

