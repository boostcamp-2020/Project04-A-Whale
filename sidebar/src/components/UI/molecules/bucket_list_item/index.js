import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BucketListItemWrapper, BucketTitleTextWrapper } from './style';
import HoverButton from '../../atoms/hover_button';
import ConfirmDialog from '../../organisms/confirm_dialog';
import Text from '../../atoms/text';
import { OPEN, GIVEUP } from '../../../../constants/status';

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
    history.push(`/detail/${bucket.no}`);
  };

  const getButton = () => {
    if (bucket.status === GIVEUP) return <HoverButton handleOpen={handleOpen} text="되돌리기" />;
    if (bucket.status === OPEN) return <HoverButton handleOpen={handleOpen} text="포기" />;
    return null;
  };

  const getIcon = () => {
    if (bucket.status === GIVEUP) return <div className="list-icon">🔒</div>;
    if (bucket.status === OPEN) return <div className="list-icon">⏳</div>;
    return <div className="list-icon">🎉</div>;
  };

  return (
    <BucketListItemWrapper
      onMouseOver={() => changeHidden(true)}
      onMouseLeave={() => changeHidden(false)}
    >
      {getIcon()}
      <BucketTitleTextWrapper onClick={handleClick}>
        <Text value={bucket.title} fontSize="16px" />
      </BucketTitleTextWrapper>
      {hidden ? null : getButton()}
      <ConfirmDialog open={open} handleClose={handleClose} bucket={bucket} />
    </BucketListItemWrapper>
  );
};

export default BucketListItem;
