import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPauseCircle } from '@fortawesome/free-solid-svg-icons';

const PauseButton = () => {
  return (
    <>
      <FontAwesomeIcon
        icon={faPauseCircle}
        aria-label="icon pause"
        role="icon"
        aria-describedby="icon pause"/>
    </>
  )
}

export { PauseButton }