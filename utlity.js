function HideScreen(element) {
    const screen = document.getElementById(element);
    screen.classList.add('hidden');
}
function ShowScreen(element) {
    const screen = document.getElementById(element);
    screen.classList.remove('hidden');
}
function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}