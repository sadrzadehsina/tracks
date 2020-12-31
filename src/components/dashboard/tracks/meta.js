import ListItemText from '@material-ui/core/ListItemText';

const Meta = ({ title, singer }) => <ListItemText primary={title} secondary={singer} />;

export { Meta };