import { useForm } from 'react-hook-form';
import { useAuth } from '../../../lib/firebase/use-auth';

import { SignInView } from './view';

const SignIn = () => {

	const { register, handleSubmit, control } = useForm();

	const { signIn } = useAuth();

	const doSignIn = ({ email, password }) =>
		signIn(email, password)
			.then(console.log)
			.catch(console.log);

	return (
		<SignInView 
			form={{ register, handleSubmit, control }} 
			signIn={doSignIn}
		/>
	);

};

export { SignIn };