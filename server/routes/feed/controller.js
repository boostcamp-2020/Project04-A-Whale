const { OK } = require('../../config/statusCode').statusCode;
const feedServices = require('../../services/feed');

/*
    GET /api/feeds
    * 피드 조회 API
*/
exports.getFeeds = async (req, res, next) => {
  try {
    // const { userNo } = req.user;
    const feeds = await feedServices.getFeeds(1);

    res.status(OK).json({
      message: '피드 조회 성공',
      data: feeds,
    });
  } catch (error) {
    next(error);
  }
};
