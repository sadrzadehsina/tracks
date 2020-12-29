import { TracksView } from './view';

import { useAuth } from '@Lib/firebase';

const Tracks = () => {

	const { signOut } = useAuth();

	const doSignOut = () => 
		signOut()
			.then(console.log.bind('success'))
			.catch(console.log('error'));

	return <TracksView signOut={doSignOut} />;

};

export { Tracks };