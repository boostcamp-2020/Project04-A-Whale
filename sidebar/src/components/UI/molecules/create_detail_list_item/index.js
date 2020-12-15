import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import DatePicker from '../../atoms/date_picker';
import {
  removeDetailAction,
  updateDetailDueAction,
} from '../../../../modules/actions/createbucket';

const DetailListItemWrapper = styled.div`
  display: flex;
  vertical-align: middle;
  border: 1.5px;
  border-right: 0px;
  border-left: 0px;
  border-style: ridge;
  font-size: 14px;
  justify-content: space-between;
`;

const Title = styled.span`
  align-self: center;
  font-size: 20px;
  flex: 4;
  height: 40px;
  padding-top: 5px;
`;

const DetailListItem = ({ detail, removeDetailActionConnect, updateDetailDueActionConnect }) => {
  const onClickHandler = () => {
    removeDetailActionConnect(detail.title);
  };

  const dateChangeHandler = (e) => {
    updateDetailDueActionConnect({
      title: detail.title,
      dueDate: e.target.value,
    });
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

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {
  removeDetailActionConnect: removeDetailAction,
  updateDetailDueActionConnect: updateDetailDueAction,
})(DetailListItem);
