import React, { useState } from 'react';
import ListAltIcon from '@material-ui/icons/ListAlt';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import AbandonButton from '../../atoms/abandon_button/AbandonButton';
import AbandonDialog from '../abandon_dialog/AbandonDialog';
import Text from '../../atoms/text/Text';

const BucketListItemWrapper = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: #eeeeee;
  }
  .abandon-dialog {
    width: 400px;
  }
  .list-icon {
    margin-left: 10px;
  }
  border-bottom: 1px solid #eeeeee;
`;

const BucketTitleTextWrapper = styled.span`
  padding-left: 25px;
  flex: 6;
  font-size: 18px;
`;

const BucketListItem = ({ bucket }) => {
  const [hidden, setHidden] = useState(true);
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const changeHidden = (hidden) => {
    setHidden(!hidden);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setHidden(true);
  };

  const handleClick = () => {
    history.push(`/detail/${bucket.id}`);
  };

  return (
    <BucketListItemWrapper
      onMouseOver={() => changeHidden(true)}
      onMouseLeave={() => changeHidden(false)}
      onClick={handleClick}
    >
      <ListAltIcon className="list-icon" />
      <BucketTitleTextWrapper>
        <Text value={bucket.title} fontSize="16px" />
      </BucketTitleTextWrapper>
      {hidden ? null : <AbandonButton handleClickOpen={handleClickOpen} />}
      <AbandonDialog open={open} handleClose={handleClose} />
    </BucketListItemWrapper>
  );
};

export default BucketListItem;
