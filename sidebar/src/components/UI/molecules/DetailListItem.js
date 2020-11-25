import React from 'react';
import styled from 'styled-components';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Span from '../atoms/Span';
import StyledButton from '../atoms/StyledButton';

const DetailListItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  vertical-align: middle;
`;

const CalenderIcon = {
  position: 'absolute',
  right: '7%',
  padding: '1px',
};

const RemoveIcon = {
  position: 'absolute',
  right: '2%',
  padding: '1px',
};

const DetailListItem = ({ detail, calendarHandler, RemoveHandler }) => {
  const style = {
    color: 'inherit',
  };
  const onClickRemover = () => RemoveHandler(detail);

  const content = (
    <DetailListItemWrapper>
      <Span content={detail} />
      <StyledButton
        type="Icon"
        style={CalenderIcon}
        variant="add detail"
        content={<DateRangeIcon />}
        onClickHandler={calendarHandler}
      />
      <StyledButton
        type="Icon"
        style={RemoveIcon}
        variant="add detail"
        content={<RemoveCircleIcon />}
        onClickHandler={onClickRemover}
      />
    </DetailListItemWrapper>
  );
  return <Span style={style} content={content} />;
};

export default DetailListItem;
