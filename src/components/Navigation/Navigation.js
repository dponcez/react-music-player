import React from 'react';
import { ControlButton } from "../ControlButton/ControlButton";
import '../../styles/NavMenu.scss';

const Navigation = ({state, onClick, className}) => {
  
  const navMenu = ['home', 'about', 'history', 'contact'];

  return (
    <nav className={className}>
      <ControlButton 
        state={state} 
        onClick={onClick}
        className="toggle--nav"
      />
      <ul className="Nav--menu">
        <li className="Nav--menu__list">
          <a className="Nav--menu__link" href="#">
            {navMenu[0]}
          </a>
        </li>
        <li className="Nav--menu__list">
          <a className="Nav--menu__link" href="#">
            {navMenu[1]}
          </a>
        </li>
        <li className="Nav--menu__list">
          <a className="Nav--menu__link" href="#">
            {navMenu[2]}
          </a>
        </li>
        <li className="Nav--menu__list">
          <a className="Nav--menu__link" href="#">
            {navMenu[3]}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export { Navigation }