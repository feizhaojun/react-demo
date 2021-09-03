import React, { useState, useEffect, useRef } from 'react';
import Controls from './Controls';
import Backdrop from './Backdrop';
import './Index.css';

const AudioPlayer = ({ tracks }) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(0);

  const { title, artist, color, image, audioSrc } = tracks[trackIndex];

  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  const { duration } = audioRef.current;

  const toPrevTrack = () => {
    if (trackIndex < 1) {
      setTrackIndex(tracks.length -1);
    } else {
      setTrackIndex(trackIndex - 1)
    }
  }

  const toNextTrack = () => {
    if (trackIndex > tracks.length - 1) {
      setTrackIndex(0);
    } else {
      setTrackIndex(trackIndex + 1)
    }
  }

	const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  }
  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  }

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  }
  const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : '0%';
  const trackStyling = `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))`;

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    }
  }, []);

  useEffect(() => {
    audioRef.current.pause();
  
    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);
  
    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]);

  return <>
    <div className="audio-player">
      <div className="track-info">
        <img
          className="artwork"
          src={image}
          alt={artist}
        />
        <h2 className="title">{title}</h2>
        <h3 className="artist">{artist}</h3>
        <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          className="progress"
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
          style={{ background: trackStyling }}
        />
        <Controls
          isPlaying={isPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          onPlayPauseClick={setIsPlaying}
        />
      </div>
      <Backdrop
        trackIndex={trackIndex}
        activeColor={color}
        isPlaying={isPlaying}
      />
    </div>
  </>;
}

export default AudioPlayer;