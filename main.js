console.log("hihi");

document.addEventListener('DOMContentLoaded', () => {

  //create an array of audio
  const audioNames = ["ahh", "beautiful", "boogy", "cool", "groovy-high", "groovy"]
  const audioArr = []
  for (let i = 0; i < audioNames.length; i++){
    audioArr.push (new Audio('./audio/'+audioNames[i]+'.mp3'));
  }

  // console.log(audioArr)
  // audioArr[0].play();



  //create michael img
  const michaelX = document.createElement('div');
  michaelX.className = "michael-x";
  const michaelY = document.createElement('div');
  michaelY.className = "michael-y";
  const michaelImg = document.createElement('img');
  michaelImg.className = "michael-img";
  michaelImg.src = "./michael.png";

  //add audio functionality to michael img
  michaelImg.addEventListener('click', event => {
    audioArr[Math.floor(Math.random() * (5))].play();
  });
  
  //append michale img
  michaelY.appendChild(michaelImg);
  michaelX.appendChild(michaelY);
  document.querySelector('body').appendChild(michaelX);
  
  
});


