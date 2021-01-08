import { useContext } from 'react';
import { ToastsContext } from './toasts-provider';

const useToast = () => {

	const { show, hide } = useContext(ToastsContext);

	return {
		show,
		hide,
	};

};

export { useToast };