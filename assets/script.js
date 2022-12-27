var qText = document.querySelector(".qText") ;
var aText = document.querySelector(".aText") ;
var start = document.querySelector(".start") ;
var submit = document.querySelector(".submit") ;

start.setAttribute("style", "visibility:visible") ;
submit.setAttribute("style", "visibility:hidden") ;

qText.textContent = "This is where the question text will go" ;
aText.textContent = "This is where the answer text will go" ;

function startQuiz(event) {
    event.currentTarget.setAttribute ("style", "visibility:hidden") ;
    submit.setAttribute ("style", "visibility:visible") ;
    for (i=0; i<5; i++) {
        x = questions[i];
        submitAnswer(x);
    }
} ;

function submitAnswer(x) {
    var ul = document.createElement("ul");
    ul.textContent = x.ul;
    aText.appendChild(ul);
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    var li5 = document.createElement("li");
    li1.textContent = x.li1;
    li2.textContent = x.li2;
    li3.textContent = x.li3;
    li4.textContent = x.li4;
    li5.textContent = x.li5;
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);

}

function finalAnswer(event) {
    event.currentTarget.setAttribute ("style", "visibility:hidden") ; 
    start.setAttribute ("style", "visibility:visible") ;
    var ul = document.querySelector("ul");
    ul.remove();
    var li1 = document.querySelector("li1");
    var li2 = document.querySelector("li2");
    var li3 = document.querySelector("li3");
    var li4 = document.querySelector("li4");
    var li5 = document.querySelector("li5");
    li1.remove();
    li2.remove();
    li3.remove();
    li4.remove();
    li5.remove();
} ;

var q1 = {
    ul: "Question 1",
    li1: "A",
    li2: "B",
    li3: "C",
    li4: "D",
    li5: "E",
};

var q2 = {
    ul: "Question 2",
    li1: "F",
    li2: "G",
    li3: "H",
    li4: "I",
    li5: "J",
};

var q3 = {
    ul: "Question 3",
    li1: "K",
    li2: "L",
    li3: "M",
    li4: "N",
    li5: "O",
};

var q4 = {
    ul: "Question 4",
    li1: "P",
    li2: "Q",
    li3: "R",
    li4: "S",
    li5: "T",
};

var q5 = {
    ul: "Question 5",
    li1: "U",
    li2: "V",
    li3: "W",
    li4: "X",
    li5: "Y",
};

var questions = [q1, q2, q3, q4, q5];

start.addEventListener("click", startQuiz) ;
submit.addEventListener("click", finalAnswer) ;