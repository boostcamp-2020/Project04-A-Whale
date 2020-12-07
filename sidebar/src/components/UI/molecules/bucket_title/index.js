/* eslint-disable */
import React, { useState } from 'react';
import { IconButton, Input, InputAdornment, InputLabel, Modal } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SearchGuide from '../search_guide';

const BucketDescription = ({ style, label, value, onChangeHandler }) => {

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
      <Input
        style={style}
        variant="filled"
        onChange={onChangeHandler}
        value={value}
        endAdornment={
            <>
          <InputAdornment position="end">
            <IconButton onClick={onClickHandler} onMouseOver={onHoverEvent} onMouseLeave={onLeaveEvent} >
              <SearchIcon />
            </IconButton>
            <SearchGuide isHover={isHover}/>
          </InputAdornment>
          </>
        }
      />
      <Modal>

      </Modal>
    </>
  );
};

export default BucketDescription;
