var qText = document.querySelector(".qText") ;
var aText = document.querySelector(".aText") ;
var start = document.querySelector(".start") ;
var submit = document.querySelector(".submit") ;
var instructions = document.querySelector("#instructions") ;
var qNum = document.querySelector(".qNum") ;
var ul = document.querySelector("#ul");
var li1 = document.querySelector("#li1");
var li2 = document.querySelector("#li2");
var li3 = document.querySelector("#li3");
var li4 = document.querySelector("#li4");
var li5 = document.querySelector("#li5");
var sec = document.querySelector("#sec");
var highSaves = JSON.parse(localStorage.getItem("highSaves"));
var score = 0;
var timerInterval;


//hiding questions, answers and submit button until quiz start
start.setAttribute("style", "visibility:visible") ;
submit.setAttribute("style", "visibility:hidden") ;
qNum.setAttribute("style", "visibility:hidden") ;
qText.setAttribute("style", "visibility:hidden") ;
ul.setAttribute("style", "visibility:hidden") ;
li1.setAttribute("style", "visibility:hidden") ;
li2.setAttribute("style", "visibility:hidden") ;
li3.setAttribute("style", "visibility:hidden") ;
li4.setAttribute("style", "visibility:hidden") ;
li5.setAttribute("style", "visibility:hidden") ;

//function to display instructions on button click
function insPop() {
    alert("When ready, click Start to begin\nA timer will begin counting from 40 seconds\nSelect an answer by clicking on it, then clicking the Submit button\nEach correct answer will get you 100 points\nEach wrong answer will take 10 seconds off the timer\nAny time remaining will get you bonus points\nScore in the top 5 to add your initials to the highscores!\n \n HAVE FUN!!!");
};

//function to begin the timer
function beginTimer() {
    timerInterval = setInterval(setTime, 1000)
};

//function to define the timer's parameters
function setTime() {
    secLeft--;
    sec.textContent = secLeft;
     if (secLeft<=0) {
        stopTime();
        alert("time's up!");
        q = 0;
        quizFinish ();
};
};

//made global to be able to halt the timer for multiple reasons
function stopTime() {
    clearInterval(timerInterval);
    sec.textContent = 0;
    timerInterval = null;
};

//make answers, questions, and submit button visible,
//reset scores, question count, start timer, and hide quiz start button
function startQuiz() {
    start.setAttribute ("style", "visibility:hidden") ;
    submit.setAttribute ("style", "visibility:visible") ;
    qNum.setAttribute("style", "visibility:visible") ;
    qText.setAttribute("style", "visibility:visible") ;
    ul.setAttribute("style", "visibility:visible") ;
    li1.setAttribute("style", "visibility:visible") ;
    li2.setAttribute("style", "visibility:visible") ;
    li3.setAttribute("style", "visibility:visible") ;
    li4.setAttribute("style", "visibility:visible") ;
    li5.setAttribute("style", "visibility:visible") ;
    q = 0;
    finalScore = 0;
    secLeft = 40;
    beginTimer();
    quizQuestions();
} ;

//function to cycle through the quiz question objects
function quizQuestions() {
    qNum.textContent = questions[q].qNum;
    qText.textContent = questions[q].qText;
    ul.textContent = "";
    li1.textContent = questions[q].li1;
    li2.textContent = questions[q].li2;
    li3.textContent = questions[q].li3;
    li4.textContent = questions[q].li4;
    li5.textContent = questions[q].li5;
}

//tests question number and answer, adjusts score and display
function nextQuestion() {
    if (q===0) {
        if (li2 == document.activeElement) {
            score = score + 100;
        } else {
            secLeft = secLeft - 5; 
        }
    } else if (q===1) {
        if (li1 == document.activeElement) {
            score = score + 100;
        } else {
            secLeft = secLeft - 5; 
        }
    } else if (q===2) {
        if (li5 == document.activeElement) {
            score = score + 100;
        } else {
            secLeft = secLeft - 5; 
        }
    } else if (q===3) {
        //changes text of submit button to finish quiz
        submit.textContent = "Finish Quiz";
        if (li3 == document.activeElement) {
            score = score + 100;
        } else {
            secLeft = secLeft - 5; 
        }
    } else if (q===4) {
        //changes function of submit button to end the quiz
        submit.removeEventListener("mousedown", nextQuestion);
        submit.addEventListener("mousedown", quizFinish) ;
        if (li5 == document.activeElement) {
            score = score + 100;
        } else {
            secLeft = secLeft - 5; 
        }
    };
    //move to next question
    q = q+1;
    //test if through all 5 questions, if not, cycle 
    if (q>=5) {
        quizFinish();
    } else {
    quizQuestions();
    }
};

//sets final score, resets to quiz start
function quizFinish() {
    submit.setAttribute ("style", "visibility:hidden") ; 
    start.setAttribute ("style", "visibility:visible") ;
    qNum.setAttribute("style", "visibility:hidden") ;
    qText.setAttribute("style", "visibility:hidden") ;
    ul.setAttribute("style", "visibility:hidden") ;
    li1.setAttribute("style", "visibility:hidden") ;
    li2.setAttribute("style", "visibility:hidden") ;
    li3.setAttribute("style", "visibility:hidden") ;
    li4.setAttribute("style", "visibility:hidden") ;
    li5.setAttribute("style", "visibility:hidden") ;
    submit.textContent = "Submit";
    submit.removeEventListener("mousedown", quizFinish);
    finalScore = score + (secLeft*10);
    score = 0;
    stopTime();
    finalScoreCalc();
    q = 0;
};

//local storage high score function
function finalScoreCalc() {
//creates local storage key if not present
    if (!localStorage.getItem("highSaves")) {
        var highSaves = {
            high1: "blank",
            score1: 0,
            high2: "blank",
            score2: 0,
            high3: "blank",
            score3: 0,
            high4: "blank",
            score4: 0,
            high5: "blank",
            score5: 0,
            }
            localStorage.setItem("highSaves", JSON.stringify(highSaves));
    } else {
        var highSaves = JSON.parse(localStorage.getItem("highSaves"));
    };
    //tests for score rank based on local storage, adjusts ranks
    if (finalScore > highSaves.score1) {
        highSaves.high5 = highSaves.high4;
        highSaves.score5 = highSaves.score4;
        highSaves.high4 = highSaves.high3;
        highSaves.score4 = highSaves.score3;
        highSaves.high3 = highSaves.high2;
        highSaves.score3 = highSaves.score2;
        highSaves.high2 = highSaves.high1;
        highSaves.score2 = highSaves.score1;
        highSaves.score1 = finalScore;
        highSaves.high1 = prompt("You're the top score with " + finalScore + "!  Enter your initials:", "3 character initials here")
        //requires 3 character length high score name
        if (highSaves.high1.length !== 3) {
            alert("Initials are only 3 character length.  Please input again.")
            finalScoreCalc();
        } else {
        localStorage.setItem("highSaves", JSON.stringify(highSaves));
        }
    } else if (finalScore > highSaves.score2) {
        highSaves.high5 = highSaves.high4;
        highSaves.score5 = highSaves.score4;
        highSaves.high4 = highSaves.high3;
        highSaves.score4 = highSaves.score3;
        highSaves.high3 = highSaves.high2;
        highSaves.score3 = highSaves.score2;
        highSaves.score2 = finalScore;
        highSaves.high2 = prompt("You're the second score with " + finalScore + "!  Enter your initials:", "3 character initials here")
        if (highSaves.high2.length !== 3) {
            alert("Initials are only 3 character length.  Please input again.")
            finalScoreCalc();
        } else {
            localStorage.setItem("highSaves", JSON.stringify(highSaves));
            }
    } else if (finalScore > highSaves.score3) {
        highSaves.high5 = highSaves.high4;
        highSaves.score5 = highSaves.score4;
        highSaves.high4 = highSaves.high3;
        highSaves.score4 = highSaves.score3;
        highSaves.score3 = finalScore;
        highSaves.high3 = prompt("You're the third score with " + finalScore + "!  Enter your initials:", "3 character initials here")
        if (highSaves.high3.length !== 3) {
            alert("Initials are only 3 character length.  Please input again.")
            finalScoreCalc();
        } else {
            localStorage.setItem("highSaves", JSON.stringify(highSaves));
            }
    } else if (finalScore > highSaves.score4) {
        highSaves.high5 = highSaves.high4;
        highSaves.score5 = highSaves.score4;
        highSaves.score4 = finalScore;
        highSaves.high4 = prompt("You're the fourth score with " + finalScore + "!  Enter your initials:", "3 character initials here")
        if (highSaves.high4.length !== 3) {
            alert("Initials are only 3 character length.  Please input again.")
            finalScoreCalc();
        } else {
            localStorage.setItem("highSaves", JSON.stringify(highSaves));
            }
    } else if (finalScore > highSaves.score5) {
        highSaves.score5 = finalScore;
        highSaves.high5 = prompt("You're the fifth score with " + finalScore + "!  Enter your initials:", "3 character initials here")
        if (highSaves.high5.length !== 3) {
            alert("Initials are only 3 character length.  Please input again.")
            finalScoreCalc();
        } else {
            localStorage.setItem("highSaves", JSON.stringify(highSaves));
            }
    } else {
        //pop up for not top 5
        alert("Sorry. Your score is not in the top 5.  Try again!")
    };
}

//objects for question and answer variables
var q1 = {
    qNum: 1,
    qText: "API stands for Application _________ Interface?",
    li1: "Platform",
    li2: "Programming",
    li3: "Partner",
    li4: "Performance",
    li5: "Presence",
};

var q2 = {
    qNum: 2,
    qText: "In HTML, what is everything from the start tag to the end tag is called?",
    li1: "Element",
    li2: "Refernce",
    li3: "Selector",
    li4: "Line",
    li5: "Aspect",
};

var q3 = {
    qNum: 3,
    qText: "If you want to access the 'box' element in the array Arr = ['box', 'car', 'racer'], what would you set for X in Arr[X]?",
    li1: "-1",
    li2: "1",
    li3: "start",
    li4: "first",
    li5: "0",
};

var q4 = {
    qNum: 4,
    qText: "X += Y is the same as which of the following?",
    li1: "X++",
    li2: "Y = X + Y",
    li3: "X = X + Y",
    li4: "Y++",
    li5: "X = Y + Y",
};

var q5 = {
    qNum: 5,
    qText: "In this CSS declaration example (color:blue), color is the property and blue is the _________?",
    li1: "Syntax",
    li2: "Focus",
    li3: "Attribute",
    li4: "Selector",
    li5: "Value",
};

//array used to cycle questions in nextQuestion function
var questions = [q1, q2, q3, q4, q5];

//initial event listeners
start.addEventListener("click", startQuiz) ;
instructions.addEventListener("click", insPop) ;
submit.addEventListener("mousedown", function(event){
    event.stopPropagation;
    nextQuestion();
}) ;