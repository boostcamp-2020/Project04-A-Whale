import { makeStyles } from '@material-ui/core/styles';

export const root = {
  color: 'inherit',
  width: '100%',
  marginBottom: '10px',
};

export const DatePicker = {
  marginLeft: '10px',
};

export const cancleButton = {
  margin: '4px',
  padding: '8px',
  color: 'white',
  background: 'red',
};

export const addButton = {
  margin: '4px',
  padding: '8px',
  color: 'white',
  background: 'blue',
};

export const BoldFont = { fontWeight: 'bold', fontSize: '16px' };

export const editButton = {
  background: 'white',
  color: '#646464',
  fontSize: '20px',
  width: '100%',
  height: '60px',
};

const useStyles = makeStyles(() => ({
  dueDate: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
}));

export default useStyles;
