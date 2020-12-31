import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(() => ({
	buffer: {
		height: '2px',
	},
	dashed: {
		display: 'none'
	}
}));

const Bar = ({
	status,
	progress,
	buffer,
}) => {

	const classes = useStyles();

	if (status.playing || status.paused) {
		return (
			<LinearProgress variant="buffer" value={progress} valueBuffer={buffer} classes={classes} />
		);
	} else {
		return null;
	}

};

export { Bar };