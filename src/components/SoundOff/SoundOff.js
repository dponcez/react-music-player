import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeOff } from "@fortawesome/free-solid-svg-icons";

const SoundOff = () => {
  return (
    <>
      <FontAwesomeIcon
        src={faVolumeOff}
        aria-label="icon sound off"
        role="icon"
        aria-describedby="icon sound off"
      />
    </>
  );
}

export { SoundOff }