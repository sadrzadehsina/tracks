import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root: {
    height: '100vh',
  },
}));

const DashboardLayout = ({ children }) => {

	const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={false} md={3} />
      <Grid item xs={12} sm={12} md={3} elevation={6} square>{children}</Grid>
      <Grid item xs={false} sm={false} md={3} />
    </Grid>
  );
};

export { DashboardLayout };
