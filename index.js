let audioPosition = 0
let playig = false
let playFor = .50;
let audio = new Audio("audio/surprise.mp3");

// To use Song/Audio from Online, Just pass the Link!
// let audio = new Audio("https://www.soundboard.com/track/download/156453");

let forAndroid = document.getElementById("forAndroid");

function checkDevice() {
  var isAndroid = /Android/i.test(navigator.userAgent);

  if (isAndroid) {
    forAndroid.style.display = "block"
    document.getElementById("typeWhere").innerText = "the Box"
  } else {
    forAndroid.style.display = "none"
  }

}


function playSong() {
  if (playig == true) {
    return
  }

  audio.currentTime = audioPosition;
  audio.play();
  playig = true;

  setTimeout(function() {
    audio.pause()
    audioPosition += playFor;
    playig = false
  }, (playFor * 1000));
}


forAndroid.addEventListener("input", (e) => {
  e.target.value = ""
})
checkDevice()
window.addEventListener("keydown", (e) => {
  playSong()
})