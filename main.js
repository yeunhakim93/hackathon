// console.log("hihi");
// const test = document.createElement('div');
// test.innerHTML =  "HII";
// console.log(document)
// document.querySelector('body').appendChild(test);
document.querySelector('body').setAttribute('z-index', '-1');

const audioNames = ["ahh", "beautiful", "boogy", "cool", "groovy-high", "groovy"]
const audioArr = []
for (let i = 0; i < audioNames.length; i++){
  audioArr.push (new Audio(chrome.runtime.getURL('./audio/'+audioNames[i]+'.mp3')));
}

//create michael img
const michaelX = document.createElement('div');
michaelX.className = "michael-x";
const michaelY = document.createElement('div');
michaelY.className = "michael-y";
const michaelImg = document.createElement('img');
michaelImg.className = "michael-img";
// michaelImg.src = "chrome-extension://ajbjapkoomcfefnmpjohpgklchgoblmb/michael.png";
michaelImg.src = chrome.runtime.getURL("./michael.png");

//add audio functionality to michael img
michaelImg.addEventListener('click', event => {
  audioArr[Math.floor(Math.random() * (5))].play();
});

//append michael img
michaelY.appendChild(michaelImg);
michaelX.appendChild(michaelY);
document.querySelector('body').insertBefore(michaelX, document.querySelector('body').firstChild);

// document.addEventListener('DOMContentLoaded', () => {

//   //create an array of audio
//   const audioNames = ["ahh", "beautiful", "boogy", "cool", "groovy-high", "groovy"]
//   const audioArr = []
//   for (let i = 0; i < audioNames.length; i++){
//     audioArr.push (new Audio(chrome.runtime.getURL('./audio/'+audioNames[i]+'.mp3')));
//   }
  
//   //create michael img
//   const michaelX = document.createElement('div');
//   michaelX.className = "michael-x";
//   const michaelY = document.createElement('div');
//   michaelY.className = "michael-y";
//   const michaelImg = document.createElement('img');
//   michaelImg.className = "michael-img";
//   // michaelImg.src = "chrome-extension://ajbjapkoomcfefnmpjohpgklchgoblmb/michael.png";
//   michaelImg.src = chrome.runtime.getURL("./michael.png");

//   //add audio functionality to michael img
//   michaelImg.addEventListener('click', event => {
//     audioArr[Math.floor(Math.random() * (5))].play();
//   });

//   //append michael img
//   michaelY.appendChild(michaelImg);
//   michaelX.appendChild(michaelY);
//   document.querySelector('body').appendChild(michaelX);
    
// });

// const s = document.createElement('script');
// s.src = chrome.runtime.getURL('./main.js');
// s.onload = function() {
//     this.remove();
// };
// (document.head || document.documentElement).appendChild(s);


