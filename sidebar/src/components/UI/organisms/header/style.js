import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  text: {
    fontSize: '2rem',
    fontFamily: 'Nanum Brush Script, sans-serif !important',
    fontWeight: 'bold',
  },
  appBar: {
    // backgroundColor: '#33ccff',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}));

export default useStyles;
