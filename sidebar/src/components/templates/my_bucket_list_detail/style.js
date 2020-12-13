import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

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
  text: {
    paddingTop: theme.spacing(3),
    // fontSize: '1.5rem',
    // fontWeight: 'bold',
    fontSize: 20,
    fontWeight: 'bold',
    // fontFamily: 'Nanum Brush Script, sans-serif !important',
  },
  achieve: {
    '&>div': {
      padding: theme.spacing(4),
      backgroundColor: '#eeeeee',
    },
  },
}));

export default useStyles;
