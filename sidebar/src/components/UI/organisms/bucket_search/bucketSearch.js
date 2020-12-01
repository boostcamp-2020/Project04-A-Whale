import React, { useState } from 'react';
import styled from 'styled-components';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import SearchResultItem from '../../molecules/search_result_item/searchResultItem';
import Span from '../../atoms/span/Span';
import { getPresets } from '../../../../lib/api';

const BucketSearchWrapper = styled.div`
  display: flex;
  padding: 15px;
  width: 500px;
`;

const BucketSearch = () => {
  const [loading, setLoading] = useState(false);
  const [presets, setPresets] = useState([]);
  let timer = null;

  const onChangeHandler = async (e) => {
    const keyword = e.target.value;
    setLoading(true);
    if (timer) clearTimeout(timer);
    timer = setTimeout(async () => {
      const response = await getPresets(keyword);
      const { data } = response.data;
      console.log(data);
      setPresets(data);
      setLoading(false);
    }, 2000);
  };

  const preData = [
    {
      title: 'Loading',
    },
  ];

  const data = loading ? preData : presets;

  return (
    <BucketSearchWrapper>
      <Autocomplete
        id="combo-box-demo"
        options={data}
        filterOptions={(options, state) => options}
        getOptionLabel={(option) => option.title}
        getOptionDisabled={() => loading}
        style={{ width: 300 }}
        renderOption={(option) => {
          if (loading) return <Span content="loading" />;
          return <SearchResultItem bucket={option} />;
        }}
        renderInput={(params) => (
          <TextField {...params} label="목표 검색" variant="outlined" onChange={onChangeHandler} />
        )}
      />
    </BucketSearchWrapper>
  );
};

export default BucketSearch;
