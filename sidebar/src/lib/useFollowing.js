import { useState, useEffect } from 'react';
import { getFollowing } from './api';

const useFollowing = () => {
  const [following, setFollowing] = useState([]);
  useEffect(async () => {
    const followingRes = await getFollowing(2);
    setFollowing(followingRes.data.data);
  }, []);

  return following;
};

export default useFollowing;
