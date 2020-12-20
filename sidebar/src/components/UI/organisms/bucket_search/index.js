import React, { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import SearchResultItem from '../../molecules/search_result_item';
import Span from '../../atoms/span';
import { getPresets } from '../../../../lib/api';
import BucketSearchWrapper from './style';

const BucketSearch = () => {
  const [loading, setLoading] = useState(false);
  const [presets, setPresets] = useState([]);
  const [boldWord, setBoldWord] = useState('');
  let timer = null;

  const onChangeHandler = async (e) => {
    const keyword = e.target.value;
    setLoading(true);
    if (timer) clearTimeout(timer);
    timer = setTimeout(async () => {
      const response = await getPresets(keyword);
      const { data } = response.data;
      setPresets(data);
      setLoading(false);
      setBoldWord(e.target.value);
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
          return <SearchResultItem bucket={option} boldWord={boldWord} />;
        }}
        renderInput={(params) => (
          <TextField {...params} label="목표 검색" variant="outlined" onChange={onChangeHandler} />
        )}
      />
    </BucketSearchWrapper>
  );
};

export default BucketSearch;
