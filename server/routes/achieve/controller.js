const { OK, CREATED } = require('../../config/statusCode').statusCode;
const achieveServices = require('../../services/achieve');

/*
    POST /api/achieve
    * 목표 달성 소감 추가 API
*/
exports.setAchieve = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await achieveServices.setAchieve(data);

    res.status(CREATED).json({
      message: '목표 달성 소감 추가 성공',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/*
    PUT /api/achieve/:bucketNo
    * 목표 달성 소감 수정 API
*/
exports.updateAchieve = async (req, res, next) => {
  try {
    const { bucketNo } = req.params;
    const { description } = req.body;
    await achieveServices.updateAchieve({ bucketNo, description });

    res.status(OK).json({
      message: '목표 달성 소감 수정 성공',
    });
  } catch (error) {
    next(error);
  }
};
