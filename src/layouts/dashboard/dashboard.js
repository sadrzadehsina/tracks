import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core";

import { Header } from './header';

const useStyles = makeStyles(theme => ({
	root: {
    height: '100vh',
  },
}));

const DashboardLayout = ({ children }) => {

	const classes = useStyles();

  return (
    <div>
      <Header />
      <Container maxWidth="md">
        <Box m={5}>
          {children}
        </Box>
      </Container>
    </div>
  );
};

export { DashboardLayout };
