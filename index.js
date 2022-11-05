// simple java script for music play and pause
const audio = document.querySelector('#audio-play')
const playbtn = document.querySelector("#play-btn")
 playbtn.addEventListener('click',playAudio())
function playAudio(){
  if(audio.paused){
    audio.play();
    playbtn.src ='pause.png';
  }
  else{
   audio.pause()
   playbtn.src ='play.png'
  }
}