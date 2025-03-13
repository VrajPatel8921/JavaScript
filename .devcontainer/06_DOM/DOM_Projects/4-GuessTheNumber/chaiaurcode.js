let randomNumber=Math.floor(Math.random()*100 + 1);

let submit=document.querySelector('#subt');
let userField=document.querySelector("#guessField");
let guessSlot=document.querySelector(".guesses");
let remaining=document.querySelector(".lastResult");
let lowOrHi=document.querySelector(".lowOrHi");
let startOver=document.querySelector(".resultParas");

let p=document.createElement('p');
let prevGuess=[];
let numGuess=1;

let playGame=true;

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        let guess=parseInt(userField.value);
        validateNumber(guess);
    })
}

const validateNumber=(guess)=>{
    if(isNaN(guess)|| guess<1 || guess>100){
        alert("Enter Valid Number");
    }
    else{
        prevGuess.push(guess);
        if(numGuess==11){
            displayGuess(guess);
            dispalyMessage(`Gameover. Random Number Was ${randomNumber} `);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

const checkGuess=(guess)=>{
    if(guess==randomNumber){
        dispalyMessage(`Your Guess ${guess} Is Right`);
        endGame();
    }
    else if(guess<randomNumber){
        dispalyMessage("Guess Number Is Too Low");
    }
    else if(guess>randomNumber){
        dispalyMessage("Guess Number Is Too High");
    }
}

const displayGuess=(guess)=>{
    userField.value='';
    guessSlot.innerHTML+=`${guess} `;
    numGuess++;
    remaining.innerHTML=`${10-numGuess}`;
}

const dispalyMessage=(message)=>{
    lowOrHi.innerHTML=`<h2>${message}<h2/>`
}

const endGame=()=>{
    userField.value='';
    userField.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start New Game<h2/>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();

}
const newGame=()=>{
    let newGameButton=document.querySelector('#newGame');
    newGameButton.addEventListener('click',(e)=>{
        randomNumber=Math.floor(Math.random()*100 + 1);
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML='';
        remaining.innerHTML=`${10-numGuess}`;
        userField.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;
    })
}