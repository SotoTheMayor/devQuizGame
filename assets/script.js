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
var a1 = "";
var a2 = "";
var a3 = "";
var a4 = "";
var a5 = "";
var q = 0;


start.setAttribute("style", "visibility:visible") ;
submit.setAttribute("style", "visibility:hidden") ;
ul.setAttribute("style", "visibility:hidden") ;
li1.setAttribute("style", "visibility:hidden") ;
li2.setAttribute("style", "visibility:hidden") ;
li3.setAttribute("style", "visibility:hidden") ;
li4.setAttribute("style", "visibility:hidden") ;
li5.setAttribute("style", "visibility:hidden") ;

qText.textContent = "This is where the question text will go" ;


function startQuiz(event) {
    event.currentTarget.setAttribute ("style", "visibility:hidden") ;
    submit.setAttribute ("style", "visibility:visible") ;
    ul.setAttribute("style", "visibility:visible") ;
    li1.setAttribute("style", "visibility:visible") ;
    li2.setAttribute("style", "visibility:visible") ;
    li3.setAttribute("style", "visibility:visible") ;
    li4.setAttribute("style", "visibility:visible") ;
    li5.setAttribute("style", "visibility:visible") ;
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
    q++;
    console.log(q);
    return q;
    
}

function nextQuestion() {
    if (q==4) {
        submit.textContent = "Finish Quiz";
        submit.addEventListener("click", finalAnswer) ;
    };
    quizQuestions();
};


function finalAnswer() {

    quizFinish();
} ;

function quizFinish() {
    submit.setAttribute ("style", "visibility:hidden") ; 
    start.setAttribute ("style", "visibility:visible") ;
    ul.setAttribute("style", "visibility:hidden") ;
    li1.setAttribute("style", "visibility:hidden") ;
    li2.setAttribute("style", "visibility:hidden") ;
    li3.setAttribute("style", "visibility:hidden") ;
    li4.setAttribute("style", "visibility:hidden") ;
    li5.setAttribute("style", "visibility:hidden") ;
    
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
submit.addEventListener("click", nextQuestion) ;