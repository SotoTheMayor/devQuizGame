var qText = document.querySelector(".qText") ;
var aText = document.querySelector(".aText") ;
var start = document.querySelector(".start") ;
var submit = document.querySelector(".submit") ;
var qNum = document.querySelector(".qNum")
var ul = document.querySelector("#ul");
var li1 = document.querySelector("#li1");
var li2 = document.querySelector("#li2");
var li3 = document.querySelector("#li3");
var li4 = document.querySelector("#li4");
var li5 = document.querySelector("#li5");
var sec = document.querySelector("#sec");
var score = 0;
var secLeft = 90;


start.setAttribute("style", "visibility:visible") ;
submit.setAttribute("style", "visibility:hidden") ;
qNum.setAttribute("style", "visibility:hidden") ;
ul.setAttribute("style", "visibility:hidden") ;
li1.setAttribute("style", "visibility:hidden") ;
li2.setAttribute("style", "visibility:hidden") ;
li3.setAttribute("style", "visibility:hidden") ;
li4.setAttribute("style", "visibility:hidden") ;
li5.setAttribute("style", "visibility:hidden") ;

qText.textContent = "This is where the question text will go" ;

var timerInterval = setInterval(setTime, 1000);

function setTime() {
    secLeft--;
    sec.textContent = secLeft;
     if (secLeft===0) {
        clearInterval(timerInterval);
        alert("time's up!");
};
};

function stopTime() {
    clearInterval(timerInterval);
};



function startQuiz(event) {
    event.currentTarget.setAttribute ("style", "visibility:hidden") ;
    submit.setAttribute ("style", "visibility:visible") ;
    qNum.setAttribute("style", "visibility:visible") ;
    ul.setAttribute("style", "visibility:visible") ;
    li1.setAttribute("style", "visibility:visible") ;
    li2.setAttribute("style", "visibility:visible") ;
    li3.setAttribute("style", "visibility:visible") ;
    li4.setAttribute("style", "visibility:visible") ;
    li5.setAttribute("style", "visibility:visible") ;
    q = 0;
    finalScore = 0;
    secLeft = 20;
    setTime();
    quizQuestions();
} ;

function quizQuestions() {
    qNum.textContent = questions[q].qNum;
    ul.textContent = questions[q].ul;
    li1.textContent = questions[q].li1;
    li2.textContent = questions[q].li2;
    li3.textContent = questions[q].li3;
    li4.textContent = questions[q].li4;
    li5.textContent = questions[q].li5;
   // return q;
    
}

function nextQuestion() {
    if (q===0) {
        console.log(q);
        if (li1 == document.activeElement) {
            score = score + 100;
        }
    } else if (q===1) {
        console.log(q);
        if (li1 == document.activeElement) {
            score = score + 100;
        }
    } else if (q===2) {
        console.log(q);
        if (li1 == document.activeElement) {
            score = score + 100;
        }
    } else if (q===3) {
        console.log(q);
        if (li1 == document.activeElement) {
            score = score + 100;
        }
    } else if (q===4) {
        console.log(q);
        if (li1 == document.activeElement) {
            score = score + 100;
        }
    } else {
        score = score + 0;
    };
    console.log(score);
    q = q+1;

    if (q>=4) {
        quizQuestions();
        q = 0;
        submit.textContent = "Finish Quiz";
        submit.removeEventListener("mousedown", nextQuestion);
        submit.addEventListener("mousedown", finalAnswer) ;
    } else {
    quizQuestions();
    }
};


function finalAnswer() {
    quizFinish();

} ;

function quizFinish() {
    submit.setAttribute ("style", "visibility:hidden") ; 
    start.setAttribute ("style", "visibility:visible") ;
    qNum.setAttribute("style", "visibility:hidden") ;
    ul.setAttribute("style", "visibility:hidden") ;
    li1.setAttribute("style", "visibility:hidden") ;
    li2.setAttribute("style", "visibility:hidden") ;
    li3.setAttribute("style", "visibility:hidden") ;
    li4.setAttribute("style", "visibility:hidden") ;
    li5.setAttribute("style", "visibility:hidden") ;
    console.log(q + " quiz finish");
    submit.textContent = "Submit";
    submit.removeEventListener("mousedown", finalAnswer);
    finalScore = score;
    score = 0;
    console.log(finalScore + " final score");
    console.log(score + " should be 0 to reset score")
    stopTime();
};

var q1 = {
    qNum: 1,
    ul: "Question 1",
    li1: "A",
    li2: "B",
    li3: "C",
    li4: "D",
    li5: "E",
};

var q2 = {
    qNum: 2,
    ul: "Question 2",
    li1: "F",
    li2: "G",
    li3: "H",
    li4: "I",
    li5: "J",
};

var q3 = {
    qNum: 3,
    ul: "Question 3",
    li1: "K",
    li2: "L",
    li3: "M",
    li4: "N",
    li5: "O",
};

var q4 = {
    qNum: 4,
    ul: "Question 4",
    li1: "P",
    li2: "Q",
    li3: "R",
    li4: "S",
    li5: "T",
};

var q5 = {
    qNum: 5,
    ul: "Question 5",
    li1: "U",
    li2: "V",
    li3: "W",
    li4: "X",
    li5: "Y",
};

var questions = [q1, q2, q3, q4, q5];

start.addEventListener("click", startQuiz) ;
//submit.addEventListener("mousedown", nextQuestion) ;

submit.addEventListener("mousedown", function(event){
    event.stopPropagation;
    nextQuestion();
}) ;