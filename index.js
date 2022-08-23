// Random number generator and dice displayer codes >>>>>>>>>>>>>
// -- player
let playerRandomNo = Math.random();
playerRandomNo = Math.floor(playerRandomNo * 6 + 1);

let playerDiceImg = document.querySelector('.img1');
let imgSrc = 'images/dice' + playerRandomNo + '.png';

playerDiceImg.setAttribute('src', imgSrc);

// --computer
let compRandomNo = Math.random();
compRandomNo = Math.floor(compRandomNo * 6 + 1);

let compDiceImg = document.querySelector('.img2');
let cImgSrc = 'images/dice' + compRandomNo + '.png';

compDiceImg.setAttribute('src', cImgSrc);

// winner deciding code...
let title = document.querySelector('.alert h2');
if (playerRandomNo > compRandomNo) {
  title.textContent = 'You win! 🥳';
} else if (playerRandomNo === compRandomNo) {
  title.textContent = 'Draw 😶';
} else {
  title.textContent = 'Computer wins! 😥';
}
