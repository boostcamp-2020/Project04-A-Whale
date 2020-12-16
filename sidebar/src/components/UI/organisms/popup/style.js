import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  dialog: {
    width: '80%',
  },
  text: {
    fontSize: '1.5rem',
    // fontFamily: 'NanumBarunGothic',
    // fontFamily: 'Nanum Brush Script, sans-serif !important',
    // fontWeight: 'bold',
  },
}));

export default useStyles;
