import { useEffect, useState } from 'react';

const useAudio = ({ audioRef }) => {

	const [duration, setDuration] = useState();
	const [currentTime, setCurrentTime] = useState();
	const [playing, setPlaying] = useState(false);

	useEffect(() => {

		if (audioRef.current === null) return;

    const audio = audioRef.current;

    // state setters wrappers
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    }

    const setAudioTime = () => setCurrentTime(audio.currentTime);

    // DOM listeners: update React state on DOM events
    audio.addEventListener("loadeddata", setAudioData);

    audio.addEventListener("timeupdate", setAudioTime);

    // React state listeners: update DOM on React state changes
    playing ? audio.play() : audio.pause();

    // effect cleanup
    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
    }
  });

	return {
		currentTime,
		duration,
		playing,
		play: () => setPlaying(true),
		pause: () => setPlaying(false),
	}

};

export { useAudio };