const { OK, CREATED, BAD_REQUEST } = require('../../config/statusCode').statusCode;
const detailServices = require('../../services/detail');

/*
    GET /api/details/:bucketNo
    * 버킷 상세 목록 조회 API
*/
exports.getDetails = async (req, res, next) => {
  try {
    const { bucketNo } = req.params;
    const details = await detailServices.getDetails(bucketNo);

    res.status(OK).json({
      message: '버킷 상세 목록 조회 성공',
      data: details,
    });
  } catch (error) {
    next(error);
  }
};

/*
    PATCH /api/details/:detailNo
    * 버킷 상세 상태 변경 API
*/
exports.updateDetailStatus = async (req, res, next) => {
  try {
    const { detailNo } = req.params;
    const { status } = req.body;

    const result = await detailServices.updateDetailStatus(detailNo, status);

    if (result === 1) {
      res.status(OK).json({
        message: '버킷 상세 상태 변경 성공',
        data: true,
      });
    } else {
      res.status(BAD_REQUEST).json({
        message: '버킷 상세 상태 변경 실패',
        data: false,
      });
    }
  } catch (error) {
    next(error);
  }
};
