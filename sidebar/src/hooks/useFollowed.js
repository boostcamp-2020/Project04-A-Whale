import { useState, useEffect } from 'react';
import { getFollowedUsers } from '../lib/api';

const useFollowed = () => {
  const [followed, setFollowed] = useState([]);
  useEffect(async () => {
    const followedRes = await getFollowedUsers(2);
    setFollowed(followedRes.data.data);
  }, []);

  return followed;
};

export default useFollowed;
