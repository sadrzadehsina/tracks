import { createRef } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import { Song } from './song';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
	},
}));

const TracksView = ({ tracks }) => {

	const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main tracks">
				{ tracks.map((track, index) => <Song track={track} key={track.id} />) }
      </List>
    </div>
  );
};

export { TracksView };
