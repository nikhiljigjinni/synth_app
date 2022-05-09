// // create web audio api context
// const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// // create Oscillator node
// const oscillator = audioCtx.createOscillator();

// oscillator.type = 'square';
// oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz
// oscillator.connect(audioCtx.destination);
// oscillator.start();
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App.js"


const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App audioCtx={audioCtx}/> 
  </React.StrictMode>
);