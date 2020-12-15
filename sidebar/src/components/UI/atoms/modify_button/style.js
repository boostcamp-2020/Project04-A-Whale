import styled from 'styled-components';

const ModifyButtonWrapper = styled.button`
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

const ModifyButtonImg = styled.img`
  width: ${(props) => props.width || '30px'};
`;

export { ModifyButtonWrapper, ModifyButtonImg };
