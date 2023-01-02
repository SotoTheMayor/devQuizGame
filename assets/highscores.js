var highSaves = JSON.parse(localStorage.getItem("highSaves"));
var rank1 = document.querySelector("#rank1");
var rank2 = document.querySelector("#rank2");
var rank3 = document.querySelector("#rank3");
var rank4 = document.querySelector("#rank4");
var rank5 = document.querySelector("#rank5");
var reset = document.querySelector("#reset")

rank1.textContent = highSaves.score1 + " - " + highSaves.high1;
rank2.textContent = highSaves.score2 + " - " + highSaves.high2;
rank3.textContent = highSaves.score3 + " - " + highSaves.high3;
rank4.textContent = highSaves.score4 + " - " + highSaves.high4;
rank5.textContent = highSaves.score5 + " - " + highSaves.high5;

function resetScores() {
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
    };
localStorage.setItem("highSaves", JSON.stringify(highSaves));
rank1.textContent = highSaves.score1 + " - " + highSaves.high1;
rank2.textContent = highSaves.score2 + " - " + highSaves.high2;
rank3.textContent = highSaves.score3 + " - " + highSaves.high3;
rank4.textContent = highSaves.score4 + " - " + highSaves.high4;
rank5.textContent = highSaves.score5 + " - " + highSaves.high5;
};

reset.addEventListener("click", resetScores) ;