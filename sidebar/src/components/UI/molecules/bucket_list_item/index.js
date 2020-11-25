import React, { useState } from 'react';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { useHistory } from 'react-router-dom';
import { BucketListItemWrapper, BucketTitleTextWrapper } from './style';
import AbandonButton from '../../atoms/abandon_button';
import AbandonDialog from '../../organisms/abandon_dialog';
import Text from '../../atoms/text';

const BucketListItem = ({ bucket }) => {
  const [hidden, setHidden] = useState(true);
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const changeHidden = (hidden) => {
    setHidden(!hidden);
  };

  const handleOpen = () => {
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
    >
      <ListAltIcon className="list-icon" />
      <BucketTitleTextWrapper onClick={handleClick}>
        <Text value={bucket.title} fontSize="16px" />
      </BucketTitleTextWrapper>
      {hidden ? null : <AbandonButton handleOpen={handleOpen} />}
      <AbandonDialog open={open} handleClose={handleClose} />
    </BucketListItemWrapper>
  );
};

export default BucketListItem;
