import { useEffect, useState } from 'react';
import axios from 'axios';
import { TracksView } from './view';
import { useAuth } from '@Lib/firebase';

const Tracks = () => {

	const { signOut } = useAuth();

	const [tracks, setTracks] = useState([]);

	useEffect(() => {

		const fetchTracks = async() => {
			const response = await axios.get(`https://api.napster.com/v2.0/playlists/pp.214725454/tracks?apikey=${process.env.REACT_APP_NAPSTER_API_KEY}&limit=200`).then(response => response.data);
			setTracks(response.tracks);
		};

		fetchTracks();

	}, []);

	return <TracksView tracks={tracks} />;

};

export { Tracks };