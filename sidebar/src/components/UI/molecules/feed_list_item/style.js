import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  nickname: {
    fontWeight: 'bold',
    textDecoration: 'underline',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

export default useStyles;
