import { useState, useEffect } from 'react';
import { getFollowingUsers } from '../lib/api';

const useFollowing = () => {
  const [following, setFollowing] = useState([]);
  useEffect(async () => {
    const followingRes = await getFollowingUsers(2);
    setFollowing(followingRes.data.data);
  }, []);

  return following;
};

export default useFollowing;
