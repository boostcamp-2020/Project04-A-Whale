/* eslint-disable */
import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField, InputLabel } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux';
import { searchResult } from '../../../../modules/follow';
import { SearchBar } from './style';

const UserSearch = () => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(
      searchResult([
        { nickname: '닉네임1', description: '검색 상세 12345678910111213141516',no: 1 },
        { nickname: '닉네임2', description: '검색 상세 2', no: 2 },
      ])
    );
  };

  return (
    <div style={SearchBar}>
    <InputLabel>사용자 검색</InputLabel>
    <TextField style={{width: '480px'}}
      InputProps={
        {endAdornment: 
          <>
            <InputAdornment position="end">
              <IconButton onClick={onClickHandler}>
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
