// function play(){
//    const homeScreen = document.getElementById('home');
//    homeScreen.classList.add('hidden');

//    const playgroundScreen = document.getElementById('play-ground');
//    playgroundScreen.classList.remove('hidden')
// }

function handleKeyboardKeyupEvent(event){
    const playerPressed = event.key;

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if(playerPressed === expectedAlphabet){
        console.log('you get a point');

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);



// ---------------------------------------------------------------------------------
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        //  const newScore = currentScore + 1;
        //  currentScoreElement.innerText = newScore;

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed. you lost life');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);


    // ================================================================
    //     const currentLifeElement = document.getElementById('current-life');
    //     const currentLifeText = currentLifeElement.innerText;
    //     const currentLife = parseInt(currentLifeText);

    //     const newLife = currentLife - 1;
    //     currentLifeElement.innerText = newLife;
    }
}
document.addEventListener('keyup', handleKeyboardKeyupEvent);



function continueGame(){
    const alphabet = getARandomAlphabet(); 
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home');
    showElementById('play-ground');
    continueGame();
}