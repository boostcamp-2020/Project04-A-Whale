import React from 'react';
import { connect } from 'react-redux';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Span from '../../atoms/span';
import StyledButton from '../../atoms/styled_button';
import InputText from '../../atoms/input_text';
import {
  removeDetailAction,
  updateDetailDueAction,
} from '../../../../modules/actions/createbucket';

import { DetailListItemWrapper, DatePicker, RemoveIcon, rootStyle } from './style';

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

  const content = (
    <DetailListItemWrapper>
      <Span content={detail.title} />
      <InputText
        style={DatePicker}
        type="date"
        onChangeHandler={dateChangeHandler}
        defaultValue={detail.dueDate}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <StyledButton
        type="Icon"
        style={RemoveIcon}
        variant="add detail"
        content={<RemoveCircleIcon />}
        onClickHandler={onClickHandler}
      />
    </DetailListItemWrapper>
  );
  return <Span style={rootStyle} content={content} />;
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {
  removeDetailActionConnect: removeDetailAction,
  updateDetailDueActionConnect: updateDetailDueAction,
})(DetailListItem);
