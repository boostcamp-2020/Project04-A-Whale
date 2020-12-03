import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Span from '../../atoms/span';
import StyledButton from '../../atoms/styled_button';
import InputText from '../../atoms/input_text';
import {
  removeDetailAction,
  updateDetailDueAction,
} from '../../../../modules/actions/createbucket';

const DetailListItemWrapper = styled.div`
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

const DatePicker = {
  position: 'absolute',
  right: '18%',
  padding: '1px',
  margin: '-5px',
};

const RemoveIcon = {
  position: 'absolute',
  right: '4%',
  padding: '1px',
  backgroundColor: 'white',
  height: '20px',
};

const DetailListItem = ({ detail, removeDetailActionConnect, updateDetailDueActionConnect }) => {
  const style = {
    color: 'inherit',
  };

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
  return <Span style={style} content={content} />;
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {
  removeDetailActionConnect: removeDetailAction,
  updateDetailDueActionConnect: updateDetailDueAction,
})(DetailListItem);
