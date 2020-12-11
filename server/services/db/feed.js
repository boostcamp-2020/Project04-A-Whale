const { User, Feed, Sequelize } = require('../../models');

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
      createdAt: { [Op.between]: [new Date().getTime() - 7 * 24 * 60 * 60 * 1000, new Date()] }, // 최근 일주일 사이
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
