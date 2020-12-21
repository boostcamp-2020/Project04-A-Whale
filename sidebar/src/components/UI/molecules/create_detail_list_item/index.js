import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import DatePicker from '../../atoms/date_picker';
import { removeDetailAction, updateDetailDueAction } from '../../../../modules/createbucket';

const DetailListItemWrapper = styled.div`
  display: flex;
  vertical-align: middle;
  font-size: 14px;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0px 8px 0px 8px;
  margin-top: 10px;
`;

const Title = styled.span`
  align-self: center;
  font-size: 20px;
  flex: 4;
  height: 40px;
  padding-top: 5px;
`;

const DetailListItem = ({ detail }) => {
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(removeDetailAction(detail.title));
  };

  const dateChangeHandler = (e) => {
    dispatch(
      updateDetailDueAction({
        title: detail.title,
        dueDate: e.target.value,
      })
    );
  };

  return (
    <DetailListItemWrapper>
      <Title>{detail.title}</Title>
      <DatePicker date={detail.dueDate} handler={dateChangeHandler} />
      <IconButton
        edge="end"
        aria-label="remove"
        onClick={onClickHandler}
        style={{ paddingTop: 16 }}
      >
        <HighlightOffIcon fontSize="large" />
      </IconButton>
    </DetailListItemWrapper>
  );
};

export default DetailListItem;
