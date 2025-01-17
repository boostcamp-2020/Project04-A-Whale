import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  datePicker: {
    marginLeft: '10px',
  },
  titleText: {
    fontSize: 20,
  },
  datailInput: {
    marginRight: 20,
  },
  thumb: {
    fontSize: 20,
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
