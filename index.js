//Create the audio tag
var soundFile = document.createElement("audio");
soundFile.preload = "auto";

//Load the sound file (using a source element for expandability)
fileName = 'song'
var src = document.createElement("source");
src.src = fileName + ".mp3";
soundFile.appendChild(src);

//Load the audio tag
//It auto plays as a fallback
soundFile.load();
soundFile.volume = 0.1;
soundFile.play();

volume = 0.2

//Plays the sound
function play() {
    //Set the current time for the audio file to the beginning
    soundFile.currentTime = 0.01;
    soundFile.volume = volume;

    //Due to a bug in Firefox, the audio needs to be played after a delay
    setTimeout(function () { soundFile.play(); }, 1);
}
document.querySelector('h3').innerText = fileName

play()