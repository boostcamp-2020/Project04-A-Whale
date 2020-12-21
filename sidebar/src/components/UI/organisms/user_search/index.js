import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux';
import { searchResult } from '../../../../modules/follow';
import useStyles, { SearchBar } from './style';
import { searchUser } from '../../../../lib/api';

const UserSearch = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState('');

  const onChangeHandler = (e) => {
    setKeyword(e.target.value);
  };

  const onClickHandler = async () => {
    const res = await searchUser(keyword);
    const { data } = res.data;
    dispatch(searchResult(data));
  };

  return (
    <div style={SearchBar}>
      <TextField
        className={classes.searchInput}
        onChange={onChangeHandler}
        autoFocus
        InputProps={{
          classes: {
            input: classes.resize,
          },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={onClickHandler} disabled={!(keyword.length > 0)}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};
export default UserSearch;
