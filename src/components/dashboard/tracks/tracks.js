import { useEffect, useState } from 'react';
import axios from 'axios';
import { TracksView } from './view';
import { useAuth } from '@Lib/firebase';

const Tracks = () => {

	const { signOut } = useAuth();

	const [tracks, setTracks] = useState([]);

	const doSignOut = () => 
		signOut()
			.then(console.log.bind('success'))
			.catch(console.log('error'));

	useEffect(() => {

		const fetchTracks = async() => {
			const response = await axios.get('/api/tracks').then(response => response.data);
			setTracks(response.tracks);
		};

		fetchTracks();

	}, []);

	return <TracksView tracks={tracks} signOut={doSignOut} />;

};

export { Tracks };