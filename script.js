const diceThrow = 1 + Math.floor(Math.random() * 6);
let score = 0 ;

let cardTest = document.querySelector("#cardtest img");

let testJs = document.querySelector(".activités-card");

testJs.addEventListener("click", testFunction);

function testFunction() {
     testJs.classList.toggle("red");
  }


  const audio = document.querySelector("audio");
  const pause = document.querySelector("#pause");
  const arret = document.querySelector("#arret");
  const lecture = document.querySelector("#lecture");
  const retourRapide = document.querySelector("#retour-rapide");
  const avanceRapide = document.querySelector("#avance-rapide");
  const son = document.querySelector("#son");
  const sonMuted = document.querySelector("#son-muted");
  const track = document.querySelector("#track");
  const elapsedTime = document.querySelector("#elapsed-time");
  const trackTime = document.querySelector("#track-time");
  const volume = document.querySelector("#volume");
  const volumeValue = document.querySelector("#volumeValue");

  let duration = document.querySelector("audio").duration;

  /*
setTimeout(() => {
  let duration = document.querySelector("audio").duration;
  duree = console.log(duration);
}, 100);
*/





  function buildDuration(duration) {
    let minutes = Math.floor(duration / 60);
    let rest = duration % 60;
    let secondes = Math.floor(rest);
    secondes = String(secondes).padStart(2, "0");
    return minutes + ":" + secondes;
  }

trackTime.textContent = buildDuration(duration);

console.log(duration);


son.addEventListener("click", function(){
      this.setAttribute("src","image/icon/muet.png");
      audio.volume = 0;
      volumeValue.textContent = 0 +"%";
      volume.value = 0;
});

/*
son.addEventListener("click", function(){
  this.setAttribute("src","image/icon/du-son.png");
  audio.volume = volume.value;

});
*/




//RETOUR RAPIDE +10sec
avanceRapide.addEventListener("click", function(){
  audio.currentTime += 10;
});

//RETOUR RAPIDE -10sec
retourRapide.addEventListener("click", function(){
  audio.currentTime -= 10;
});

//SUIVI DE LECTURE TEMPS REEL
audio.addEventListener("timeupdate", function(){
    track.value = this.currentTime;
    elapsedTime.textContent = buildDuration(this.currentTime);
});

// TRACKING DE L'AVANCEE DU MP3/WAV/OGG
track.addEventListener("input", function(){
    elapsedTime.textContent = buildDuration(this.value);
    audio.currentTime = this.value;
});

//BARRE DE VOLUME
volume.addEventListener("input", function () {
    audio.volume = this.value;
    volumeValue.textContent = this.value * 100 + "%";
    if (audio.volume === 0) {
      son.setAttribute("src","image/icon/muet.png");
    } else {
      son.setAttribute("src","image/icon/du-son.png");
    }
});


// BOUTON PLAY
lecture.addEventListener("click", function() {
    audio.play();
    audio.volume = volume.value;
  });

// BOUTON PAUSE
pause.addEventListener("click", function() {
  audio.pause();
});

// BOUTON STOP
arret.addEventListener("click", function() {
    audio.pause();
    audio.currentTime = 0;
  });



  /*

document.getElementById("track-time").innerHTML = trackDuration;



  // RECUPERATION DE LA DUREE DE LA CHANSON
/*
  function buildDuration() {
    let duration = audio.duration;
    let minutes = Math.floor(duration / 60);
    let rest = duration % 60;
    let secondes = Math.floor(rest);
    secondes = String(secondes).padStart(2, "0");
    let trackDuration = minutes + ":" + secondes;
    document.getElementById("track-time").innerHTML = trackDuration;

  }

*/
