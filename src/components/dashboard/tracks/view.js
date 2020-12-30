import { createRef } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import CardMedia from '@material-ui/core/CardMedia';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

import { useAudio } from '@Lib/audio';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const Track = ({ track }) => {

	const audioRef = createRef();

	const { currentTime, duration, playing, play, pause } = useAudio({ audioRef });

	return (
		<div>
			<audio ref={audioRef}><source src={track.url} /></audio>
			<ListItem>
				<ListItemAvatar>
					<Avatar>
						<MusicNoteIcon />
					</Avatar>
				</ListItemAvatar>
				<ListItemText primary={track.title} secondary={track.singer} />
				<ListItemSecondaryAction>
					{
						playing ? (
							<IconButton edge="end" aria-label="pause" onClick={pause}>
								<PauseIcon />
							</IconButton>
						) : (
							<IconButton edge="end" aria-label="play" onClick={play}>
								<PlayArrowIcon />
							</IconButton>
						)
					}
				</ListItemSecondaryAction>
			</ListItem>
		</div>
  );

};

const TracksView = ({ 
	tracks, 
	signOut 
}) => {

	const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main tracks">
				{
					tracks.map((track, index) => (
						<div>
							<Track track={track} />
							{ index != tracks.length - 1 && <Divider /> }
						</div>
					))
				}
      </List>
    </div>
  );
};

export { TracksView };
