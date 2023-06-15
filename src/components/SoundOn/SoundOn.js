import React from 'react'
import { ReactSVG } from "react-svg";
import soundOn from "../../assets/icons/sound-on.svg";

const SoundOn = () => {
  return (
    <>
      <ReactSVG
        src={soundOn}
        aria-label="icon sound on"
        role="icon"
        aria-describedby="icon sound on"
      />
    </>
  );
}

export { SoundOn }