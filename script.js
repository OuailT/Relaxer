const text = document.getElementById('text');
const container = document.getElementById('container');


//Variables
const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation () {
    text.innerText = 'Breath in';
    container.className = 'container grow';

    setTimeout( () => {
        text.innerText = 'hold';

        setTimeout( () => {
        text.innerText = 'BreathOut';
        container.className = 'container shrink';
    }, holdTime);
    },breathTime);
}

setInterval(breathAnimation, totalTime);



//Auto play for Chrome
const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (!isChrome){
      $('#iframeAudio').remove()
  }
  else {
      $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
  }

