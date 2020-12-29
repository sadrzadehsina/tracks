import React from "react";
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
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const TracksView = ({ signOut }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main tracks">
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <MusicNoteIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Single-line item"
            secondary={"Secondary text"}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <PlayArrowIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
				<Divider />
				<ListItem>
          <ListItemAvatar>
            <Avatar>
              <MusicNoteIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Single-line item"
            secondary={"Secondary text"}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="play" onClick={signOut}>
              <PlayArrowIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  );
};

export { TracksView };
