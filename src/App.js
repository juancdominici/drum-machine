import React from "react";
import "./App.css";
import boom from './sounds/boom.wav';
import clap from './sounds/clap.wav';
import hihat from './sounds/hihat.wav';
import kick from './sounds/kick.wav';
import openhat from './sounds/openhat.wav';
import ride from './sounds/ride.wav';
import snare from './sounds/snare.wav';
import tink from './sounds/tink.wav';
import tom from './sounds/tom.wav';

function DrumMachine() {
  return (
    <div className="drum-machine">
      <div className="display"></div>
      <div className='container'>
        <Key keycode='81' index='0' kbd='Q' src={clap} name='clap'/>
        <Key keycode='87' index='1' kbd='W' src={hihat} name='hi-hat'/>
        <Key keycode='69' index='2' kbd='E' src={kick} name='kick'/>
        <Key keycode='65' index='3' kbd='A' src={openhat} name='openhat'/>
        <Key keycode='83' index='4' kbd='S' src={boom} name='boom'/>
        <Key keycode='68' index='5' kbd='D' src={ride} name='ride'/>
        <Key keycode='90' index='6' kbd='Z' src={snare} name='snare'/>
        <Key keycode='88' index='7' kbd='X' src={tom} name='tom'/>
        <Key keycode='67' index='8' kbd='C' src={tink} name='tink'/>
      </div>
    </div>
  );
}

function Key(props){
  //plays on click
  function playSound() {
    const audio = document.getElementsByClassName(`clip`)[props.index];

    console.log(audio);
    audio.currentTime = 0;
    audio.play();
  }

  //plays on keydown
  function onKey(e) {
    const audio = document.querySelector(`audio[data-keycode="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-keycode="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  window.addEventListener('keydown', onKey);
  
  return(
    <div data-keycode={props.keycode} id={props.name} className='drum-pad'>
      <button onClick={playSound}>
        {props.kbd}
          <audio data-keycode={props.keycode} className='clip' id={props.name} src={props.src}/>
      </button>
    </div>
  );
  
}

export default DrumMachine;
