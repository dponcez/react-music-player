import React from 'react'
import { ReactSVG } from "react-svg";
import playIcon from '../../assets/icons/play-btn.svg'

const PlayButton = () => {
  return (
    <>
      <ReactSVG 
        src={playIcon}
        aria-label="icon play"
        role="icon"
        aria-describedby="icon play"/>
    </>
  )
}

export { PlayButton }