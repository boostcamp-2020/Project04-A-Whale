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
  section: {
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: 'rgba(128,128,128,0.1)',
    borderRadius: '5px',
  },
  title: {
    // fontSize: '1.5rem',
    fontSize: 18,
    // fontFamily: 'Nanum Brush Script, sans-serif !important',
    fontWeight: 'bold',
  },
  input: {
    width: 'fit-content',
    padding: '5px',
    margin: '5px',
    border: '1px solid #dddddd',
    borderRadius: '5px',
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
    '&>div': {
      padding: '20px',
      '&:hover': {
        backgroundColor: '#dddddd',
      },
    },
  },
}));

export default useStyles;
