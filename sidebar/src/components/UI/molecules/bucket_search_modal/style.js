import { makeStyles } from '@material-ui/core/styles';

export const loadButton = {
  marginTop: '10px',
  background: 'blue',
  color: 'white',
};

export const guide = {
  textAlign: 'center',
  verticalAlign: 'middle',
  fontSize: '20px',
  color: 'gray',
};

export const presetItem = {
  padding: '10px',
  fontSize: '16px',
  borderBottom: '3px solid #eeeeee',
};

export const presetItemDetail = {
  padding: '10px',
  fontSize: '16px',
  marginLeft: '20px',
};

const useStyles = makeStyles(() => ({
  ModalWrapper: {
    position: 'absolute',
    flexDirection: 'column',
    display: 'flex',
    padding: '15px',
    width: 'fit-content',
    top: '50%',
    left: '50%',
    background: 'white',
    '-webkit-transform': 'translate(-50%, -50%)',
    '-ms-transform': 'translate(-50%, -50%)',
    '-moz-transform': 'translate(-50%, -50%)',
    '-o-transform': 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
  },
  SearchBar: {
    width: '120px',
  },
  result: {
    minHeight: '240px',
    marginTop: '10px',
  },
}));

export default useStyles;
