import { createContext, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const ToastsContext = createContext({});

const Alert = (props) => <MuiAlert elevation={6} variant='filled' {...props} />;

const ToastsProvider = ({ children }) => {

	const [toast, setToast] = useState({
		open: false,
		message: '',
		type: 'success'
	});

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') return;

		setToast({ ...toast, open: false });
	};

	const show = ({ message, type }) => setToast({ open: true, message, type });

	const hide = () => setToast({ ...toast, open: false });

	return (
		<ToastsContext.Provider value={{ show, hide }}>
			<Snackbar 
				open={toast.open} 
				autoHideDuration={5000} 
				onClose={handleClose}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
			>
				<Alert onClose={handleClose} severity={toast.type}>{toast.message}</Alert>
			</Snackbar>
			{children}
		</ToastsContext.Provider>
	);

};

export { ToastsProvider, ToastsContext };