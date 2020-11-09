let MAX_NUMBER = 200
let MIN_NUMBER = 100


let guesses = 1;

let guess;

let isBot;

document.getElementById("instructions").innerHTML = `Think of a number between ${MIN_NUMBER} and ${MAX_NUMBER}`;

document.getElementById('too-high-btn').addEventListener('click', function () {
    MAX_NUMBER = guess;
    setGuess();
    log();
    setMessage(`Is it ${Math.floor(guess)}?`);
});

document.getElementById('too-low-btn').addEventListener('click', function () {
    MIN_NUMBER = guess;
    setGuess();
    log();
    setMessage(`Is it ${Math.floor(guess)}?`);
});

document.getElementById("correct-btn").addEventListener("click", function () {
    setMessage(`Well played, the correct nummber was ${guess} and ${guesses} guesses where required`);
});

function setMessage(msg) {
    document.getElementById('message').innerText = msg;
}

function start() {
    document.getElementById('before-start').style.display = 'none';
    document.querySelector('main').style.display = 'block';

    guess = MIN_NUMBER + (MAX_NUMBER - MIN_NUMBER)/2;

    setMessage(`Is it ${guess}?`)
}

function bot() {
    document.getElementById('before-start').style.display = 'none';
    document.querySelector('main').style.display = 'block';

    guess = MIN_NUMBER + (MAX_NUMBER - MIN_NUMBER)/2;

    setMessage(`Is it ${guess}?`)
    isbot = true;
}

function setGuess () {
    guess = MIN_NUMBER + (MAX_NUMBER - MIN_NUMBER)/2;
    guesses += 1;
    log();
}


function log() {
    console.log(MAX_NUMBER,MIN_NUMBER,guess);
}

function random(min,max) {
    return Math.round(Math.random() * (max - min) + min);
}



if(isbot === true){

    const number = random(MIN_NUMBER,MAX_NUMBER);

    console.log(number);

    document.setInterval(() => {
    
    }, 1000);
}


document
    .getElementById('start-btn')
    .addEventListener('click', start);

document
    .getElementById('bot')
    .addEventListener('click', bot);



//Parameter
//Hur lång tid det tar med random?
//vad menas med godtyckligt intervall?
//Om det hemliga talet är mellan 0 och 16, hur många gissningar behövs i snitt vid binär sökning?
//Om det hemliga talet är mellan 0 och 1024, hur många gissningar behövs i snitt vid binär sökning? Ledtråd