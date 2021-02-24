var gameElement = document.getElementById('game');
var randomNum;
var randomInd;
var blank;
var number;
var numberView;

function startGame() {
    blank = new Array(12);
    number = new Array(12);

    for (let i = 0; i < blank.length; i++) {
        blank[i] = "images/blank.png";

        randomNum = Math.floor((Math.random() * 10) + 1);

        if (!number[i]) {
            while (number.indexOf(`images/${randomNum}.png`) != -1) {
                randomNum = Math.floor((Math.random() * 10) + 1);
            }
            number[i] = `images/${randomNum}.png`;

            randomInd = Math.floor((Math.random() * 12));
            while (number[randomInd] && i < number.length - 1) {
                randomInd = Math.floor((Math.random() * 12));
            }
            number[randomInd] = number[i];
        }
    }

    gameElement.innerHTML = "";
    for (let i = 0; i < blank.length; i++){
        gameElement.innerHTML += `<img id="blk" onclick="changeDis()" style="display:inline" class="p-1 w-25" src=${blank[i]}>`
        gameElement.innerHTML += `<img id="num" onclick="changeDis()" style="display:none" class="p-1 w-25" src=${number[i]}>`
    }
   
}

function changeDis(){
    if (!numberView){
        numberView = true;
        document.getElementById["blk"].style.display = "none";
        document.getElementById["num"].style.display = "inline";
    }
    else{
        numberView = false;
        document.getElementById["num"].style.display = "none";
        document.getElementById["blk"].style.display = "inline";
    }
}