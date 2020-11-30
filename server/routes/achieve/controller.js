const { OK, CREATED, BAD_REQUEST } = require('../../config/statusCode').statusCode;
const achieveServices = require('../../services/achieve');

/*
    POST /api/achieve
    * 목표 달성 소감 추가 API
*/
exports.setAchieve = async (req, res, next) => {
  try {
    const data = req.body;
    console.log(req.body);
    const result = await achieveServices.setAchieve(data);

    res.status(CREATED).json({
      message: '소감 추가 성공',
      achieveNo: result.no,
    });
  } catch (error) {
    res.status(BAD_REQUEST).json({
      message: '소감 추가 실패',
    });
  }
};

/*
    PUT /api/achieve/:achieveNo
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
    res.status(BAD_REQUEST).json({
      message: '소감 수정 실패',
    });
  }
};
