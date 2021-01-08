import { Controller } from 'react-hook-form';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
	form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignInView = ({ form, signIn }) => {

	const { register, handleSubmit, control } = form;
	
  const classes = useStyles();

  return (
    <form className={classes.form} noValidate onSubmit={handleSubmit((signIn))}>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            autoComplete="email"
            autoFocus
            onChange={onChange}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={onChange}
          />
        )}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign In
      </Button>
      <Typography variant="body1" gutterBottom>
        use <strong>demo@tracks.io</strong> as username and <strong>demouser</strong> as password.
      </Typography>
    </form>
  );
};

export { SignInView };
