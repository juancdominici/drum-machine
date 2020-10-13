import React from "react";
import "./App.css";
const boom =
  "https://res.cloudinary.com/juancdominici/video/upload/v1602613605/boom_jn5xpp.wav";
const clap =
  "https://res.cloudinary.com/juancdominici/video/upload/v1602613605/clap_rhpwgi.wav";
const hihat =
  "https://res.cloudinary.com/juancdominici/video/upload/v1602613605/hihat_gytfxf.wav";
const kick =
  "https://res.cloudinary.com/juancdominici/video/upload/v1602613605/kick_tydovs.wav";
const openhat =
  "https://res.cloudinary.com/juancdominici/video/upload/v1602613605/openhat_ofoldz.wav";
const ride =
  "https://res.cloudinary.com/juancdominici/video/upload/v1602613606/ride_qaymwz.wav";
const snare =
  "https://res.cloudinary.com/juancdominici/video/upload/v1602613605/snare_e6whew.wav";
const tink =
  "https://res.cloudinary.com/juancdominici/video/upload/v1602613605/tink_inhrhs.wav";
const tom =
  "https://res.cloudinary.com/juancdominici/video/upload/v1602613606/tom_d6zmvw.wav";


function DrumMachine() {
  return (
    <div id="drum-machine">
      <div id="container">
        <Key keycode="81" index="0" kbd="Q" src={clap} name="clap" />
        <Key keycode="87" index="1" kbd="W" src={hihat} name="hi-hat" />
        <Key keycode="69" index="2" kbd="E" src={kick} name="kick" />
        <Key keycode="65" index="3" kbd="A" src={openhat} name="openhat" />
        <Key keycode="83" index="4" kbd="S" src={boom} name="boom" />
        <Key keycode="68" index="5" kbd="D" src={ride} name="ride" />
        <Key keycode="90" index="6" kbd="Z" src={snare} name="snare" />
        <Key keycode="88" index="7" kbd="X" src={tom} name="tom" />
        <Key keycode="67" index="8" kbd="C" src={tink} name="tink" />
      </div>
      <div id="display" data-src="">
        <p>Pad:</p>
        <p id="info"></p>
      </div>
    </div>
  );
}

function Key(props) {
  //plays on keydown
  function onKey(e) {
    const audio = document.querySelector(`audio[data-keycode="${e.keyCode}"]`);
    if (!audio) return;

    const display = document.getElementById("info");
    const keycodes = {
      81: "Q",
      87: "W",
      69: "E",
      65: "A",
      83: "S",
      68: "D",
      90: "Z",
      88: "X",
      67: "C",
    };
    const kcd = e.keyCode;
    display.innerHTML = `${keycodes[kcd]}`;

    audio.currentTime = 0;
    audio.play();
  }

  window.addEventListener("keydown", onKey);

  //plays on click
  function playSound(e) {
    const audio = document.getElementsByClassName(`clip`)[props.index];
    if (!audio) return;

    const display = document.getElementById("info");
    display.innerHTML = `${props.kbd}`;

    audio.currentTime = 0;
    audio.play();
  }

  return (
    <div
      data-keycode={props.keycode}
      id={props.name}
      className="drum-pad"
      onClick={playSound}
    >
      <button>
        {props.kbd}
        <audio
          data-keycode={props.keycode}
          className="clip"
          id={props.kbd}
          src={props.src}
        />
      </button>
    </div>
  );
}

export default DrumMachine;
