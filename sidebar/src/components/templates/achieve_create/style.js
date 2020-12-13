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
    fontSize: '3rem',
    fontWeight: 'bold',
    // fontFamily: 'Nanum Brush Script, sans-serif !important',
  },
  date: {
    padding: theme.spacing(2),
    fontSize: '1.5rem',
    // fontFamily: 'Nanum Brush Script, sans-serif !important',
  },
  description: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    border: '1px solid #eeeeee',
    borderRadius: '5px',
  },
}));

export default useStyles;
