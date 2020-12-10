/* eslint-disable */
import React, { useState } from 'react';
import { IconButton, Input, InputAdornment, InputLabel, Modal, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SearchGuide from '../search_guide';
import BucketSearchModal from '../bucket_search_modal';

const BucketTitle = ({ style, label, value, onChangeHandler }) => {
    const [isHover, setHover] = useState(false);
    const [open, setOpen] = useState(false);

    const onClickHandler = () => {
        setOpen(true);
    }

    const modalClose = () => {
        setOpen(false);
    }

    const onHoverEvent = () => {
        setHover(true)
    }

    const onLeaveEvent = () => {
        setHover(false)
    }

  return (
    <>
      <InputLabel>{label}</InputLabel>
      <TextField
        style={style}
        onChange={onChangeHandler}
        value={value}
        InputProps={
          {endAdornment:
            <>
          <InputAdornment position="end">
            <IconButton onClick={onClickHandler} onMouseOver={onHoverEvent} onMouseLeave={onLeaveEvent} >
              <SearchIcon />
            </IconButton>
            <SearchGuide isHover={isHover}/>
          </InputAdornment>
          </>}
        }
      />
      <Modal open={open} onClose={modalClose} aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        <BucketSearchModal modalClose={modalClose}/>
      </Modal>
    </>
  );
};

export default BucketTitle;
