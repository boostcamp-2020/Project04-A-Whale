import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Span from '../atoms/Span';
import StyledButton from '../atoms/StyledButton';
import { removeDetailAction } from '../../../modules/actions/createbucket';

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

const DetailListItem = ({ detail, removeDetailActionConnect }) => {
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
  DetailListItem
);
