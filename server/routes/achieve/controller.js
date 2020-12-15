const { OK, CREATED } = require('../../config/statusCode').statusCode;
const achieveServices = require('../../services/achieve');
const feedServices = require('../../services/feed');

/*
    GET /api/achieves/:bucketNo
    * 목표 달성 소감 조회 API
*/
exports.getAchieve = async (req, res, next) => {
  try {
    const { bucketNo } = req.params;
    const result = await achieveServices.getAchieve(bucketNo);

    res.status(CREATED).json({
      message: '목표 달성 조회 성공',
      data: result,
    });
  } catch (error) {
    next(err);
  }
};

/*
    POST /api/achieves
    * 목표 달성 소감 추가 API
*/
exports.setAchieve = async (req, res, next) => {
  try {
    const userNo = req.user.no;
    const data = req.body;
    const result = await achieveServices.setAchieve(data);
    feedServices.addFeed(userNo, '달성소감을 추가했습니다.');

    res.status(CREATED).json({
      message: '소감 추가 성공',
      achieveNo: result.no,
    });
  } catch (error) {
    next(err);
  }
};

/*
    PUT /api/achieves/:no
    * 목표 달성 소감 수정 API
*/
exports.updateAchieve = async (req, res, next) => {
  const { no } = req.params;
  const { description } = req.body;
  const userNo = req.user.no;
  try {
    await achieveServices.updateAchieve({ no, description });
    feedServices.addFeed(userNo, '달성소감을 수정했습니다.');

    res.status(OK).json({
      message: '소감 수정 성공',
    });
  } catch (error) {
    next(err);
  }
};
