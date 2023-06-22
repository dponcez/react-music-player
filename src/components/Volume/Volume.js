import React from 'react'
import { ControlButton } from '../ControlButton/ControlButton'

const Volume = ({max, value, state, onClick, onChange}) => {
  return (
    <div className="volume--container" role="volume and slider container">
      <ControlButton
        className="static--color mute--btn btn btn--medium"
        data-mute="mute"
        title="Mute Sound"
        aria-describedby="mute button"
        onClick={onClick}
        state={state}
      />
      <input
        type="range"
        className="slider"
        min="0"
        max={max}
        value={value}
        step="1"
        onChange={onChange}
      />
    </div>
  );
}

export { Volume }