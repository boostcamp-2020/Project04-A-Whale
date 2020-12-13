import styled from 'styled-components';

export const DetailListItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  vertical-align: middle;
  border: 1.5px;
  border-right: 0px;
  border-left: 0px;
  border-style: ridge;
  padding: 15px;
  font-size: 14px;
`;

export const DatePicker = {
  position: 'absolute',
  right: '18%',
  padding: '1px',
  margin: '-5px',
};

export const RemoveIcon = {
  position: 'absolute',
  right: '4%',
  padding: '1px',
  backgroundColor: 'white',
  height: '20px',
};

export const rootStyle = {
    color: 'inherit',
  };