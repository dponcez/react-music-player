import React from 'react'
import { ReactSVG } from "react-svg";
import soundOff from "../../assets/icons/sound-off.svg"

const SoundOff = () => {
  return (
    <>
      <ReactSVG
        src={soundOff}
        aria-label="icon sound off"
        role="icon"
        aria-describedby="icon sound off"
      />
    </>
  );
}

export { SoundOff }