let saldo = 200, PNL = 0, gamePlayed = 0, gameWin = 0, gameLose = 0;
const bgcolors = ['red', 'green', 'black'];

let button = document.querySelector("button")
button.addEventListener('click', main)


PNLSpan = document.getElementById("PNL");
gamePlayedSpan = document.getElementById("gamePlayed");
gameWinSpan = document.getElementById("gameWin");
gameLoseSpan = document.getElementById("gameLose");
saldoSpan = document.getElementById("saldo");
saldoSpan.innerHTML = `Saldo: ${saldo}$`


function main() {
    gamePlayed +=1;

    let inputValue = document.getElementById("textEl").value;
    let cardList = losowanie();
    results(cardList, inputValue);
}

function losowanie() {
    let cardList = []
    for(let i=0;i<=2;i++){
        let color = Math.floor(Math.random() * 3);
        let curCard= document.getElementsByClassName('cards')[i];
        cardList[i] = color;
        curCard.style.backgroundColor = bgcolors[color];
    }
    return cardList;
}

function results(cardList, inputValue) {
    let thisSame = !!cardList.reduce(function(a, b){ return (a === b) ? a : NaN; });
    if (thisSame) {
        saldo = saldo + inputValue*3;
        gameWin +=1;
        PNL+=inputValue*3;
    }
    else {
        saldo -= inputValue;
        gameLose +=1;
        PNL-=inputValue;
    }
    isSaldoCorrect();

    saldoSpan.innerHTML = `Saldo: ${saldo}$`
    gamePlayedSpan.innerHTML = `Rozegrane gry: ${gamePlayed}`
    gameWinSpan.innerHTML = `Wygrane: ${gameWin}`
    gameLoseSpan.innerHTML = `Przegrane: ${gameLose}`
    PNLSpan.innerHTML = `PNL: ${PNL}$`
}

function isSaldoCorrect() {
    if (saldo<=0) {
        button.disabled = true;
        saldo = 0;
    }
}