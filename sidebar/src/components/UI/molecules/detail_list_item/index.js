import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Span from '../../atoms/span/Span';
import StyledButton from '../../atoms/styled_button/StyledButton';
import InputText from '../../atoms/input_text';
import { removeDetailAction } from '../../../../modules/actions/createbucket';

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
  right: '12%',
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

const DetailListItem = ({ detail, removeDetailActionConnect }) => {
  const style = {
    color: 'inherit',
  };

  const onClickHandler = () => {
    removeDetailActionConnect(detail);
  };

  const dateChangeHandler = (e) => {
    console.log(e.target.value);
  };

  const content = (
    <DetailListItemWrapper>
      <Span content={detail} />
      <InputText
        style={DatePicker}
        type="date"
        onChangeHandler={dateChangeHandler}
        defaultValue="2020-12-25"
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

export default connect(mapStateToProps, { removeDetailActionConnect: removeDetailAction })(
  DetailListItem
);
