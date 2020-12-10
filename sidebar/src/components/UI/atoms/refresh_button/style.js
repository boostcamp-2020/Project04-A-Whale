import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    top: theme.spacing(10),
    right: theme.spacing(3),
  },
}));

export default useStyles;
