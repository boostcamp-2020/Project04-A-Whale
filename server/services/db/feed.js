const { User, Feed, Sequelize } = require('../../models');
const lastWeek = require('../../utils/date');

const { Op } = Sequelize;

exports.selectFeeds = async (followings) => {
  const results = await Feed.findAll({
    attributes: [
      'no',
      'content',
      'userNo',
      ['created_at', 'date'],
      [Sequelize.col('user.nickname'), 'nickname'],
    ],
    raw: true,
    where: {
      userNo: { [Op.in]: followings },
      createdAt: { [Op.lte]: lastWeek }, // 최대 일주일전
    },
    order: [['created_at', 'DESC']], // 최근 순으로
    include: {
      attributes: [],
      model: User,
      where: {
        no: { [Op.col]: 'feed.user_no' },
      },
    },
  });

  return results;
};

exports.insertFeed = async (userNo, content) => {
  const results = await Feed.create({ userNo, content });

  return results;
};
