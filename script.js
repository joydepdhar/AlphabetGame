// console.log("JavaScript add")
// function play() {
//     // console.log("Play Start now")
//     // add some hidden class on the side
//     // const homescrean = document.getElementById('HomeScreen');
//     // //console.log(homescrean.classList)
//     // homescrean.classList.add('hidden');
//     const playground = document.getElementById('play-ground')
//     // console.log(playground.classList)
//     playground.classList.remove('hidden');

// }
function play() {
    HideScreen('HomeScreen');
    ShowScreen('play-ground')
    Game();
    //addBackgroundColor();
}
function handleKeyboardUpEvent(event) {
    const playerPressed = event.key;
    //console.log(event);
    //console.log('Player Pressed', playerPressed);
    const currentAlphabet = document.getElementById('current-alphabet').innerText;
    const experctedAlphabet = currentAlphabet.toLowerCase();
    console.log(experctedAlphabet, playerPressed);
    if (experctedAlphabet === playerPressed) {
        console.log('Point Beta Point Beta');
        //Update Score;
        const CurrentScore = document.getElementById("Score").innerText;
        const currentScoreInt = parseInt(CurrentScore);
        const UpdatedScore = currentScoreInt + 1;
        console.log(UpdatedScore);
        document.getElementById("Score").innerText = UpdatedScore;
        //experctedAlphabet.toLowerCase();
        Game();
        RemoveBackgroundColor(experctedAlphabet);
        //Game();
    }
    else {
        console.log('Golod Answer Bete! Point Katam');
        const CurrentLife = document.getElementById("Life").innerText;
        const currentLifeInt = parseInt(CurrentLife);
        const UpdatedLife = currentLifeInt - 1;
        document.getElementById("Life").innerText = UpdatedLife;
        // console.log(UpdatedScore);
        if (UpdatedLife === 0) {
            HideScreen('HomeScreen');
            HideScreen('play-ground')
            ShowScreen("FinalGame")
            const FinalScore = document.getElementById("Score").innerText;
            //const Final = finalScore.parseInt(finalScore);
            console.log(FinalScore)
            document.getElementById("FinalScore").innerText = FinalScore;
            RemoveBackgroundColor(experctedAlphabet);
            document.getElementById("Life").innerText = 5;
            document.getElementById("Score").innerText = 0;
            console.log('Khela Sesh Kaka')
        }
    }

}
document.addEventListener('keyup', handleKeyboardUpEvent);
//random alphabet  generator 
function Game() {
    const alphabet = getRandomAlphabet();
    console.log('Your random alphabet: ', alphabet);
    //display random alphabet
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerHTML = alphabet;
    addBackgroundColor(alphabet);
}

//key check 
function addBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function RemoveBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
//random alphabet gen
// function getRandomAlphabet() {
//     // step-1 random alphabet gene
//     // let alphabets=['a','b','c','d','e','f','g','h','i','j','k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't','u','v','w','x','y','z'];
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
//     // console.log(alphabet);
//     const randomNumber = Math.random() * 25;
//     const roundedNumber = Math.round(randomNumber);
//     const alphabet = alphabets[roundedNumber];
//     console.log(alphabet);
//     return alphabet;
// }
// function getRandomAlphabet() {
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
//     const randomNumber = Math.random() * 25;
//     const index = Math.round(randomNumber);
//     const alphabet = alphabets[index];
//     return alphabet;
// }