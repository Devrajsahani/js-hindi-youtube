const Randomnumber=parseInt(Math.random() *100 + 1);

const submit = document.querySelector('#submit');
const userinput = document.querySelector('#guessfield');
const guesslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastslot');
const loworhi = document.querySelector('.loworhi');
const startover = document.querySelector('.resultparas');

const p = document.createElement('p');

let prevguess =[]
let numguess = 1;

let playgame= true;

if(playgame==true){
    submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess= parseInt(Event);
    console.log(guess);
    validateguess(guess);

});

function validateguess(guess){
    if(NaN (guess)){
        alert('Please add a valid number')
    }
    else if(guess<1){
        alert('Please enter a valid number')
    }
    else if (guess>100){
        alert('Please enter a valid number')
    }
    else{
        prevguess.push(guess)
        if(numguess==11){
            displayguess(`game over, random number was ${Randomnumber}`)
            endGame()

        }
    }
  
}

function checkguess(guess){
    if(Randomnumber==guess){
        displaymessage(`You have guessed the number right, and your score is ${guess}`)
    }
    else if(guess<Randomnumber){
        displaymessage('the number is lesser than what you have entered')
    }
    else if(guess>Randomnumber{
        displaymessage('the number is higher than what you have entered')
    }
    else{
        endGame();
    }

}

function displaymessage(guess){
    //

}
function displayguess(guess){
    userinput.value='';
    guesslot.innerHTML+=`${guess};   `;
    numguess++;
    remaining.innerHTML=`${11- numguess},  `;
}
function endgame(){
    userinput.value =''
    userinput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start new game </h2>`;
    startover.appendChild(p);
    


}
