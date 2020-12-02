import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Span from '../../atoms/span';
import StyledButton from '../../atoms/styled_button';
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
`;

const CalenderIcon = {
  position: 'absolute',
  right: '12%',
  padding: '1px',
  height: '20px',
};

const RemoveIcon = {
  position: 'absolute',
  right: '4%',
  padding: '1px',
  backgroundColor: 'white',
  height: '20px',
};

const CreateDetailListItem = ({ detail, removeDetailActionConnect }) => {
  const style = {
    color: 'inherit',
  };

  const onClickHandler = () => {
    removeDetailActionConnect(detail);
  };

  const content = (
    <DetailListItemWrapper>
      <Span content={detail} />
      <StyledButton
        type="Icon"
        style={CalenderIcon}
        variant="add detail"
        content={<DateRangeIcon />}
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
  CreateDetailListItem
);
