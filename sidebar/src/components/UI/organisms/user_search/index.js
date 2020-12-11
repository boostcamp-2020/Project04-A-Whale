/* eslint-disable */
import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField, InputLabel } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux';
import { searchResult } from '../../../../modules/follow';
import { SearchBar } from './style';
import { searchUser } from '../../../../lib/api';
const UserSearch = ({setValue}) => {
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState('');

  const onChangeHandler = (e) => {
    setKeyword(e.target.value);
  }

  const onClickHandler = async () => {
    const res = await searchUser(keyword);
    const {data} = res.data
    console.log(data);
    dispatch(
      searchResult(data)
    );
    setValue(2);
  };

  return (
    <div style={SearchBar}>
    <InputLabel>사용자 검색</InputLabel>
    <TextField style={{width: '480px'}}
      onChange={onChangeHandler}
      InputProps={
        {endAdornment: 
          <>
            <InputAdornment position="end">
              <IconButton onClick={onClickHandler} disabled={ keyword.length > 0 ? false : true}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          </>
        ,
      }}
    />
    </div>
  );
};
export default UserSearch;
