import React, { useState, useEffect, useCallback, useRef } from "react";
import { formatTime } from "../../utils/formatTime";
import { Volume } from "../Volume/Volume";
import { Controls } from "../Controls/Controls";
import { SoundOn } from "../SoundOn/SoundOn";
import { SoundOff } from "../SoundOff/SoundOff";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { PlayButton } from "../PlayButton/PlayButton";
import { PauseButton } from "../PauseButton/PauseButton";
import { ChevronRightButton } from "../ChevronRightButton/ChevronRightButton";
import { ChevronLeftButton } from "../chevronLeftButton/ChevronLeftButton";
import source from '../../assets/audio/Regulate.mp3';
import image from '../../assets/images/regulate.jpg';
import '../../styles/MusicPlayer.scss';

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(10);
  const [duration, setDuration] = useState(0);
  const [mediaTime, setMediaTime] = useState(0);

  useEffect(() => {
    const audioElement = audioRef.current;
    if(!audioElement) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onMute = () => setIsMuted(true);
    const onUnMute = () => setIsMuted(false);

    audioElement.addEventListener('play', onPlay);
    audioElement.addEventListener('playing', onPlay);
    audioElement.addEventListener('pause', onPause);
    audioElement.addEventListener('mute', onMute);
    audioElement.addEventListener('unmute', onUnMute)

    return () => {
      audioElement.removeEventListener('play', onPlay);
      audioElement.removeEventListener('playing', onPlay);
      audioElement.removeEventListener('pause', onPause);
      audioElement.removeEventListener('mute', onMute);
      audioElement.removeEventListener('unmute', onUnMute);
    }

  }, [audioRef.current, progress])

  // create toggle play function
  const handleTogglePlay = () => {
    if(!audioRef.current) return
    isPlaying ? 
      audioRef.current.pause() : 
      audioRef.current.play()
  }
  // create timeupdate function
  const handleTimeUpdate = () => {
    const { currentTime, duration } = audioRef.current;
    const progress = parseInt(Number(currentTime / duration) * 100);
    setProgress(progress);
    setDuration(duration);
    setMediaTime(currentTime)
  } 
  // create progress function
  const handleProgress = (e) => {
    const newValue = e.target.valueAsNumber;
    const { duration } = audioRef.current;
    audioRef.current.currentTime = (duration / 100) * newValue;
    setProgress(newValue)
  }
  // create volume change function
  const handleVolumeChange = (e) => {
    const newValue = e.target.valueAsNumber;
    const slider = newValue / 100;
    audioRef.current.volume = slider;
    setVolume(newValue)
  }
  // create volume mute function
  const handleToggleMute = () =>{
    if(!audioRef.current) return;
    isMuted ? 
      audioRef.current.muted = false : 
      audioRef.current.muted = true;
    setIsMuted(!isMuted)
  }
  /*
    create timer functions
      - duration
      - current time
  */
  return (
    <figure className="figure">
      <div className="image--container">
        <img className="image" src={image} alt="cover"/>
      </div>
      <div className="player--container">
        <audio
          src={source}
          loop={false}
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
        ></audio>
        <section className="control--panel">
          {/* progress */}
          <ProgressBar
            className="progress--bar"
            value={progress}
            onChange={handleProgress}
          />
          {/* volume */}
          <Volume
            max="100"
            value={volume}
            state={isMuted ? <SoundOff /> : <SoundOn />}
            onClick={handleToggleMute}
            onChange={handleVolumeChange}
          />
          {/* counter / duration */}
          <div className="timer--container duration">
            <span className="static--color timer">
              {formatTime(duration)}
            </span>
          </div>
          {/* controls */}
          <div className="controls">
            <div className="controllers" role="control player container">
              <div className="player--controls">
                <ChevronLeftButton  />
                <Controls
                  state={isPlaying ? <PauseButton /> : <PlayButton />}
                  onClick={handleTogglePlay}
                />
                <ChevronRightButton  />
              </div>
            </div>
          </div>
          {/* counter / current time */}
          <div className="timer--container current--time">
            <span className="static--color timer">
              {formatTime(mediaTime)}
            </span>
          </div>
        </section>
      </div>
      <figcaption className="figcaption">
        <p className="info name--song">regulate</p>
        <p className="info name--artist">warren g ft. nate dogg</p>
      </figcaption>
    </figure>
  );
};

export { MusicPlayer };
