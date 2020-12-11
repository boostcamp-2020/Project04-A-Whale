const { OK, CREATED, BAD_REQUEST } = require('../../config/statusCode').statusCode;
const bucketServices = require('../../services/bucket');
const detailServices = require('../../services/detail');
const feedServices = require('../../services/feed');

/*
    GET /api/buckets/presets
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
    POST /api/buckets
    * 버킷 생성 API
*/
exports.create = async (req, res, next) => {
  try {
    const userNo = req.user.no;
    const { title, description, details, ref } = req.body;
    const newBucket = await bucketServices
      .create(title, description, userNo)
      .then((data) => JSON.parse(JSON.stringify(data)));
    const bucketNo = newBucket.no;
    await detailServices
      .bulkCreate(
        details.map((detail) => {
          return { ...detail, bucketNo };
        })
      )
      .then((data) => JSON.parse(JSON.stringify(data)));

    feedServices.addFeed(userNo, '버킷리스트를 추가했습니다.');
    res.status(CREATED).json({ message: '버킷 추가 성공' });
  } catch (error) {
    next(error);
  }
};

/*
    GET /api/buckets
    * 버킷 목록 조회 API
*/
exports.getBuckets = async (req, res, next) => {
  try {
    const userNo = req.user.no;
    const buckets = await bucketServices.getBuckets(userNo);
    res.status(OK).json({
      message: '버킷 목록 조회 성공',
      data: buckets,
    });
  } catch (error) {
    next(error);
  }
};

/*
    PATCH /api/buckets/:no
    * 버킷 수정 API
*/
exports.updateBucket = async (req, res, next) => {
  try {
    const { no } = req.params;
    const { status, title, description } = req.body;
    const userNo = req.user.no;
    let result;

    if (status) result = await bucketServices.updateBucketStatus(no, status);
    else result = await bucketServices.updateBucketTitleDesc(no, title, description);
    feedServices.addFeed(userNo, '버킷리스트를 수정했습니다.');
    if (result === 1) {
      res.status(OK).json({
        message: '버킷 수정 성공',
        data: true,
      });
    } else {
      res.status(BAD_REQUEST).json({
        message: '버킷 수정 실패',
        data: false,
      });
    }
  } catch (error) {
    next(error);
  }
};
