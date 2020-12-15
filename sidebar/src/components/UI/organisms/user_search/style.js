import { makeStyles } from '@material-ui/core/styles';

export const Style = {};

export const SearchBar = {
  padding: 12,
};

const useStyles = makeStyles(() => ({
  searchInput: {
    width: '100%',
    marginTop: 20,
  },
  resize: {
    fontSize: 20,
  },
}));

export default useStyles;
