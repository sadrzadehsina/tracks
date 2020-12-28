import { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from './firebase-provider';

import 'firebase/firestore';

const useFirestore = () => {

	const firebase = useContext(FirebaseContext);

	return firebase.firestore();

};

export { useFirestore };