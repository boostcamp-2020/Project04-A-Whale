import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  input: {
    display: 'block',
    margin: '10px 0',
    width: '100%',
    '& div': {
      width: '100%',
    },
    '& input': {
      width: '100%',
    },
  },
  outlineButton: {
    width: 'calc(50% - 10px)',
    padding: '10px 0',
    margin: '5px',
  },
  link: {
    all: 'unset',
  },
}));

export const RegisterLayout = styled.div`
  width: 100%;
  margin-top: 1rem;
  position: relative;
`;

export const RegisterContainer = styled.div`
  margin: 0 auto;
  width: 60%;
  min-width: fit-content;
  height: fit-content;
`;

export const RegisterBox = styled.div`
  padding: 20px;
  border: 1px solid #b6b6b6;
  border-radius: 5px;
  box-shadow: 0 0 3px #9c9c9c;
`;
