import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  datePicker: {
    marginLeft: '10px',
  },
}));

const DetailTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
`;

export { useStyles, DetailTextWrapper, InputWrapper };
