import { useContext } from 'react';
import { FirebaseContext } from './firebase-provider';

import 'firebase/auth';

const useAuth = () => {

	const firebase = useContext(FirebaseContext);

	const auth = firebase.auth();

	const signUp = (email, password) => auth.createUserWithEmailAndPassword(email, password);

	const signIn = (email, password) => auth.signInWithEmailAndPassword(email, password);

	const resetPassword = (email) => auth.sendPasswordResetEmail(email);
	
	const updatePassword = password => auth.currentUser.updatePassword(password);
	
	const signOut = () => auth.signOut();

	return {
		signUp,
		signIn,
		resetPassword,
		updatePassword,
		signOut,
	};

};

export { useAuth };