const { OK, CREATED, BAD_REQUEST } = require('../../config/statusCode').statusCode;
const bucketServices = require('../../services/bucket');
const detailServices = require('../../services/detail');

/*
    GET /api/bucket/presets
    * 버킷 프리셋 검색 API
*/
exports.presets = async (req, res, next) => {
  try {
    const { keyword } = req.query;
    const presets = await bucketServices.getPresets(keyword);

    res.status(OK).json({
      message: '버킷 프리셋 불러오기 성공',
      data: presets,
    });
  } catch (error) {
    next(error);
  }
};

/*
    POST /api/bucket/create
    * 버킷 생성 API
*/
exports.create = async (req, res, next) => {
  try {
    const { title, description, details, ref } = req.body;
    const newBucket = await bucketServices
      .create(title, description, 1)
      .then((data) => JSON.parse(JSON.stringify(data)));
    const bucketNo = newBucket.no;
    const newDetails = await detailServices
      .bulkCreate(
        details.map((detail) => {
          return { detail, bucketNo };
        })
      )
      .then((data) => JSON.parse(JSON.stringify(data)));

    res.status(CREATED).json({ newDetails });
  } catch (error) {
    next(error);
  }
};

/*
    GET /api/bucket/list
    * 버킷 목록 조회 API
*/
exports.getList = async (req, res, next) => {
  try {
    // TODO: 로그인 기능 구현후 주석 해제
    // const { userNo } = req.user;
    // const buckets = await bucketServices.getBuckets(userNo);
    const buckets = await bucketServices.getBuckets(1);

    res.status(OK).json({
      message: '버킷 목록 조회 성공',
      data: buckets,
    });
  } catch (error) {
    next(error);
  }
};

/*
    PATCH /api/bucket/status/:bucketNo
    * 버킷 상태 변경 API
*/
exports.updateStatus = async (req, res, next) => {
  try {
    const { bucketNo } = req.params;
    const { status } = req.body;
    const result = await bucketServices.updateStatus(bucketNo, status);
    if (result === 1) {
      res.status(OK).json({
        message: '버킷 상태 변경 성공',
      });
    } else {
      res.status(BAD_REQUEST).json({
        message: '버킷 상태 변경 실패',
      });
    }
  } catch (error) {
    next(error);
  }
};
