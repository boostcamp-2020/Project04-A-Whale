import { useState, useEffect } from 'react';
import { getFollowed } from './api';

const useFollowed = () => {
  const [followed, setFollowed] = useState([]);
  useEffect(async () => {
    const followedRes = await getFollowed(2);
    setFollowed(followedRes.data.data);
  }, []);

  return followed;
};

export default useFollowed;
