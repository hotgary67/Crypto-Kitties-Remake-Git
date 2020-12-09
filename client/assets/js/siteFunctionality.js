$(document).ready(function () {
  console.log("ready!");
});
document
  .getElementById("randomkitty")
  .addEventListener("click", randomKittyButtonClick);


function randomKittyButtonClick() {
  document.getElementById("randomkitty").innerHTML =
    "Keep <br> randomizing";
  randomHatColor();
  randomHeadColor();
  randomEyesColor();
  randomEarColor();
  randomArmsLegsColor();
  randomBellyColor();
  randomTailColor();
  randomTrunkColor();
  randomVaseColor();
  randomVaseColor();
  randomEyeVariation();
  randomDecorationNailVariation();
  randomDecorationWings();
  randomAnimationVariation();
  console.log("randomizzzeed");
}

function filterTentoHunderd() {
  let numberTenToHunderd = Math.floor(Math.random() * 90) + 10;
  return numberTenToHunderd;
}

function filterOnetoThree() {
  let numberTenToHunderd = Math.floor(Math.random() * 3) + 1;
  return numberTenToHunderd;
}

function filterOnetoFive() {
  let numberTenToHunderd = Math.floor(Math.random() * 5) + 1;
  return numberTenToHunderd;
}

function filterOnetoSix() {
  let numberTenToHunderd = Math.floor(Math.random() * 6) + 1;
  return numberTenToHunderd;
}

const target = window.document.getElementsByTagName('h1')[0]

const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*4}s linear both ">${letter}</span>`
const colorLetter = letter => `<span style="color: hsla(${Math.random()*360}, 100%, 80%, 1);">${letter}</span>`;
const flickerAndColorText = text => 
  text
    .split('')
    .map(flickerLetter)
    .map(colorLetter)
    .join('');
const neonGlory = target => target.innerHTML = flickerAndColorText(target.textContent);


neonGlory(target);
target.onclick = ({ target }) =>  neonGlory(target);

//https://codepen.io/Paulie-D/pen/FsHbd?editors=0100  dit is de link voor de image select tool

