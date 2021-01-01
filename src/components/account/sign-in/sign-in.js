import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '@Lib/firebase/use-auth';
import { useFirestore } from '@Lib/firebase/use-firestore';

import { SignInView } from './view';

const SignIn = () => {

	const history = useHistory();

	const { register, handleSubmit, control } = useForm();

	const { signIn, currentUser } = useAuth();

	const doSignIn = ({ email, password }) => 
		signIn(email, password)
			.then(() => history.push('/dashboard/tracks'))
			.catch(console.log);

	return (
		<SignInView 
			form={{ register, handleSubmit, control }} 
			signIn={doSignIn}
		/>
	);

};

export { SignIn };