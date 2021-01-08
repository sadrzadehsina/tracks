import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '@Lib/firebase/use-auth';
import { useFirestore } from '@Lib/firebase/use-firestore';
import { useToast } from '@Lib/toasts/use-toast';

import { SignInView } from './view';

const SignIn = () => {

	const history = useHistory();

	const { register, handleSubmit, control } = useForm();

	const { signIn, currentUser } = useAuth();

	const toast = useToast();

	const doSignIn = ({ email, password }) => 
		signIn(email, password)
			.then(() => history.push('/tracks/dashboard/tracks'))
			.catch(error => toast.show({ message: error.message, type: 'error' }));

	return (
		<SignInView 
			form={{ register, handleSubmit, control }} 
			signIn={doSignIn}
		/>
	);

};

export { SignIn };