const { OK, CREATED, BAD_REQUEST } = require('../../config/statusCode').statusCode;
const achieveServices = require('../../services/achieve');

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
    const data = req.body;
    const result = await achieveServices.setAchieve(data);

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

  try {
    await achieveServices.updateAchieve({ no, description });
    res.status(OK).json({
      message: '소감 수정 성공',
    });
  } catch (error) {
    next(err);
  }
};
