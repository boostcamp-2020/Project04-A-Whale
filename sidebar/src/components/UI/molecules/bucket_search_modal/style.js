import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const guide = {
  textAlign: 'center',
  verticalAlign: 'middle',
  fontSize: '20px',
  color: '#454552',
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
    borderRadius: 5,
  },
  SearchBar: {
    width: '120px',
  },
  result: {
    minHeight: '240px',
    marginTop: '10px',
  },
  loadButton: {
    background: '#4ea1d3',
    color: 'white',
    width: 192,
  },
  cancelButton: {
    background: '#454552',
    color: 'white',
    width: 192,
  },
}));

export { useStyles, ButtonWrapper };
