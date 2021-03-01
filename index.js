var gameElement = document.getElementById('game');
var randomNum;
var randomInd;
var blank;
var number;
var clicked = [];



function startGame() {
    blank = new Array(20);
    number = new Array(20);

    for (let i = 0; i < blank.length; i++) {
        blank[i] = "images/blank.png";

        randomNum = Math.floor((Math.random() * 10) + 1);

        if (!number[i]) {
            while (number.indexOf(`images/${randomNum}.png`) != -1) {
                randomNum = Math.floor((Math.random() * 10) + 1);
            }
            number[i] = `images/${randomNum}.png`;

            randomInd = Math.floor((Math.random() * 20));
            while (number[randomInd] && i < number.length - 1) {
                randomInd = Math.floor((Math.random() * 20));
            }
            number[randomInd] = number[i];
        }
    }

    gameElement.innerHTML = "";
    for (let i = 0; i < blank.length; i++) {
        gameElement.innerHTML += `<img id=${i} onclick="changeThis(${i})" style="display:inline" class="p-1 w-25" src=${blank[i]}>`
        gameElement.innerHTML += `<img id=${i + blank.length} onclick="changeThis(${i + blank.length})" style="display:none" class="p-1 w-25" src=${number[i]}>`
    }

}

function changeThis(_id) {
    if (_id < blank.length) {
        document.getElementById(_id).style.display = "none";
        document.getElementById(`${_id + blank.length}`).style.display = "inline";
        clicked.push(_id);
        if (clicked.length == 2) {
            if (number[clicked[0]] != number[clicked[1]]) {
                gameElement.style.pointerEvents = "none";
                setTimeout(() => {
                    document.getElementById(`${clicked[0] + blank.length}`).style.display = "none";
                    document.getElementById(clicked[0]).style.display = "inline";
                    document.getElementById(`${clicked[1] + blank.length}`).style.display = "none";
                    document.getElementById(clicked[1]).style.display = "inline";
                    clicked.length = 0;
                    gameElement.style.pointerEvents = "auto";
                }, 600)
            }
            else{
                clicked.length = 0;
            }
        }
    }
}