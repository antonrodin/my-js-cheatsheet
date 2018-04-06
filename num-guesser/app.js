let min = 1;
let max = 10;
let winNumber = getRandomBetwinMinMax(min, max);
let attempt = 3;

console.log(winNumber);

gameUI = document.querySelector('#game');
formUI = document.querySelector('#form-number');
numUI = document.querySelector('#number');
buttonUI = document.querySelector('#guess-button');
minUI = document.querySelector('#min');
maxUI = document.querySelector('#max');

minUI.textContent = min;
maxUI.textContent = max;

formUI.addEventListener('submit', e => {
    e.preventDefault();
    if (buttonUI.textContent != "Play Again!") {
        play();
    } else {
        window.location.reload();
    }
});

function play() {
    if(numUI.value == "" || numUI.value < min || numUI.value > max) {
        updateGameUI(`Please use number between ${min} and ${max}`);
    } else {
        //Check attempt if iqual to 0 gameOver
        if(attempt != 0) {

            //Win Case
            if(numUI.value == winNumber) {
                playAgain();
                updateGameUI(`You WIN! The number is ${winNumber}`, true);
            //Next Attempt
            } else {
                attempt -= 1;
                updateGameUI(`Your number is ${numUI.value} is not corect, you have ${attempt} attempt`);
            }

        //You Lose
        } else {
            playAgain();
            updateGameUI(`You LOSE! The number is ${winNumber}`);
        }
    }
}

function updateGameUI(message, success = false) {
    color = success === true ? 'green' : 'red';
    numUI.style.borderColor = color;
    showMessage(message, color);
}

function showMessage(message, color) {
    let elem = document.createElement('p');
    elem.className = "error-message";
    elem.style.color = color;
    elem.style.fontWeight = "bold";
    elem.appendChild(document.createTextNode(message));
    gameUI.after(elem);

    setTimeout(e => {
        elem.remove();
    }, 3000);
}

function playAgain() {
    numUI.disabled = true;
    buttonUI.textContent = "Play Again!";
}

function getRandomBetwinMinMax(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}