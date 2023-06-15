import React from 'react'
import { ReactSVG } from 'react-svg'
import pauseIcon from '../../assets/icons/pause-btn.svg'

const PauseButton = () => {
  return (
    <>
      <ReactSVG 
        src={pauseIcon} 
        aria-label="icon pause"
        role="icon"
        aria-describedby="icon pause"/>
    </>
  )
}

export { PauseButton }