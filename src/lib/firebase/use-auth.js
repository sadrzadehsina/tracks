import { useContext, useMemo } from 'react';
import { FirebaseContext } from './firebase-provider';

import 'firebase/auth';

const useAuth = () => {

	const firebase = useContext(FirebaseContext);

	const auth = useMemo(() => firebase.auth(), [firebase]);

	const signUp = (email, password) => auth.createUserWithEmailAndPassword(email, password);

	const signIn = (email, password) => auth.signInWithEmailAndPassword(email, password);

	const resetPassword = (email) => auth.sendPasswordResetEmail(email);
	
	const updatePassword = (password) => auth.currentUser.updatePassword(password);
	
	const signOut = () => auth.signOut();

	return {
		currentUser: auth.currentUser,
		signUp,
		signIn,
		resetPassword,
		updatePassword,
		signOut,
	};

};

export { useAuth };