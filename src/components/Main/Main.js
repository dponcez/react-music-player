import React, { useContext } from 'react'
import { MusicPlayer } from '../MusicPlayer/MusicPlayer'
import { Navigation } from '../Navigation/Navigation'
import { DarkMode } from '../DarkMode/DarkMode'
import { ThemeContext } from '../Context/Context'
import darkMode from "../../assets/images/small-dark-switch.png"
import lightMode from "../../assets/images/small-light-switch.png"
import '../../styles/Main.scss'

const Main = () => {
  const [{theme}, toggleDarkMode] = useContext(ThemeContext)
  
  return (
    <div className='container'>
      <DarkMode
        mode={
          theme === 'dark' ?
          (<img src={lightMode} alt='light mode button'/>) : 
          (<img src={darkMode} alt='dark mode button'/>)
        }
        theme={theme}
        onClick={toggleDarkMode}
      />
      <div className='sub--container'>          
        <Navigation/>
      </div>
      <header className='header'>
        <h1 className='heading'>music <span>player</span></h1>
      </header>
      <MusicPlayer/>
    </div>
  )
}

export { Main }