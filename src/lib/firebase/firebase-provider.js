import { createContext, useMemo } from 'react';
import firebase from 'firebase/app';

const FirebaseContext = createContext(undefined);

const DEFAULT_APP_NAME = '[DEFAULT]';

const FirebaseProvider = props => {

	const { config, appName } = props;

	if (!firebase.apps.length) {
		firebase.initializeApp(config);
	};

	return (
		<FirebaseContext.Provider value={firebase}>
			{props.children}
		</FirebaseContext.Provider>
	);
};

export { FirebaseProvider, FirebaseContext };