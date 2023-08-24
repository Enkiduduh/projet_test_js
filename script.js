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
  const track = document.querySelector("#track");
  const elapsedTime = document.querySelector("#elapsed-time");
  const trackTime = document.querySelector("#track-time");
  const volume = document.querySelector("#volume");



  audio.addEventListener('loadedmetadata', () => {
    displayAudioDuration(audio.duration);
  });

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

  /*
  let duration = document.querySelector("audio").duration;
  if(duration){
      console.log("duration:"+duration);
  }
  console.log("duration:"+duration);


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



audio.addEventListener("timeupdate", function(){
    track.value = this.currentTime;
});

// BOUTON PLAY
lecture.addEventListener("click", function() {
    audio.play();
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
*/
