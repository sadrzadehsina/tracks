import { createRef } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import CardMedia from '@material-ui/core/CardMedia';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import StopIcon from '@material-ui/icons/Stop';

import { useAudio } from '@Lib/audio';

import { Bar } from './bar';
import { Meta } from './meta';

const Song = ({ track }) => {

	const audioRef = createRef();

	const { currentTime, duration, status, progress, buffer, play, pause, stop } = useAudio({ audioRef });

	return (
		<div>
			<audio ref={audioRef}><source src={track.previewURL} /></audio>
			<ListItem>
				<ListItemAvatar><Avatar><MusicNoteIcon /></Avatar></ListItemAvatar>
				<Meta title={track.name} singer={track.artistName} />
				<ListItemSecondaryAction>
					{
						status.playing ? (
							<div>
								<IconButton edge="end" aria-label="stop" onClick={stop}>
									<StopIcon />
								</IconButton>
								<IconButton edge="end" aria-label="pause" onClick={pause}>
									<PauseIcon />
								</IconButton>
							</div>
						) : (
							<IconButton edge="end" aria-label="play" onClick={play}>
								<PlayArrowIcon />
							</IconButton>
						)
					}
				</ListItemSecondaryAction>
			</ListItem>
			<Bar status={status} progress={progress} buffer={buffer} />
		</div>
  );

};

export { Song };