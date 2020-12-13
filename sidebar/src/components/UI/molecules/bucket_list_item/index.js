import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BucketListItemWrapper, BucketTitleTextWrapper } from './style';
import HoverButton from '../../atoms/hover_button';
import ConfirmDialog from '../confirm_dialog';
import { updateBucketStatus } from '../../../../modules/buckets';
import Text from '../../atoms/text';
import { OPEN, GIVEUP } from '../../../../constants/status';

const BucketListItem = ({ bucket }) => {
  const [hidden, setHidden] = useState(true);
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const changeHidden = (hidden) => setHidden(!hidden);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setHidden(true);
  };

  const getText = () => {
    if (bucket.status === GIVEUP) return '정말 되돌리시겠습니까?';
    if (bucket.status === OPEN) return '정말 포기하시겠습니까?';
    return null;
  };

  const handleClick = () => {
    handleClose();
    const params = {};
    params.no = bucket.no;
    if (bucket.status === OPEN) params.status = GIVEUP;
    if (bucket.status === GIVEUP) params.status = OPEN;
    dispatch(updateBucketStatus(params));
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
      <BucketTitleTextWrapper onClick={() => history.push(`/detail/${bucket.no}`)}>
        {bucket.title}
      </BucketTitleTextWrapper>
      {hidden ? null : getButton()}
      <ConfirmDialog
        open={open}
        handleClose={handleClose}
        handleClick={handleClick}
        text={getText()}
      />
    </BucketListItemWrapper>
  );
};

export default BucketListItem;
