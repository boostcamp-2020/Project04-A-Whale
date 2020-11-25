import React from 'react';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Span from '../atoms/Span';
import StyledButton from '../atoms/StyledButton';

const DetailListItem = ({ detail, calendarHander, deleteHandler }) => {
  const style = {
    color: 'inherit',
  };
  const content = (
    <div>
      {detail}
      <StyledButton
        type="Icon"
        style={style}
        variant="add detail"
        content={<DateRangeIcon />}
        onClickHandler={calendarHander}
      />
      <StyledButton
        type="Icon"
        style={style}
        variant="add detail"
        content={<RemoveCircleIcon />}
        onClickHandler={deleteHandler}
      />
    </div>
  );
  return <Span style={style} content={content} />;
};

export default DetailListItem;
