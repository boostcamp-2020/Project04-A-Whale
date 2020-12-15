const { OK, CREATED, BAD_REQUEST } = require('../../config/statusCode').statusCode;
const detailServices = require('../../services/detail');
const bucketServices = require('../../services/bucket');
const feedServices = require('../../services/feed');

/*
    GET /api/details/:bucketNo
    * 버킷 상세 전체 목록 조회 API
*/
exports.getDetails = async (req, res, next) => {
  try {
    const { bucketNo } = req.params;
    let data = null;

    if (req.useragent.isMobile && !req.useragent.isAndroid) {
      const bucket = await bucketServices.getBucket(bucketNo);
      const details = await detailServices.getDetails(bucketNo);
      data = { bucket, details };
    } else {
      const bucket = await bucketServices.getBucketWithAchieve(bucketNo);
      const details = await detailServices.getDetails(bucketNo);
      const burnDownChart = await detailServices.getBurnDownChart(bucketNo);
      data = { bucket, details, burnDownChart };
    }

    res.status(OK).json({
      message: '버킷 상세 목록 조회 성공',
      data,
    });
  } catch (error) {
    next(error);
  }
};

/*
    GET /api/details/dday/:dday
    * D-Day 별 버킷 상세 목록 조회 API
*/
exports.getDetailsByDDay = async (req, res, next) => {
  try {
    const { dday } = req.params;
    const dueDetails = await detailServices.getDetailsByDDay(dday);
    const data = dueDetails;

    res.status(OK).json({
      message: 'D-Day 별 버킷 상세 목록 조회 성공',
      data,
    });
  } catch (error) {
    next(error);
  }
};

/*
    PATCH /api/details/:no
    * 버킷 상세 수정 API
*/
exports.updateDetail = async (req, res, next) => {
  try {
    const { no } = req.params;
    const { status, title, dueDate } = req.body;
    const userNo = req.user.no;
    let result;

    if (status) result = await detailServices.updateDetailStatus(no, status);
    else result = await detailServices.updateBucketTitleDueDate(no, title, dueDate);

    if (result === 1) {
      feedServices.addFeed(userNo, '버킷 상세 목표를 수정했습니다.');
      res.status(OK).json({
        message: '버킷 상세 수정 성공',
        data: true,
      });
    } else {
      res.status(BAD_REQUEST).json({
        message: '버킷 상세 수정 실패',
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
    const userNo = req.user.no;
    if (result === 1) {
      feedServices.addFeed(userNo, '버킷 상세 목표를 삭제했습니다.');
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
    const userNo = req.user.no;
    const detail = await detailServices.createDetail(bucketNo, title, dueDate);
    feedServices.addFeed(userNo, '버킷 상세 목표를 추가했습니다.');

    res.status(CREATED).json({
      message: '버킷 상세 추가 성공',
      data: { detail },
    });
  } catch (error) {
    next(error);
  }
};
