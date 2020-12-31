import { createContext, useEffect, useState } from 'react';

const useAudio = ({ audioRef }) => {

	const [duration, setDuration] = useState();
	const [currentTime, setCurrentTime] = useState();
  const [playing, setPlaying] = useState(false);
  
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(0);

	useEffect(() => {

		if (audioRef.current === null) return;

    const audio = audioRef.current;

    // state setters wrappers
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    };

    const setAudioProgress = () => {
      var duration = audio.duration;
      if (duration > 0) {
        setProgress((audio.currentTime / duration) * 100);
      }
    };

    const setAudioBuffer = () => {
      const duration = audio.duration;
      if (duration > 0) {
        for (var i = 0; i < audio.buffered.length; i++) {
          if ( audio.buffered.start(audio.buffered.length - 1 - i) < audio.currentTime ) {
            setBuffer((audio.buffered.end(audio.buffered.length - 1 - i) / duration) * 100);
            break;
          }
        }
      }
    };

    // DOM listeners: update React state on DOM events
    audio.addEventListener("loadeddata", setAudioData);
    audio.addEventListener("timeupdate", setAudioProgress);
    audio.addEventListener("progress", setAudioBuffer);

    // React state listeners: update DOM on React state changes
    playing ? audio.play() : audio.pause();

    // effect cleanup
    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioProgress);
      audio.removeEventListener("progress", setAudioBuffer);
    }
  });

	return {
		currentTime,
    duration,
    progress,
    buffer,
		playing,
		play: () => setPlaying(true),
		pause: () => setPlaying(false),
	}

};

export { useAudio };