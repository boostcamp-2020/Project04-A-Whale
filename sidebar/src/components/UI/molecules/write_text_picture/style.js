import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  textInput: {
    width: '100%',
    border: '1px solid #ddd',
    borderRadius: 3,
    padding: 10,
    fontSize: 17,
    fontFamily: 'Bazzi',
  },
}));

export const WriteText = styled.div`
  width: 100%;
`;

export const TextArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 10rem;
  margin: 0;
  line-height: 22px;
`;

export const UploadPicture = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const UploadPictureLabel = styled.label`
  display: inline-block;
  padding: 0.6em 1.5em;
  color: #e85a71;
  font-size: inherit;
  line-height: normal;
  vertical-align: middle;
  background-color: #fdfdfd;
  cursor: pointer;
  border: 1.5px solid #e85a71;
  border-radius: 0.3em;
  font-size: 15px;
`;
