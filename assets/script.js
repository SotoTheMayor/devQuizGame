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

function insPop() {
    alert("When ready, click Start to begin\nA timer will begin counting from 40 seconds\nSelect an answer by clicking on it, then clicking the Submit button\nEach correct answer will get you 100 points\nEach wrong answer will take 10 seconds off the timer\nAny time remaining will get you bonus points\nScore in the top 5 to add your initials to the highscores!\n \n HAVE FUN!!!");
};

function beginTimer() {
    timerInterval = setInterval(setTime, 1000)
};

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

function stopTime() {
    clearInterval(timerInterval);
    sec.textContent = 0;
    timerInterval = null;
};

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
    console.log(highSaves);
} ;

function quizQuestions() {
    qNum.textContent = questions[q].qNum;
    qText.textContent = questions[q].qText;
    ul.textContent = questions[q].ul;
    li1.textContent = questions[q].li1;
    li2.textContent = questions[q].li2;
    li3.textContent = questions[q].li3;
    li4.textContent = questions[q].li4;
    li5.textContent = questions[q].li5;
}

function nextQuestion() {
    if (q===0) {
        console.log(q);
        if (li1 == document.activeElement) {
            score = score + 100;
        } else {
            secLeft = secLeft - 5; 
        }
    } else if (q===1) {
        console.log(q);
        if (li1 == document.activeElement) {
            score = score + 100;
        } else {
            secLeft = secLeft - 5; 
        }
    } else if (q===2) {
        console.log(q);
        if (li1 == document.activeElement) {
            score = score + 100;
        } else {
            secLeft = secLeft - 5; 
        }
    } else if (q===3) {
        console.log(q);
        if (li1 == document.activeElement) {
            score = score + 100;
        } else {
            secLeft = secLeft - 5; 
        }
    } else if (q===4) {
        console.log(q);
        if (li1 == document.activeElement) {
            score = score + 100;
        } else {
            secLeft = secLeft - 5; 
        }
    };
    console.log(score);
    q = q+1;

    if (q>=4) {
        quizQuestions();
        q = 0;
        submit.textContent = "Finish Quiz";
        submit.removeEventListener("mousedown", nextQuestion);
        submit.addEventListener("mousedown", quizFinish) ;
    } else {
    quizQuestions();
    }
};

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
    console.log(q + " quiz finish");
    submit.textContent = "Submit";
    submit.removeEventListener("mousedown", quizFinish);
    finalScore = score + (secLeft*10);
    score = 0;
    console.log(finalScore + " final score");
    stopTime();
    finalScoreCalc();
    console.log(highSaves);
};

function finalScoreCalc() {
    var highSaves = JSON.parse(localStorage.getItem("highSaves"));
    if (highSaves.high1 == null) {
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
    };
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
        alert("Sorry. Your score is not in the top 5.  Try again!")
    };
}

var q1 = {
    qNum: 1,
    qText: "Question:1",
    ul: "Answer 1:",
    li1: "A",
    li2: "B",
    li3: "C",
    li4: "D",
    li5: "E",
};

var q2 = {
    qNum: 2,
    qText: "Question:2",
    ul: "Answer 2:",
    li1: "F",
    li2: "G",
    li3: "H",
    li4: "I",
    li5: "J",
};

var q3 = {
    qNum: 3,
    qText: "Question:3",
    ul: "Answer 3:",
    li1: "K",
    li2: "L",
    li3: "M",
    li4: "N",
    li5: "O",
};

var q4 = {
    qNum: 4,
    qText: "Question:4",
    ul: "Answer 4:",
    li1: "P",
    li2: "Q",
    li3: "R",
    li4: "S",
    li5: "T",
};

var q5 = {
    qNum: 5,
    qText: "Question:5",
    ul: "Answer 5:",
    li1: "U",
    li2: "V",
    li3: "W",
    li4: "X",
    li5: "Y",
};

var questions = [q1, q2, q3, q4, q5];

start.addEventListener("click", startQuiz) ;
instructions.addEventListener("click", insPop) ;
submit.addEventListener("mousedown", function(event){
    event.stopPropagation;
    nextQuestion();
}) ;