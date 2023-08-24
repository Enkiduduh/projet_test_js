const diceThrow = 1 + Math.floor(Math.random() * 6);
let score = 0 ;


let cardTest = document.querySelector("#cardtest img");
console.log(cardTest);


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

  console.log(audio);


  audio.addEventListener("loadeddata", function() {
    console.log("Audio data loaded");
    let duration = audio.duration;
    console.log(duration);
    let minutes = Math.floor(audio.duration / 60);
    let rest = Math.floor(audio.duration % 60);
    let track =`${minutes}:${rest}`;
    console.log(minutes);
    console.log(rest);
    console.log(track);

   });
