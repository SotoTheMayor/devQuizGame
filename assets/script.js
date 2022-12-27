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
    var ul = document.createElement("ul");
    aText.appendChild(ul);
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    var li5 = document.createElement("li");
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);
} ;

function submitAnswer(event) {
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

start.addEventListener("click", startQuiz) ;
submit.addEventListener("click", submitAnswer) ;