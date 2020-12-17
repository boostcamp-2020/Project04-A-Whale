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
    fontSize: 17,
    fontWeight: 'bold',
  },
  noResult: {
    position: 'fixed',
    top: '50%',
    fontSize: 20,
    left: theme.spacing(27),
  },
  appBar: {
    boxShadow: 'none',
    background: 'none',
  },
  main: {
    fontSize: 20,
  },
  search: {
    fontSize: 17,
    alignSelf: 'center',
    marginTop: 10,
    border: 'none',
    background: 'none',
    fontFamily: 'Bazzi',
    textDecoration: 'underline',
    color: '#555',
    outline: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
    textUnderlineOffset: '2px',
  },
  goSearchWrapper: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: '48%',
    left: theme.spacing(25),
  },
}));

export default useStyles;
