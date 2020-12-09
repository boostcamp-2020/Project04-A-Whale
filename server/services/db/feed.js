const { User, Feed } = require('../../models');

exports.selectFeeds = async () => {
  const results = await Feed.findAll({
    raw: true,
    include: [
      {
        models: User,
      },
    ],
  });

  return results;
};

exports.insertFeed = async (userNo, content) => {
  const results = await Feed.create({ userNo, content });

  return results;
};
