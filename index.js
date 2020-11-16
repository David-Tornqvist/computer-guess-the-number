let MAX_NUMBER = 100
let MIN_NUMBER = 0

const number = random(MIN_NUMBER,MAX_NUMBER);
    
console.log(number);


let guesses = 1;

let guess;

let bot = false;



document.getElementById("instructions").innerHTML = `Think of a number between ${MIN_NUMBER} and ${MAX_NUMBER}`;

document.getElementById('too-high-btn').addEventListener('click', toHigh);

function toHigh (){
    console.log("test");
    MAX_NUMBER = guess;
    setGuess();
    log();
    setMessage(`Is it ${Math.floor(guess)}?`);
}

document.getElementById('too-low-btn').addEventListener('click',toLow);

function toLow () {
    console.log("test");
    MIN_NUMBER = guess;
    setGuess();
    log();
    setMessage(`Is it ${Math.floor(guess)}?`);
}

document.getElementById("correct-btn").addEventListener("click", correct);

function correct () {
    setMessage(`Well played, the correct nummber was ${Math.floor(guess)} and ${guesses} guesses where required`);
}

function setMessage(msg) {
    document.getElementById('message').innerText = msg;
}

function start() {
    document.getElementById('before-start').style.display = 'none';
    document.querySelector('main').style.display = 'block';

    guess = MIN_NUMBER + (MAX_NUMBER - MIN_NUMBER)/2;

    setMessage(`Is it ${guess}?`)

    console.log(bot);

    if(bot === true){
        window.setInterval(() => {
            console.log(guess);
            console.log(number)
            if(number === Math.floor(guess)){correct();}
            if(number > Math.floor(guess)){toLow();}
            if(number < Math.floor(guess)){toHigh();}    
        }, 1000);


    }
    

  
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





document
    .getElementById('start-btn')
    .addEventListener('click', start);






document.getElementById("bot").addEventListener("click",() => {
    if(bot === false) {
        document.getElementById("bot").innerHTML = "Bot:Enabled";
    }

    if(bot === true) {
        document.getElementById("bot").innerHTML = "Bot:Disabled";
    }

    bot = !bot;
});





//Parameter
//Hur lång tid det tar med random?
//vad menas med godtyckligt intervall?
//Om det hemliga talet är mellan 0 och 16, hur många gissningar behövs i snitt vid binär sökning?
//Om det hemliga talet är mellan 0 och 1024, hur många gissningar behövs i snitt vid binär sökning? Ledtråd