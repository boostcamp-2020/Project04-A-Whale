import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  list: {
    width: '100%',
  },
  text: {
    paddingTop: theme.spacing(3),
    fontSize: '2rem',
    fontWeight: 'bold',
    fontFamily: 'Nanum Brush Script, sans-serif !important',
  },
}));

export default useStyles;
