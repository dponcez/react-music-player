import React, { useContext } from 'react';
import { useToggle } from "../../hooks/useToggle";
import { OpenNavMenu } from "../OpenNavMenu/OpenNavMenu";
import { CloseNavMenu } from "../CloseNavMenu/CloseNavMenu";
import { MusicPlayer } from '../MusicPlayer/MusicPlayer';
import { Navigation } from '../Navigation/Navigation';
import { DarkMode } from '../DarkMode/DarkMode';
import { ThemeContext } from '../Context/Context';
import darkMode from "../../assets/images/small-dark-switch.png";
import lightMode from "../../assets/images/small-light-switch.png";
import '../../styles/Main.scss';

const Main = () => {
  const [{theme}, toggleDarkMode] = useContext(ThemeContext);
  const [toggle, setToggle] = useToggle(false);
  const active = toggle ? <CloseNavMenu /> : <OpenNavMenu />;
  const Theme = theme === 'dark' ? 
        (<img src={lightMode} alt="light mode button" />) : 
        (<img src={darkMode} alt="dark mode button" />) 
  
  return (
    <div className="container">
      <DarkMode mode={Theme} theme={theme} onClick={toggleDarkMode} />
      <div className="nav--container">
        <Navigation 
          state={active}
          onClick={setToggle} 
          className={toggle ? "Nav active--nav" : "Nav"}
        />
      </div>
      <header className="header">
        <h1 className="heading">
          music<span>player</span>
        </h1>
      </header>
      <MusicPlayer />
    </div>
  );
}

export { Main }