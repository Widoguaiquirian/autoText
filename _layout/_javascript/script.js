'use strict';
// ! *********** FOR LESSONS NAMES *********** //
// ? *********** FOR REGULAR COMMENTS *********** //
const text = document.querySelector('.text');
const textDefault = ' Está por venir..';
let idx = 1;
const speed = 200;

writeText();

function writeText() {
  text.innerText = textDefault.slice(0, idx);

  idx++;

  if (idx > textDefault.length) {
    text.style.animation = 'blink 1.4s ease-in infinite';
  }

  setTimeout(writeText, speed);
}
