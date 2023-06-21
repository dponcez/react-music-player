import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

const SoundOn = () => {
  return (
    <>
      <FontAwesomeIcon
        icon={faVolumeHigh}
        aria-label="icon sound on"
        role="icon"
        aria-describedby="icon sound on"
      />
    </>
  );
}

export { SoundOn }