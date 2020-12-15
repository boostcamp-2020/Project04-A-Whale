import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'relative',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    color: '#555555',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  page: {
    margin: '0 auto',
  },
  title: {
    fontSize: '1.2rem',
  },
  bigTitle: {
    padding: theme.spacing(2),
    paddingLeft: 0,
    fontSize: '3rem',
    fontWeight: 'bold',
  },
  date: {
    padding: theme.spacing(1),
    fontSize: '1.5rem',
  },
  description: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  dateWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
}));

export default useStyles;
