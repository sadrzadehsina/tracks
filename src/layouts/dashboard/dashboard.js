import { useHistory } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core";

import { useAuth } from '@Lib/firebase/use-auth';

import { Header } from './header';

const useStyles = makeStyles(theme => ({
	root: {
    height: '100vh',
  },
}));

const DashboardLayout = ({ children }) => {

  const history = useHistory();

  const classes = useStyles();
  
  const { signOut, currentUser } = useAuth();

  const doSignOut = () =>
    signOut()
      .then(history.push('/account/signin'))
      .catch(console.log);

  return (
    <div>
      <Header user={currentUser()} signOut={doSignOut} />
      <Container maxWidth="md">
        <Box m={5}>
          {children}
        </Box>
      </Container>
    </div>
  );
};

export { DashboardLayout };
