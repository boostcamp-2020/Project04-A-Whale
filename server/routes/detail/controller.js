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
    PATCH /api/details/:no
    * 버킷 상세 상태 변경 API
*/
exports.updateDetailStatus = async (req, res, next) => {
  try {
    const { no } = req.params;
    const { status } = req.body;

    const result = await detailServices.updateDetailStatus(no, status);

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

/*
    DELETE /api/details/:no
    * 버킷 상세 삭제 API
*/
exports.deleteDetail = async (req, res, next) => {
  try {
    const { no } = req.params;
    const result = await detailServices.deleteDetail(no);

    if (result === 1) {
      res.status(OK).json({
        message: '버킷 상세 삭제 성공',
        data: true,
      });
    } else {
      res.status(BAD_REQUEST).json({
        message: '버킷 상세 삭제 실패',
        data: false,
      });
    }
  } catch (error) {
    next(error);
  }
};

/*
    POST /api/details
    * 버킷 상세 추가 API
*/
exports.createDetail = async (req, res, next) => {
  try {
    const { bucketNo, title, dueDate } = req.body;

    const detail = await detailServices.createDetail(bucketNo, title, dueDate);

    res.status(OK).json({
      message: '버킷 상세 추가 성공',
      data: { detail },
    });
  } catch (error) {
    next(error);
  }
};
