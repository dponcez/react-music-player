# React Music Player

We use React to create a simple **Music Player**, this allows us to interact with the player using its own controls or you can create your own.

NOTE: **The copyright of the audio and the cover stored in this project is under the license of its owner and/or owners and is used for the purpose of this player and not for commercial use.**

## Basics steps to create a folder project

1. Open your (*Command Line Interface*) or as we know by its acronym in English **CLI** or you can open your **Git Bash**, **CMD** or **PowerShell** window.
2. In your terminal, choose your path typing **cd**.
3. Type *cd* + *desktop*.
4. Type the following command in your terminal: *mkdir* + *name of your folder project*. This method allows us to create an empty folder in your desktop.
5. Once you chose your project path, type (*code .*) in your terminal, to open your *VSCode*.
6. Create all folders and files that you need in your project.
7. Open your *Github Account* and create a new repository.
8. In your **CLI**, **CMD**, **PowerShell** or your **Git Bash**, type *git init* to initialize a new repository *.git*.
9. In your **CLI**, **CMD**, **PowerShell** or your **Git Bash** type the following command: *npm init -y* to create a package.json file.
10. Create a *.gitignore* file.

You must include files that your project will not include in your repository:

>
    > - #dependencies
    > - #production
    > - #testing
    > - #misc
>

11. Create a *.babelrc* file.
12. Create a *webpack.config.js* file.
13. Install dependencies using **npm** or **yarn**:

>
    > - react
    > - react-dom
    > - @babel/
        - core
        - preset-react 
        - preset-env
        - plugin-transform-runtime
    > - babel-loader
    > - compress
    > - eslint-config-react-app
    > - express
    > - html-loader
    > - sass-loader
    > - file-loader
    > - html-webpack-plugin
    > - webpack-dev-server
>

14. Install development dependencies (devDependencies):

>
    > - css-loader
    > - mini-css-extract-plugin
    > - style-loader
    > - sass
    > - webpack
    > - webpack-cli
>

15. Type *npm start* to start or run your project.

## Using npx

1. Open your terminal, **CMD**, **PowerShell** or your **Git Bash** window.
2. Once in your terminal, type *cd* + *desktop*.
3. Type **npx create-next-app** and follow the steps to create your project folder, this method create automatically all folder that your project needs.
4. In your Command Prompt or *Command Line Interfaces* **CLI**, **CMD**, **PowerShell** or your **Git Bash** window, type (*code .*) without parentheses, to open your *VSCode* or *Visual Studio Code*.
5. Open your *Github Account* and create a new repository.
6. In your **CLI**, **CMD**, **PowerShell** or your **Git Bash**, type *git init* to initialize a new repository *.git*.
7. In your **CLI**, **CMD**, **PowerShell** or your **Git Bash** type the following command: *npm init -y* to create a package.json file.
8. Install dependencies that your project needs using **npm** or **yarn**:

>
    > - compress
    > - eslint-config-react-app
>

You don't need to install *react* and *react-dom* as a dependencies, because when you use *npx create-next-app*, they are automatically installed in your project.

9. Install development dependencies (devDependencies):

>
    > - @babel/
        - core
        - preset-react 
        - preset-env
        - plugin-transform-runtime
    > - babel-loader
    > - css-loader
    > - html-loader
    > - sass-loader
    > - file-loader
    > - mini-css-extract-plugin
    > - style-loader
    > - sass
>

## Initializing our project

1. Create a file :page_facing_up: *index.html* and put it in the :file_folder: public folder.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React Music Player</title>
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter&family=Play&display=swap"/>
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
```

2. We will create a folder :file_folder: src and inside this, we will include our files :page_facing_up: index.js, :page_facing_up: index.css, :page_facing_up: App.js, :page_facing_up: App.css, in addition to the folders our project, for example, the folder :file_folder: components.

The :page_facing_up: index.js or main.js file contains the code that will be rendered.

```js
//index.js

import React from 'react'
import { createRoot } from 'react-dom/client'
import App from 'App'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App/>)
```

3. Create the :page_facing_up: App.js file and import it into our :page_facing_up: index.js file, like the example above.

```js
//App.js

import React from 'react'
import MusicPlayer from '../components/MusicPlayer/MusicPlayer'

const App () => {
    return (
        <div className='App'>
            {/*Poner el archivo que se mostrará en el navegador*/}
            <MusicPlayer/>
        </div>
    )
}

export default App
```

4. We will create the :page_facing_up: MusicPlayer.js file that will be included in the :file_folder: folder that will have the same name as the file and this, at the same time, will be in the :file_folder: components folder, then we will import it in the :page_facing_up: file App.js, as in the previous example.

Note: *All :file_folder: folders that will be used in the project must go in the :file_folder: components folder*.

```js
//MusicPlayer.js

import React from 'react'

const MusicPlayer = () => {
    return (
        <figure className='figure'>
        </figure>
    )
}

export default MusicPlayer 
```

Once we have prepared our file, we will begin to include our structure, in this case, we will add the audio tag and include the attributes that it has, to create our Music Player.

For now, we'll use the *controls* attribute to display the audio's controls in the browser, then we'll delete this attribute as we'll put our control panel we're creating.

```js
//MusicPlayer.js

import React from 'react'
import audio from '../../assets/audio/audio-prueba.mp3'
import image from '.../../assets/images/image-prueba.jpg'

const MusicPlayer = () => {
    return (
        <figure className="figure">
            <div className="image--container">
                <img className="image" src={image} alt="cover"/>
            </div>
            <div className="player--container">
                <audio
                    src={audio}
                    loop={false}
                    autoPlay={false}
                    controls
                ></audio>
            </div>
        </figure>
    )
}

export default MusicPlayer
```

5. Now we will create a :file_folder: called Controls and we will put it in our Components folder and inside the Controls folder, we will include a :page_facing_up: file with the same name as the folder, in this case Controls.js, then we will import it in our MusicPlayer.js file.

```js
import React from 'react'

const Controls = ({state, onClick}) => {
    <>
        <div className="controllers" role="control player container">
            <div className="player--controls">
                <button
                    className="play btn"
                    data-prev="play"
                    title="Play/Pause"
                    aria-describedby="play button"
                    onClick={onClick}
                >{state}</button>
            </div>
        </div>
    </>
}

export default Controls
```

6. We will now update our MusicPlayer.js file with our component.

At this point, the controls attribute is removed from the audio tag.

```js
//MusicPlayer.js

import React from 'react'
import Controls from '../components/Controls/Controls'
import audio from '../../assets/audio/audio-prueba.mp3'
import image from '../../assets/images/image-prueba.jpg'

const MusicPlayer = () => {
    return (
        <figure className="figure">
            <div className="image--container">
                <img className="image" src={image} alt="cover"/>
            </div>
            <div className="player--container">
                <audio
                    src={audio}
                    loop={false}
                    autoPlay={false}
                ></audio>
                <section className='control--panel'>
                    {/* <!-- controls --> */}
                    <div className='controls'>
                        <Controls
                            state={}
                            onClick={}
                        />
                    </div>
                </section>
            </div>
        </figure>
    )
}

export default MusicPlayer
```

7. Now we will create a function called handleTogglePlay inside our MusicPlayer.js file and link it to our Controls component, so that there is interaction with our player, we will also use React *hooks*, in this case we will use *useState*, *useEffect* and *useRef*.

```js
//MusicPlayer.js

import React, {useState, useEffect, useRef} from 'react'
import Controls from '../components/Controls/Controls'
import audio from '../../assets/audio/audio-prueba.mp3'
import image from '../../assets/images/image-prueba.jpg'

const MusicPlayer = () => {
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(()=> {

    },[audioRef.current])

    const handleTogglePlay = () => {

    }

    return (
        <figure className="figure">
            <div className="image--container">
                <img className="image" src={image} alt="cover"/>
            </div>
            <div className="player--container">
                <audio
                    src={audio}
                    loop={false}
                    autoPlay={false}
                ></audio>
                <section className='control--panel'>
                    {/* <!-- controls --> */}
                    <div className='controls'>
                        <Controls
                            state={}
                            onClick={handleTogglePlay}
                        />
                    </div>
                </section>
            </div>
        </figure>
    )
}

export default MusicPlayer
```

8. Now we will start to implement code in our handleTogglePlay function, using the React *hooks*, in this case we will have *useState* and *useEffect*, as for the audio element, we will use *useRef*, to reference the audio.

We'll also create other functions inside useEffect and use *addEventListener* to make a call to a specific element. More information about *addEventListener* go to [Mozilla Developer](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).

```js
//MusicPlayer.js

import React, {useState, useEffect, useRef} from 'react'
import Controls from '../components/Controls/Controls'
import audio from '../../assets/audio/audio-prueba.mp3'
import image from '../../assets/images/image-prueba.jpg'

const MusicPlayer = () => {
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(()=> {
        const element = audioRef.current

        // The piece of code shown below was taken from the following YouTube link: https://www.youtube.com/watch?v=Y9TL_43X3Lc&t=1444s by FullStack Mastery

        const onPlay = () => isPlaying(true)
        const onPause = () => isPlaying(false)

        element.addEventListener('play', onPlay)
        element.addEventListener('playing', onPlay)
        element.addEventListener('pause', onPause)

        return () => {
            element.removeEventListener('play', onPlay)
            element.removeEventListener('playing', onPlay)
            element.removeEventListener('pause', onPause)
        }
    },[audioRef.current])

    const handleTogglePlay = () => {
        if(!audioRef.current) return
        isPlaying ? 
            audioRef.current.pause() :
            audioRef.current.play()
    }

    return (
        <figure className="figure">
            <div className="image--container">
                <img className="image" src={image} alt="cover"/>
            </div>
            <div className="player--container">
                <audio
                    src={audio}
                    ref={audioElement}
                    loop={false}
                    autoPlay={false}
                ></audio>
                <section className='control--panel'>
                    {/* <!-- controls --> */}
                    <div className='controls'>
                        <Controls
                            state={
                                isPlaying ?
                                    'Pause' :
                                    'Play'
                            }
                            onClick={handleTogglePlay}
                        />
                    </div>
                </section>
            </div>
        </figure>
    )
}

export default MusicPlayer
```

9. Now we will create a progress bar to visualize the movement of the current task.

```js
import React from 'react'

const ProgressBar = ({value, onChange, className}) => {
  return (
    <div className="progress" data-progress="progress" role="progressbar">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={onChange}
        className={className} 
        data-progress-bar="progress--bar"/>
    </div>
  )
}

export { ProgressBar }
```

10. We will import our ProgressBar component into our MusicPlayer and use it in our structure, in the section tag with the class name 'panel--controls'.

```js
//MusicPlayer.js

import React, {useState, useEffect, useRef} from 'react'
import Controls from '../components/Controls/Controls'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import audio from '../../assets/audio/audio-prueba.mp3'
import image from '../../assets/images/image-prueba.jpg'

const MusicPlayer = () => {
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(()=> {
        const element = audioRef.current

        // The piece of code shown below was taken from the following YouTube link: https://www.youtube.com/watch?v=Y9TL_43X3Lc&t=1444s by FullStack Mastery

        const onPlay = () => isPlaying(true)
        const onPause = () => isPlaying(false)

        element.addEventListener('play', onPlay)
        element.addEventListener('playing', onPlay)
        element.addEventListener('pause', onPause)

        return () => {
            element.removeEventListener('play', onPlay)
            element.removeEventListener('playing', onPlay)
            element.removeEventListener('pause', onPause)
        }
    },[audioRef.current])

    const handleTogglePlay = () => {
        if(!audioRef.current) return
        isPlaying ? 
            audioRef.current.pause() :
            audioRef.current.play()
    }

    return (
        <figure className="figure">
            <div className="image--container">
                <img className="image" src={image} alt="cover"/>
            </div>
            <div className="player--container">
                <audio
                    src={audio}
                    ref={audioElement}
                    loop={false}
                    autoPlay={false}
                ></audio>
                <section className='control--panel'>
                    <ProgressBar
                        className="progress--bar"
                        onChange={}
                        value={}
                    />
                    {/* <!-- controls --> */}
                    <div className='controls'>
                        <Controls
                            state={
                                isPlaying ?
                                    'Pause' :
                                    'Play'
                            }
                            onClick={handleTogglePlay}
                        />
                    </div>
                </section>
            </div>
        </figure>
    )
}

export default MusicPlayer
```

11. Now we will create a function that handle our current progress, like the example below.

```js
//MusicPlayer.js

import React, {useState, useEffect, useRef} from 'react'
import Controls from '../components/Controls/Controls'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import audio from '../../assets/audio/audio-prueba.mp3'
import image from '../../assets/images/image-prueba.jpg'

const MusicPlayer = () => {
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0)

    useEffect(()=> {
        const element = audioRef.current

        // The piece of code shown below was taken from the following YouTube link: https://www.youtube.com/watch?v=Y9TL_43X3Lc&t=1444s by FullStack Mastery

        const onPlay = () => isPlaying(true)
        const onPause = () => isPlaying(false)

        element.addEventListener('play', onPlay)
        element.addEventListener('playing', onPlay)
        element.addEventListener('pause', onPause)

        return () => {
            element.removeEventListener('play', onPlay)
            element.removeEventListener('playing', onPlay)
            element.removeEventListener('pause', onPause)
        }
    },[audioRef.current])

    const handleTogglePlay = () => {
        if(!audioRef.current) return
        isPlaying ? 
            audioRef.current.pause() :
            audioRef.current.play()
    }

    const handleProgress = (e) => {}

    return (
        <figure className="figure">
            <div className="image--container">
                <img className="image" src={image} alt="cover"/>
            </div>
            <div className="player--container">
                <audio
                    src={audio}
                    ref={audioElement}
                    loop={false}
                    autoPlay={false}
                ></audio>
                <section className='control--panel'>
                    <ProgressBar
                        className="progress--bar"
                        onChange={}
                        value={}
                    />
                    {/* <!-- controls --> */}
                    <div className='controls'>
                        <Controls
                            state={
                                isPlaying ?
                                    'Pause' :
                                    'Play'
                            }
                            onClick={handleTogglePlay}
                        />
                    </div>
                </section>
            </div>
        </figure>
    )
}

export default MusicPlayer
```

12. Now it´s time to work with our handleProgress function like so.

```js
const handleProgress = (e) => {
    const value = Number(e.target.value);
    const {duration} = audioRef.current;
    audioRef.current.currentTime = (duration / 100) * value;
    setProgress(value)
}
```

This is how it looks like our example.

```js
//MusicPlayer.js

import React, {useState, useEffect, useRef} from 'react'
import Controls from '../components/Controls/Controls'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import audio from '../../assets/audio/audio-prueba.mp3'
import image from '../../assets/images/image-prueba.jpg'

const MusicPlayer = () => {
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0)

    useEffect(()=> {
        const element = audioRef.current

        // The piece of code shown below was taken from the following YouTube link: https://www.youtube.com/watch?v=Y9TL_43X3Lc&t=1444s by FullStack Mastery

        const onPlay = () => isPlaying(true)
        const onPause = () => isPlaying(false)

        element.addEventListener('play', onPlay)
        element.addEventListener('playing', onPlay)
        element.addEventListener('pause', onPause)

        return () => {
            element.removeEventListener('play', onPlay)
            element.removeEventListener('playing', onPlay)
            element.removeEventListener('pause', onPause)
        }
    },[audioRef.current, progress])

    const handleTogglePlay = () => {
        if(!audioRef.current) return
        isPlaying ? 
            audioRef.current.pause() :
            audioRef.current.play()
    }

    const handleProgress = (e) => {
        const value = Number(e.target.value);
        const {duration} = audioRef.current;
        audioRef.current.currentTime = (duration / 100) * value;
        setProgress(value)
    }

    return (
        <figure className="figure">
            <div className="image--container">
                <img className="image" src={image} alt="cover"/>
            </div>
            <div className="player--container">
                <audio
                    src={audio}
                    ref={audioElement}
                    loop={false}
                    autoPlay={false}
                ></audio>
                <section className='control--panel'>
                    <ProgressBar
                        className="progress--bar"
                        onChange={handleProgress}
                        value={progress}
                    />
                    {/* <!-- controls --> */}
                    <div className='controls'>
                        <Controls
                            state={
                                isPlaying ?
                                    'Pause' :
                                    'Play'
                            }
                            onClick={handleTogglePlay}
                        />
                    </div>
                </section>
            </div>
        </figure>
    )
}

export default MusicPlayer
```

13. Now we'll create a handleTimeUpdate function to fire the event when the currentTime attribute has been updated.

Information about this attribute, go to [HTMLMediaElement: timeupdate event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/timeupdated_event) in Mozilla Developer Network (MDN).

```js
function handleTimeUpdate = () => {
    const {currentTime, duration} = audioRef.current;
    const progress = parsetInt(Number(currentTime / duration) * 100);
    setMediaTime(currentTime)
    setProgress(progress)
}
```

This is how our example looks like.

```js
//MusicPlayer.js

import React, {useState, useEffect, useRef} from 'react'
import Controls from '../components/Controls/Controls'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import audio from '../../assets/audio/audio-prueba.mp3'
import image from '../../assets/images/image-prueba.jpg'

const MusicPlayer = () => {
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0)
    const [mediaTime, setMediaTime] = useState(0)

    useEffect(()=> {
        const element = audioRef.current

        // The piece of code shown below was taken from the following YouTube link: https://www.youtube.com/watch?v=Y9TL_43X3Lc&t=1444s by FullStack Mastery

        const onPlay = () => isPlaying(true)
        const onPause = () => isPlaying(false)

        element.addEventListener('play', onPlay)
        element.addEventListener('playing', onPlay)
        element.addEventListener('pause', onPause)

        return () => {
            element.removeEventListener('play', onPlay)
            element.removeEventListener('playing', onPlay)
            element.removeEventListener('pause', onPause)
        }
    },[audioRef.current, progress])

    const handleTogglePlay = () => {
        if(!audioRef.current) return
        isPlaying ? 
            audioRef.current.pause() :
            audioRef.current.play()
    }

    const handleProgress = (e) => {
        const value = Number(e.target.value);
        const {duration} = audioRef.current;
        audioRef.current.currentTime = (duration / 100) * value;
        setProgress(value)
    }

    const handleTimeUpdate = () => {
        const {currentTime, duration} = audioRef.current;
        const progress = parseInt(Number(currentTime / duration) * 100);
        setMediaTime(currentTime);
        setProgress(progress)
    }

    return (
        <figure className="figure">
            <div className="image--container">
                <img className="image" src={image} alt="cover"/>
            </div>
            <div className="player--container">
                <audio
                    src={audio}
                    ref={audioElement}
                    loop={false}
                    autoPlay={false}
                    onTimeUpdate={handleTimeUpdate}
                ></audio>
                <section className='control--panel'>
                    <ProgressBar
                        className="progress--bar"
                        onChange={handleProgress}
                        value={progress}
                    />
                    {/* <!-- controls --> */}
                    <div className='controls'>
                        <Controls
                            state={
                                isPlaying ?
                                    'Pause' :
                                    'Play'
                            }
                            onClick={handleTogglePlay}
                        />
                    </div>
                </section>
            </div>
        </figure>
    )
}

export default MusicPlayer
```

14. Our example looks good, now we'll create another component called Volume like so and import it in our MusicPlayer component.

```js
import React from 'react'

const Volume = ({max, value, mode, onClick, onChange}) => {
  return (
    <div className="volume--container" role="volume and slider container">
      <button
        className="mute--btn btn btn--medium"
        data-mute="mute"
        title="Mute Sound"
        aria-describedby="mute button"
        onClick={onClick}
      >
        {mode}
      </button>
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
```

15. Now we import our Volume component to *MusicPlayer* component.

```js
//MusicPlayer.js

import React, {useState, useEffect, useRef} from 'react'
import Controls from '../components/Controls/Controls'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import Volume from '../components/Volume/Volume'
import audio from '../../assets/audio/audio-prueba.mp3'
import image from '../../assets/images/image-prueba.jpg'

const MusicPlayer = () => {
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0)
    const [mediaTime, setMediaTime] = useState(0)

    useEffect(()=> {
        const element = audioRef.current

        // The piece of code shown below was taken from the following YouTube link: https://www.youtube.com/watch?v=Y9TL_43X3Lc&t=1444s by FullStack Mastery

        const onPlay = () => isPlaying(true)
        const onPause = () => isPlaying(false)

        element.addEventListener('play', onPlay)
        element.addEventListener('playing', onPlay)
        element.addEventListener('pause', onPause)

        return () => {
            element.removeEventListener('play', onPlay)
            element.removeEventListener('playing', onPlay)
            element.removeEventListener('pause', onPause)
        }
    },[audioRef.current, progress])

    const handleTogglePlay = () => {
        if(!audioRef.current) return
        isPlaying ? 
            audioRef.current.pause() :
            audioRef.current.play()
    }

    const handleProgress = (e) => {
        const value = Number(e.target.value);
        const {duration} = audioRef.current;
        audioRef.current.currentTime = (duration / 100) * value;
        setProgress(value)
    }

    const handleTimeUpdate = () => {
        const {currentTime, duration} = audioRef.current;
        const progress = parseInt(Number(currentTime / duration) * 100);
        setMediaTime(currentTime);
        setProgress(progress)
    }

    return (
        <figure className="figure">
            <div className="image--container">
                <img className="image" src={image} alt="cover"/>
            </div>
            <div className="player--container">
                <audio
                    src={audio}
                    ref={audioElement}
                    loop={false}
                    autoPlay={false}
                    onTimeUpdate={handleTimeUpdate}
                ></audio>
                <section className='control--panel'>
                    <ProgressBar
                        className="progress--bar"
                        onChange={handleProgress}
                        value={progress}
                    />
                    <Volume
                        max='100'
                        mode={}
                        value={}
                        onChange={}
                        onClick={}
                    />
                    {/* <!-- controls --> */}
                    <div className='controls'>
                        <Controls
                            state={
                                isPlaying ?
                                    'Pause' :
                                    'Play'
                            }
                            onClick={handleTogglePlay}
                        />
                    </div>
                </section>
            </div>
        </figure>
    )
}

export default MusicPlayer
```

16. Now we create some functions to help us to handle our Volume component like so, and into our *useEffect* method we create *onMute* and *onUnMute* functions respectively and we'll fire an event as we did with our play button.

```js
const [volume, setVolume] = useState(0)
const [isMuted, setIsMuted] = useState(false)

useEffect(() => {
    const onMute = () => setIsMuted(true)
    const onUnMute = () => setIsMuted(false)

    element.addEventListener('mute', onMute)
    element.addEventListener('unmute', onUnMute)

    return () => {
        element.removeEventListener('mute', onMute)
        element.removeEventLIstener('unmute', onUnMute)
    }
} [])

const handleVolumeChange = (e) => {
    const value = Number(e.target.value);
    const volRange = value / 100;
    audioRef.current.volume = volRange;
    setVolume(value)
}

const handleVolumeMute = () => {
    if(!audioRef.current) return;

    isMuted ? 
        audioRef.current.muted = false :
        audioRef.current.muted = true
    
    setIsMute(!isMuted)
}
```

17. Now we put the example above into our MusicPlayer component like so.

```js
//MusicPlayer.js

import React, {useState, useEffect, useRef} from 'react'
import Controls from '../components/Controls/Controls'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import Volume from '../components/Volume/Volume'
import audio from '../../assets/audio/audio-prueba.mp3'
import image from '../../assets/images/image-prueba.jpg'

const MusicPlayer = () => {
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [volume, setVolume] = useState(0)
    const [progress, setProgress] = useState(0)
    const [mediaTime, setMediaTime] = useState(0)

    useEffect(()=> {
        const element = audioRef.current

        // The piece of code shown below was taken from the following YouTube link: https://www.youtube.com/watch?v=Y9TL_43X3Lc&t=1444s by FullStack Mastery

        const onPlay = () => isPlaying(true)
        const onPause = () => isPlaying(false)
        const onMute = () => setIsMuted(true)
        const onUnMute = () => setIsMuted(false)

        element.addEventListener('play', onPlay)
        element.addEventListener('playing', onPlay)
        element.addEventListener('pause', onPause)
        element.addEventListener('mute', onMute)
        element.addEventListener('unmute', onUnMute)

        return () => {
            element.removeEventListener('play', onPlay)
            element.removeEventListener('playing', onPlay)
            element.removeEventListener('pause', onPause)
            element.removeEventListener('mute', onMute)
            element.removeEventListener('unmute', onUnMute)
        }
    },[audioRef.current, progress])

    const handleTogglePlay = () => {
        if(!audioRef.current) return
        isPlaying ? 
            audioRef.current.pause() :
            audioRef.current.play()
    }

    const handleProgress = (e) => {
        const value = Number(e.target.value);
        const {duration} = audioRef.current;
        audioRef.current.currentTime = (duration / 100) * value;
        setProgress(value)
    }

    const handleTimeUpdate = () => {
        const {currentTime, duration} = audioRef.current;
        const progress = parseInt(Number(currentTime / duration) * 100);
        setMediaTime(currentTime);
        setProgress(progress)
    }

    const handleVolumeChange = (e) => {
        const value = Number(e.target.value);
        const volRange = value / 100;
        audioRef.current.volume = volRange;
        setVolume(value)
    }

    const handleVolumeMute = () => {
        if(!audioRef.current) return;
        volumeMute ?
            audioRef.current.muted = false :
            audioRef.current.muted = true
        setIsMuted(!isMuted)
    }

    return (
        <figure className="figure">
            <div className="image--container">
                <img className="image" src={image} alt="cover"/>
            </div>
            <div className="player--container">
                <audio
                    src={audio}
                    ref={audioElement}
                    loop={false}
                    autoPlay={false}
                    onTimeUpdate={handleTimeUpdate}
                ></audio>
                <section className='control--panel'>
                    <ProgressBar
                        className="progress--bar"
                        onChange={handleProgress}
                        value={progress}
                    />
                    <Volume
                        max='100'
                        mode={isMuted ? 'Unmute' : 'Mute'}
                        value={volume}
                        onChange={handleVolumeChange}
                        onClick={handleVolumeMute}
                    />
                    {/* <!-- controls --> */}
                    <div className='controls'>
                        <Controls
                            state={
                                isPlaying ?
                                    'Pause' :
                                    'Play'
                            }
                            onClick={handleTogglePlay}
                        />
                    </div>
                </section>
            </div>
        </figure>
    )
}

export default MusicPlayer
```

18. Now we change the text into our Volume and Controls components like so.

```js
//MusicPlayer.js

import React, {useState, useEffect, useRef} from 'react'
import Controls from '../components/Controls/Controls'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import Volume from '../components/Volume/Volume'
import audio from '../../assets/audio/audio-prueba.mp3'
import image from '../../assets/images/image-prueba.jpg'

const MusicPlayer = () => {
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [volume, setVolume] = useState(0)
    const [progress, setProgress] = useState(0)
    const [mediaTime, setMediaTime] = useState(0)

    useEffect(()=> {
        const element = audioRef.current

        // The piece of code shown below was taken from the following YouTube link: https://www.youtube.com/watch?v=Y9TL_43X3Lc&t=1444s by FullStack Mastery

        const onPlay = () => isPlaying(true)
        const onPause = () => isPlaying(false)
        const onMute = () => setIsMuted(true)
        const onUnMute = () => setIsMuted(false)

        element.addEventListener('play', onPlay)
        element.addEventListener('playing', onPlay)
        element.addEventListener('pause', onPause)
        element.addEventListener('mute', onMute)
        element.addEventListener('unmute', onUnMute)

        return () => {
            element.removeEventListener('play', onPlay)
            element.removeEventListener('playing', onPlay)
            element.removeEventListener('pause', onPause)
            element.removeEventListener('mute', onMute)
            element.removeEventListener('unmute', onUnMute)
        }
    },[audioRef.current, progress])

    const handleTogglePlay = () => {
        if(!audioRef.current) return
        isPlaying ? 
            audioRef.current.pause() :
            audioRef.current.play()
    }

    const handleProgress = (e) => {
        const value = Number(e.target.value);
        const {duration} = audioRef.current;
        audioRef.current.currentTime = (duration / 100) * value;
        setProgress(value)
    }

    const handleTimeUpdate = () => {
        const {currentTime, duration} = audioRef.current;
        const progress = parseInt(Number(currentTime / duration) * 100);
        setMediaTime(currentTime);
        setProgress(progress)
    }

    const handleVolumeChange = (e) => {
        const value = Number(e.target.value);
        const volRange = value / 100;
        audioRef.current.volume = volRange;
        setVolume(value)
    }

    const handleVolumeMute = () => {
        if(!audioRef.current) return;
        volumeMute ?
            audioRef.current.muted = false :
            audioRef.current.muted = true
        setIsMuted(!isMuted)
    }

    return (
        <figure className="figure">
            <div className="image--container">
                <img className="image" src={image} alt="cover"/>
            </div>
            <div className="player--container">
                <audio
                    src={audio}
                    ref={audioElement}
                    loop={false}
                    autoPlay={false}
                    onTimeUpdate={handleTimeUpdate}
                ></audio>
                <section className='control--panel'>
                    <ProgressBar
                        className="progress--bar"
                        onChange={handleProgress}
                        value={progress}
                    />
                    <Volume
                        max='100'
                        mode={isMuted ? '🔉' : '🔈'}
                        value={volume}
                        onChange={handleVolumeChange}
                        onClick={handleVolumeMute}
                    />
                    {/* <!-- controls --> */}
                    <div className='controls'>
                        <Controls
                            state={
                                isPlaying ?
                                    '⏸' :
                                    '▶'
                            }
                            onClick={handleTogglePlay}
                        />
                    </div>
                </section>
            </div>
        </figure>
    )
}

export default MusicPlayer
```

21. We are going to implement our *mediaTime* variable or current state and *setMediaTime* function from our *useState hook* like so.

```js
    const [mediaTime, setMediaTime] = useState(0)
```

20. Now we are going to implement our *duration* variable or current state and *setDuration* function from our *useState hook* like so. 

```js
    const [duration, setDuration] = useState(0)
```

21. Let´s make some changes to our code.

```js
//MusicPlayer.js

import React, {useState, useEffect, useRef} from 'react'
import Controls from '../components/Controls/Controls'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import Volume from '../components/Volume/Volume'
import audio from '../../assets/audio/audio-prueba.mp3'
import image from '../../assets/images/image-prueba.jpg'

const MusicPlayer = () => {
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [volume, setVolume] = useState(0)
    const [progress, setProgress] = useState(0)
    const [mediaTime, setMediaTime] = useState(0)
    const [duration, setDuration] = useState(0)

    useEffect(()=> {
        const element = audioRef.current

        // The piece of code shown below was taken from the following YouTube link: https://www.youtube.com/watch?v=Y9TL_43X3Lc&t=1444s by FullStack Mastery

        const onPlay = () => isPlaying(true)
        const onPause = () => isPlaying(false)
        const onMute = () => setIsMuted(true)
        const onUnMute = () => setIsMuted(false)

        element.addEventListener('play', onPlay)
        element.addEventListener('playing', onPlay)
        element.addEventListener('pause', onPause)
        element.addEventListener('mute', onMute)
        element.addEventListener('unmute', onUnMute)

        return () => {
            element.removeEventListener('play', onPlay)
            element.removeEventListener('playing', onPlay)
            element.removeEventListener('pause', onPause)
            element.removeEventListener('mute', onMute)
            element.removeEventListener('unmute', onUnMute)
        }
    },[audioRef.current, progress])

    const handleTogglePlay = () => {
        if(!audioRef.current) return
        isPlaying ? 
            audioRef.current.pause() :
            audioRef.current.play()
    }

    const handleProgress = (e) => {
        const value = Number(e.target.value);
        const {duration} = audioRef.current;
        audioRef.current.currentTime = (duration / 100) * value;
        setProgress(value)
    }

    const handleTimeUpdate = () => {
        const {currentTime, duration} = audioRef.current;
        const progress = parseInt(Number(currentTime / duration) * 100);
        setMediaTime(currentTime);
        setProgress(progress)
        setDuration(duration)
    }

    const handleVolumeChange = (e) => {
        const value = Number(e.target.value);
        const volRange = value / 100;
        audioRef.current.volume = volRange;
        setVolume(value)
    }

    const handleVolumeMute = () => {
        if(!audioRef.current) return;
        volumeMute ?
            audioRef.current.muted = false :
            audioRef.current.muted = true
        setIsMuted(!isMuted)
    }

    return (
        <figure className="figure">
            <div className="image--container">
                <img className="image" src={image} alt="cover"/>
            </div>
            <div className="player--container">
                <audio
                    src={audio}
                    ref={audioElement}
                    loop={false}
                    autoPlay={false}
                    onTimeUpdate={handleTimeUpdate}
                ></audio>
                <section className='control--panel'>
                    <ProgressBar
                        className="progress--bar"
                        onChange={handleProgress}
                        value={progress}
                    />
                    <Volume
                        max='100'
                        mode={isMuted ? '🔉' : '🔈'}
                        value={volume}
                        onChange={handleVolumeChange}
                        onClick={handleVolumeMute}
                    />
                    {/* <!-- controls --> */}
                    <div className='controls'>
                        <div className="skip--container" role="skip buttons">
                            <button onClick={handleBackward}>
                            ⏮
                            </button>
                        </div>
                        <Controls
                            state={
                                isPlaying ?
                                    '⏸' :
                                    '▶'
                            }
                            onClick={handleTogglePlay}
                        />
                        <div className="skip--container" role="skip buttons">
                            <button onClick={handleForward}>
                            ⏭
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </figure>
    )
}

export default MusicPlayer
```

22. Now, we'll work on our current length of the audio. In this section we won't create any functions, we will just call our variables *duration* and *mediaTime* and add them in our tags with class name *duration* and *current--time* respectively, like so. 

```js
//MusicPlayer.js

import React, {useState, useEffect, useRef} from 'react'
import Controls from '../components/Controls/Controls'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import Volume from '../components/Volume/Volume'
import audio from '../../assets/audio/audio-prueba.mp3'
import image from '../../assets/images/image-prueba.jgp'

const MusicPlayer = () => {
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [volume, setVolume] = useState(0)
    const [progress, setProgress] = useState(0)
    const [mediaTime, setMediaTime] = useState(0)
    const [duration, setDuration] = useState(0)

    useEffect(()=> {
        const element = audioRef.current

        // The piece of code shown below was taken from the following YouTube link: https://www.youtube.com/watch?v=Y9TL_43X3Lc&t=1444s by FullStack Mastery

        const onPlay = () => isPlaying(true)
        const onPause = () => isPlaying(false)
        const onMute = () => setIsMuted(true)
        const onUnMute = () => setIsMuted(false)

        element.addEventListener('play', onPlay)
        element.addEventListener('playing', onPlay)
        element.addEventListener('pause', onPause)
        element.addEventListener('mute', onMute)
        element.addEventListener('unmute', onUnMute)

        return () => {
            element.removeEventListener('play', onPlay)
            element.removeEventListener('playing', onPlay)
            element.removeEventListener('pause', onPause)
            element.removeEventListener('mute', onMute)
            element.removeEventListener('unmute', onUnMute)
        }
    },[audioRef.current, progress])

    const handleTogglePlay = () => {
        if(!audioRef.current) return
        isPlaying ? 
            audioRef.current.pause() :
            audioRef.current.play()
    }

    const handleProgress = (e) => {
        const value = Number(e.target.value);
        const {duration} = audioRef.current;
        audioRef.current.currentTime = (duration / 100) * value;
        setProgress(value)
    }

    const handleTimeUpdate = () => {
        const {currentTime, duration} = audioRef.current;
        const progress = parseInt(Number(currentTime / duration) * 100);
        setMediaTime(currentTime);
        setProgress(progress)
        setDuration(duration)
    }

    const handleVolumeChange = (e) => {
        const value = Number(e.target.value);
        const volRange = value / 100;
        audioRef.current.volume = volRange;
        setVolume(value)
    }

    const handleVolumeMute = () => {
        if(!audioRef.current) return;
        volumeMute ?
            audioRef.current.muted = false :
            audioRef.current.muted = true
        setIsMuted(!isMuted)
    }

    return (
        <figure className="figure">
            <div className="image--container">
                <img className="image" src={image} alt="cover"/>
            </div>
            <div className="player--container">
                <audio
                    src={audio}
                    ref={audioElement}
                    loop={false}
                    autoPlay={false}
                    onTimeUpdate={handleTimeUpdate}
                ></audio>
                <section className='control--panel'>
                    <ProgressBar
                        className="progress--bar"
                        onChange={handleProgress}
                        value={progress}
                    />
                    <Volume
                        max='100'
                        mode={isMuted ? '🔉' : '🔈'}
                        value={volume}
                        onChange={handleVolumeChange}
                        onClick={handleVolumeMute}
                    />
                    {/* <!-- counter / duration --> */}
                    <div className="timer--container duration" role="timer container">
                        <span className="timer" data-timer="timer" role="timer">
                            {formatTime(duration)}
                        </span>
                    </div>
                    {/* <!-- controls --> */}
                    <div className='controls'>
                        <div className="skip--container" role="skip buttons">
                            <button onClick={handleBackward}>
                            ⏮
                            </button>
                        </div>
                        <Controls
                            state={
                                isPlaying ?
                                    '⏸' :
                                    '▶'
                            }
                            onClick={handleTogglePlay}
                        />
                        <div className="skip--container" role="skip buttons">
                            <button onClick={handleForward}>
                            ⏭
                            </button>
                        </div>
                    </div>
                    {/* <!-- counter / current time --> */}
                    <div
                    className="timer--container current--time"
                    role="timer container"
                    >
                        <span className="timer" data-timer="timer" role="timer">
                            {formatTime(mediaTime)}
                        </span>
                    </div>
                </section>
            </div>
        </figure>
    )
}

export default MusicPlayer
```

23. In this section, we'll work on the *formatTime()* function to make the audio timer change according to the current progress.

Let's go there.

```js
    // https://github.com/lkopacz/egghead-react-a11y-audio-player
    // 1. Switch to branch section
    // 2. Choose the branch 09-mute-states
    function formatTime(time){
        const hours = Math.floor(~~(time / 3600));
        const minutes = Math.floor(~~(time % 3600) / 60);
        const seconds = Math.floor(time % 60);

        let output = '';
        if(hours > 0) output += `${hours}:${minutes < 10 ? '0' : ''}`

        output += `${minutes}:${seconds < 10 ? '0' : ''}`
        output += `${seconds}`

        return output
    }
```

24. Now, let's put the above code in our *MusicPlayer* component.

```js
//MusicPlayer.js

import React, {useState, useEffect, useRef} from 'react'
import Controls from '../components/Controls/Controls'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import Volume from '../components/Volume/Volume'
import audio from '../../assets/audio/audio-prueba.mp3'
import image from '../../assets/images/image-prueba.jpg'

// https://github.com/lkopacz/egghead-react-a11y-audio-player
// 1. Switch to branch section
// 2. Choose the branch 09-mute-states
function formatTime(time){
    const hours = Math.floor(~~(time / 3600));
    const minutes = Math.floor(~~(time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    let output = '';

    if(hours > 0) output += `${hours}:${minutes < 10 ? '0' : ''}`

    output += `${minutes}:${seconds < 10 ? '0' : ''}`
    output += `${seconds}`

    return output
}

const MusicPlayer = () => {
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [volume, setVolume] = useState(0)
    const [progress, setProgress] = useState(0)
    const [mediaTime, setMediaTime] = useState(0)
    const [duration, setDuration] = useState(0)

    useEffect(()=> {
        const element = audioRef.current

        // The piece of code shown below was taken from the following YouTube link: https://www.youtube.com/watch?v=Y9TL_43X3Lc&t=1444s by FullStack Mastery

        const onPlay = () => isPlaying(true)
        const onPause = () => isPlaying(false)
        const onMute = () => setIsMuted(true)
        const onUnMute = () => setIsMuted(false)

        element.addEventListener('play', onPlay)
        element.addEventListener('playing', onPlay)
        element.addEventListener('pause', onPause)
        element.addEventListener('mute', onMute)
        element.addEventListener('unmute', onUnMute)

        return () => {
            element.removeEventListener('play', onPlay)
            element.removeEventListener('playing', onPlay)
            element.removeEventListener('pause', onPause)
            element.removeEventListener('mute', onMute)
            element.removeEventListener('unmute', onUnMute)
        }
    },[audioRef.current, progress])

    const handleTogglePlay = () => {
        if(!audioRef.current) return
        isPlaying ? 
            audioRef.current.pause() :
            audioRef.current.play()
    }

    const handleProgress = (e) => {
        const value = Number(e.target.value);
        const {duration} = audioRef.current;
        audioRef.current.currentTime = (duration / 100) * value;
        setProgress(value)
    }

    const handleTimeUpdate = () => {
        const {currentTime, duration} = audioRef.current;
        const progress = parseInt(Number(currentTime / duration) * 100);
        setMediaTime(currentTime);
        setProgress(progress)
        setDuration(duration)
    }

    const handleVolumeChange = (e) => {
        const value = Number(e.target.value);
        const volRange = value / 100;
        audioRef.current.volume = volRange;
        setVolume(value)
    }

    const handleVolumeMute = () => {
        if(!audioRef.current) return;
        volumeMute ?
            audioRef.current.muted = false :
            audioRef.current.muted = true
        setIsMuted(!isMuted)
    }

    return (
        <figure className="figure">
            <div className="image--container">
                <img className="image" src={image} alt="cover"/>
            </div>
            <div className="player--container">
                <audio
                    src={audio}
                    ref={audioElement}
                    width='645px'
                    height='375px'
                    loop={false}
                    autoPlay={false}
                    onTimeUpdate={handleTimeUpdate}
                ></audio>
                <section className='control--panel'>
                    <ProgressBar
                        className="progress--bar"
                        onChange={handleProgress}
                        value={progress}
                    />
                    <Volume
                        max='100'
                        mode={isMuted ? '🔉' : '🔈'}
                        value={volume}
                        onChange={handleVolumeChange}
                        onClick={handleVolumeMute}
                    />
                    {/* <!-- counter / duration --> */}
                    <div className="timer--container duration" role="timer container">
                        <span className="timer" data-timer="timer" role="timer">
                            {formatTime(duration)}
                        </span>
                    </div>
                    {/* <!-- controls --> */}
                    <div className='controls'>
                        <div className="skip--container" role="skip buttons">
                            <button onClick={handleBackward}>
                            ⏮
                            </button>
                        </div>
                        <Controls
                            state={
                                isPlaying ?
                                    '⏸' :
                                    '▶'
                            }
                            onClick={handleTogglePlay}
                        />
                        <div className="skip--container" role="skip buttons">
                            <button onClick={handleForward}>
                            ⏭
                            </button>
                        </div>
                    </div>
                    {/* <!-- counter / current time --> */}
                    <div
                    className="timer--container current--time"
                    role="timer container"
                    >
                        <span className="timer" data-timer="timer" role="timer">
                            {formatTime(mediaTime)}
                        </span>
                    </div>
                </section>
            </div>
        </figure>
    )
}

export default MusicPlayer
```

25. In this part we separate the *formatTime.js* file to make our *MusicPlayer* component more clear.

```js
// https://github.com/lkopacz/egghead-react-a11y-audio-player
// 1. Switch to branch section
// 2. Choose the branch 09-mute-states
function formatTime(time){
    const hours = Math.floor(~~(time / 3600));
    const minutes = Math.floor(~~(time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    let output = '';

    if(hours > 0) output += `${hours}:${minutes < 10 ? '0' : ''}`

    output += `${minutes}:${seconds < 10 ? '0' : ''}`
    output += `${seconds}`

    return output
}
```

Now we will create three *css* files to style our *MusicPlayer* component differently, but in this situation we will not use pure *css*, instead we will use a preprocessor like *sass*.

26. The first file will be called *_variables.scss* and will be in change of storing the custom properties, which when importing the file, in our *audioControls.scss* will be invoked.

```scss
//_variables.scss
:root {
  // Primary colors
  --dark-color : #0B0505;
  --light-color: #f5f6f7;
}

// ========== VIEWPORT
$width: 100vw;
$height: 100vh;
// ========== SIZES
$size: 100%;
$padding: 1.5rem;
$radius: .5rem;
// ========== FONTS
$font-play: 'Play', sans-serif;
$font-inter: 'Inter', sans-serif;
$fnt-wgt: .85;
$fnt-sz: calc(($padding * $fnt-wgt) + 1vmin);
// ========== COLORS
// Secondary colors
$dark-blue: #11748A;
$dark-color: #1e272e;
$light-gray: #ecf0f1;
$dark-red-color: #8a1111;
$dark-orange-color: #bf5b15;
```

27. The second file will be called *MusicPlayer.scss* and will be in charge of giving styles to our *MusicPlayer* component.

```scss
// MusicPlayer.scss

@import '_variables';

.figure {
  margin-block: 1rem;
  margin-inline: auto;
  .image--container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: $size;
    min-height: fit-content;
    padding-block-end: 1rem;
    overflow: hidden;

    .image {
      max-width: 18rem;
      height: 18rem;
      border-radius: $radius;
    }
  }

  .player--container {
    width: $size;
    height: 5rem;
    max-width: 20rem;
    padding-inline: 1rem;
    border-radius: $radius;
    background-image: linear-gradient(
      45deg,
      $dark-blue,
      $dark-color
    );

    .control--panel {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: auto;
      gap: $radius;
      place-items: center;
      width: $size;

      .progress {
        width: $size;
        grid-row: 1;
        grid-column: 1 / -1;
        &--bar { width: $size; }
      }

      .volume--container,
      .player--controls,
      .timer--container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: $size
      }

      .volume--container {
        display: none;
        .slider { width: 5rem }
      }

      .controls {
        grid-column: 2 / 4;
        .controllers {
          width: $size;
          .player--controls {
            justify-content: space-between;
            width: 8rem;
            .prev,
            .next { font-size: 1.125rem; }
            .play { font-size: calc($padding * 1.5); }
          }
        }
      }

      .timer--container {
        .timer { font-family: $font-play; }
      }
    }

    @media (46.1875em <= width) {
      & {
        min-width: 30rem;
        .control--panel {
          .volume--container { 
            display: flex;
            .btn--medium { font-size: 1.125rem; }
          }
          .controls { grid-column: 3; }
        }
      }
    }
  }
  
  .figcaption {
    width: $size;
    padding-inline-start: 0;
    padding-inline-end: 0;
    margin-block-start: .25rem;

    .info {
      margin-block: calc($radius * .35);
      margin-inline-start: 0;
      text-transform: capitalize;
      letter-spacing: .05rem;
    }

    .name--song {
      font-size: calc($fnt-sz * .845);
      font-family: $font-play;
      font-weight: 700;
    }

    .name--artist {
      font-size: .85rem;
      font-family: $font-inter;
      font-weight: 400;
    }
  }
}

#light .player--container {
  background-image: linear-gradient(
    45deg,
    $dark-red-color,
    $dark-orange-color
  )
}

#light .player--container,
#light .image {
  box-shadow: .2vmin .25vmin .15rem rgba($dark-color, .45);
}

#dark .player--container,
#dark .image {
  box-shadow: .2vmin .25vmin .15rem rgba($light-gray, .45);
}

#light .static--color { color: var(--light-color); }
```

28. Now we import the *scss* file to our *MusicPlayer* component like so.

```js
// MusicPlayer.js

import React, {useState, useEffect, useRef} from 'react'
import { formatTime } from '../../utils/formatTime'
import { ProgressBar } from '../ProgressBar/ProgressBar'
import { Volume } from '../Volume/Volume'
import { Controls } from '../Controls/Controls'
import audio from '../../assets/audio/audio-prueba.mp3'
import image from '../../assets/images/image-prueba.jpg'
import '../../styles/MusicPlayer.scss'

const MusicPlayer = () => {
    //...
}

export default MusicPlayer
```

As soon as posible, we will update the *MusicPlayer* component.

**NOTE:** *the code above is an excerpt from my React audio Player repository, you can see the full code there.*