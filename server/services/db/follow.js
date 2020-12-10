const Sequelize = require('sequelize');
const { Follow, User } = require('../../models');

const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);
// 내가 팔로잉 하는 사람 목록 조회
exports.selectFollowingList = async (userNo) => {
  const result = await Follow.findAll({
    where: { following_no: userNo },
    attributes: [],
    include: [
      {
        model: User,
        attributes: ['nickname', 'description', 'no'],
      },
    ],
    raw: true,
  });

  return result;
};

// 나를 팔로우 하는 사람 목록 조회
exports.selectFollowedList = async (userNo) => {
  // const result = await Follow.findAll({
  //   where: { followed_no: userNo },
  //   include: [
  //     {
  //       model: User,
  //       attributes: ['nickname', 'description', 'no'],
  //     },
  //   ],
  //   raw: true,
  // });

  const result = await sequelize.query(
    `SELECT user.no, user.nickname, user.description FROM whale04a.follow as Follow INNER JOIN whale04a.user as user on Follow.following_no = user.no where followed_no = ${userNo}`,
    {
      type: sequelize.QueryTypes.SELECT,
    }
  );
  console.log(result);
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
