import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const PlayButton = () => {
  return (
    <>
      <FontAwesomeIcon 
        icon={faPlayCircle}
        aria-label="icon play"
        role="icon"
        aria-describedby="icon play"/>
    </>
  )
}

export { PlayButton }