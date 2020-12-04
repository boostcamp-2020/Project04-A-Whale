const { Follow } = require('../../models');

// 내가 팔로잉 하는 사람 목록 조회
exports.selectFollowingList = async (userNo) => {
  const result = await Follow.findAll({
    attributes: ['no', 'following_no', 'followed_no'],
    where: { followed_no: userNo },
    raw: true,
  });
  return result;
};

// 나를 팔로우 하는 사람 목록 조회
exports.selectFollowedList = async (userNo) => {
  const result = await Follow.findAll({
    where: { following_no: userNo },
    raw: true,
  });

  return result;
};

// 내가 다른 사람을 팔로우 추가
exports.insertFollowing = async ({ userNo, followingNo }) => {
  const result = await Follow.create({
    following_no: followingNo,
    followed_no: userNo,
    raw: true,
  });
  return result;
};

// 팔로우 취소
exports.deleteFollowing = async (no) => {
  const result = await Follow.destroy({
    where: { no },
    raw: true,
  });

  return result;
};
